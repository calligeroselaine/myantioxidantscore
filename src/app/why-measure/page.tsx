import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Measure?",
  description:
    "Wellness businesses sell products and services promising results — but almost none measure whether they actually work. Here's why that gap matters, and how PRYSM closes it.",
  keywords: [
    "why measure wellness results",
    "supplement effectiveness proof",
    "wellness business trust gap",
    "measurable client outcomes",
  ],
  alternates: { canonical: "/why-measure" },
  openGraph: {
    url: "/why-measure",
    title: "Why Measure?",
    description:
      "Wellness businesses sell products and services promising results — but almost none measure whether they actually work.",
  },
};

export default function WhyMeasurePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A3D] pt-28 pb-20" aria-labelledby="why-measure-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-3">
            The Measurement Gap
          </p>
          <h1 id="why-measure-heading" className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            You Sell Results. Almost No One Proves Them.
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            Every year, people spend <strong className="text-white">$200 billion</strong> on
            supplements and wellness services — and walk away with no real way of knowing
            if any of it worked.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="py-24 bg-white" aria-labelledby="problem-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="problem-heading" className="text-3xl font-bold text-[#1B2A3D] mb-6">
            Feeling Fine Isn&apos;t Proof
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most wellness businesses are built on trust, not evidence. A client buys a
            supplement or books a service, they feel reasonably good, and everyone assumes
            it&apos;s working. But &ldquo;feeling fine&rdquo; and &ldquo;actually improving&rdquo;
            are not the same thing — and the gap between them is where trust quietly erodes.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            One person who chose to measure her antioxidant levels put it best. She
            wasn&apos;t skipping her supplements or ignoring her health — quite the
            opposite.
          </p>

          <blockquote className="bg-[#F9FAFB] rounded-2xl border border-gray-100 p-8">
            <svg className="w-8 h-8 text-[#5C7A94]/30 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6.5c0-1.9 1.6-3.5 3.5-3.5V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-3.5c0-1.9 1.6-3.5 3.5-3.5V8z" />
            </svg>
            <p className="text-gray-700 leading-relaxed italic">
              &ldquo;I honestly thought I was doing all the right things… until I saw my
              score. When I had my antioxidant levels measured with the Prysm iO, I was
              genuinely surprised. My score was much lower than I expected.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-[#1B2A3D]">— Sally A. Mumford</p>
          </blockquote>

          <p className="mt-10 text-gray-600 leading-relaxed">
            Sally wasn&apos;t doing anything wrong. She simply had no way of knowing whether
            her habits were actually translating into results — until she had a number in
            front of her. Multiply her experience across every client, in every clinic,
            gym, and wellness practice, and the scale of the problem becomes clear: an
            entire industry making promises it has no way of proving.
          </p>
        </div>
      </section>

      {/* The gap = the opportunity */}
      <section className="py-20 bg-[#F9FAFB]" aria-labelledby="gap-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 id="gap-heading" className="text-lg font-bold text-[#1B2A3D] mb-3">
                A Trust Problem
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Without a measurable result, clients are left taking your word for it. That
                works for a while — until they start to wonder, quietly, whether they&apos;re
                actually getting anywhere. Unproven results are the single biggest reason
                clients drift away.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-[#1B2A3D] mb-3">
                A Business Opportunity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The businesses that close this gap first stand out immediately. Objective
                proof of progress turns a one-off purchase into an ongoing relationship —
                and gives you something almost no competitor can offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRYSM as the measurement layer */}
      <section className="py-24 bg-[#1B2A3D]" aria-labelledby="prysm-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-3">
            The Missing Layer
          </p>
          <h2 id="prysm-heading" className="text-3xl sm:text-4xl font-bold text-white">
            PRYSM Is How You Close the Gap
          </h2>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            In 15 seconds, PRYSM turns &ldquo;I think it&apos;s working&rdquo; into an
            objective, data-backed number. It doesn&apos;t replace what you already sell or
            do — it measures it, giving your clients (and you) real proof that what
            you&apos;re doing together is actually working.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
            {[
              {
                title: "Measure",
                copy: "Establish an objective baseline for every client in 15 seconds.",
              },
              {
                title: "Track",
                copy: "Rescan over time to show real, measurable progress.",
              },
              {
                title: "Prove",
                copy: "Turn results into evidence clients can see for themselves.",
              },
            ].map(({ title, copy }) => (
              <div key={title}>
                <h3 className="text-[#5C7A94] font-bold text-sm uppercase tracking-widest mb-2">
                  {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1B2A3D]">
            Close the measurement gap in your business
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            See how PRYSM fits into what you already offer — and what it could add.
          </p>
          <Link
            href="/partner-with-us"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#5C7A94] hover:bg-[#7A96AC] text-white font-bold rounded-full transition-all duration-200 text-sm"
          >
            See Business Opportunities
          </Link>
        </div>
      </section>
    </>
  );
}
