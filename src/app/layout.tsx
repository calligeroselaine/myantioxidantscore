import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Scan Your Score | Antioxidant Scan in 15 Seconds",
    template: "%s | Scan Your Score",
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
  metadataBase: new URL("https://www.scanyourscore.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.scanyourscore.com",
    siteName: "Scan Your Score",
    title: "Scan Your Score | Antioxidant Scan in 15 Seconds",
    description:
      "See if your supplements are actually working. The Prysm iO delivers your antioxidant score in 15 seconds — no blood tests needed.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scan Your Score | Antioxidant Scan in 15 Seconds",
    description:
      "See if your supplements are actually working. Prysm iO gives you a health score in 15 seconds.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon-32x32.png" },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Scan Your Score",
  url: "https://www.scanyourscore.com",
  logo: "https://www.scanyourscore.com/og-image.jpg",
  description:
    "Discover your antioxidant health score in just 15 seconds with the Prysm iO device — science-backed nutritional insight you can see.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="flex-1 pt-0">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
