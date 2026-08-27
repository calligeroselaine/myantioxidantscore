import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL!;

const LIST_IDS: Record<string, number> = {
  booking: 3, // Scan Bookings
  partner: 4, // Partner Enquiries
};

const SOURCE_LABELS: Record<string, string> = {
  booking: "Scan Booking",
  partner: "Partner Enquiry",
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    firstName,
    lastName,
    email,
    phone,
    referral,
    referredBySource,
    referrerName,
    referrerEmail,
    referrerPhone,
    source,
  } = body;

  if (!firstName || !lastName || !email || !phone || !source) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const listId = LIST_IDS[source];
  const label = SOURCE_LABELS[source] ?? "Website Enquiry";
  if (!listId) {
    return NextResponse.json({ error: "Invalid source" }, { status: 400 });
  }

  // Add / update contact in Brevo, attached to the relevant list
  const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "api-key": BREVO_API_KEY,
    },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        PHONE: phone,
        REFERRAL_SOURCE: referral || "",
        REFERRED_BY: referredBySource || "",
        REFERRER_NAME: referrerName || "",
        REFERRER_EMAIL: referrerEmail || "",
        REFERRER_PHONE: referrerPhone || "",
      },
      listIds: [listId],
      updateEnabled: true,
    }),
  });

  if (!contactRes.ok) {
    const errText = await contactRes.text();
    console.error("Brevo contact error:", errText);
    return NextResponse.json({ error: "Failed to save contact" }, { status: 502 });
  }

  // Send a notification email to the site owner
  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "api-key": BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: "Scan Your Score", email: NOTIFY_EMAIL },
      to: [{ email: NOTIFY_EMAIL }],
      replyTo: { email, name: `${firstName} ${lastName}` },
      subject: `New ${label}: ${firstName} ${lastName}`,
      htmlContent: `
        <h2>New ${label}</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${referral ? `<p><strong>Heard about us via:</strong> ${referral}</p>` : ""}
        ${referredBySource ? `<p><strong>Referred By:</strong> ${referredBySource}</p>` : ""}
        ${referrerName ? `<p><strong>Referrer's Name:</strong> ${referrerName}</p>` : ""}
        ${referrerEmail ? `<p><strong>Referrer's Email:</strong> ${referrerEmail}</p>` : ""}
        ${referrerPhone ? `<p><strong>Referrer's Phone:</strong> ${referrerPhone}</p>` : ""}
      `,
    }),
  });

  return NextResponse.json({ success: true });
}
