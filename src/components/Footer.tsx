import Link from "next/link";

const footerLinks = {
  Company: [
    { href: "/", label: "Home" },
    { href: "/backed-by-science", label: "Backed by Science" },
    { href: "/partner-with-us", label: "Partner With Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ],
  Products: [
    { href: "/certified-products", label: "Certified Products" },
    { href: "/book-a-scan", label: "Book a Scan" },
    { href: "/login", label: "Customer Login" },
  ],
  Legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0D1B3E] text-white" role="contentinfo">
      {/* CTA Banner */}
      <div className="bg-[#C8953C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">
              Ready to see your score?
            </h2>
            <p className="text-white/90 mt-1 text-sm">
              Book a free antioxidant scan and get results in 15 seconds.
            </p>
          </div>
          <Link
            href="/book-a-scan"
            className="shrink-0 px-8 py-3 bg-[#0D1B3E] hover:bg-[#1a2f5e] text-white font-semibold rounded-full transition-colors duration-200 text-sm"
          >
            Book a Scan
          </Link>
        </div>
      </div>

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
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                {
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8953C] flex items-center justify-center transition-colors duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
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
