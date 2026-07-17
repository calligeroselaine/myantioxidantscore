"use client";

import { useState } from "react";

const referralOptions = [
  "Friend or Family",
  "Social Media",
  "Google Search",
  "Health Practitioner",
  "Event or Expo",
  "Blog or Article",
  "Other",
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referral: string;
  referredBy: string;
}

interface BookingFormProps {
  source?: "booking" | "partner";
  context?: "booking" | "partner" | "contact";
}

const successCopy = {
  booking: {
    title: "You're booked in!",
    message: (name: string) =>
      `Thanks, ${name}! We'll be in touch shortly to confirm your scan appointment.`,
  },
  partner: {
    title: "Thanks for your interest!",
    message: (name: string) =>
      `Thanks, ${name}! Our partnerships team will be in touch shortly to discuss next steps.`,
  },
  contact: {
    title: "Message received!",
    message: (name: string) => `Thanks, ${name}! We'll be in touch soon.`,
  },
};

export default function BookingForm({ source = "booking", context }: BookingFormProps) {
  const messageContext = context ?? source;
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    referral: "",
    referredBy: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.referredBy.trim()) e.referredBy = "This field is required";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 bg-[#5C7A94]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-[#5C7A94]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#1B2A3D] mb-2">
          {successCopy[messageContext].title}
        </h3>
        <p className="text-gray-600 max-w-sm mx-auto">
          {successCopy[messageContext].message(form.firstName)}
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-[#1A1A2E] placeholder-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-gray-200 focus:border-[#5C7A94] focus:ring-[#5C7A94]/20"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4"
      aria-label="Get your Prysm Score form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-[#1B2A3D] mb-1"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={handleChange}
            className={inputClass("firstName")}
            placeholder="Elaine"
            aria-required="true"
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-[#1B2A3D] mb-1"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={form.lastName}
            onChange={handleChange}
            className={inputClass("lastName")}
            placeholder="Smith"
            aria-required="true"
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#1B2A3D] mb-1"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass("email")}
          placeholder="you@example.com"
          aria-required="true"
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[#1B2A3D] mb-1"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          className={inputClass("phone")}
          placeholder="+61 4XX XXX XXX"
          aria-required="true"
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-500" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="referral"
          className="block text-sm font-medium text-[#1B2A3D] mb-1"
        >
          How did you hear about us?
        </label>
        <select
          id="referral"
          name="referral"
          value={form.referral}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] transition-colors duration-200 focus:outline-none focus:ring-2 focus:border-[#5C7A94] focus:ring-[#5C7A94]/20 bg-white"
        >
          <option value="">Select an option</option>
          {referralOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="referredBy"
          className="block text-sm font-medium text-[#1B2A3D] mb-1"
        >
          Who referred you/what is their email? <span className="text-red-500">*</span>
        </label>
        <input
          id="referredBy"
          name="referredBy"
          type="text"
          value={form.referredBy}
          onChange={handleChange}
          className={inputClass("referredBy")}
          placeholder="Name of person or business"
          aria-required="true"
          aria-describedby={errors.referredBy ? "referredBy-error" : undefined}
        />
        {errors.referredBy && (
          <p id="referredBy-error" className="mt-1 text-xs text-red-500" role="alert">
            {errors.referredBy}
          </p>
        )}
      </div>

      {submitError && (
        <p className="text-sm text-red-500 text-center" role="alert">
          Something went wrong submitting your details. Please try again, or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-[#5C7A94] hover:bg-[#45607A] text-white font-bold rounded-full transition-all duration-200 text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Submitting…
          </>
        ) : source === "partner" ? (
          "I'm Interested"
        ) : (
          "Submit"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="text-[#5C7A94] hover:underline">
          Privacy Policy
        </a>
        . We&apos;ll never share your details.
      </p>
    </form>
  );
}
