import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the My Antioxidant Score website and booking services.",
  keywords: ["terms of service", "booking terms", "My Antioxidant Score terms and conditions"],
  alternates: { canonical: "/terms" },
  openGraph: {
    url: "/terms",
    title: "Terms of Service",
    description: "Terms and conditions for using the My Antioxidant Score website and booking services.",
  },
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: `By accessing or using the My Antioxidant Score website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or book any services.

These terms are governed by the laws of Australia and the state in which services are provided. Any disputes will be subject to the exclusive jurisdiction of the courts of that state.`,
  },
  {
    heading: "2. Our Services",
    body: `My Antioxidant Score provides:

— Non-invasive antioxidant scanning using Prysm iO technology
— Educational content relating to antioxidants, nutrition, and general wellness
— Information about Prysm-certified supplement products

Our services are intended for general wellness and educational purposes only. They do not constitute medical diagnosis, treatment, or advice. See our Disclaimer for full details.`,
  },
  {
    heading: "3. Booking & Appointments",
    body: `**Availability**: Scan appointments are subject to availability at participating locations.

**Confirmation**: Your booking is confirmed once you receive a confirmation email. Please retain this for your records.

**Cancellations**: We ask for at least 24 hours' notice if you need to cancel or reschedule. Late cancellations or no-shows may forfeit any prepaid booking fee.

**Punctuality**: Please arrive on time. If you arrive more than 15 minutes late, we may need to reschedule your appointment.

**Age requirement**: Participants under 18 years of age must be accompanied by a parent or guardian.`,
  },
  {
    heading: "4. Pricing & Payment",
    body: `All prices are displayed in Australian Dollars (AUD) and include GST where applicable.

Payment is processed through secure third-party payment providers. We do not store your payment card details.

Prices are subject to change without notice. The price confirmed at the time of booking will apply to that booking.`,
  },
  {
    heading: "5. Refund Policy",
    body: `If you cancel with more than 24 hours' notice, you will receive a full refund or the option to reschedule at no cost.

Refunds for cancellations with less than 24 hours' notice are at our discretion.

If we need to cancel or reschedule your appointment for any reason, you will be offered a full refund or a rescheduled appointment.`,
  },
  {
    heading: "6. Not Medical Advice",
    body: `The Prysm Score and all content on this website are for general wellness and informational purposes only. Nothing on this site should be interpreted as medical advice, diagnosis, or treatment.

You should always consult a qualified healthcare professional before making changes to your diet, supplement regimen, or health routine based on your Prysm Score or any content on this website.

My Antioxidant Score does not accept liability for decisions made based on information provided through our services. See our Disclaimer page for further detail.`,
  },
  {
    heading: "7. Intellectual Property",
    body: `All content on this website — including text, images, graphics, logos, and the Prysm Score methodology — is the intellectual property of My Antioxidant Score or its licensors and is protected by Australian copyright law.

You may not reproduce, distribute, modify, or commercially exploit any content without prior written permission.`,
  },
  {
    heading: "8. User Conduct",
    body: `By using this website, you agree not to:

— Use the site for any unlawful purpose
— Attempt to gain unauthorised access to any part of the website or its systems
— Transmit any harmful, offensive, or disruptive content
— Misrepresent your identity or affiliation

We reserve the right to terminate access for any user who breaches these terms.`,
  },
  {
    heading: "9. Limitation of Liability",
    body: `To the fullest extent permitted by Australian law, My Antioxidant Score is not liable for any indirect, incidental, special, or consequential damages arising from your use of our services or website.

Our total liability to you for any claim arising from the use of our services is limited to the amount you paid for the specific service giving rise to the claim.

Nothing in these terms excludes any consumer guarantees under the Australian Consumer Law that cannot be legally excluded.`,
  },
  {
    heading: "10. Changes to These Terms",
    body: `We reserve the right to update these Terms of Service at any time. The updated version will be posted on this page with a revised date. Continued use of our website or services after changes constitutes your acceptance of the revised terms.`,
  },
  {
    heading: "11. Contact",
    body: `For any questions regarding these Terms of Service, please contact us:

**My Antioxidant Score**
Email: info@myantioxidantscore.com.au`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#1B2A3D] pt-28 pb-20" aria-labelledby="terms-hero-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5C7A94] font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 id="terms-hero-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Terms of Service
          </h1>
          <p className="mt-4 text-white/50 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {sections.map(({ heading, body }) => (
              <div key={heading} className="px-8 py-8">
                <h2 className="text-lg font-bold text-[#1B2A3D] mb-4">{heading}</h2>
                <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                  {body.split("\n\n").map((para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                        .replace(/^— /gm, "&mdash;&nbsp;")
                        .replace(/\n— /g, "<br />&mdash;&nbsp;")
                    }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
