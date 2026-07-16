import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How the Prysm iO antioxidant scan works.",
};

export default function HowItWorksPage() {
  return (
    <section className="bg-[#0D1B3E] pt-28 pb-24 min-h-[60vh] flex items-center" aria-labelledby="how-it-works-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#C8953C] font-semibold text-sm uppercase tracking-widest mb-3">
          How It Works
        </p>
        <h1 id="how-it-works-heading" className="text-4xl sm:text-5xl font-bold text-white">
          How It Works
        </h1>
        <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
          This page is coming soon.
        </p>
      </div>
    </section>
  );
}
