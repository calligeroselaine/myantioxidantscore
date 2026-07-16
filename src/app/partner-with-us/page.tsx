import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Business Opportunities",
  description:
    "Bring the Prysm iO antioxidant scanning experience to your business. Partner with My Antioxidant Score and offer your clients cutting-edge wellness technology.",
  keywords: [
    "wellness business opportunity",
    "antioxidant scanning partnership",
    "clinic scanning technology",
    "gym wellness add-on service",
    "recurring wellness revenue",
  ],
  alternates: { canonical: "/partner-with-us" },
  openGraph: {
    url: "/partner-with-us",
    title: "Business Opportunities",
    description:
      "Bring the Prysm iO antioxidant scanning experience to your business — a new, recurring revenue stream for wellness businesses.",
  },
};

const benefits = [
  "An accessible technology investment, with setup and onboarding handled for you",
  "Full training provided at no charge",
  "Co-branded marketing materials",
  "Ongoing support from an experienced team",
  "Access to the clinically-validated formulations the technology is built around",
  "Recurring revenue potential — turn scans into an ongoing client service with quarterly rescans and membership-style tracking",
  "Custom revenue projections based on your expected scan volume and referral conversion rates",
];

export default function PartnerWithUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0C2A2C] pt-28 pb-20" aria-labelledby="partner-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#0F8A7D] font-semibold text-sm uppercase tracking-widest mb-3">
            Business Partnerships
          </p>
          <h1 id="partner-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Business Opportunities
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            Every year, people spend $200 billion on supplements and wellness
            services with no way to know if any of it is working. PRYSM
            changes that. In 15 seconds, our scanning technology gives your
            clients an objective, data-backed measurement of their wellness
            progress — turning guesswork into proof, one-off visits into
            ongoing relationships, and your existing business into one with a
            new, recurring revenue stream.
          </p>

          <div className="mt-10 max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
            <style>{`wistia-player[media-id='zrw2qb4qsn']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zrw2qb4qsn/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}</style>
            <wistia-player media-id="zrw2qb4qsn" aspect="0.5625"></wistia-player>
          </div>

          <Link
            href="#partner-form"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#0F8A7D] hover:bg-[#34B3A3] text-white font-bold rounded-full transition-all duration-200 text-sm"
          >
            Enquire Now
          </Link>
        </div>
      </section>

      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script src="https://fast.wistia.com/embed/zrw2qb4qsn.js" strategy="lazyOnload" type="module" />

      {/* Imagine banner */}
      <section className="bg-white" aria-labelledby="imagine-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[400px] lg:min-h-[560px] bg-[#3a4048]">
            <Image
              src="/output.auto.jpg"
              alt="Imagine leading the charge in beauty and wellness innovation"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="bg-[#F9FAFB] flex flex-col justify-center px-10 py-16 lg:px-16">
            <h2 id="imagine-heading" className="text-3xl sm:text-4xl font-bold text-[#0C2A2C] leading-tight">
              A groundbreaking platform for your business
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              Position your business at the forefront of beauty and wellness
              innovation. The Prysm iO gives you a genuinely differentiated
              offering — one backed by science, not trends.
            </p>
            <Link
              href="#partner-form"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#0F8A7D] hover:bg-[#34B3A3] text-white font-bold rounded-full transition-all duration-200 text-sm w-fit"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0C2A2C]" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="benefits-heading" className="text-3xl font-bold text-white">
                Partner Benefits
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                We set you up for success with everything you need to deliver
                exceptional scanning experiences from day one.
              </p>
              <ul className="mt-8 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/80 text-sm">
                    <svg className="w-5 h-5 text-[#0F8A7D] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white/40 text-xs leading-relaxed">
                Revenue projections are illustrative only and based on
                user-provided assumptions. Actual results may vary.
              </p>
            </div>
            <div className="bg-[#123638] rounded-3xl p-8 text-center">
              <div className="text-[#0F8A7D] text-5xl font-black mb-2">$200B</div>
              <p className="text-white/60 text-sm">
                spent on supplements globally every year
              </p>
              <div className="my-6 h-px bg-white/10" aria-hidden="true" />
              <p className="text-white/80 text-sm leading-relaxed">
                Help your clients know their supplements are actually working.
                With Prysm iO, you offer more than a service — you offer proof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="partner-form" className="py-24 bg-[#F9FAFB]" aria-labelledby="partner-form-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 id="partner-form-heading" className="text-3xl font-bold text-[#0C2A2C]">
              Get in Touch
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <BookingForm source="partner" />
          </div>
        </div>
      </section>
    </>
  );
}
