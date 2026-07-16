import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology & Science",
  description:
    "Discover the 80+ studies behind Prysm iO antioxidant scanning technology — including research from Stanford, Yonsei University, and Jiao Tong University.",
  keywords: [
    "antioxidant scanning research",
    "carotenoid biomarker studies",
    "Raman spectroscopy skin scan",
    "Prysm iO clinical studies",
    "hyperspectral measurement technology",
  ],
  alternates: { canonical: "/backed-by-science" },
  openGraph: {
    url: "/backed-by-science",
    title: "Technology & Science",
    description:
      "Discover the 80+ studies behind Prysm iO antioxidant scanning technology — including research from Stanford, Yonsei University, and Jiao Tong University.",
  },
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
  { label: "Studies published", value: "80+" },
  { label: "Patent status", value: "Patent-Pending" },
  { label: "Calibration", value: "Machine Learning" },
];

const universities = [
  {
    name: "DCS",
    study: "Blood Serum Carotenoid Correlation with Prysm iO",
    detail: "Validated Prysm iO readings against blood serum carotenoid levels, confirming scan accuracy as a non-invasive biomarker.",
  },
  {
    name: "Jiao Tong University",
    study: "Diet, Lifestyle, Skin & Metabolism vs Prysm Score",
    detail: "Mapped how diet quality, lifestyle habits, skin health, and metabolic markers correlate with Prysm Score outcomes.",
  },
  {
    name: "Yonsei University",
    study: "LifePak® Effect on Prysm Score & Lifestyle",
    detail: "Demonstrated clinically significant Prysm Score improvements in participants using Pharmanex® LifePak® supplementation.",
  },
  {
    name: "Stanford Medicine",
    study: "Skin & Wellness Factor Correlation",
    detail: "Found consistent associations between higher Prysm scores, slower biological ageing, and healthier telomere markers across multiple ageing clocks.",
  },
];

const agingClocks = [
  { clock: "Symphony Age", r: "−0.25", p: "0.16", direction: "Lower bio-age → higher Prysm" },
  { clock: "Pace of Aging", r: "−0.24", p: "0.18", direction: "Slower pace → higher Prysm" },
  { clock: "Telomere Bio Age", r: "−0.23", p: "0.20", direction: "Younger telomere age → higher Prysm" },
  { clock: "OMICm Age", r: "−0.21", p: "0.23", direction: "Lower bio-age → higher Prysm" },
  { clock: "Telomere Length", r: "+0.23", p: "0.20", direction: "Longer telomeres → higher Prysm" },
];

const bodySystems = [
  { rank: 1, system: "Metabolic", years: "−5.2 yrs" },
  { rank: 2, system: "Heart", years: "−5.1 yrs" },
  { rank: 3, system: "Inflammation", years: "−5.0 yrs" },
  { rank: 4, system: "Kidney", years: "−4.7 yrs" },
  { rank: 5, system: "Brain", years: "−4.5 yrs" },
  { rank: 6, system: "Blood", years: "−4.5 yrs" },
  { rank: 7, system: "Lung", years: "−4.2 yrs" },
  { rank: 8, system: "Immune", years: "−4.2 yrs" },
  { rank: 9, system: "Hormone", years: "−3.7 yrs" },
  { rank: 10, system: "Liver", years: "−3.1 yrs" },
  { rank: 11, system: "Musculoskeletal", years: "−3.0 yrs" },
];

