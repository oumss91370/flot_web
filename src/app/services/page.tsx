import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code2,
  Search,
  Palette,
  ShieldCheck,
  Globe,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Services | Agence Web, SEO, Design UI/UX & Applications",
  description:
    "Découvrez tous les services de Flot Web : création de sites web sur-mesure, référencement SEO, design UI/UX, maintenance, stratégie digitale et applications mobiles. Devis gratuit.",
  alternates: {
    canonical: "https://flotweb.com/services",
  },
  openGraph: {
    title: "Nos Services | Flot Web - Agence Digitale Premium",
    description:
      "Création web, SEO, design UI/UX, maintenance, stratégie digitale et applications mobiles. Solutions complètes pour votre présence en ligne.",
    url: "https://flotweb.com/services",
    type: "website",
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://flotweb.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://flotweb.com/services",
    },
  ],
};

const services = [
  {
    icon: Code2,
    title: "Création de Site Web",
    description:
      "Sites vitrines, e-commerce et applications web haute performance avec Next.js et React.",
    href: "/services/creation-site-web",
    keywords: "Next.js, React, site vitrine, e-commerce",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description:
      "Stratégies SEO avancées pour dominer les résultats Google et générer un trafic qualifié durable.",
    href: "/services/referencement-seo",
    keywords: "audit SEO, positionnement Google, mots-clés",
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    description:
      "Interfaces élégantes et intuitives conçues pour captiver vos visiteurs et maximiser vos conversions.",
    href: "/services/design-ui-ux",
    keywords: "Figma, design system, accessibilité, responsive",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Sécurité",
    description:
      "Surveillance 24/7, mises à jour régulières et protection avancée pour un site performant et sécurisé.",
    href: "/services/maintenance-securite",
    keywords: "surveillance, sauvegardes, SSL, DDoS",
  },
  {
    icon: Globe,
    title: "Stratégie Digitale",
    description:
      "Accompagnement complet dans votre transformation digitale : branding, contenus et présence en ligne.",
    href: "/services/strategie-digitale",
    keywords: "branding, personas, KPIs, calendrier éditorial",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description:
      "Applications iOS et Android cross-platform avec React Native. Performances natives garanties.",
    href: "/services/applications-mobiles",
    keywords: "React Native, iOS, Android, App Store",
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Services
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
              Des solutions{" "}
              <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
                sur-mesure
              </span>{" "}
              pour votre succès
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-pale/70">
              Une expertise complète pour propulser votre présence digitale.
              Découvrez nos 6 domaines d&apos;expertise.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary-glow transition-colors duration-300 group-hover:bg-primary/25">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-white-clean">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-pale/70">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-primary-glow opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>En savoir plus</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-white-clean mb-4">
              Un projet en tête ?
            </h2>
            <p className="mx-auto max-w-xl text-text-pale/70 mb-8">
              Devis gratuit sous 24h, sans engagement.
            </p>
            <Link
              href="/contacter"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
            >
              Demander un devis gratuit
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
