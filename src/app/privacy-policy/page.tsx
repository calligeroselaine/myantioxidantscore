import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How My Antioxidant Score collects, uses, and protects your personal information.",
  keywords: ["privacy policy", "data protection", "My Antioxidant Score privacy"],
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    url: "/privacy-policy",
    title: "Privacy Policy",
    description: "How My Antioxidant Score collects, uses, and protects your personal information.",
  },
};

const sections = [
  {
    heading: "1. Who We Are",
    body: `www.myantioxidantscore.com ("My Antioxidant Score") is a website used by a network of independent Prysm business partners to share information about Prysm iO antioxidant scanning technology — with people who are curious about it, and with health professionals, wellness practitioners, and businesses considering offering it. It is not a single registered company. References to "we", "us", or "our" in this policy mean the partners who operate and use this site.

We handle personal information submitted through this site in line with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), to the extent they apply to us.`,
  },
  {
    heading: "2. Information We Collect",
    body: `When you submit an enquiry form on this site, we collect your name, email address, phone number, and business name (if provided). We also collect basic website usage data — pages visited, referring links, device/browser type — through analytics tools.

We do not collect sensitive health information through this website.`,
  },
  {
    heading: "3. How We Use Your Information",
    body: `This site exists to give you information and put you in touch with the right next step. We use the details you provide only to:

— Get in touch about your enquiry
— Arrange a discovery call if you're interested in the business opportunity, or point you toward getting a scan if that's what you're after
— Improve the site using anonymised analytics

We don't sell anything through this website, and we don't use your information for anything beyond the above.`,
  },
  {
    heading: "4. Sharing Your Information",
    body: `We don't sell, rent, or trade your personal information. Because this site is used by a network of independent partners, your enquiry details are shared with the specific partner best placed to follow up with you (for example, whoever referred you, or whoever covers your area).`,
  },
  {
    heading: "5. Data Storage & Security",
    body: `Your information is stored securely, and we take reasonable steps to protect it from misuse, loss, or unauthorised access. No method of transmitting data over the internet is completely secure, so we can't guarantee absolute security. We keep your information only as long as needed to respond to your enquiry, or as required by law.`,
  },
  {
    heading: "6. Your Rights",
    body: `You can ask what personal information we hold about you, ask us to correct it, or ask us to delete it — just contact us using the details below.`,
  },
  {
    heading: "7. Changes to This Policy",
    body: `We may update this policy from time to time. The most current version will always be available on this page.`,
  },
  {
    heading: "8. Contact Us",
    body: `**My Antioxidant Score**
Email: info@myantioxidantscore.com.au`,
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
