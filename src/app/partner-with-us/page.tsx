import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "For Professionals",
  description:
    "Add measurable wellness technology to your practice. PRYSM iO gives your clients an objective way to track their nutrition and lifestyle progress — and adds a new revenue stream to your existing business.",
  keywords: [
    "wellness technology for clinics",
    "client wellness tracking",
    "carotenoid scanning for practices",
    "add revenue stream wellness business",
    "PRYSM iO for professionals",
  ],
  alternates: { canonical: "/partner-with-us" },
  openGraph: {
    url: "/partner-with-us",
    title: "For Professionals",
    description:
      "Add measurable wellness technology to your practice — and a new revenue stream to your existing business.",
  },
};

const techFeatures = [
  {
    title: "~15-Second Scan",
    copy: "A quick, guided scan that fits naturally into an existing appointment.",
  },
  {
    title: "Non-Invasive",
    copy: "No blood draw, no needles — clients simply rest a fingertip on the device.",
  },
  {
    title: "Objective Measurement",
    copy: "Captures skin carotenoid levels, a recognised marker of antioxidant status.",
  },
  {
    title: "Track Changes Over Time",
    copy: "Rescans let clients see how their choices show up in their score.",
  },
  {
    title: "A Differentiated Experience",
    copy: "Give clients something most competitors can't offer — a number, not just an opinion.",
  },
];

const whoItFits = [
  {
    title: "Aesthetics & Skin",
    copy: "Add measurable wellness insights to the client experience.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    ),
  },
  {
    title: "Health & Wellness Practices",
    copy: "Introduce objective wellness tracking alongside existing services.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21c-4.97-4.973-8.25-8.253-8.25-11.5A5.25 5.25 0 019 4.25a5.23 5.23 0 013 1.03 5.23 5.23 0 013-1.03 5.25 5.25 0 015.25 5.25c0 3.247-3.28 6.527-8.25 11.5z"
      />
    ),
  },
  {
    title: "Nutrition",
    copy: "Give clients a measurable way to track changes over time.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c-4 3-7 7-7 11a7 7 0 0014 0c0-4-3-8-7-11z M8.5 13.5c1.8-.8 3.6-2.6 4.5-5.5"
      />
    ),
  },
  {
    title: "Fitness & Performance",
    copy: "Turn lifestyle progress into something clients can see.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    ),
  },
];

const flowSteps = [
  { label: "Scan", sub: "15 seconds" },
  { label: "Engage", sub: "Objective score" },
  { label: "Track", sub: "Track progress" },
  { label: "Rescan", sub: "Build ongoing engagement" },
];

const practiceSteps = [
  {
    title: "Baseline Scan",
    copy: "Give the client their initial PRYSM score.",
  },
  {
    title: "Wellness Conversation",
    copy: "Use the measurement to support a conversation around nutrition and lifestyle.",
  },
  {
    title: "Client Action",
    copy: "The client follows their agreed wellness approach.",
  },
  {
    title: "Rescan",
    copy: "Bring the client back to track changes in their score over time.",
  },
  {
    title: "Ongoing Engagement",
    copy: "Integrate repeat scanning into an existing wellness program, membership or client journey.",
  },
];

const integrationSupport = [
  "Setup and onboarding handled for you",
  "Full training provided at no charge",
  "Co-branded marketing materials",
  "Ongoing support from an experienced team",
  "Access to the clinically-validated formulations the technology is built around",
  "Recurring revenue potential — turn scans into an ongoing client service with repeat scanning and membership-style tracking",
  "Custom revenue modelling based on your expected client activity",
];

