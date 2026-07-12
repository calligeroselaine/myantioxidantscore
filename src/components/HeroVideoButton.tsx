"use client";

import { useState } from "react";
import Script from "next/script";

export default function HeroVideoButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script src="https://fast.wistia.com/embed/zrhidtrzry.js" strategy="lazyOnload" type="module" />
      <style>{`wistia-player[media-id='zrhidtrzry']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zrhidtrzry/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}</style>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Play video"
        className="absolute bottom-6 left-6 z-10 w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
      >
        <svg className="w-5 h-5 text-[#0f1b35] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <wistia-player media-id="zrhidtrzry" aspect="0.5625"></wistia-player>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
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
