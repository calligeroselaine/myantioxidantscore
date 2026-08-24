import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Scan Your Score collects, uses, and protects your personal information.",
  keywords: ["privacy policy", "data protection", "Scan Your Score privacy"],
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    url: "/privacy-policy",
    title: "Privacy Policy",
    description: "How Scan Your Score collects, uses, and protects your personal information.",
  },
};

const sections = [
  {
    heading: "1. Who Operates This Website",
    body: `ScanYourScore.com ("Scan Your Score", "we", "us", "our") provides information about PRYSM iO antioxidant scanning technology, shares educational content about antioxidants and wellness, and lets visitors get in touch to book a scan or ask about bringing PRYSM into their business.`,
  },
  {
    heading: "2. Information We Collect",
    body: `When you submit an enquiry form on this site, we collect your name, email address, phone number, and — if you provide it — how you heard about us. We also collect basic website usage and analytics information through our website hosting and analytics services.

Our enquiry forms do not ask for and do not collect health information, medical history, supplement history, or PRYSM scan results. PRYSM scores are generated and stored through the PRYSM device/app itself, not through this website.`,
  },
  {
    heading: "3. How We Use Your Information",
    body: `We use the information you provide to respond to your enquiry, provide information you have requested, follow up with you where appropriate, and maintain basic records of enquiries and expressions of interest.`,
  },
  {
    heading: "4. Service Providers",
    body: `We use trusted third-party service providers to help operate this website and respond to enquiries — for example, an email and contact-management platform to store enquiry details and send responses, and our hosting provider's analytics to understand general site usage. These providers only process your information on our behalf, to the extent needed to provide these services.

We don't sell, rent, or trade your personal information, and we don't share it with independent third parties for their own marketing purposes.`,
  },
  {
    heading: "5. International Visitors",
    body: `This website may be visited by people in Australia and elsewhere. We handle personal information in accordance with applicable privacy and data-protection requirements, and, where applicable to us, the Australian Privacy Principles under the Privacy Act 1988 (Cth).`,
  },
  {
    heading: "6. Data Storage & Security",
    body: `Your information is stored securely with our service providers, and we take reasonable steps to protect it from misuse, loss, or unauthorised access. No method of transmitting data over the internet is completely secure, so we can't guarantee absolute security.`,
  },
  {
    heading: "7. Retention",
    body: `We keep enquiry information only for as long as reasonably needed to respond to you and keep an appropriate record, or as required by law.`,
  },
  {
    heading: "8. Access, Correction & Deletion",
    body: `You can ask what personal information we hold about you, ask us to correct it, or ask us to delete it, at any time — just contact us using the details below.`,
  },
  {
    heading: "9. Questions or Complaints",
    body: `If you have a question or concern about how we handle your personal information, please contact us — we'll do our best to resolve it directly.`,
  },
  {
    heading: "10. Changes to This Policy",
    body: `We may update this policy from time to time. The most current version will always be available on this page.`,
  },
  {
    heading: "11. Contact Us",
    body: `**Scan Your Score**
Email: hello@scanyourscore.com`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-black pt-28 pb-20" aria-labelledby="privacy-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 id="privacy-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/50 text-sm">Last updated: August 2026</p>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {sections.map(({ heading, body }) => (
              <div key={heading} className="px-8 py-8">
                <h2 className="text-lg font-bold text-[#1B2A3D] mb-4">{heading}</h2>
                <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                  {body.split("\n\n").map((para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                        .replace(/^— /gm, "&mdash;&nbsp;")
                        .replace(/\n— /g, "<br />&mdash;&nbsp;")
                    }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
