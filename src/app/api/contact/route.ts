import { checkRateLimit } from "../../../lib/rate-limit.ts";
import { validateContactPayload } from "../../../lib/validations/contact.ts";
import { getSupabaseServerClient } from "../../../lib/supabase/server.ts";
import { sendContactNotification } from "../../../lib/email.ts";
import { recordMessage } from "../../../lib/messages.ts";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    // 1. Identify Client for Rate Limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const cfIp = request.headers.get("cf-connecting-ip");
    const ip = (cfIp || (forwarded ? forwarded.split(",")[0].trim() : null) || "127.0.0.1");

    const rateLimit = checkRateLimit(`contact:${ip}`, 5, 10 * 60 * 1000); // 5 messages per 10 mins
    if (!rateLimit.allowed) {
      return Response.json(
        {
          success: false,
          error: "Too many requests. Please wait a few minutes before submitting another message.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((rateLimit.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // 2. Parse & Validate Payload
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { success: false, errors: ["Invalid JSON payload."] },
        { status: 400 }
      );
    }

    // 3. Honeypot check (Bots fill hidden fields)
    const rawBody = (body && typeof body === "object") ? (body as Record<string, unknown>) : {};
    if (rawBody.website || rawBody.honeypot || rawBody.company_url) {
      console.warn("[Bot Detected via Honeypot]:", ip);
      // Return 200 to mislead the bot, but do not process
      return Response.json(
        { success: true, message: "Thank you for your submission." },
        { status: 200 }
      );
    }

    const validation = validateContactPayload(body);
    if (!validation.success || !validation.data) {
      return Response.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;
    const nowIso = new Date().toISOString();
    // Standard RFC-4122 UUID matching PostgreSQL UUID PRIMARY KEY
    const messageId = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `00000000-0000-4000-8000-${Date.now().toString(16).padStart(12, "0")}`;

    // 4. Send Email Notification via Resend
    const emailResult = await sendContactNotification({
      name,
      email,
      subject,
      message,
    });

    const deliveryStatus = emailResult.dispatched ? "delivered" : "queued";

    // 5. Save to Supabase PostgreSQL (or fallback in-memory)
    const supabase = getSupabaseServerClient(true);
    if (supabase) {
      try {
        await supabase.from("contact_messages").insert({
          id: messageId,
          name,
          email,
          subject,
          message,
          ip_hash: ip.replace(/\.\d+$/, ".xxx"), // Privacy friendly IP mask
          delivery_status: deliveryStatus,
          created_at: nowIso,
        });
      } catch (dbError) {
        console.warn("[Contact DB Save Warning]:", dbError);
      }
    }

    // Record in memory for admin dashboard fallback
    recordMessage({
      id: messageId,
      name,
      email,
      subject,
      message,
      ip: ip.replace(/\.\d+$/, ".xxx"),
      deliveryStatus,
      createdAt: nowIso,
    });

    console.log(`[Contact Inquiry Processed] From: ${name} <${email}> | Status: ${deliveryStatus}`);

    return Response.json(
      {
        success: true,
        message: "Thank you! Your message has been received. Aryan will get back to you shortly.",
        timestamp: nowIso,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[POST /api/contact Error]:", error);
    return Response.json(
      { success: false, error: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json(
    { success: false, error: "Method Not Allowed. Use POST to submit contact inquiries." },
    { status: 405 }
  );
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
