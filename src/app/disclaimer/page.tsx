import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important information about the limitations of the Prysm Score and My Antioxidant Score services.",
  keywords: ["medical disclaimer", "wellness disclaimer", "antioxidant score limitations"],
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    url: "/disclaimer",
    title: "Disclaimer",
    description: "Important information about the limitations of the Prysm Score and My Antioxidant Score services.",
  },
};

const sections = [
  {
    heading: "Not Medical Advice",
    body: `The Prysm Score, all content on this website, and any information provided during a scan appointment are for general wellness and educational purposes only.

Nothing on this website or provided through our services constitutes medical advice, medical diagnosis, or medical treatment. My Antioxidant Score is not a healthcare provider and does not claim to be.

You should always consult a qualified and registered healthcare professional — such as your GP, dietitian, or specialist — before making any changes to your diet, supplement use, exercise habits, or health management based on your Prysm Score or any content on this site.`,
  },
  {
    heading: "Prysm Score Limitations",
    body: `The Prysm Score measures skin carotenoid levels as a non-invasive indicator of antioxidant status. It is not a comprehensive measure of overall health, medical fitness, or nutritional sufficiency.

Your score is influenced by many factors including diet, supplementation, skin tone, recent sun exposure, and individual physiological variation. A single score should be interpreted as one data point among many — not as a definitive health outcome.

Results may vary between individuals. An improvement in your Prysm Score does not guarantee improved health outcomes, and a lower score does not indicate the presence of any disease or medical condition.`,
  },
  {
    heading: "Research & Scientific Claims",
    body: `References to scientific studies, university research, and clinical findings on this website are provided for informational and educational purposes. Where studies are cited as "pending publication", findings have not yet undergone full peer review and should be interpreted accordingly.

Associations between Prysm Score and biological markers (such as ageing clocks or telomere length) reflect observed correlations in research cohorts and do not imply causation. These findings may not apply to every individual.

My Antioxidant Score endeavours to represent scientific findings accurately and in context, but we recommend consulting original source publications for full methodological detail.`,
  },
  {
    heading: "Supplement Information",
    body: `References to Prysm-certified supplements — including Pharmanex® LifePak® and other products — are provided for informational purposes. Any claimed benefits refer to outcomes observed in clinical studies and may not be achieved by all users.

Supplements are not a substitute for a balanced diet or medical treatment. You should consult your doctor or pharmacist before beginning any new supplement regimen, particularly if you are pregnant, breastfeeding, taking medications, or managing a medical condition.`,
  },
  {
    heading: "Results May Vary",
    body: `Individual results from antioxidant scanning and supplementation will vary. Testimonials, case studies, or score improvements referenced on this website reflect individual experiences and are not a guarantee of outcomes for any other person.`,
  },
  {
    heading: "External Links",
    body: `This website may link to third-party websites, research publications, or product pages. My Antioxidant Score does not endorse, control, or take responsibility for the content or privacy practices of any external sites.`,
  },
  {
    heading: "Limitation of Liability",
    body: `To the fullest extent permitted by Australian law, My Antioxidant Score, its operators, employees, and partners accept no liability for any loss, harm, or adverse outcome arising from reliance on information provided through this website or our scanning services.

Nothing in this disclaimer excludes any consumer guarantees under the Australian Consumer Law that cannot be legally excluded.`,
  },
  {
    heading: "Questions",
    body: `If you have any questions about this disclaimer or our services, please contact us at info@myantioxidantscore.com.au or visit our Contact page.`,
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-[#0C2A2C] pt-28 pb-20" aria-labelledby="disclaimer-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#0F8A7D] font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 id="disclaimer-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Disclaimer
          </h1>
          <p className="mt-4 text-white/50 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      {/* Important notice banner */}
      <div className="bg-[#0F8A7D]/10 border-b border-[#0F8A7D]/20 py-5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex items-start gap-3">
          <svg className="w-5 h-5 text-[#0F8A7D] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Important:</strong> The Prysm Score is a wellness tool, not a medical device. It does not diagnose, treat, or prevent any disease or medical condition. Always seek professional medical advice for health concerns.
          </p>
        </div>
      </div>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {sections.map(({ heading, body }) => (
              <div key={heading} className="px-8 py-8">
                <h2 className="text-lg font-bold text-[#0C2A2C] mb-4">{heading}</h2>
                <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                  {body.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              By using our services you acknowledge that you have read and understood this disclaimer.{" "}
              <Link href="/terms" className="text-[#0F8A7D] hover:underline font-medium">
                View our Terms of Service
              </Link>{" "}
              or{" "}
              <Link href="/privacy-policy" className="text-[#0F8A7D] hover:underline font-medium">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
