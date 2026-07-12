import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import HeroVideoButton from "@/components/HeroVideoButton";

export const metadata: Metadata = {
  title: "Antioxidant Scan | Check Your Health Score in Seconds",
  description:
    "In 15 seconds, the Prysm iO shows you if your supplements are working — no blood tests, no guessing. Book a free antioxidant scan today.",
};

const BASE = "https://static.wixstatic.com/media";

const IMG = {
  hero:           `${BASE}/2cbe9c_ec832e1b69724f599e3ba08e39023451~mv2.avif`,
  lifestyle1:     `${BASE}/2cbe9c_c92926f009194ad4813908678bf53e73~mv2.jpg`,
  carousel1:      `${BASE}/2cbe9c_c661e5125a8a4eb6ae48492d989be1e9~mv2.avif`,
  carousel2:      `${BASE}/2cbe9c_178911420ef0472a91451087c7ed7ab4~mv2.avif`,
  carousel3:      `${BASE}/2cbe9c_5f23817806644ad2b5393ab51a7eba45~mv2.jpg`,
  patent:         `${BASE}/2cbe9c_250e8466e7cd47648e9cbdc48835b4f3~mv2.png`,
  mlCalibration:  `${BASE}/2cbe9c_0ed41fd191cc4c7e9bd781be8942e7b4~mv2.png`,
  measurements:   `${BASE}/2cbe9c_688d05e2d0ab431783ad357fb16cfd53~mv2.png`,
  raman:          `${BASE}/2cbe9c_9ec9a87e7cb645a085021d6231bb64a5~mv2.png`,
  lifestyle2:     `${BASE}/2cbe9c_fc06a7852d174dc3b7a27b8b61ca405a~mv2.jpg`,
  score6:         `${BASE}/2cbe9c_f180b3b7501542d0821dd904f6ec9f09~mv2.jpeg`,
  score8:         `${BASE}/2cbe9c_0371afa51088419dbeeaca48493f10f8~mv2.jpeg`,
  score7:         `${BASE}/2cbe9c_4ff4d7291f32478981036e37f718c273~mv2.jpeg`,
  appHero:        `${BASE}/2cbe9c_72715b930c474f789ba107ff9ce16e40~mv2.webp`,
  aiGuidance:     `${BASE}/2cbe9c_6c63b07746c641d3b0a62e680ade79fa~mv2.jpg`,
  aiImage:        `${BASE}/2cbe9c_30e6a467b3434c21ae8eeff0c27b9d4c~mv2.png`,
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

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO — device image left, text right ── */}
      <section className="pt-14" aria-label="Hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-3.5rem)]">
          <div className="relative min-h-[50vh] lg:min-h-full bg-black">
            <Image
              src={IMG.hero}
              alt="Prysm iO antioxidant scanning device"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <HeroVideoButton />
          </div>
          <div className="bg-[#0f1b35] flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-24">
            <h1 className="text-4xl sm:text-5xl font-light text-white leading-tight tracking-tight">
              15 Seconds Can Change Your Life
            </h1>
            <div className="mt-8 space-y-5 text-white/75 text-base leading-relaxed">
              <p>
                In a world where consumers spent{" "}
                <strong className="text-white">$200 billion</strong> on
                supplements last year, one question remains:
              </p>
              <p className="text-white text-xl font-light italic">
                &ldquo;Are they working?&rdquo;
              </p>
              <p>
                Prysm iO delivers the answer—instantly. Backed by more than 20
                years of leadership in antioxidant science, including the iconic
                LifePak, it represents the next wave of trusted, personalized
                wellness—and you&apos;re driving what&apos;s next.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/book-a-scan"
                className="inline-block px-8 py-3 border border-white text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#0f1b35] transition-all duration-200"
              >
                Book a Scan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STOP GUESSING — text left, lifestyle image right ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]" aria-labelledby="stop-guessing-heading">
        <div className="bg-[#0a1628] flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20 order-2 lg:order-1">
          <h2 id="stop-guessing-heading" className="text-4xl sm:text-5xl font-light text-white leading-tight">
            Stop Guessing. Start Seeing.
          </h2>
          <p className="mt-6 text-white/70 text-base leading-relaxed">
            In 15 seconds, Prysm iO shows you if key nutrients in your diet and
            supplements are getting absorbed—no guessing, no blood tests, no
            stress.
          </p>
          <p className="mt-4 text-white/70 text-base leading-relaxed">
            It measures carotenoid levels—powerful antioxidants that reflect
            your body&apos;s ability to fight oxidative stress—using
            patent-pending Spectral Rai™ technology backed by 20+ years of
            research.
          </p>
          <Link
            href="/backed-by-science"
            className="inline-block mt-8 px-8 py-3 border border-white text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#0a1628] transition-all duration-200 w-fit"
          >
            Learn More
          </Link>
        </div>
        <div className="relative min-h-[50vh] order-1 lg:order-2">
          <Image
            src={IMG.lifestyle1}
            alt="Person getting an antioxidant scan"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ── 3. CAROUSEL — 3-up product/lifestyle images ── */}
      <section className="grid grid-cols-3" aria-label="Product gallery">
        {[
          { src: IMG.carousel1, alt: "Prysm wellness product" },
          { src: IMG.carousel2, alt: "Prysm certified supplement" },
          { src: IMG.carousel3, alt: "Prysm Carousel 5" },
        ].map(({ src, alt }) => (
          <div key={src} className="relative aspect-square">
            <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
          </div>
        ))}
      </section>

      {/* ── 4. TECHNOLOGY — 4 feature icons/images ── */}
      <section className="py-20 bg-[#0f1b35]" aria-labelledby="tech-heading">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 id="tech-heading" className="text-3xl font-light text-white text-center mb-14 tracking-wide">
            Precision You Can Trust
          </h2>
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

      {/* ── 5. SECOND LIFESTYLE — full-width lifestyle image ── */}
      <section className="relative h-[60vh]" aria-label="Wellness lifestyle">
        <Image
          src={IMG.lifestyle2}
          alt="Healthy lifestyle with antioxidant nutrition"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a1628]/50 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-white/80 text-sm uppercase tracking-widest mb-3">Backed by science</p>
            <h2 className="text-3xl sm:text-4xl font-light text-white">
              Your health, quantified.
            </h2>
          </div>
        </div>
      </section>

      {/* ── 6. WHAT DOES MY SCORE MEAN — 3 score-level images ── */}
      <section className="py-20 bg-[#0a1628]" aria-labelledby="score-heading">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 id="score-heading" className="text-3xl font-light text-white text-center mb-12 tracking-wide">
            What Does My Score Mean?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scoreItems.map(({ img, label }) => (
              <div key={label} className="relative rounded overflow-hidden bg-[#e8e6dd]" style={{ aspectRatio: "3/4" }}>
                <Image src={img} alt={label} fill className="object-contain" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. APP HERO — full-width app image ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]" aria-labelledby="app-heading">
        <div className="relative min-h-[50vh] bg-black">
          <Image
            src={IMG.appHero}
            alt="Prysm iO app showing antioxidant score"
            fill
            className="object-contain object-left lg:object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="bg-[#0f1b35] flex flex-col justify-center px-10 py-16 lg:px-16">
          <h2 id="app-heading" className="text-3xl sm:text-4xl font-light text-white leading-tight">
            More than just a score — your personal wellness guide.
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            The Prysm iO app delivers your score instantly, tracks your progress
            over time, and gives you AI-powered personalised guidance to build
            healthier habits.
          </p>
          <Link
            href="/book-a-scan"
            className="inline-block mt-8 px-8 py-3 border border-white text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#0f1b35] transition-all duration-200 w-fit"
          >
            Book a Scan
          </Link>
        </div>
      </section>

      {/* ── 8. AI GUIDANCE ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]" aria-labelledby="ai-heading">
        <div className="bg-[#0a1628] flex flex-col justify-center px-10 py-16 lg:px-16 order-2 lg:order-1">
          <h2 id="ai-heading" className="text-3xl sm:text-4xl font-light text-white leading-tight">
            AI-Powered Personalised Guidance
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            The Prysm iO app doesn&apos;t just show you your score — it explains
            what it means and tells you exactly what to do next. Personalised
            recommendations based on your unique results.
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

      {/* ── 9. GUARANTEE ── */}
      <section className="py-20 bg-[#0f1b35] text-center border-t border-white/10" aria-labelledby="guarantee-heading">
        <div className="max-w-3xl mx-auto px-6">
          <h2 id="guarantee-heading" className="text-3xl sm:text-4xl font-light text-white tracking-wide">
            Guaranteed to Raise Your Score
            <br />or Your Money Back
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed">
            All Prysm Certified products — including Pharmanex® LifePak® — are
            guaranteed to increase your Prysm Score. If they don&apos;t work for
            you, we&apos;ll refund you. No questions asked.
          </p>
          <Link
            href="/certified-products"
            className="inline-block mt-8 px-8 py-3 border border-white text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#0f1b35] transition-all duration-200"
          >
            See Certified Products
          </Link>
        </div>
      </section>

      {/* ── 10. BOOK A SCAN FORM ── */}
      <section id="book" className="py-24 bg-white" aria-labelledby="book-heading">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 id="book-heading" className="text-3xl sm:text-4xl font-light text-[#0f1b35] tracking-wide">
                Book a Free Scan Today
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Fill in your details and we&apos;ll be in touch to arrange your
                free 15-second antioxidant scan.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Completely free — your first scan is on us",
                  "Takes 15 seconds, results are instant",
                  "Expert guidance to understand your score",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-[#C8953C] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#f9fafb] rounded-2xl border border-gray-100 p-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
