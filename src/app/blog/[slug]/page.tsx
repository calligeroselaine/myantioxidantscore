import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { posts } from "../posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C8953C] font-semibold text-sm uppercase tracking-widest mb-3">
            {post.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center justify-center gap-4 text-white/40 text-sm">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>By Elaine Calligeros</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="py-20 bg-[#F9FAFB]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm px-8 py-10 prose-custom">
            {post.body.map((section, i) => {
              if (section.type === "h2") {
                return (
                  <h2 key={i} className="text-xl font-bold text-[#0D1B3E] mt-8 mb-3 first:mt-0">
                    {section.content}
                  </h2>
                );
              }
              if (section.type === "h3") {
                return (
                  <h3 key={i} className="text-lg font-bold text-[#0D1B3E] mt-6 mb-2">
                    {section.content}
                  </h3>
                );
              }
              if (section.type === "p") {
                return (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">
                    {section.content}
                  </p>
                );
              }
              if (section.type === "ul") {
                return (
                  <ul key={i} className="space-y-2 mb-4 ml-1">
                    {section.items?.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                        <svg className="w-4 h-4 text-[#C8953C] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === "video" && section.mediaId) {
                return (
                  <div key={i} className="mb-6 rounded-2xl overflow-hidden">
                    <style>{`wistia-player[media-id='${section.mediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${section.mediaId}/swatch'); display: block; filter: blur(5px); padding-top:${(100 / (section.aspect ?? 1.7777777777777777)).toFixed(4)}%; }`}</style>
                    <wistia-player media-id={section.mediaId} aspect={String(section.aspect ?? 1.7777777777777777)}></wistia-player>
                  </div>
                );
              }
              if (section.type === "cta") {
                return (
                  <div key={i} className="mt-10 pt-8 border-t border-gray-100 text-center">
                    <p className="text-[#0D1B3E] font-bold text-lg mb-2">
                      Ready to find out your score?
                    </p>
                    <p className="text-gray-500 text-sm mb-6">
                      A Prysm iO scan takes 15 seconds and gives you a clear picture of how well your body is defending itself right now.
                    </p>
                    <Link
                      href="/book-a-scan"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8953C] hover:bg-[#e8b05a] text-white font-bold rounded-full transition-all duration-200 text-sm"
                    >
                      Book a Free Scan
                    </Link>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-sm text-gray-400 hover:text-[#C8953C] transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {post.body.some((s) => s.type === "video") && (
        <>
          <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
          {post.body
            .filter((s) => s.type === "video" && s.mediaId)
            .map((s) => (
              <Script
                key={s.mediaId}
                src={`https://fast.wistia.com/embed/${s.mediaId}.js`}
                strategy="lazyOnload"
                type="module"
              />
            ))}
        </>
      )}
    </>
  );
}
