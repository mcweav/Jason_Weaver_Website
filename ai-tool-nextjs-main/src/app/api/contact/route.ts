import { sendEmail } from "@/libs/email";
import { NextRequest, NextResponse } from "next/server";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json("Missing fields", { status: 400 });
  }

  try {
    await sendEmail({
      to: process.env.CONTACT_EMAIL || "jayweavernm@gmail.com",
      subject: `New message from ${escapeHtml(name)} via portfolio site`,
      html: `
        <div>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json("Your message has been sent!", { status: 200 });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      "Something went wrong. Please try again or email me directly.",
      { status: 500 },
    );
  }
}
