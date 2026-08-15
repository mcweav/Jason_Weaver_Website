type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Uses Resend's default onboarding sender until a custom domain is
// verified in the Resend dashboard, at which point EMAIL_FROM can point
// at an address on that domain (e.g. "Jason Weaver <contact@jasonweaver.dev>").
const RESEND_FROM = process.env.EMAIL_FROM || "Portfolio <onboarding@resend.dev>";

export const sendEmail = async (data: EmailPayload) => {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      ...data,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend API error (${res.status}): ${await res.text()}`);
  }

  return res.json();
};
