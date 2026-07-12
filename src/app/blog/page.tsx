import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert articles on antioxidants, oxidative stress, and how to improve your Prysm Score.",
};

const categoryColors: Record<string, string> = {
  Wellness: "bg-[#C8953C]/10 text-[#C8953C]",
  Science: "bg-purple-50 text-purple-700",
  Education: "bg-blue-50 text-blue-700",
  News: "bg-green-50 text-green-700",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-28 pb-20" aria-labelledby="blog-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C8953C] font-semibold text-sm uppercase tracking-widest mb-3">
            Insights & Education
          </p>
          <h1 id="blog-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            The Antioxidant Score Blog
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Science-backed articles to help you understand, track, and improve
            your antioxidant health.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24 bg-[#F9FAFB]" aria-labelledby="posts-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="posts-heading" className="sr-only">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(({ slug, title, excerpt, category, date, readTime }) => (
              <article
                key={slug}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-[#C8953C]/20 transition-all duration-300 flex flex-col"
              >
                <div className="h-44 bg-gradient-to-br from-[#0D1B3E] to-[#1a2f5e] flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 80 60" className="w-16 opacity-30">
                    <rect x="10" y="10" width="60" height="40" rx="4" fill="none" stroke="#C8953C" strokeWidth="2" />
                    <circle cx="40" cy="30" r="12" fill="#C8953C" opacity="0.4" />
                    <path d="M28 30 Q34 20 40 26 Q46 32 52 22" stroke="#C8953C" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${categoryColors[category] ?? "bg-gray-100 text-gray-600"}`}>
                      {category}
                    </span>
                    <span className="text-gray-400 text-xs">{readTime}</span>
                  </div>
                  <h3 className="font-bold text-[#0D1B3E] leading-snug mb-2 flex-1">
                    <Link href={`/blog/${slug}`} className="hover:text-[#C8953C] transition-colors">
                      {title}
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-400 text-xs">{date}</span>
                    <Link
                      href={`/blog/${slug}`}
                      className="text-[#C8953C] text-xs font-semibold hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#0D1B3E]" aria-labelledby="newsletter-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="newsletter-heading" className="text-3xl font-bold text-white">
            Stay in the loop
          </h2>
          <p className="mt-3 text-white/60">
            Get the latest science on antioxidants, supplement tips, and
            exclusive scan offers delivered to your inbox.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#C8953C] focus:ring-2 focus:ring-[#C8953C]/20"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#C8953C] hover:bg-[#e8b05a] text-white font-bold rounded-full text-sm transition-colors duration-200 shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
