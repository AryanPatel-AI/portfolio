import { checkRateLimit } from "../../../lib/rate-limit.ts";
import { validateContactPayload } from "../../../lib/validations/contact.ts";

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

    const validation = validateContactPayload(body);
    if (!validation.success || !validation.data) {
      return Response.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;

    // 3. Dispatch / Process Message
    // In production, configure Resend / SendGrid API or transactional SMTP.
    console.log(`[Contact Inquiry Received] From: ${name} <${email}> | Subject: ${subject}`);

    return Response.json(
      {
        success: true,
        message: "Thank you! Your message has been received. Aryan will get back to you shortly.",
        timestamp: new Date().toISOString(),
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
