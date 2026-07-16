"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/how-it-works", label: "HOW IT WORKS" },
  { href: "/why-measure", label: "WHY MEASURE?" },
  { href: "/partner-with-us", label: "BUSINESS OPPORTUNITIES" },
  { href: "/who-its-for", label: "WHO IT'S FOR" },
  { href: "/testimonials", label: "SUCCESS STORIES" },
  { href: "/backed-by-science", label: "TECHNOLOGY & SCIENCE" },
  { href: "/blog", label: "BLOG" },
  { href: "/book-a-scan#faq", label: "FAQ" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="hidden lg:flex items-center w-full min-w-0 relative">
            {/* Desktop nav */}
            <nav
              className="flex items-center gap-x-px flex-1 min-w-0 overflow-x-auto"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="shrink-0 px-1.5 py-2 text-[10px] font-semibold text-gray-700 hover:text-[#0D1B3E] tracking-wide whitespace-nowrap transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
              {/* Fade hint — signals more nav items may be scrollable */}
              <div className="pointer-events-none sticky right-0 h-full w-6 shrink-0 -ml-6 bg-gradient-to-r from-transparent to-white" aria-hidden="true" />
            </nav>

            {/* Right side — primary + secondary actions */}
            <div className="flex items-center gap-2 shrink-0 ml-2">
              <Link
                href="/book-a-scan"
                className="text-[11px] font-semibold text-gray-500 hover:text-[#0D1B3E] tracking-wide whitespace-nowrap transition-colors"
              >
                Book a Scan
              </Link>
              <Link
                href="/partner-with-us#partner-form"
                className="px-4 py-2 bg-[#C8953C] hover:bg-[#a67820] text-white text-[11px] font-bold rounded-full tracking-wide whitespace-nowrap transition-colors duration-200"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="text-xs font-bold text-[#0D1B3E] tracking-widest">MY ANTIOXIDANT SCORE</span>
            <button
              className="p-2 text-gray-600 hover:text-[#0D1B3E]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0"}`}
        aria-hidden={!menuOpen}
      >
        <nav className="bg-white border-t border-gray-100 px-4 py-3 space-y-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2.5 text-xs font-semibold text-gray-700 hover:text-[#0D1B3E] hover:bg-gray-50 rounded tracking-wide transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/partner-with-us#partner-form"
            className="block mt-2 px-3 py-3 bg-[#C8953C] hover:bg-[#a67820] text-white text-center text-xs font-bold rounded-full tracking-wide transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/book-a-scan"
            className="block px-3 py-2.5 text-xs font-semibold text-gray-500 hover:text-[#0D1B3E] hover:bg-gray-50 rounded tracking-wide text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book a Scan
          </Link>
        </nav>
      </div>
    </header>
  );
}
