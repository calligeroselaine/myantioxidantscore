import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certified Products",
  description:
    "Explore Prysm Certified supplements — clinically proven to raise your Prysm antioxidant score. Includes Pharmanex® LifePak® and more.",
  keywords: [
    "Prysm Certified supplements",
    "Pharmanex LifePak",
    "antioxidant supplements Australia",
    "Beauty Focus Collagen",
    "ageLOC Y-Span",
  ],
  alternates: { canonical: "/certified-products" },
  openGraph: {
    url: "/certified-products",
    title: "Certified Products",
    description:
      "Explore Prysm Certified supplements — clinically proven to raise your Prysm antioxidant score.",
  },
};

const products = [
  {
    name: "Prysm iO",
    badge: "2025 BIG Awards Winner",
    image: "/2025-BIG%20Awards-Prysm%20iO.jpg",
    description:
      "The award-winning device behind your score. This palm-sized scanner delivers a personalised nutritional assessment in just 15 seconds, giving you real-time insight into your antioxidant defences.",
    benefits: [
      "Winner, 2025 BIG Innovation Awards",
      "Real-time antioxidant health insights",
      "Personalised wellness tracking over time",
      "Non-invasive, painless, 15-second scan",
    ],
    guarantee: false,
  },
  {
    name: "Pharmanex® LifePak®",
    badge: "Bestseller",
    image: "/IMG2507300837.jpg.avif",
    description:
      "A complete dietary supplement system delivering vitamins, minerals, phytonutrients, and antioxidants in clinically significant amounts — the foundation of the Prysm Certified range.",
    benefits: [
      "Comprehensive daily nutritional support",
      "Clinically significant antioxidant dosing",
      "Bioavailability-optimised formulation",
      "20+ years of clinical research",
    ],
    guarantee: true,
  },
  {
    name: "Beauty Focus® Collagen+",
    badge: "Popular",
    image: "/16002208-beautyfocus-collagen.avif",
    description:
      "A collagen drink featuring Bioactive Collagen Peptides, Lutein, and Phytoceramides — clinically proven to improve skin texture, radiance, and overall appearance from within.",
    benefits: [
      "Clinically proven skin texture improvement",
      "Bioactive Collagen Peptides formula",
      "Supports skin radiance and hydration",
      "Complements antioxidant supplementation",
    ],
    guarantee: true,
  },
  {
    name: "Pharmanex® Eye Formula",
    badge: "Eye Health",
    image: "/Prysm-Device-Page-Eye-Formula.avif",
    description:
      "A targeted nutrient blend featuring lutein and zeaxanthin, formulated to support long-term eye health and protect against everyday visual strain.",
    benefits: [
      "Macular protection support",
      "Healthy lens antioxidant defence",
      "Reduced glare sensitivity",
      "Lutein & zeaxanthin rich formula",
    ],
    guarantee: true,
  },
  {
    name: "ageLOC® Y-Span",
    badge: "Advanced",
    image: "/Prysm-iO-SCS-Posts-ageLOC-Youth-Rectangle-Product.jpg",
    description:
      "An advanced anti-ageing supplement designed to promote active, energetic ageing by supporting optimal gene expression and your body's natural healthy-ageing defences.",
    benefits: [
      "Supports optimal gene expression",
      "Healthy ageing defence mechanisms",
      "Promotes active, energetic ageing",
      "Complements antioxidant supplementation",
    ],
    guarantee: true,
  },
  {
    name: "Pharmanex® G3",
    badge: "Immune Support",
    image: "/Prysm-Device-Page-G3.avif",
    description:
      "A formula built around gâc fruit and its unique lipocarotenes, combined with three super fruits — Chinese lycium, Siberian pineapple, and cili fruit — for exceptional antioxidant density.",
    benefits: [
      "Fortifies antioxidant defences",
      "Supports healthy immune function",
      "Protects against free radical damage",
      "Four rare, antioxidant-rich super fruits",
    ],
    guarantee: true,
  },
];

export default function CertifiedProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A3D] pt-28 pb-20" aria-labelledby="products-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-3">
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
      <div className="bg-[#5C7A94] py-4">
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
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-[#5C7A94]/20 transition-all duration-300"
              >
                {/* Product image */}
                <div className="relative h-80 w-full bg-gray-50">
                  <Image src={image} alt={name} fill className="object-contain p-6" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1B2A3D]">{name}</h3>
                  <span className="px-3 py-1 bg-[#5C7A94]/15 text-[#5C7A94] text-xs font-bold rounded-full">
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
                  <p className="text-xs text-[#5C7A94] font-semibold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                    </svg>
                    Money-back guarantee
                  </p>
                )}
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <Link
                    href="/#book"
                    className="text-sm font-semibold text-[#5C7A94] hover:text-[#45607A] flex items-center gap-1 transition-colors"
                  >
                    Find out if this is right for you
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
      <section className="py-20 bg-[#1B2A3D] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            Not sure which product is right for you?
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Find out your Prysm Score first — it tells us exactly which
            certified products will make the biggest difference for you.
          </p>
          <Link
            href="/#book"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#5C7A94] hover:bg-[#7A96AC] text-white font-bold rounded-full transition-all duration-200 text-sm"
          >
            Get My Score First
          </Link>
        </div>
      </section>
    </>
  );
}
