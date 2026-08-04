"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const trustItems = [
  "Non-invasive",
  "Takes only minutes",
  "Personalised wellness insights",
];

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Gradient — bottom fade */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-24">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="text-[#C8953C] text-xs font-semibold uppercase tracking-[0.25em] mb-5">
            Prysm iO · Antioxidant Wellness Scan
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight">
            Discover What Your Body{" "}
            <span className="italic">Is Trying to Tell You</span>
          </h1>

          {/* Supporting text */}
          <p className="mt-6 text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
            Your wellness score provides personalised insights into how your
            body is functioning, helping you identify areas that may benefit
            from attention before symptoms appear.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start">
            <Link
              href="#book"
              className="w-full sm:w-auto text-center px-8 py-4 bg-[#C8953C] hover:bg-[#b8842c] text-white text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-black/30 hover:shadow-[#C8953C]/30"
            >
              Get My Wellness Score
            </Link>
            <Link
              href="/how-it-works"
              className="w-full sm:w-auto text-center px-8 py-4 border border-white/60 hover:border-white hover:bg-white/10 text-white text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            >
              How It Works
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
            {trustItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-white/65 text-xs tracking-wide"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#C8953C] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
