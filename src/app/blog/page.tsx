import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Wellness Insights",
  description:
    "Expert articles on antioxidants, oxidative stress, and how to improve your Prysm Score.",
  keywords: [
    "antioxidant health articles",
    "oxidative stress blog",
    "wellness insights",
    "nutrition and healthy ageing",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Wellness Insights",
    description:
      "Expert articles on antioxidants, oxidative stress, and how to improve your Prysm Score.",
  },
};

const categoryColors: Record<string, string> = {
  Wellness: "bg-[#0F8A7D]/10 text-[#0F8A7D]",
  Science: "bg-purple-50 text-purple-700",
  Education: "bg-blue-50 text-blue-700",
  News: "bg-green-50 text-green-700",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0C2A2C] pt-28 pb-20" aria-labelledby="blog-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 id="blog-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Wellness Insights
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Articles on measurable wellness, antioxidant health, nutrition,
            healthy ageing and wellness innovation.
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
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0F8A7D]/20 transition-all duration-300 flex flex-col"
              >
                <div className="h-44 bg-gradient-to-br from-[#0C2A2C] to-[#123638] flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 80 60" className="w-16 opacity-30">
                    <rect x="10" y="10" width="60" height="40" rx="4" fill="none" stroke="#0F8A7D" strokeWidth="2" />
                    <circle cx="40" cy="30" r="12" fill="#0F8A7D" opacity="0.4" />
                    <path d="M28 30 Q34 20 40 26 Q46 32 52 22" stroke="#0F8A7D" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${categoryColors[category] ?? "bg-gray-100 text-gray-600"}`}>
                      {category}
                    </span>
                    <span className="text-gray-400 text-xs">{readTime}</span>
                  </div>
                  <h3 className="font-bold text-[#0C2A2C] leading-snug mb-2 flex-1">
                    <Link href={`/blog/${slug}`} className="hover:text-[#0F8A7D] transition-colors">
                      {title}
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-400 text-xs">{date}</span>
                    <Link
                      href={`/blog/${slug}`}
                      className="text-[#0F8A7D] text-xs font-semibold hover:underline"
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
    </>
  );
}
