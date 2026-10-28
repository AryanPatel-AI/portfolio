import { Resend } from "resend";

export interface ContactEmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailDispatchResult {
  dispatched: boolean;
  provider: "resend" | "fallback-log";
  error?: string;
}

export async function sendContactNotification(
  payload: ContactEmailPayload
): Promise<EmailDispatchResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log(
      `[Email Dispatch (Fallback)] RESEND_API_KEY not configured. Mocking notification for: ${payload.name} <${payload.email}>`
    );
    return { dispatched: true, provider: "fallback-log" };
  }

  try {
    const resend = new Resend(apiKey);

    // 1. Send notification to Aryan
    const toOwnerResult = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "aryanpatel66871@gmail.com",
      subject: `[Portfolio Inquiry] ${payload.subject} — from ${payload.name}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject}\n\nMessage:\n${payload.message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0d5c1; border-radius: 8px; background-color: #fcf7ee; color: #211e19;">
          <h2 style="font-size: 20px; color: #b49368; border-bottom: 2px solid #b49368; padding-bottom: 8px;">New Portfolio Inquiry</h2>
          <p><strong>From:</strong> ${payload.name} (&lt;<a href="mailto:${payload.email}">${payload.email}</a>&gt;)</p>
          <p><strong>Subject:</strong> ${payload.subject}</p>
          <div style="background-color: #f8eddb; padding: 16px; border-radius: 6px; margin: 16px 0; border-left: 4px solid #b49368;">
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${payload.message}</p>
          </div>
          <p style="font-size: 11px; color: #77573a; margin-top: 24px;">Sent via Aryan Patel Portfolio API Route.</p>
        </div>
      `,
    });

    if (toOwnerResult.error) {
      console.error("[Resend Error]:", toOwnerResult.error);
      return {
        dispatched: false,
        provider: "resend",
        error: toOwnerResult.error.message,
      };
    }

    return { dispatched: true, provider: "resend" };
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "Failed to send email via Resend.";
    console.error("[Email Dispatch Exception]:", errorMsg);
    return { dispatched: false, provider: "resend", error: errorMsg };
  }
}
