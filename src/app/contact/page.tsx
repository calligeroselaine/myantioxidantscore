import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the My Antioxidant Score team. We'd love to hear from you — whether you have a question about your scan, our products, or a partnership.",
};

const contactMethods = [
  {
    title: "Email Us",
    value: "hello@myantioxidantscore.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Follow Us",
    value: "@myantioxidantscore",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: "Response Time",
    value: "Within 24 hours",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-28 pb-20" aria-labelledby="contact-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C8953C] font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Have a question about your scan, our products, or becoming a
            partner? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map(({ title, value, icon }) => (
              <div key={title} className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-[#C8953C]/15 flex items-center justify-center text-[#C8953C] mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-[#0D1B3E] mb-1">{title}</h3>
                <p className="text-gray-500 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-[#F9FAFB]" aria-labelledby="contact-form-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 id="contact-form-heading" className="text-3xl font-bold text-[#0D1B3E]">
              Send Us a Message
            </h2>
            <p className="mt-3 text-gray-500">
              Fill in your details below and we&apos;ll get back to you within
              24 hours.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
