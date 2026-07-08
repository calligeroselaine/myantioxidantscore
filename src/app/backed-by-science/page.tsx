import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Backed by Science",
  description:
    "Discover the 20+ years of research behind Prysm iO antioxidant scanning technology. Explore the science of carotenoids, oxidative stress, and Spectral Rai™ technology.",
};

const researchPoints = [
  {
    title: "Carotenoid Biomarkers",
    description:
      "Carotenoids are fat-soluble antioxidants found in fruits and vegetables. Research spanning two decades has established skin carotenoid levels as a reliable, non-invasive biomarker for overall nutritional status and antioxidant defence.",
    citation: "Mayne et al. (2010). American Journal of Clinical Nutrition.",
  },
  {
    title: "Raman Spectroscopy",
    description:
      "Resonance Raman spectroscopy is used to measure carotenoid concentrations in the skin. This technology is clinically validated against blood serum carotenoid measurements, with strong correlation across diverse populations.",
    citation: "Ermakov et al. (2005). Journal of Biomedical Optics.",
  },
  {
    title: "Oxidative Stress & Disease",
    description:
      "Oxidative stress — caused by an imbalance between free radicals and antioxidants — is implicated in cardiovascular disease, cancer, diabetes, and accelerated ageing. Higher carotenoid levels indicate greater antioxidant capacity.",
    citation: "Lobo et al. (2010). Pharmacognosy Review.",
  },
  {
    title: "Supplement Efficacy",
    description:
      "Clinical trials have shown that carotenoid-rich supplements — when properly formulated and absorbed — significantly raise Prysm Scores within weeks. The score provides objective evidence of supplement effectiveness.",
    citation: "Pharmanex® LifePak® Clinical Studies (2003–2023).",
  },
];

const specs = [
  { label: "Measurements per scan", value: "700,000+" },
  { label: "Scan duration", value: "15 seconds" },
  { label: "Technology type", value: "Hyperspectral Raman" },
  { label: "Years of R&D", value: "20+" },
  { label: "Patent status", value: "Patent-Pending" },
  { label: "Calibration", value: "Machine Learning" },
];

export default function BackedBySciencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-28 pb-20" aria-labelledby="science-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C8953C] font-semibold text-sm uppercase tracking-widest mb-3">
            20+ Years of Research
          </p>
          <h1 id="science-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Backed by Science
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            The Prysm iO isn&apos;t a wellness gimmick. It&apos;s a
            clinically-validated measurement tool with decades of peer-reviewed
            research supporting every reading.
          </p>
        </div>
      </section>

      {/* Technology overview */}
      <section className="py-24 bg-white" aria-labelledby="tech-overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="tech-overview-heading" className="text-3xl font-bold text-[#0D1B3E]">
                Spectral Rai™ Technology
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                At the heart of the Prysm iO is our patent-pending Spectral
                Rai™ technology. Each scan fires more than{" "}
                <strong>700,000 hyperspectral absorption measurements</strong>{" "}
                at the skin in just 15 seconds, using resonance Raman
                spectroscopy to detect carotenoid molecules with extraordinary
                precision.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A machine learning calibration engine then maps these
                measurements against validated reference populations to deliver
                your personalised Prysm Score — a number that reflects your
                antioxidant defence in real time.
              </p>
            </div>
            {/* Spec table */}
            <div className="grid grid-cols-2 gap-4">
              {specs.map(({ label, value }) => (
                <div key={label} className="bg-[#F7F4EF] rounded-2xl p-5 border border-[#C8953C]/10">
                  <div className="text-2xl font-black text-[#C8953C] mb-1">{value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research points */}
      <section className="py-24 bg-[#F9FAFB]" aria-labelledby="research-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="research-heading" className="text-3xl font-bold text-[#0D1B3E]">
              The Research Behind Your Score
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Peer-reviewed science underpins every aspect of how your Prysm Score is calculated.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPoints.map(({ title, description, citation }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#0D1B3E] mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                <p className="mt-4 text-xs text-[#C8953C] font-medium italic">
                  {citation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B3E] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to see the science in action?
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Book a free scan and experience what 20+ years of research looks
            like in 15 seconds.
          </p>
          <Link
            href="/book-a-scan"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#C8953C] hover:bg-[#e8b05a] text-white font-bold rounded-full transition-all duration-200 text-sm"
          >
            Book a Free Scan
          </Link>
        </div>
      </section>
    </>
  );
}
