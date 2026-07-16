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

export default function Footer() {
  const pathname = usePathname();
  const isBusinessCta = BUSINESS_CTA_PATHS.includes(pathname);

  return (
    <footer className="bg-[#0D1B3E] text-white" role="contentinfo">
      {/* CTA Banner — business pages only */}
      {isBusinessCta && (
        <div className="bg-[#C8953C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white">
                Ready to add this to your business?
              </h2>
              <p className="text-white/90 mt-1 text-sm">
                Book a free discovery call and we&apos;ll walk you through the fit, the numbers, and what&apos;s involved.
              </p>
            </div>
            <Link
              href="/partner-with-us#partner-form"
              className="shrink-0 px-8 py-3 bg-[#0D1B3E] hover:bg-[#1a2f5e] text-white font-semibold rounded-full transition-colors duration-200 text-sm"
            >
              Book a Discovery Call
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
