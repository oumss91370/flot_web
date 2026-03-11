import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flotweb.com"),
  alternates: {
    canonical: "https://flotweb.com",
  },
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
  manifest: "/manifest.json",
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
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Flot Web",
    url: "https://flotweb.com",
    logo: "https://flotweb.com/images/logo_flot.png",
    description:
      "Agence digitale premium spécialisée en création de sites web sur-mesure, référencement SEO et design UI/UX.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-6-13-92-01-50",
      contactType: "customer service",
      availableLanguage: ["French"],
      areaServed: "FR",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    sameAs: [],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Flot Web",
    url: "https://flotweb.com",
    description:
      "Flot Web, votre agence digitale premium. Création de sites web, SEO et design UI/UX.",
    publisher: {
      "@type": "Organization",
      name: "Flot Web",
    },
    inLanguage: "fr-FR",
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Flot Web",
    url: "https://flotweb.com",
    telephone: "+33613920150",
    email: "contact@flotweb.com",
    image: "https://flotweb.com/images/logo_flot.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    priceRange: "€€",
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Flot Web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Création de site web vitrine",
            description: "Site vitrine sur-mesure, responsive et optimisé SEO.",
          },
          price: "399",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Site web Essentiel",
            description: "1 à 5 pages sur-mesure, copywriting et stratégie SEO.",
          },
          price: "799",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Site web Premium",
            description:
              "5 à 10 pages, SEO avancé, base de données et support 24/7.",
          },
          price: "1099",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Optimisation de site existant",
            description: "Audit vitesse, SEO et UI/UX pour sites existants.",
          },
          price: "199",
          priceCurrency: "EUR",
        },
      ],
    },
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Preconnect pour réduire la latence des ressources tierces */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5H3PTDNT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <SpeedInsights />
        <Analytics />
        {/* GTM — chargé après hydratation pour ne pas bloquer le LCP */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5H3PTDNT');`,
          }}
        />
        {/* Google Analytics — chargé après hydratation */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NJTTYVZJ8E"
          strategy="afterInteractive"
        />
        <Script
          id="ga"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NJTTYVZJ8E');`,
          }}
        />
      </body>
    </html>
  );
}
