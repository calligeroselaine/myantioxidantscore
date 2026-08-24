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

const guidanceAreas = [
  {
    title: "Nutrition",
    copy: "Personalised nutritional guidance.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c-4 3-7 7-7 11a7 7 0 0014 0c0-4-3-8-7-11z M8.5 13.5c1.8-.8 3.6-2.6 4.5-5.5"
      />
    ),
  },
  {
    title: "Lifestyle",
    copy: "Insights relevant to everyday habits.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12h4l2 5 4-14 2 9h6"
      />
    ),
  },
  {
    title: "Fitness",
    copy: "Personalised fitness guidance.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    ),
  },
  {
    title: "Supplementation",
    copy: "Relevant supplementation recommendations.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5.106 14.4a2.25 2.25 0 001.591 3.84h10.606a2.25 2.25 0 001.591-3.84l-3.985-3.99a2.25 2.25 0 01-.659-1.591V3.104M9.75 3.104h4.5M9.75 3.104h-1.5m6 0h1.5"
      />
    ),
  },
];

const practiceSteps = [
  {
    title: "Baseline Scan",
    copy: "Give the client their initial PRYSM Score.",
  },
  {
    title: "Personalised Guidance & Conversation",
    copy: "Use the score together with the PRYSM app's personalised guidance to structure the conversation around nutrition, lifestyle, fitness and supplementation.",
  },
  {
    title: "Client Action",
    copy: "The client has a personalised pathway to follow based on their score, lifestyle information and agreed wellness approach.",
  },
  {
    title: "Rescan",
    copy: "Bring the client back to track changes in their score over time.",
  },
  {
    title: "Ongoing Engagement",
    copy: "Use repeat measurement to support an ongoing client wellness journey.",
  },
];

const integrationSupport = [
  "Setup and onboarding handled for you",
  "Full training provided at no charge",
  "Co-branded marketing materials",
  "Ongoing support from an experienced team",
  "AI-Guided Client Experience — the PRYSM app helps structure personalised guidance after the scan, reducing the need to build the consultation from scratch",
  "Supporting Nutrition Solutions — access to complementary nutrition solutions that can form part of an ongoing client wellness program",
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
              Clients Invest in Their Wellness. Give Them Something Measurable.
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              Every year, people spend hundreds of billions of dollars on
              supplements, nutrition programs and wellness services — often with
              little more than how they feel to go on. Without an objective
              measurement, it can be difficult for clients to see whether their
              nutrition and lifestyle choices are translating into measurable
              change.
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

      {/* The intelligence behind the score */}
      <section className="py-20 bg-black" aria-labelledby="ai-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-3">
            The Intelligence Behind the Score
          </p>
          <h2 id="ai-heading" className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            The Scan Takes Seconds. The Technology Helps With What Comes Next.
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed">
            PRYSM doesn&apos;t simply produce a number and leave you to work
            out what to do with it.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            The dedicated PRYSM app combines the client&apos;s score and
            lifestyle information with AI-powered technology supported by
            insights from more than 20 million historical antioxidant scans
            to provide personalised guidance across nutrition, lifestyle,
            fitness and supplementation.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            For the professional, that means less guesswork and a more
            structured, personalised client conversation.
          </p>
        </div>
      </section>

      {/* Four guidance areas */}
      <section className="py-20 bg-[#F9FAFB]" aria-labelledby="guidance-areas-heading">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 id="guidance-areas-heading" className="sr-only">Personalised guidance areas</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {guidanceAreas.map(({ title, copy, icon }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#5C7A94]/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-5 h-5 text-[#5C7A94]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    {icon}
                  </svg>
                </div>
                <h3 className="text-[#1B2A3D] font-bold text-xs uppercase tracking-wide mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center max-w-xl mx-auto">
            <p className="text-2xl font-bold text-[#1B2A3D]">
              You Don&apos;t Need to Invent the Consultation.
            </p>
            <p className="mt-3 text-gray-500 leading-relaxed">
              PRYSM helps turn the measurement into a structured conversation
              about what comes next.
            </p>
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
          <div className="text-[#5C7A94] text-4xl font-black mb-2">USD $435 Billion</div>
          <p className="text-white/60 text-sm">
            projected global dietary supplements market by 2034
          </p>
          <p className="mt-2 text-white/30 text-xs">
            Source:{" "}
            <a
              href="https://www.zionmarketresearch.com/news/dietary-supplements-market"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/50"
            >
              Zion Market Research, 2025
            </a>
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