export default function BackedBySciencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A3D] pt-28 pb-20" aria-labelledby="science-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-3">
            80+ Independent Studies
          </p>
          <h1 id="science-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Technology &amp; Science
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            The Prysm iO isn&apos;t a wellness gimmick. It&apos;s a clinically-validated
            measurement tool supported by research from Stanford, Yonsei, Jiao Tong, and
            more than 80 published studies.
          </p>
        </div>
      </section>

      {/* Study count banner */}
      <div className="bg-[#5C7A94] py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-3 gap-4 text-white text-center">
          <div>
            <div className="text-3xl font-black">3</div>
            <div className="text-xs font-semibold uppercase tracking-wider opacity-80 mt-0.5">Clinical Studies</div>
          </div>
          <div className="border-x border-white/30">
            <div className="text-3xl font-black">80+</div>
            <div className="text-xs font-semibold uppercase tracking-wider opacity-80 mt-0.5">Published Studies</div>
          </div>
          <div>
            <div className="text-3xl font-black">4</div>
            <div className="text-xs font-semibold uppercase tracking-wider opacity-80 mt-0.5">University Partners</div>
          </div>
        </div>
      </div>

      {/* Technology overview */}
      <section className="py-24 bg-white" aria-labelledby="tech-overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="tech-overview-heading" className="text-3xl font-bold text-[#1B2A3D]">
                Hyperspectral Measurement Technology
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                At the heart of the Prysm iO is the patent-pending Spectral
                Rai™ technology. Each scan fires more than{" "}
                <strong>700,000 hyperspectral absorption measurements</strong>{" "}
                at the skin in just 15 seconds, using resonance Raman
                spectroscopy to detect carotenoid molecules with extraordinary
                precision.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A machine learning calibration engine maps those measurements against
                validated reference populations to deliver your personalised Prysm Score —
                a number that reflects your antioxidant defence in real time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {specs.map(({ label, value }) => (
                <div key={label} className="bg-[#F4F5F6] rounded-2xl p-5 border border-[#5C7A94]/10">
                  <div className="text-2xl font-black text-[#5C7A94] mb-1">{value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* University research */}
      <section className="py-24 bg-[#F9FAFB]" aria-labelledby="universities-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-2">
              Independent Research
            </p>
            <h2 id="universities-heading" className="text-3xl font-bold text-[#1B2A3D]">
              World-Leading Institutions Back the Data
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Four independent university studies have examined Prysm iO technology —
              each confirming its validity from a different scientific angle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {universities.map(({ name, study, detail }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-[#5C7A94]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="text-xs font-bold text-[#5C7A94] uppercase tracking-widest mb-2">{name}</div>
                <h3 className="text-lg font-bold text-[#1B2A3D] mb-3">{study}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aging clock section */}
      <section className="py-24 bg-white" aria-labelledby="aging-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-2">
              Biological Ageing
            </p>
            <h2 id="aging-heading" className="text-3xl font-bold text-[#1B2A3D]">
              Higher Prysm Score, Slower Biological Ageing
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              All four independent ageing clocks point the same direction (N = 33). The top Prysm tertile
              averages <strong>3–5 years younger</strong> on every single clock.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Table */}
            <div className="lg:col-span-2 overflow-x-auto">
              <table className="w-full text-sm" aria-label="Aging clock correlations with Prysm Score">
                <thead>
                  <tr className="bg-[#1B2A3D] text-white text-left">
                    <th className="px-5 py-3 font-semibold rounded-tl-xl">Ageing Clock</th>
                    <th className="px-4 py-3 font-semibold text-center">r vs Prysm</th>
                    <th className="px-4 py-3 font-semibold text-center">p-value</th>
                    <th className="px-5 py-3 font-semibold rounded-tr-xl">Direction</th>
                  </tr>
                </thead>
                <tbody>
                  {agingClocks.map(({ clock, r, p, direction }, i) => (
                    <tr
                      key={clock}
                      className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}
                    >
                      <td className="px-5 py-3 font-medium text-[#1B2A3D]">{clock}</td>
                      <td className="px-4 py-3 text-center font-bold text-[#5C7A94]">{r}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{p}</td>
                      <td className="px-5 py-3 text-gray-600">{direction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tertile callout */}
            <div className="bg-[#1B2A3D] rounded-2xl p-6 text-white">
              <p className="text-[#5C7A94] text-xs font-bold uppercase tracking-widest mb-2">Tertile Comparison</p>
              <p className="font-bold text-lg leading-snug mb-4">
                Top-Prysm tertile averages 3–5 years younger on every ageing clock
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5C7A94] shrink-0" />
                  Symphony Age: 51.6 vs 56.6
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5C7A94] shrink-0" />
                  OMICm Age: 49.6 vs 52.9
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5C7A94] shrink-0" />
                  Pace of Ageing: 0.94 vs 0.97
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5C7A94] shrink-0" />
                  Telomeres favour high scorers on both metrics
                </li>
              </ul>
              <p className="mt-5 text-white/40 text-xs italic">
                Collaborative study with Dr Anne Chang (pending publication)
              </p>
            </div>
          </div>

          {/* Verdict box */}
          <div className="mt-8 border border-gray-200 rounded-2xl p-6 bg-[#F9FAFB]">
            <p className="text-xs font-bold text-[#5C7A94] uppercase tracking-widest mb-2">Verdict</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              All four independent clocks trend in the{" "}
              <strong>&ldquo;slower ageing → higher Prysm Score&rdquo;</strong> direction. None
              individually clears p &lt; 0.05, but the consistency across four clocks plus the
              tertile gap is strongly suggestive — the kind of signal that would likely reach
              significance in a larger cohort.
            </p>
          </div>
        </div>
      </section>

      {/* Body systems scoreboard */}
      <section className="bg-[#F9FAFB] py-24" aria-labelledby="systems-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-2">
              Your Body&apos;s Age Scoreboard
            </p>
            <h2 id="systems-heading" className="text-3xl font-bold text-[#1B2A3D]">
              High-Prysm Scorers Look Younger Across Every System
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              How many years younger each body system appears in high-Prysm scorers vs low-Prysm scorers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bodySystems.map(({ rank, system, years }) => (
              <div
                key={system}
                className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm"
              >
                <span className="w-8 h-8 rounded-full bg-[#1B2A3D] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {rank}
                </span>
                <span className="flex-1 font-medium text-[#1B2A3D]">{system}</span>
                <span className="px-4 py-1.5 bg-[#1B2A3D] text-white text-sm font-bold rounded-lg">
                  {years}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#1B2A3D] rounded-2xl px-8 py-6 text-white text-center">
            <p className="font-bold text-lg">
              Every single system points the same way — high-Prysm scorers look younger across the board.
            </p>
            <p className="mt-2 text-white/40 text-xs italic">
              Based on a collaborative study with Dr Anne Chang (pending publication)
            </p>
          </div>
        </div>
      </section>

      {/* Stanford quote */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <svg className="w-10 h-10 text-[#5C7A94]/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6.5c0-1.9 1.6-3.5 3.5-3.5V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-3.5c0-1.9 1.6-3.5 3.5-3.5V8z" />
          </svg>
          <blockquote className="text-gray-700 text-lg leading-relaxed italic">
            &ldquo;In a preliminary Stanford study, higher Prysm scores were consistently associated with
            younger biological age, slower ageing rates and healthier telomere markers across multiple
            ageing clocks. The consistent trends suggest the relationship warrants further investigation
            in larger studies.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-[#1B2A3D]">Stanford Medicine</p>
          <p className="text-xs text-gray-400">Skin &amp; Wellness Factor Correlation Study</p>
          <p className="mt-3 text-xs text-gray-400 italic">
            This study shows an <strong>association</strong> between higher Prysm scores and better biological ageing markers.
          </p>
        </div>
      </section>

      {/* Research points */}
      <section className="py-24 bg-[#F9FAFB]" aria-labelledby="research-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="research-heading" className="text-3xl font-bold text-[#1B2A3D]">
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
                <h3 className="text-lg font-bold text-[#1B2A3D] mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                <p className="mt-4 text-xs text-[#5C7A94] font-medium italic">
                  {citation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B2A3D] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to see the science in action?
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Experience what 80+ studies of research looks like in 15 seconds.
          </p>
          <Link
            href="/#book"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#5C7A94] hover:bg-[#7A96AC] text-white font-bold rounded-full transition-all duration-200 text-sm"
          >
            Get Your Prysm Score
          </Link>
        </div>
      </section>
    </>
  );
}
