"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/book-a-scan", label: "BOOK A SCAN" },
  { href: "/partner-with-us", label: "PARTNER WITH US" },
  { href: "/certified-products", label: "CERTIFIED PRODUCTS" },
  { href: "/backed-by-science", label: "BACKED BY SCIENCE" },
  { href: "/testimonials", label: "TESTIMONIALS" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT US" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-0 flex-1 justify-center" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#0D1B3E] tracking-wide whitespace-nowrap transition-colors duration-150 border-r border-gray-200 last:border-r-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Log In — right side */}
          <div className="hidden lg:flex items-center gap-2 ml-4">
            <Link
              href="/login"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-gray-700 hover:text-[#0D1B3E] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Log In
            </Link>
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
            href="/login"
            className="block px-3 py-2.5 text-xs font-semibold text-gray-700 hover:text-[#0D1B3E] hover:bg-gray-50 rounded tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            LOG IN
          </Link>
        </nav>
      </div>
    </header>
  );
}
