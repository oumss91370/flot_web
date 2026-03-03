import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flotweb.com"),
  icons: {
    icon: [
      { url: "/images/logo_flot.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo_flot.png", type: "image/png" },
    ],
    shortcut: "/images/logo_flot.png",
  },
  title: {
    default: "Flot Web — Agence Digitale Premium | Création de Sites & SEO",
    template: "%s | Flot Web",
  },
  description:
    "Flot Web, votre agence digitale premium spécialisée en création de sites web sur-mesure, référencement SEO et design UI/UX. Propulsez votre business en ligne.",
  keywords: [
    "agence digitale",
    "agence web premium",
    "création site internet",
    "SEO",
    "design UI/UX",
    "Flot Web",
    "développement web",
    "Next.js",
    "site vitrine",
    "freelance web",
  ],
  authors: [{ name: "Flot Web", url: "https://flotweb.com" }],
  creator: "Flot Web",
  openGraph: {
    title: "Flot Web — Agence Digitale Premium",
    description:
      "Création de sites web sur-mesure, SEO avancé et design UI/UX. Naviguez vers le succès digital avec Flot Web.",
    url: "https://flotweb.com",
    siteName: "Flot Web",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Flot Web — Agence Digitale Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flot Web — Agence Digitale Premium",
    description:
      "Création de sites web sur-mesure, SEO avancé et design UI/UX.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
