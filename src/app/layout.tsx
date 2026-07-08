import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "My Antioxidant Score | Antioxidant Scan in 15 Seconds",
    template: "%s | My Antioxidant Score",
  },
  description:
    "Discover your antioxidant health score in just 15 seconds with the Prysm iO device. No blood tests. No guessing. Science-backed nutritional insight you can see.",
  keywords: [
    "antioxidant score",
    "Prysm iO",
    "antioxidant scan",
    "nutritional health",
    "carotenoid levels",
    "health score",
    "supplement effectiveness",
    "Pharmanex",
  ],
  metadataBase: new URL("https://www.myantioxidantscore.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.myantioxidantscore.com",
    siteName: "My Antioxidant Score",
    title: "My Antioxidant Score | Antioxidant Scan in 15 Seconds",
    description:
      "See if your supplements are actually working. The Prysm iO delivers your antioxidant score in 15 seconds — no blood tests needed.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Antioxidant Score | Antioxidant Scan in 15 Seconds",
    description:
      "See if your supplements are actually working. Prysm iO gives you a health score in 15 seconds.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
