import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using the Scan Your Score website.",
  keywords: ["terms of use", "Scan Your Score terms and conditions"],
  alternates: { canonical: "/terms" },
  openGraph: {
    url: "/terms",
    title: "Terms of Use",
    description: "Terms and conditions for using the Scan Your Score website.",
  },
};

const sections = [
  {
    heading: "1. Acceptance of These Terms",
    body: `By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use the website.

These terms are governed by the laws of Australia and the state in which the website is operated. Any disputes will be subject to the exclusive jurisdiction of the courts of that state.`,
  },
  {
    heading: "2. About This Website",
    body: `ScanYourScore.com provides general information about PRYSM iO antioxidant scanning technology, educational content relating to antioxidants, nutrition and general wellness, and a way to get in touch about scanning or bringing PRYSM into your business.`,
  },
  {
    heading: "3. General Information Only — Not Medical Advice",
    body: `Content on this website, including information about PRYSM Scores and related wellness guidance, is provided for general informational and educational purposes only. It is not medical advice, diagnosis or treatment and is not a substitute for advice from a suitably qualified healthcare professional.

You should always consult a qualified healthcare professional before making changes to your diet, supplement regimen, or health routine. See our Disclaimer page for further detail.`,
  },
  {
    heading: "4. No Guarantee of Individual Results",
    body: `Results and outcomes vary between individuals. Nothing on this website guarantees any particular personal health outcome.`,
  },
  {
    heading: "5. Business Information Is General",
    body: `Any information on this website about bringing PRYSM into a business is general in nature. It does not guarantee revenue, client numbers, or business results — actual outcomes depend on many factors specific to each business.`,
  },
  {
    heading: "6. Accuracy & Availability",
    body: `We aim to keep this website accurate and available, but we don't guarantee it will always be error-free, uninterrupted, or fully up to date, and content may change without notice.`,
  },
  {
    heading: "7. Intellectual Property",
    body: `The content, design, graphics and other materials on this website are owned by us or used with permission, and are protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or commercially exploit any content without prior written permission.

PRYSM® and related marks are trademarks of their respective owners and are used with appropriate permission.`,
  },
  {
    heading: "8. Third-Party Links",
    body: `This website may link to third-party websites, research publications, or product pages. We don't endorse, control, or take responsibility for the content or privacy practices of any external sites.`,
  },
  {
    heading: "9. User Conduct",
    body: `By using this website, you agree not to:

— Use the site for any unlawful purpose
— Attempt to gain unauthorised access to any part of the website or its systems
— Transmit any harmful, offensive, or disruptive content
— Misrepresent your identity or affiliation`,
  },
  {
    heading: "10. Limitation of Liability",
    body: `To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, or consequential loss arising from your use of this website.

Nothing in these terms excludes any consumer guarantee under the Australian Consumer Law that cannot be legally excluded.`,
  },
  {
    heading: "11. Changes to These Terms",
    body: `We may update these Terms of Use at any time. The updated version will be posted on this page. Continued use of the website after changes constitutes your acceptance of the revised terms.`,
  },
  {
    heading: "12. Contact",
    body: `For any questions regarding these Terms of Use, please contact us:

**Scan Your Score**
Email: hello@scanyourscore.com`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-black pt-28 pb-20" aria-labelledby="terms-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 id="terms-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Terms of Use
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
