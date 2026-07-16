"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = {
  Company: [
    { href: "/", label: "Home" },
    { href: "/backed-by-science", label: "Technology & Science" },
    { href: "/partner-with-us", label: "Business Opportunities" },
    { href: "/testimonials", label: "Success Stories" },
    { href: "/blog", label: "Wellness Insights" },
    { href: "/contact", label: "Contact Us" },
  ],
  Products: [
    { href: "/certified-products", label: "Certified Products" },
  ],
  // Legal links hidden for now — revisit later.
  // Legal: [
  //   { href: "/privacy-policy", label: "Privacy Policy" },
  //   { href: "/terms", label: "Terms of Service" },
  //   { href: "/disclaimer", label: "Disclaimer" },
  // ],
};

const BUSINESS_CTA_PATHS = ["/partner-with-us", "/backed-by-science"];
const HIDE_CTA_PATHS = ["/blog"];

export default function Footer() {
  const pathname = usePathname();
  const isBusinessCta = BUSINESS_CTA_PATHS.includes(pathname);
  const hideCta = HIDE_CTA_PATHS.includes(pathname);

  const ctaHeadline = isBusinessCta
    ? "Ready to add this to your business?"
    : "Ready to see your score?";
  const ctaSubtext = isBusinessCta
    ? "Book a free discovery call and we'll walk you through the fit, the numbers, and what's involved."
    : "Book a free antioxidant scan and get results in 15 seconds.";
  const ctaButtonLabel = isBusinessCta ? "Book a Discovery Call" : "Book a Scan";
  const ctaButtonHref = isBusinessCta ? "/partner-with-us#partner-form" : "/#book";

  return (
    <footer className="bg-[#0D1B3E] text-white" role="contentinfo">
      {/* CTA Banner */}
      {!hideCta && (
        <div className="bg-[#C8953C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white">
                {ctaHeadline}
              </h2>
              <p className="text-white/90 mt-1 text-sm">
                {ctaSubtext}
              </p>
            </div>
            <Link
              href={ctaButtonHref}
              className="shrink-0 px-8 py-3 bg-[#0D1B3E] hover:bg-[#1a2f5e] text-white font-semibold rounded-full transition-colors duration-200 text-sm"
            >
              {ctaButtonLabel}
            </Link>
          </div>
        </div>
      )}

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#C8953C] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 36 36" className="w-4 h-4" aria-hidden="true">
                  <circle cx="18" cy="18" r="16" fill="#0D1B3E" />
                  <path
                    d="M10 22 Q14 10 18 18 Q22 26 26 14"
                    stroke="#C8953C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="18" cy="18" r="3" fill="#C8953C" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-white font-semibold text-xs tracking-wide">
                  MY ANTIOXIDANT
                </span>
                <span className="block text-[#C8953C] font-bold text-sm tracking-widest">
                  SCORE
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Empowering People to take control of their health with
              science-backed antioxidant scanning technology.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-[#C8953C] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} My Antioxidant Score. All rights reserved.</p>
          <p>
            Powered by{" "}
            <span className="text-[#C8953C]">Prysm iO Technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
