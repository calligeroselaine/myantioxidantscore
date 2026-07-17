import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real stories from people who raised their Prysm Score and improved their antioxidant health.",
  keywords: [
    "Prysm iO testimonials",
    "antioxidant score success stories",
    "wellness business results",
    "client retention case studies",
  ],
  alternates: { canonical: "/testimonials" },
  openGraph: {
    url: "/testimonials",
    title: "Success Stories",
    description:
      "Real stories from people who raised their Prysm Score and improved their antioxidant health.",
  },
};

const testimonials = [
  {
    name: "Sally A Mumford",
    location: "",
    image: "/sally-score.png",
    quote:
      "I honestly thought I was doing all the right things… until I saw my score. When I had my antioxidant levels measured with the Prysm iO, I was genuinely surprised. My score was much lower than I expected. Looking back, it explained a lot. I seemed to catch every cold that was going around and often felt like my body wasn't keeping up, despite trying to live a healthy lifestyle. So I decided to do something about it. I followed the personalised recommendations based on my scan, and over the next few months I noticed a real difference. I had more energy, felt healthier, stopped picking up every bug, and when I rescanned, my antioxidant score had improved dramatically. It made me realise something… feeling 'fine' doesn't always mean your body is well protected.",
    scoreChange: "Score improved dramatically on rescan",
  },
  {
    name: "Eva Jerhotova",
    location: "",
    image: "/WhatsApp%20Image%202026-07-10%20at%2016.37.41.jpeg",
    quote:
      "I had my first BioPhotonic Scanner measurement when I was 28 years old. My score was 38,000, (equivalent of 380 on the Prysm iO) right in the middle of the yellow zone. I decided to start taking LifePak to see how I would feel and how it would affect my scanner score. Very soon, I felt better, had more energy, and my score moved into the blue zone. Later, I decided to do my own experiment. I stopped taking the supplements but made a conscious effort to eat even more fruits and vegetables, thinking I could get everything I needed from my diet. I continued scanning regularly, and to my surprise, my score started to drop. That was all the proof I needed. Since then, I have taken Pharmanex supplements consistently for almost 18 years. Today, my PRYSM iO score is 820, and I have maintained one of the highest score ranges for many years. Today, I'm 45 years old, I have two grown-up daughters, and I feel great. Looking back, I'm so glad I made the decision to invest in my wellbeing all those years ago.",
    scoreChange: "18 years of consistent high scores — now 820",
  },
];

const expertEndorsements = [
  {
    quote: "You guys are the next frontier with health",
    name: "Anthony Lolli",
    role: "Founder of BiohackYourself Media",
    bio: "Producer of the Biohack Yourself series, where he's interviewed over 100 leading experts, and publisher of a national biohacking magazine.",
  },
  {
    quote: "The Future of Personalised Medicine",
    name: "William Sears, MD",
    role: "Physician",
    bio: "Best-selling author of more than 40 health and wellness books, and co-founder of the Dr. Sears Wellness Institute, which has trained thousands of health coaches worldwide. A leading voice in preventive medicine, Dr. Sears has been featured on major media outlets, including The Today Show, Good Morning America, and CNN.",
  },
  {
    quote: "A great tool to quantify wellness",
    name: "Del Bigtree",
    role: "CEO of MAHA Action",
    bio: "Award-winning producer of the TV show The Doctors, and founder of the Informed Consent Action Network (ICAN). He is also the host of The HighWire, a health news and talk show, where he brings cutting-edge science and thought leaders to a global audience.",
  },
  {
    quote: "I am getting better outcomes with my patients",
    name: "Ben Gonzalez, MD",
    role: "Physician",
    bio: "Expert in functional medicine and longevity and keynote speaker at American Academy of Anti Aging Medicine and other leading integrative medical conferences, widely known for blending science with personalised wellness strategies to deliver consistent, measurable results.",
  },
];

