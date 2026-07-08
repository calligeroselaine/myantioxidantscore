import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://static.wixstatic.com/media";

export const metadata: Metadata = {
  title: "Certified Products",
  description:
    "Explore Prysm Certified supplements — clinically proven to raise your Prysm antioxidant score. Includes Pharmanex® LifePak® and more.",
};

const products = [
  {
    name: "Pharmanex® LifePak®",
    badge: "Bestseller",
    image: `${BASE}/2cbe9c_c661e5125a8a4eb6ae48492d989be1e9~mv2.avif`,
    description:
      "The gold standard in comprehensive nutritional supplementation. LifePak® is a multi-nutrient system clinically shown to raise Prysm Scores. Backed by 20+ years of research.",
    benefits: [
      "Comprehensive antioxidant protection",
      "Clinically proven to raise Prysm Score",
      "Essential vitamins, minerals & omega-3s",
      "Bioavailability-optimised formulation",
    ],
    guarantee: true,
  },
  {
    name: "g3® Juice",
    badge: "Popular",
    image: `${BASE}/2cbe9c_178911420ef0472a91451087c7ed7ab4~mv2.avif`,
    description:
      "A unique blend of four powerful adaptogenic fruits — gac, goji, cili, and sea buckthorn — delivering exceptional antioxidant density in every serving.",
    benefits: [
      "4 of the world's most antioxidant-rich fruits",
      "Supports immune function",
      "Anti-inflammatory benefits",
      "No artificial colours or flavours",
    ],
    guarantee: true,
  },
  {
    name: "ageLOC® Meta",
    badge: "Advanced",
    image: `${BASE}/2cbe9c_5f23817806644ad2b5393ab51a7eba45~mv2.jpg`,
    description:
      "Targets metabolic ageing at the cellular level. ageLOC® Meta supports healthy metabolism and energy production, complementing your antioxidant score improvement programme.",
    benefits: [
      "Cellular-level metabolic support",
      "Targets sirtuin gene expression",
      "Supports healthy body composition",
      "Complements antioxidant supplementation",
    ],
    guarantee: true,
  },
  {
    name: "Vitality® Bundle",
    badge: "New",
    image: `${BASE}/2cbe9c_6c63b07746c641d3b0a62e680ade79fa~mv2.jpg`,
    description:
      "A curated bundle combining LifePak®, g3® Juice, and targeted antioxidant boosters — designed for rapid, measurable Prysm Score improvement.",
    benefits: [
      "Optimised for maximum score improvement",
      "30-day supply included",
      "Guided improvement programme",
      "Score tracking support",
    ],
    guarantee: true,
  },
];

export default function CertifiedProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-28 pb-20" aria-labelledby="products-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C8953C] font-semibold text-sm uppercase tracking-widest mb-3">
            Guaranteed Results
          </p>
          <h1 id="products-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Prysm Certified Products
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            Every product in our certified range is clinically proven to raise
            your Prysm Score. We don&apos;t just recommend them — we guarantee
            them.
          </p>
        </div>
      </section>

      {/* Guarantee banner */}
      <div className="bg-[#C8953C] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-3 text-white text-sm font-semibold">
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          All Prysm Certified products are guaranteed to raise your score — or your money back.
        </div>
      </div>

      {/* Products */}
      <section className="py-24 bg-[#F9FAFB]" aria-labelledby="products-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="products-grid-heading" className="sr-only">Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map(({ name, badge, description, benefits, guarantee, image }) => (
              <article
                key={name}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-[#C8953C]/20 transition-all duration-300"
              >
                {/* Product image */}
                <div className="relative h-56 w-full bg-gray-50">
                  <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#0D1B3E]">{name}</h3>
                  <span className="px-3 py-1 bg-[#C8953C]/15 text-[#C8953C] text-xs font-bold rounded-full">
                    {badge}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2 mb-6">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#2D7A4F] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                {guarantee && (
                  <p className="text-xs text-[#C8953C] font-semibold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                    </svg>
                    Money-back guarantee
                  </p>
                )}
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <Link
                    href="/book-a-scan"
                    className="text-sm font-semibold text-[#C8953C] hover:text-[#a67820] flex items-center gap-1 transition-colors"
                  >
                    Book a scan to see if this is right for you
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B3E] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            Not sure which product is right for you?
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Book a free scan first. Your Prysm Score tells us exactly which
            certified products will make the biggest difference for you.
          </p>
          <Link
            href="/book-a-scan"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#C8953C] hover:bg-[#e8b05a] text-white font-bold rounded-full transition-all duration-200 text-sm"
          >
            Get My Score First
          </Link>
        </div>
      </section>
    </>
  );
}
