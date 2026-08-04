"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/how-it-works", label: "HOW IT WORKS" },
  { href: "/why-measure", label: "WHY MEASURE?" },
  { href: "/partner-with-us", label: "BUSINESS OPPORTUNITIES" },
  { href: "/who-its-for", label: "WHO IT'S FOR" },
  { href: "/testimonials", label: "SUCCESS STORIES" },
  { href: "/backed-by-science", label: "TECHNOLOGY & SCIENCE" },
  { href: "/blog", label: "WELLNESS INSIGHTS" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent border-transparent"
          : "bg-white border-b border-gray-100 shadow-sm"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo — always visible */}
          <Link
            href="/"
            className={`shrink-0 text-[11px] font-bold tracking-widest transition-colors duration-300 ${
              transparent ? "text-white/90" : "text-[#1B2A3D]"
            }`}
            aria-label="My Antioxidant Score — Home"
          >
            MY ANTIOXIDANT SCORE
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center min-w-0 flex-1 ml-4">
            <nav
              className="flex items-center gap-x-px flex-1 min-w-0 overflow-x-auto"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`shrink-0 px-1.5 py-2 text-[10px] font-semibold tracking-wide whitespace-nowrap transition-colors duration-200 ${
                    transparent
                      ? "text-white/80 hover:text-white"
                      : "text-gray-700 hover:text-[#1B2A3D]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div
                className={`pointer-events-none sticky right-0 h-full w-6 shrink-0 -ml-6 bg-gradient-to-r ${
                  transparent ? "from-transparent to-transparent" : "from-transparent to-white"
                }`}
                aria-hidden="true"
              />
            </nav>

            <div className="flex items-center gap-2 shrink-0 ml-2">
              <Link
                href="/partner-with-us#partner-form"
                className={`px-4 py-2 text-[11px] font-bold rounded-full tracking-wide whitespace-nowrap transition-all duration-200 ${
                  transparent
                    ? "bg-white/20 hover:bg-white/30 text-white border border-white/40"
                    : "bg-[#5C7A94] hover:bg-[#45607A] text-white"
                }`}
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors duration-200 ${
              transparent ? "text-white" : "text-gray-600"
            }`}
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
              className="block px-3 py-2.5 text-xs font-semibold text-gray-700 hover:text-[#1B2A3D] hover:bg-gray-50 rounded tracking-wide transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/partner-with-us#partner-form"
            className="block mt-2 px-3 py-3 bg-[#5C7A94] hover:bg-[#45607A] text-white text-center text-xs font-bold rounded-full tracking-wide transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book a Discovery Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
