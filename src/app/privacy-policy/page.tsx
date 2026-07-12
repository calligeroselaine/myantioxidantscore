import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How My Antioxidant Score collects, uses, and protects your personal information.",
};

const sections = [
  {
    heading: "1. Who We Are",
    body: `My Antioxidant Score is an Australian health and wellness service that provides Prysm iO antioxidant scanning technology and related educational content. References to "we", "us", or "our" in this policy refer to My Antioxidant Score.

We are committed to protecting your privacy in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).`,
  },
  {
    heading: "2. Information We Collect",
    body: `We may collect the following types of personal information:

— **Contact details**: name, email address, phone number, and suburb/state when you book a scan, submit a contact form, or subscribe to our newsletter.

— **Booking information**: your preferred scan location, date, and time.

— **Scan results**: your Prysm Score reading, if you choose to have it recorded or shared with us.

— **Website usage data**: pages visited, time spent, referring URLs, and device/browser type, collected automatically via analytics tools.

We do not collect sensitive health information beyond your Prysm Score reading, and we do not collect payment card details directly (payments are handled by third-party processors).`,
  },
  {
    heading: "3. How We Use Your Information",
    body: `We use your personal information to:

— Process and confirm scan bookings
— Respond to your enquiries
— Send appointment reminders and follow-up communications
— Send our newsletter and educational content (only if you have opted in)
— Improve our website and services through anonymised analytics
— Comply with our legal obligations

We will not use your information for any purpose that is incompatible with the reason it was collected without your consent.`,
  },
  {
    heading: "4. Sharing Your Information",
    body: `We do not sell, rent, or trade your personal information. We may share it with:

— **Service providers**: third-party tools we use to operate the business (e.g. booking platforms, email marketing software, analytics providers), who are contractually bound to protect your data.

— **Legal authorities**: where required by law, court order, or to protect the rights and safety of our users or the public.

All third-party providers we use are required to maintain the confidentiality and security of your information.`,
  },
  {
    heading: "5. Data Storage & Security",
    body: `Your information is stored on secure servers. We take reasonable steps to protect personal information from misuse, interference, loss, and unauthorised access, modification, or disclosure.

However, no data transmission over the internet is guaranteed to be 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.

We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.`,
  },
  {
    heading: "6. Cookies & Analytics",
    body: `Our website uses cookies and similar tracking technologies to understand how visitors use the site and to improve your experience. You can disable cookies through your browser settings, though this may affect some functionality.

We use anonymised, aggregated analytics data only and do not use cookies to build individual advertising profiles.`,
  },
  {
    heading: "7. Your Rights",
    body: `Under the Australian Privacy Act, you have the right to:

— Access the personal information we hold about you
— Request correction of inaccurate or outdated information
— Request that we delete your information (subject to legal retention requirements)
— Opt out of marketing communications at any time by clicking "Unsubscribe" in any email or contacting us directly

To exercise any of these rights, please contact us at the details below.`,
  },
  {
    heading: "8. Links to Third-Party Sites",
    body: `Our website may contain links to external websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.`,
  },
  {
    heading: "9. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. The most current version will always be available on this page. We encourage you to review it periodically. Continued use of our website after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    heading: "10. Contact Us",
    body: `If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:

**My Antioxidant Score**
Email: info@myantioxidantscore.com.au

If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#0D1B3E] pt-28 pb-20" aria-labelledby="privacy-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C8953C] font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 id="privacy-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/50 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {sections.map(({ heading, body }) => (
              <div key={heading} className="px-8 py-8">
                <h2 className="text-lg font-bold text-[#0D1B3E] mb-4">{heading}</h2>
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
