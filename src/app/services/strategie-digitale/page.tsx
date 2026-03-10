import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, CheckCircle2, ArrowRight, Target, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Stratégie Digitale | Accompagnement & Transformation Numérique",
  description:
    "Accompagnement en stratégie digitale : audit de présence en ligne, branding, stratégie de contenu, KPIs et suivi. Transformez votre vision en résultats concrets. Devis gratuit.",
  alternates: {
    canonical: "https://flotweb.com/services/strategie-digitale",
  },
  openGraph: {
    title: "Stratégie Digitale | Flot Web",
    description: "Accompagnement complet dans votre transformation digitale : branding, contenus et présence en ligne.",
    url: "https://flotweb.com/services/strategie-digitale",
    type: "website",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Stratégie Digitale",
  description: "Accompagnement en stratégie digitale, audit de présence en ligne, branding et stratégie de contenu.",
  provider: { "@type": "Organization", name: "Flot Web", url: "https://flotweb.com" },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Stratégie digitale",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://flotweb.com" },
    { "@type": "ListItem", position: 2, name: "Stratégie Digitale", item: "https://flotweb.com/services/strategie-digitale" },
  ],
};

const benefits = [
  "Audit complet de votre présence digitale actuelle",
  "Définition des personas et parcours client",
  "Stratégie de contenu et calendrier éditorial",
  "Branding cohérent sur tous les canaux",
  "KPIs et tableaux de bord de suivi",
  "Accompagnement trimestriel et ajustements",
];

const features = [
  { icon: Target, title: "Audit & Diagnostic", description: "Analyse complète de votre présence digitale : site, réseaux sociaux, concurrence et opportunités de marché." },
  { icon: Users, title: "Personas & Parcours", description: "Identification de vos clients idéaux et cartographie de leurs parcours pour maximiser chaque point de contact." },
  { icon: TrendingUp, title: "Croissance Mesurable", description: "KPIs clairs, tableaux de bord et rapports trimestriels pour suivre votre progression et ajuster la stratégie." },
];

export default function StrategieDigitalePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Stratégie Digitale
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
              Une stratégie qui{" "}
              <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">génère des résultats</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-pale/70">
              Les entreprises avec une stratégie digitale claire croissent 2,8x plus vite. Nous transformons votre vision en un plan d&apos;action concret et mesurable.
            </p>
          </div>

          <section className="mb-20">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">Pourquoi une stratégie digitale</h2>
              <p className="text-text-pale/80 leading-relaxed">
                Sans roadmap, les investissements numériques sont dispersés et inefficaces. Une stratégie cohérente aligne votre présence en ligne avec vos objectifs business et maximise chaque euro investi. C&apos;est la différence entre naviguer à vue et avancer avec un cap précis.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">Notre approche stratégique</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-glow mb-4">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-white-clean mb-2">{feature.title}</h3>
                    <p className="text-sm text-text-pale/70 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">Ce que nous mettons en place</h2>
            <div className="mx-auto max-w-2xl">
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary-glow" />
                    <span className="text-text-pale/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Services complémentaires */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-8">Services complémentaires</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Référencement SEO", href: "/services/referencement-seo", desc: "Exécutez votre stratégie SEO" },
                { title: "Création de Site Web", href: "/services/creation-site-web", desc: "Concrétisez votre stratégie en site" },
                { title: "Design UI/UX", href: "/services/design-ui-ux", desc: "Un design aligné avec votre marque" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="rounded-2xl border border-glass-border bg-glass-bg p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-white-clean mb-1">{s.title}</h3>
                  <p className="text-xs text-text-pale/60">{s.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold text-white-clean mb-4">Bâtissons votre stratégie digitale</h2>
            <p className="mx-auto max-w-xl text-text-pale/70 mb-8">
              Consultation stratégique gratuite. Discutons de vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacter" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25">
                Consultation gratuite <ArrowRight size={16} />
              </Link>
              <Link href="/#services" className="inline-flex items-center justify-center rounded-xl border border-glass-border px-8 py-4 text-sm font-medium text-text-pale/70 transition-all duration-300 hover:border-primary/30 hover:text-white-clean">
                Voir tous nos services
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
