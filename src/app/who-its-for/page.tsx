import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who It's For",
  description:
    "Health clinics, gyms, wellness consultants, corporate wellness programs, and independent coaches — see how PRYSM scanning fits into what you already do.",
  keywords: [
    "wellness clinic scanning technology",
    "gym antioxidant scan service",
    "corporate wellness program technology",
    "wellness coach measurement tool",
  ],
  alternates: { canonical: "/who-its-for" },
  openGraph: {
    url: "/who-its-for",
    title: "Who It's For",
    description:
      "Health clinics, gyms, wellness consultants, corporate wellness programs, and independent coaches — see how PRYSM scanning fits into what you already do.",
  },
};

const profiles = [
  {
    icon: "🏥",
    title: "Health & Wellness Clinics",
    today:
      "You're already running consultations built around nutrition, supplementation, or integrative health — naturopathy, chiropractic, functional medicine. Clients come to you trusting your recommendations.",
    problem:
      "Beyond how a client says they feel, you have no objective way to show whether a recommended supplement or protocol is actually changing their underlying nutritional status. Progress is inferred, not measured.",
    fit:
      "A 15-second scan slots directly into an existing consultation. Use it to set a baseline at intake, then rescan at follow-ups to show measurable movement — turning your recommendations into something you can prove, not just prescribe.",
  },
  {
    icon: "💪",
    title: "Gyms & Fitness Studios",
    today:
      "Your members are already tracking reps, weights, and body composition. Nutrition is part of the conversation, but it's usually the least measurable part of their program.",
    problem:
      "Members often plateau or drop off when they can't see clear evidence that their effort — training and nutrition together — is paying off. Retention suffers when progress becomes invisible.",
    fit:
      "Offer scanning as an add-on service alongside existing training programs. A rising score becomes another visible marker of progress, sitting next to strength and body composition gains — and another reason for members to keep coming back.",
  },
  {
    icon: "🌿",
    title: "Wellness Consultation Services",
    today:
      "You guide clients through nutrition, lifestyle, and healthy-ageing advice, often over multiple sessions. Your value is in the relationship and the guidance you provide.",
    problem:
      "Your advice is only as credible as a client's willingness to trust it on faith. Without a number to point to, it's harder to demonstrate that the changes you're recommending are actually working.",
    fit:
      "A scan gives every consultation an objective starting point and a way to track change session to session. It supports the conversations you're already having with real data, rather than replacing them.",
  },
  {
    icon: "🏢",
    title: "Corporate Wellness Programs",
    today:
      "You run workplace wellness days, health checks, or ongoing employee wellbeing initiatives — usually competing for attention against a long list of other benefits.",
    problem:
      "Most wellness perks are hard to measure and easy for employees to forget. It's difficult to prove the value of a wellness program to the people funding it, or to the employees meant to benefit from it.",
    fit:
      "A 15-second scan is a memorable, hands-on activation for a wellness event, and can be repeated over time to show measurable impact across a workforce — giving you a genuine data point to report back to the business.",
  },
  {
    icon: "🚀",
    title: "Independent Coaches & Entrepreneurs",
    today:
      "You're building a personal brand around health, nutrition, or wellness coaching — often working one-on-one or with a small client base, where your credibility is your business.",
    problem:
      "Without a lab or clinic behind you, it can be hard to differentiate yourself from anyone else offering advice online. Client results are usually anecdotal, which makes them hard to showcase or scale.",
    fit:
      "A portable scanning device gives you a professional, science-backed tool that instantly sets you apart — and turns client transformations into shareable, measurable proof you can use to grow your business.",
  },
];

export default function WhoItsForPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-28 pb-20" aria-labelledby="who-its-for-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C8953C] font-semibold text-sm uppercase tracking-widest mb-3">
            Who It&apos;s For
          </p>
          <h1 id="who-its-for-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Built to Fit What You Already Do
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            PRYSM doesn&apos;t ask you to change your business — it gives you a way to
            measure the results you&apos;re already delivering.
          </p>
        </div>
      </section>

      {/* Profiles */}
      <section className="py-24 bg-[#F9FAFB]" aria-labelledby="profiles-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="profiles-heading" className="sr-only">Business Profiles</h2>
          <div className="space-y-8">
            {profiles.map(({ icon, title, today, problem, fit }) => (
              <article
                key={title}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl shrink-0" aria-hidden="true">{icon}</div>
                  <h3 className="text-2xl font-bold text-[#0D1B3E]">{title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-bold text-[#C8953C] uppercase tracking-widest mb-2">
                      Today
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{today}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#C8953C] uppercase tracking-widest mb-2">
                      The Problem
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#C8953C] uppercase tracking-widest mb-2">
                      How PRYSM Fits
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{fit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B3E] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            See where PRYSM fits into your business
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Book a free discovery call and we&apos;ll walk you through the fit, the numbers,
            and what&apos;s involved.
          </p>
          <Link
            href="/partner-with-us#partner-form"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#C8953C] hover:bg-[#e8b05a] text-white font-bold rounded-full transition-all duration-200 text-sm"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
