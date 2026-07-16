import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From the technology behind the device to what your score actually means — see exactly how a Prysm iO scan works, start to finish.",
  keywords: [
    "how antioxidant scan works",
    "Prysm iO scan process",
    "hyperspectral scanning technology",
    "carotenoid measurement process",
  ],
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    url: "/how-it-works",
    title: "How It Works",
    description:
      "From the technology behind the device to what your score actually means — see exactly how a Prysm iO scan works.",
  },
};

const BASE = "https://static.wixstatic.com/media";

const IMG = {
  patent:        `${BASE}/2cbe9c_250e8466e7cd47648e9cbdc48835b4f3~mv2.png`,
  mlCalibration: `${BASE}/2cbe9c_0ed41fd191cc4c7e9bd781be8942e7b4~mv2.png`,
  measurements:  `${BASE}/2cbe9c_688d05e2d0ab431783ad357fb16cfd53~mv2.png`,
  raman:         `${BASE}/2cbe9c_9ec9a87e7cb645a085021d6231bb64a5~mv2.png`,
  lifestyle:     `${BASE}/2cbe9c_fc06a7852d174dc3b7a27b8b61ca405a~mv2.jpg`,
  score6:        `${BASE}/2cbe9c_f180b3b7501542d0821dd904f6ec9f09~mv2.jpeg`,
  score7:        `${BASE}/2cbe9c_4ff4d7291f32478981036e37f718c273~mv2.jpeg`,
  score8:        `${BASE}/2cbe9c_0371afa51088419dbeeaca48493f10f8~mv2.jpeg`,
  appHero:       `${BASE}/2cbe9c_72715b930c474f789ba107ff9ce16e40~mv2.webp`,
  aiGuidance:    `${BASE}/2cbe9c_6c63b07746c641d3b0a62e680ade79fa~mv2.jpg`,
};

const techFeatures = [
  { img: IMG.patent,        label: "Patent-Pending Technology" },
  { img: IMG.mlCalibration, label: "Machine Learning Calibration" },
  { img: IMG.measurements,  label: "700K+ Measurements per Scan" },
  { img: IMG.raman,         label: "Raman Technology" },
];

const scoreItems = [
  { img: IMG.score6, label: "Low Score" },
  { img: IMG.score7, label: "Average Score" },
  { img: IMG.score8, label: "High Score" },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A3D] pt-28 pb-20" aria-labelledby="how-it-works-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h1 id="how-it-works-heading" className="text-4xl sm:text-5xl font-bold text-white">
            From Scan to Score in 15 Seconds
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            No blood tests, no waiting days for results. Here&apos;s exactly what happens
            when you use a Prysm iO — from the technology inside the device to what your
            score actually means.
          </p>
        </div>
      </section>

      {/* Step 1 — The Technology */}
      <section className="py-20 bg-[#17242F]" aria-labelledby="tech-heading">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#5C7A94] text-xs font-semibold uppercase tracking-widest mb-3">
              Step 1
            </p>
            <h2 id="tech-heading" className="text-3xl font-light text-white tracking-wide">
              What Powers Prysm iO
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">
              Underneath the simple 15-second scan is patent-pending technology
              engineered for precision.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {techFeatures.map(({ img, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-4">
                <div className="relative w-24 h-24">
                  <Image src={img} alt={label} fill className="object-contain" sizes="96px" />
                </div>
                <p className="text-white/70 text-xs uppercase tracking-widest leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 2 — The Scan */}
      <section className="relative h-[50vh]" aria-label="The scan experience">
        <Image
          src={IMG.lifestyle}
          alt="Healthy lifestyle with antioxidant nutrition"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#101B24]/60 flex items-center justify-center">
          <div className="text-center px-6 max-w-xl mx-auto">
            <p className="text-[#5C7A94] text-xs font-semibold uppercase tracking-widest mb-3">
              Step 2
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              You Place Your Finger Tip on the Device
            </h2>
            <p className="text-white/70 leading-relaxed">
              That&apos;s it. No fasting, no blood draw, no discomfort — just 15 seconds
              of hyperspectral scanning while you go about your day.
            </p>
          </div>
        </div>
      </section>

      {/* Step 3 — What Your Score Means */}
      <section className="py-20 bg-[#101B24]" aria-labelledby="score-heading">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#5C7A94] text-xs font-semibold uppercase tracking-widest mb-3">
              Step 3
            </p>
            <h2 id="score-heading" className="text-3xl font-light text-white tracking-wide">
              What Does My Score Mean?
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">
              Your score reflects your body&apos;s antioxidant defences — and where it
              lands relative to key lifestyle factors like diet, sleep, and activity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scoreItems.map(({ img, label }) => (
              <div key={label} className="relative rounded overflow-hidden bg-[#E8EAED]" style={{ aspectRatio: "3/4" }}>
                <Image src={img} alt={label} fill className="object-contain" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 4 — The App */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]" aria-labelledby="app-heading">
        <div className="relative min-h-[40vh] bg-black">
          <Image
            src={IMG.appHero}
            alt="Prysm iO app showing antioxidant score"
            fill
            className="object-contain object-left lg:object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="bg-[#17242F] flex flex-col justify-center px-10 py-16 lg:px-16">
          <p className="text-[#5C7A94] text-xs font-semibold uppercase tracking-widest mb-3">
            Step 4
          </p>
          <h2 id="app-heading" className="text-3xl sm:text-4xl font-light text-white leading-tight">
            Your Score, Instantly in the App
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            The moment your scan finishes, your result appears in the Prysm iO app —
            along with a history of every past scan, so you can track how your score
            moves over time.
          </p>
        </div>
      </section>

      {/* Step 5 — AI Guidance */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]" aria-labelledby="ai-heading">
        <div className="bg-[#101B24] flex flex-col justify-center px-10 py-16 lg:px-16 order-2 lg:order-1">
          <p className="text-[#5C7A94] text-xs font-semibold uppercase tracking-widest mb-3">
            Step 5
          </p>
          <h2 id="ai-heading" className="text-3xl sm:text-4xl font-light text-white leading-tight">
            AI-Powered Personalised Guidance
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            The app doesn&apos;t just show you a number — it explains what it means and
            tells you exactly what to do next, with personalised recommendations based
            on your unique results.
          </p>
        </div>
        <div className="relative min-h-[40vh] order-1 lg:order-2">
          <Image
            src={IMG.aiGuidance}
            alt="AI-powered wellness guidance"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1B2A3D]">
            See it for yourself
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            The whole process takes 15 seconds. Find out where your score stands today.
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
