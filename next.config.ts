import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Compress responses
  compress: true,

  // Pin the workspace root to this project, so stray lockfiles elsewhere
  // on the machine can't cause Turbopack to infer the wrong root.
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Optimise images
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },

  // Security headers for every route
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
