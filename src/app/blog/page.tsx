import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert articles on antioxidants, nutritional health, supplement science, and tips to raise your Prysm Score.",
};

const posts = [
  {
    slug: "what-is-your-antioxidant-score",
    title: "What Is Your Antioxidant Score and Why Does It Matter?",
    excerpt:
      "Your Prysm Score is a window into your body's antioxidant defence system. Learn what it measures, why it matters, and how to improve it.",
    category: "Education",
    date: "June 15, 2026",
    readTime: "5 min read",
  },
  {
    slug: "do-your-supplements-actually-work",
    title: "Do Your Supplements Actually Work? Here's How to Know",
    excerpt:
      "Australians spend billions on supplements each year — but most never know if they're being absorbed. The Prysm iO changes that equation forever.",
    category: "Science",
    date: "June 8, 2026",
    readTime: "4 min read",
  },
  {
    slug: "carotenoids-antioxidants-explained",
    title: "Carotenoids & Antioxidants: A Plain-English Explanation",
    excerpt:
      "What are carotenoids? How do they protect your body? And why are they the key ingredient your health score is actually measuring? We break it all down.",
    category: "Nutrition",
    date: "May 30, 2026",
    readTime: "6 min read",
  },
  {
    slug: "raise-your-prysm-score",
    title: "7 Evidence-Based Ways to Raise Your Prysm Score",
    excerpt:
      "Diet, supplements, sleep, and lifestyle — discover the strategies that move the needle most, backed by clinical data from real Prysm iO users.",
    category: "Tips",
    date: "May 20, 2026",
    readTime: "7 min read",
  },
  {
    slug: "oxidative-stress-disease",
    title: "Oxidative Stress: The Silent Driver of Chronic Disease",
    excerpt:
      "From cardiovascular disease to accelerated ageing, oxidative stress is implicated in a wide range of conditions. Understanding it is the first step to fighting back.",
    category: "Science",
    date: "May 10, 2026",
    readTime: "5 min read",
  },
  {
    slug: "lifepak-clinical-results",
    title: "LifePak® Clinical Results: What the Studies Actually Show",
    excerpt:
      "Pharmanex® LifePak® has been studied for over two decades. We examine the clinical evidence for its ability to raise antioxidant scores in real-world populations.",
    category: "Research",
    date: "April 28, 2026",
    readTime: "8 min read",
  },
];

const categoryColors: Record<string, string> = {
  Education: "bg-blue-50 text-blue-700",
  Science: "bg-purple-50 text-purple-700",
  Nutrition: "bg-green-50 text-green-700",
  Tips: "bg-[#C8953C]/10 text-[#C8953C]",
  Research: "bg-indigo-50 text-indigo-700",
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
            your nutritional health.
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
                {/* Placeholder image */}
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