export default function PartnerWithUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-28 pb-20" aria-labelledby="partner-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-3">
            For Wellness Professionals
          </p>
          <h1 id="partner-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Add Measurable Wellness Technology to Your Business
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            PRYSM iO is a fast, non-invasive scanning technology you can bring into
            your existing clinic, studio or practice — giving clients an objective
            way to see their nutrition and lifestyle progress, and giving your
            business a new way to stand out.
          </p>

          <div className="mt-10 max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
            <style>{`wistia-player[media-id='zrw2qb4qsn']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zrw2qb4qsn/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}</style>
            <wistia-player media-id="zrw2qb4qsn" aspect="0.5625"></wistia-player>
          </div>

          <Link
            href="#partner-form"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#5C7A94] hover:bg-[#7A96AC] text-white font-bold rounded-full transition-all duration-200 text-sm"
          >
            Explore PRYSM for My Business
          </Link>
        </div>
      </section>

      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script src="https://fast.wistia.com/embed/zrw2qb4qsn.js" strategy="lazyOnload" type="module" />

      {/* Problem / Opportunity */}
      <section className="bg-white" aria-labelledby="gap-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[400px] lg:min-h-[560px] bg-black order-2 lg:order-1">
            <Image
              src="/IMG25081400427.jpg"
              alt="PRYSM iO wellness scanning device"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="bg-[#F9FAFB] flex flex-col justify-center px-10 py-16 lg:px-16 order-1 lg:order-2">
            <h2 id="gap-heading" className="text-3xl sm:text-4xl font-bold text-[#1B2A3D] leading-tight">
              Clients Invest in Their Wellness. Most Can&apos;t See If It&apos;s Working.
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              Every year, people spend hundreds of billions of dollars on
              supplements, nutrition programs and wellness services — often with
              little more than how they feel to go on. For the professionals
              guiding them, that&apos;s a missed opportunity: without an objective
              measurement, it&apos;s hard to show a client that what you&apos;re
              doing together is actually making a difference.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              PRYSM iO adds that missing layer. In around 15 seconds, it gives
              your clients an objective, science-based snapshot of their skin
              carotenoid levels — a measurable signal you can build into the
              client experience you already offer.
            </p>
          </div>
        </div>
      </section>

      {/* Technology value */}
      <section className="py-20 bg-black" aria-labelledby="tech-value-heading">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 id="tech-value-heading" className="text-3xl font-bold text-white">
              A New Measurement Experience for Your Business
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              PRYSM iO is simple to use and easy to explain to clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techFeatures.map(({ title, copy }) => (
              <div key={title} className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#5C7A94] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-white font-semibold text-sm">{title}</h3>
                  <p className="mt-1 text-white/60 text-sm leading-relaxed">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it fits */}
      <section className="py-20 bg-[#F9FAFB]" aria-labelledby="who-fits-heading">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 id="who-fits-heading" className="text-3xl font-bold text-[#1B2A3D] text-center mb-14">
            Designed for Modern Wellness Businesses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoItFits.map(({ title, copy, icon }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#5C7A94]/10 flex items-center justify-center mx-auto mb-5" aria-hidden="true">
                  <svg className="w-6 h-6 text-[#5C7A94]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    {icon}
                  </svg>
                </div>
                <h3 className="text-[#1B2A3D] font-bold text-sm uppercase tracking-wide mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple visual flow */}
      <section className="py-20 bg-black" aria-labelledby="flow-heading">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 id="flow-heading" className="sr-only">The PRYSM client journey</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 items-start text-center">
            {flowSteps.map(({ label, sub }, i) => (
              <div key={label} className="relative">
                {i > 0 && (
                  <svg className="hidden sm:block absolute -left-6 top-6 w-6 h-6 text-[#5C7A94]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                )}
                <div className="w-12 h-12 rounded-full bg-[#5C7A94] text-white font-bold flex items-center justify-center mx-auto mb-4 text-sm">
                  {i + 1}
                </div>
                <h3 className="text-white font-bold text-lg tracking-wide uppercase">{label}</h3>
                <p className="mt-1 text-white/50 text-xs uppercase tracking-widest">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works in a practice */}
      <section className="py-20 bg-[#F9FAFB]" aria-labelledby="practice-heading">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 id="practice-heading" className="text-3xl font-bold text-[#1B2A3D] text-center mb-14">
            How PRYSM Could Fit Into Your Practice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {practiceSteps.map(({ title, copy }, i) => (
              <div key={title}>
                <div className="w-9 h-9 rounded-full border-2 border-[#5C7A94] text-[#5C7A94] font-bold flex items-center justify-center mb-4 text-sm">
                  {i + 1}
                </div>
                <h3 className="text-[#1B2A3D] font-bold text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration support */}
      <section className="py-20 bg-black" aria-labelledby="support-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="support-heading" className="text-3xl font-bold text-white text-center">
            Everything You Need to Integrate PRYSM
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed text-center">
            We help you bring PRYSM iO into your practice smoothly, with support
            at every stage.
          </p>
          <ul className="mt-10 space-y-3 max-w-xl mx-auto">
            {integrationSupport.map((b) => (
              <li key={b} className="flex items-center gap-3 text-white/80 text-sm">
                <svg className="w-5 h-5 text-[#5C7A94] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Commercial model */}
      <section className="py-20 bg-[#F9FAFB]" aria-labelledby="commercial-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="commercial-heading" className="text-3xl font-bold text-[#1B2A3D]">
            A New Revenue Stream Within Your Existing Business
          </h2>
          <p className="mt-6 text-gray-500 leading-relaxed">
            PRYSM iO isn&apos;t a separate business to build — it&apos;s a way to
            add measurable value, and revenue, to the practice you already have.
            Many businesses build this in through repeat scanning at existing
            appointments, ongoing client programs that pair scans with a wellness
            plan, or membership-style tracking offered as part of an existing
            service tier.
          </p>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Because every business is different, we can provide custom revenue
            modelling based on your expected client activity, so you can see
            what this could realistically look like for your practice.
          </p>
          <p className="mt-6 text-gray-400 text-xs leading-relaxed">
            Revenue outcomes will vary by business and are not guaranteed.
          </p>
        </div>
      </section>

      {/* Market opportunity */}
      <section className="py-20 bg-black" aria-labelledby="market-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-[#5C7A94] text-4xl font-black mb-2">Hundreds of Billions</div>
          <p className="text-white/60 text-sm">
            spent on supplements and wellness globally every year
          </p>
          <div className="my-6 h-px bg-white/10 max-w-xs mx-auto" aria-hidden="true" />
          <h2 id="market-heading" className="sr-only">A fast-growing wellness market</h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-xl mx-auto">
            As more consumers invest in their health, the businesses that can
            show real, measurable progress will stand out. PRYSM iO helps your
            clients see whether their nutrition and lifestyle choices are
            showing up in a measurable way — turning a growing market into a
            more loyal, engaged client base.
          </p>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="partner-form" className="py-24 bg-[#F9FAFB] scroll-mt-20" aria-labelledby="partner-form-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 id="partner-form-heading" className="text-3xl font-bold text-[#1B2A3D]">
              See What PRYSM Could Look Like in Your Business
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Tell us a little about your practice and we&apos;ll show you how
              PRYSM could be integrated into your existing client experience —
              including potential scanning models and revenue scenarios.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <BookingForm source="partner" />
          </div>
        </div>
      </section>
    </>
  );
}
