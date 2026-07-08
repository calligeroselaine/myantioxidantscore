"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setError("Customer login is coming soon. Please contact us for assistance.");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center pt-20 pb-16 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-[#0D1B3E] flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-7 h-7" aria-hidden="true">
                <circle cx="18" cy="18" r="16" fill="#0D1B3E" stroke="#C8953C" strokeWidth="2" />
                <path d="M10 22 Q14 10 18 18 Q22 26 26 14" stroke="#C8953C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <circle cx="18" cy="18" r="3" fill="#C8953C" />
              </svg>
            </div>
            <div className="leading-tight text-center">
              <span className="block text-[#0D1B3E] font-semibold text-xs tracking-wide">MY ANTIOXIDANT</span>
              <span className="block text-[#C8953C] font-bold text-sm tracking-widest">SCORE</span>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-2xl font-bold text-[#0D1B3E] mb-2 text-center">
            Customer Login
          </h1>
          <p className="text-gray-500 text-sm text-center mb-8">
            Sign in to view your Prysm Score history and manage your account.
          </p>

          {error && (
            <div
              className="mb-5 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm"
              role="alert"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-[#0D1B3E] mb-1"
              >
                Email Address
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-[#C8953C] focus:ring-[#C8953C]/20 transition-colors"
                placeholder="you@example.com"
                aria-required="true"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-[#0D1B3E]"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-[#C8953C] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-[#C8953C] focus:ring-[#C8953C]/20 transition-colors"
                placeholder="••••••••"
                aria-required="true"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#C8953C] hover:bg-[#a67820] text-white font-bold rounded-full transition-all duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Signing in…
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link href="/book-a-scan" className="text-[#C8953C] font-semibold hover:underline">
              Book a free scan to get started
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Protected by encryption.{" "}
          <Link href="/privacy-policy" className="text-[#C8953C] hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
