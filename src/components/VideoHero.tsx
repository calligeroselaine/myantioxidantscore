"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const trustItems = [
  "Non-invasive",
  "Takes only minutes",
  "Personalised wellness insights",
];

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [wistiaOpen, setWistiaOpen] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script src="https://fast.wistia.com/embed/zrhidtrzry.js" strategy="lazyOnload" type="module" />
      <style>{`wistia-player[media-id='zrhidtrzry']:not(:defined){background:center/contain no-repeat url('https://fast.wistia.com/embed/medias/zrhidtrzry/swatch');display:block;filter:blur(5px);padding-top:177.78%}`}</style>

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

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
              15 Seconds Can Change Your Life
            </h1>

            {/* Body copy */}
            <div className="mt-8 space-y-5 text-white/75 text-base leading-relaxed max-w-xl">
              <p>
                The global nutrition and supplement industry is approaching{" "}
                <strong className="text-white">half a trillion dollars</strong>{" "}
                a year. Yet one question remains&hellip;
              </p>
              <p className="text-white text-xl font-light italic">
                &ldquo;Are they working?&rdquo;
              </p>
              <p>
                Prysm iO gives you a fast, science-based snapshot of your
                antioxidant status—helping you move beyond guesswork and make
                more informed wellness decisions in just 15 seconds.
              </p>
            </div>

            {/* CTAs */}
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

              {/* Watch the Video */}
              <button
                type="button"
                onClick={() => setWistiaOpen(true)}
                aria-label="Watch the video"
                className="mt-6 flex items-center gap-3 group"
              >
                <span className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-all duration-200">
                  <svg className="w-5 h-5 text-white translate-x-px" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="text-white/80 group-hover:text-white text-sm font-semibold tracking-wide transition-colors duration-200">
                  Watch the Video
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Wistia lightbox */}
      {wistiaOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
          onClick={() => setWistiaOpen(false)}
        >
          <div
            className="w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <wistia-player media-id="zrhidtrzry" aspect="0.5625" />
          </div>
          <button
            type="button"
            onClick={() => setWistiaOpen(false)}
            aria-label="Close video"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
