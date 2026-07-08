import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Scan",
  description:
    "Book your free 15-second antioxidant scan today. Non-invasive, instant results. Find out if your supplements are actually working.",
};

export default function BookAScanPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-28 pb-20" aria-labelledby="book-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C8953C] font-semibold text-sm uppercase tracking-widest mb-3">
            Free Scan
          </p>
          <h1
            id="book-hero-heading"
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Book Your Antioxidant Scan
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            15 seconds is all it takes to reveal your nutritional health score.
            Fill in your details below and we&apos;ll be in touch to confirm
            your appointment.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* What to expect */}
            <div>
              <h2 className="text-2xl font-bold text-[#0D1B3E] mb-6">
                What to Expect
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "We confirm your appointment",
                    desc: "One of our team will reach out within 24 hours to arrange a convenient time and location for your scan.",
                  },
                  {
                    step: "2",
                    title: "You get scanned in 15 seconds",
                    desc: "Simply place your palm on the Prysm iO device. No preparation needed — no fasting, no blood draw.",
                  },
                  {
                    step: "3",
                    title: "See your score instantly",
                    desc: "Your Prysm Score appears immediately on screen and in the app, along with personalised insights.",
                  },
                  {
                    step: "4",
                    title: "Get expert guidance",
                    desc: "Our team will walk you through your results and recommend next steps to improve your nutritional health.",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-5">
                    <div className="w-10 h-10 rounded-full bg-[#C8953C] text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D1B3E]">{title}</h3>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div className="mt-10 bg-[#F7F4EF] rounded-2xl p-6 border border-[#C8953C]/10">
                <h3 className="font-bold text-[#0D1B3E] mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4 text-sm">
                  {[
                    {
                      q: "Is the scan free?",
                      a: "Yes, your first scan is completely free with no obligation.",
                    },
                    {
                      q: "Does it hurt?",
                      a: "Not at all. You simply place your palm on the device — it's completely painless.",
                    },
                    {
                      q: "How accurate is it?",
                      a: "Prysm iO uses 700,000+ measurements per reading and has been validated against blood tests over 20+ years of research.",
                    },
                  ].map(({ q, a }) => (
                    <div key={q}>
                      <p className="font-semibold text-[#0D1B3E]">{q}</p>
                      <p className="text-gray-500 mt-0.5">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-[#0D1B3E] mb-6">
                Reserve Your Spot
              </h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
