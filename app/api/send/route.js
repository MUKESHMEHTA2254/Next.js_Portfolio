import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;
const fromEmail = process.env.FROM_EMAIL;
const recipientEmail = "mukeshmehta.eng@gmail.com";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        {
          error: "Email, subject, and message are required.",
          code: "INVALID_INPUT",
        },
        { status: 400 }
      );
    }

    if (!resend || !fromEmail) {
      return NextResponse.json(
        {
          error: "Contact form is temporarily unavailable. Please email me directly.",
          code: "EMAIL_NOT_CONFIGURED",
        },
        { status: 503 }
      );
    }

    const text = [
      `From: ${email}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n");

    const data = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      text,
    });

    return NextResponse.json({ id: data.id, success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send message.", code: "SEND_FAILED" },
      { status: 500 }
    );
  }
}
