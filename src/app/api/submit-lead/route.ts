import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL!;

// CRM pipeline: "Nu Great Skin" — stage: "New"
const PIPELINE_ID = "6a51aa0f955fab05c4bf628e";
const STAGE_NEW_ID = "6d5b02e360b74b99812b7b765d3f3767";
const CRM_TIMEOUT_MS = 5000;

const LIST_IDS: Record<string, number> = {
  booking: 3, // Scan Bookings
  partner: 4, // Partner Enquiries
};

const SOURCE_LABELS: Record<string, string> = {
  booking: "Scan Booking",
  partner: "Partner Enquiry",
};

function fetchWithTimeout(url: string, options: RequestInit, ms: number) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  return fetch(url, { ...options, signal: controller.signal }).finally(() =>
    clearTimeout(id)
  );
}

async function getBrevoContactId(email: string): Promise<number | null> {
  const res = await fetchWithTimeout(
    `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
    { headers: { accept: "application/json", "api-key": BREVO_API_KEY } },
    CRM_TIMEOUT_MS
  );
  if (!res.ok) return null;
  const data = await res.json();
  return typeof data.id === "number" ? data.id : null;
}

async function createCrmDeal(params: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referral: string;
  referredBySource: string;
  referrerName: string;
  referrerEmail: string;
  referrerPhone: string;
}): Promise<void> {
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
  } = params;

  const contactId = await getBrevoContactId(email);
  if (!contactId) {
    console.error("CRM: could not retrieve contact ID for", email);
    return;
  }

  const dealRes = await fetchWithTimeout(
    "https://api.brevo.com/v3/crm/deals",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        name: `${firstName} ${lastName} - PRYSM Scan Booking`,
        attributes: {
          pipeline: PIPELINE_ID,
          deal_stage: STAGE_NEW_ID,
        },
        linkedContactsIds: [contactId],
      }),
    },
    CRM_TIMEOUT_MS
  );

  if (!dealRes.ok) {
    console.error("CRM deal creation failed:", await dealRes.text());
    return;
  }

  const { id: dealId } = await dealRes.json();

  const noteLines = [
    `Source: Scan Booking`,
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    referral && `Heard about us: ${referral}`,
    referredBySource && `Referred by: ${referredBySource}`,
    referrerName && `Referrer name: ${referrerName}`,
    referrerEmail && `Referrer email: ${referrerEmail}`,
    referrerPhone && `Referrer phone: ${referrerPhone}`,
    `Submitted: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join("<br>");

  const noteRes = await fetchWithTimeout(
    "https://api.brevo.com/v3/crm/notes",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        text: noteLines,
        dealIds: [dealId],
        contactIds: [contactId],
      }),
    },
    CRM_TIMEOUT_MS
  );

  if (!noteRes.ok) {
    console.error("CRM note creation failed:", await noteRes.text());
  }
}

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

  // CRM: create deal + note for scan bookings only (failure never fails the booking)
  if (source === "booking") {
    try {
      await createCrmDeal({
        firstName,
        lastName,
        email,
        phone,
        referral: referral || "",
        referredBySource: referredBySource || "",
        referrerName: referrerName || "",
        referrerEmail: referrerEmail || "",
        referrerPhone: referrerPhone || "",
      });
    } catch (err) {
      console.error("CRM deal error:", err);
    }
  }

  return NextResponse.json({ success: true });
}