const businessTestimonials = [
  {
    name: "Placeholder Name",
    role: "Clinic Owner",
    quote:
      "Adding scans to our consultations gave clients something to come back for. Instead of a one-off visit, we now see people quarterly to track their progress — it's changed how we think about retention entirely.",
    result: "Higher client retention",
  },
  {
    name: "Placeholder Name",
    role: "Gym Owner",
    quote:
      "Our members love having something measurable to work towards beyond the scale. It's become a genuine point of difference for us — nobody else in our area offers anything like it.",
    result: "New recurring revenue stream",
  },
  {
    name: "Placeholder Name",
    role: "Wellness Coach",
    quote:
      "Clients trust the number in a way they don't trust my opinion alone. It's given my recommendations real weight, and clients are more satisfied because they can actually see the impact of the changes we make together.",
    result: "Improved client satisfaction",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A3D] pt-28 pb-20" aria-labelledby="testimonials-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-3">
            Real Results
          </p>
          <h1 id="testimonials-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Real Stories. Real Results.
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            Real people, real scans, real improvements in their Prysm Score.
          </p>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-24 bg-[#F9FAFB]" aria-labelledby="client-results-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="client-results-heading" className="text-2xl font-bold text-[#1B2A3D] text-center mb-10">
            Client Results
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {testimonials.map(({ name, location, image, quote, scoreChange }, i) => (
              <article
                key={i}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#5C7A94]/20 transition-all duration-300 overflow-hidden"
              >
                <div style={{ display: "grid", gridTemplateColumns: image ? "280px 1fr" : "1fr" }}>
                  {/* Score image */}
                  {image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={image}
                      alt={`${name}'s Prysm Score`}
                      loading="lazy"
                      style={{ display: "block", width: "280px", height: "100%", objectFit: "cover" }}
                    />
                  )}

                  {/* Quote */}
                  <div className="p-8 flex flex-col">
                    <svg className="w-8 h-8 text-[#5C7A94]/30 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6.5c0-1.9 1.6-3.5 3.5-3.5V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-3.5c0-1.9 1.6-3.5 3.5-3.5V8z" />
                    </svg>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      &ldquo;{quote}&rdquo;
                    </p>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="font-bold text-[#1B2A3D]">{name}</p>
                      {location && <p className="text-gray-400 text-xs">{location}</p>}
                      <p className="mt-2 inline-block px-3 py-1 bg-[#5C7A94]/10 text-[#5C7A94] text-xs font-semibold rounded-full">
                        {scoreChange}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Endorsements */}
      <section className="py-24 bg-[#1B2A3D]" aria-labelledby="expert-endorsements-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="expert-endorsements-heading" className="text-2xl font-bold text-white text-center mb-3">
            Expert Endorsements
          </h2>
          <p className="text-white/60 text-center max-w-xl mx-auto mb-10">
            Trusted by leading voices in preventive medicine, functional health, and wellness media.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {expertEndorsements.map(({ quote, name, role, bio }, i) => (
              <article
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col"
              >
                <svg className="w-8 h-8 text-[#5C7A94]/50 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6.5c0-1.9 1.6-3.5 3.5-3.5V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-3.5c0-1.9 1.6-3.5 3.5-3.5V8z" />
                </svg>
                <p className="text-white text-lg font-semibold leading-snug mb-4">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{bio}</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-bold text-white">{name}</p>
                  <p className="text-[#5C7A94] text-xs font-semibold">{role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Business Results */}
      <section className="py-24 bg-white" aria-labelledby="business-results-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="business-results-heading" className="text-2xl font-bold text-[#1B2A3D] text-center mb-10">
            Business Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {businessTestimonials.map(({ name, role, quote, result }, i) => (
              <article
                key={i}
                className="bg-[#F9FAFB] rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col"
              >
                <svg className="w-8 h-8 text-[#5C7A94]/30 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6.5c0-1.9 1.6-3.5 3.5-3.5V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-3.5c0-1.9 1.6-3.5 3.5-3.5V8z" />
                </svg>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-bold text-[#1B2A3D]">{name}</p>
                  <p className="text-gray-400 text-xs">{role}</p>
                  <p className="mt-2 inline-block px-3 py-1 bg-[#5C7A94]/10 text-[#5C7A94] text-xs font-semibold rounded-full">
                    {result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B2A3D] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            Find Out How to Get Your Prysm Score
          </h2>
          <Link
            href="/#book"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#5C7A94] hover:bg-[#7A96AC] text-white font-bold rounded-full transition-all duration-200 text-sm"
          >
            Submit Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
