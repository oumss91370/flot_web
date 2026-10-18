import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisation images pour Vercel
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Vidéos de la page /tiktok/publier, servies sous flotweb.com (domaine vérifié chez TikTok).
  async rewrites() {
    return [{ source: "/tiktok/media/:file", destination: "https://iytlhqctf5o0ff7e.public.blob.vercel-storage.com/tiktok-media/:file" }];
  },

  // Headers de sécurité
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
