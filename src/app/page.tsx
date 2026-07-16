import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import HeroVideoButton from "@/components/HeroVideoButton";

export const metadata: Metadata = {
  title: "Antioxidant Scan | Check Your Health Score in Seconds",
  description:
    "In 15 seconds, the Prysm iO shows you if your supplements are working — no blood tests, no guessing. Book a free antioxidant scan today.",
  keywords: [
    "antioxidant scan",
    "Prysm iO",
    "antioxidant score",
    "carotenoid scanner",
    "15 second health scan",
    "supplement effectiveness test",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Antioxidant Scan | Check Your Health Score in Seconds",
    description:
      "In 15 seconds, the Prysm iO shows you if your supplements are working — no blood tests, no guessing. Book a free antioxidant scan today.",
  },
};

const BASE = "https://static.wixstatic.com/media";

const IMG = {
  hero:           "/IMG25081400427.jpg",
  lifestyle1:     `${BASE}/2cbe9c_c92926f009194ad4813908678bf53e73~mv2.jpg`,
  carousel1:      `${BASE}/2cbe9c_c661e5125a8a4eb6ae48492d989be1e9~mv2.avif`,
  carousel2:      `${BASE}/2cbe9c_178911420ef0472a91451087c7ed7ab4~mv2.avif`,
  carousel3:      `${BASE}/2cbe9c_5f23817806644ad2b5393ab51a7eba45~mv2.jpg`,
};

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
          <div className="bg-[#17242F] flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-24">
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
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Whether you want to check your own antioxidant levels or add
                measurable wellness technology to your business, start here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#book"
                  className="flex-1 text-center px-8 py-3 border border-white text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#17242F] transition-all duration-200"
                >
                  Get Your Prysm Score
                </Link>
                <Link
                  href="/partner-with-us"
                  className="flex-1 text-center px-8 py-3 bg-[#5C7A94] border border-[#5C7A94] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#7A96AC] hover:border-[#7A96AC] transition-all duration-200"
                >
                  Add This to Your Business
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STOP GUESSING — text left, lifestyle image right ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]" aria-labelledby="stop-guessing-heading">
        <div className="bg-[#101B24] flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20 order-2 lg:order-1">
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
            className="inline-block mt-8 px-8 py-3 border border-white text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#101B24] transition-all duration-200 w-fit"
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

      {/* ── 4b. FOR YOUR BUSINESS — 3-column value props ── */}
      <section className="py-20 bg-[#101B24]" aria-labelledby="business-heading">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 id="business-heading" className="text-3xl font-light text-white text-center mb-14 tracking-wide">
            For Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Client Retention",
                copy: "Clients come back when they can see real progress, not just to restock a product. A follow-up scan gives them a reason to return — and gives you a natural touchpoint every time.",
              },
              {
                title: "Recurring Revenue",
                copy: "A single scan is a moment. A quarterly rescan is a relationship. Offering measurable tracking turns a one-off sale into an ongoing service clients actually look forward to.",
              },
              {
                title: "Real Differentiation",
                copy: "Most competitors are selling supplements. Almost none can show a client hard evidence that what they're doing is actually working.",
              },
            ].map(({ title, copy }) => (
              <div key={title} className="text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#5C7A94]/15 flex items-center justify-center mb-5" aria-hidden="true">
                  <svg className="w-5 h-5 text-[#5C7A94]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-light tracking-wide mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/partner-with-us"
              className="inline-block px-8 py-3 border border-white text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#101B24] transition-all duration-200"
            >
              See Business Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8b. REAL RESULTS — consumer + business testimonial preview ── */}
      <section className="py-20 bg-[#101B24]" aria-labelledby="results-heading">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 id="results-heading" className="text-3xl font-light text-white text-center mb-14 tracking-wide">
            Real Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/70 text-sm leading-relaxed">
                &ldquo;I honestly thought I was doing all the right things…
                until I saw my score. I followed the personalised
                recommendations, and when I rescanned, my antioxidant score
                had improved dramatically.&rdquo;
              </p>
              <p className="mt-5 font-semibold text-white text-sm">Sally A Mumford</p>
              <p className="text-white/40 text-xs">Score improved dramatically on rescan</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/70 text-sm leading-relaxed">
                &ldquo;Adding scans to our consultations gave clients
                something to come back for. Instead of a one-off visit, we
                now see people regularly to track their progress.&rdquo;
              </p>
              <p className="mt-5 font-semibold text-white text-sm">Steve</p>
              <p className="text-white/40 text-xs">Clinic Owner — Higher client retention</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="inline-block px-8 py-3 border border-white text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#101B24] transition-all duration-200"
            >
              See All Results
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. GUARANTEE ── */}
      <section className="py-20 bg-[#17242F] text-center border-t border-white/10" aria-labelledby="guarantee-heading">
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
            className="inline-block mt-8 px-8 py-3 border border-white text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#17242F] transition-all duration-200"
          >
            See Certified Products
          </Link>
        </div>
      </section>

      {/* ── 10. GET YOUR PRYSM SCORE FORM ── */}
      <section id="book" className="py-24 bg-white" aria-labelledby="book-heading">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 id="book-heading" className="text-3xl sm:text-4xl font-light text-[#17242F] tracking-wide">
                Find Out How to Get Your Prysm Score
              </h2>
            </div>
            <div className="bg-[#f9fafb] rounded-2xl border border-gray-100 p-8">
              <BookingForm />
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="mt-16 max-w-3xl">
            <h3 className="text-xl font-bold text-[#17242F] mb-6">
              Frequently Asked Questions
            </h3>
            <div className="bg-[#F4F5F6] rounded-2xl p-6 border border-[#5C7A94]/10 space-y-4 text-sm">
              {[
                {
                  q: "Is the scan free?",
                  a: "Yes, your first scan is completely free with no obligation.",
                },
                {
                  q: "Does it hurt?",
                  a: "Not at all. You simply place your finger tip on the device — it's completely painless.",
                },
                {
                  q: "How accurate is it?",
                  a: "Prysm iO uses 700,000+ measurements per reading and has been validated against blood tests over 20+ years of research.",
                },
              ].map(({ q, a }) => (
                <div key={q}>
                  <p className="font-semibold text-[#1B2A3D]">{q}</p>
                  <p className="text-gray-500 mt-0.5">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is the scan free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, your first scan is completely free with no obligation.",
                },
              },
              {
                "@type": "Question",
                name: "Does it hurt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not at all. You simply place your finger tip on the device — it's completely painless.",
                },
              },
              {
                "@type": "Question",
                name: "How accurate is it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Prysm iO uses 700,000+ measurements per reading and has been validated against blood tests over 20+ years of research.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
