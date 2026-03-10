import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  FileText,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Référencement SEO | Agence SEO Paris - Positionnement Google",
  description:
    "Agence SEO à Paris. Audit SEO complet, optimisation on-page, SEO technique, stratégie de contenu. Améliorez votre positionnement Google et générez du trafic qualifié. Devis gratuit.",
  alternates: {
    canonical: "https://flotweb.com/services/referencement-seo",
  },
  openGraph: {
    title: "Référencement SEO | Flot Web - Agence SEO Paris",
    description:
      "Stratégies SEO avancées pour hisser votre site en tête des résultats Google. Audit, optimisation, contenu et suivi.",
    url: "https://flotweb.com/services/referencement-seo",
    type: "website",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Référencement SEO",
  description:
    "Audit SEO complet, optimisation on-page et technique, stratégie de contenu pour améliorer le positionnement Google.",
  provider: {
    "@type": "Organization",
    name: "Flot Web",
    url: "https://flotweb.com",
  },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Référencement naturel SEO",
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
      name: "Référencement SEO",
      item: "https://flotweb.com/services/referencement-seo",
    },
  ],
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps faut-il pour voir les résultats du SEO ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les premiers résultats SEO apparaissent généralement entre 3 et 6 mois. Les améliorations techniques (vitesse, indexation) ont un impact plus rapide, tandis que le positionnement sur des mots-clés compétitifs prend plus de temps. Le SEO est un investissement durable qui s'amplifie avec le temps.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre SEO et SEA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le SEO (référencement naturel) optimise votre site pour apparaître gratuitement dans les résultats Google. Le SEA (publicité payante) achète des positions via Google Ads. Le SEO génère du trafic durable sans coût par clic, tandis que le SEA s'arrête dès que vous cessez de payer.",
      },
    },
    {
      "@type": "Question",
      name: "Comment Flot Web améliore le référencement de mon site ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous réalisons un audit SEO complet (crawlabilité, indexation, performance), optimisons la structure technique, les balises meta, le contenu et le maillage interne. Nous suivons les Core Web Vitals et fournissons des rapports mensuels de progression.",
      },
    },
  ],
};

const benefits = [
  "Audit SEO complet : crawlabilité, indexation, performance",
  "Recherche de mots-clés et analyse concurrentielle",
  "Optimisation on-page : meta tags, structure Hn, schema markup",
  "SEO technique : vitesse, Core Web Vitals, sitemap XML",
  "Stratégie de contenu et maillage interne optimisé",
  "Suivi mensuel et rapports de positionnement",
];

const features = [
  {
    icon: BarChart3,
    title: "Audit & Analyse",
    description:
      "Audit complet de votre site : crawlabilité, indexation, structure, vitesse et analyse concurrentielle détaillée.",
  },
  {
    icon: FileText,
    title: "Contenu Optimisé",
    description:
      "Recherche de mots-clés, optimisation des balises meta, structure Hn et création de contenu SEO-friendly.",
  },
  {
    icon: Globe,
    title: "SEO Technique",
    description:
      "Core Web Vitals, sitemap XML, robots.txt, données structurées et optimisation de la vitesse de chargement.",
  },
];

export default function ReferencementSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Référencement SEO
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
              Dominez les résultats{" "}
              <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
                Google
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-pale/70">
              93 % des expériences en ligne commencent par un moteur de
              recherche. Le SEO génère 10x plus de trafic que les réseaux
              sociaux. C&apos;est un investissement durable qui rapporte des
              clients chaque jour.
            </p>
          </div>

          {/* Why SEO */}
          <section className="mb-20">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">
                Pourquoi le SEO est indispensable
              </h2>
              <p className="text-text-pale/80 leading-relaxed">
                Sans référencement, même le plus beau site reste invisible pour
                vos clients potentiels. Le SEO vous positionne devant vos
                concurrents dans les résultats Google, là où vos prospects
                cherchent activement vos services. Contrairement à la publicité
                payante, le trafic SEO est gratuit et durable.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">
              Notre méthodologie SEO
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-glow mb-4">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-white-clean mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-pale/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">
              Ce que nous optimisons
            </h2>
            <div className="mx-auto max-w-2xl">
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-primary-glow"
                    />
                    <span className="text-text-pale/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Approach */}
          <section className="mb-20">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">
                Notre approche
              </h2>
              <p className="text-text-pale/80 leading-relaxed">
                Notre méthodologie suit un framework d&apos;audit rigoureux :
                crawlabilité et indexation d&apos;abord, puis fondations
                techniques, optimisation on-page, qualité du contenu et
                autorité. Nous utilisons des données concrètes pour des
                résultats mesurables et fournissons des rapports détaillés
                chaque mois.
              </p>
            </div>
          </section>

          {/* Services complémentaires */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-8">Services complémentaires</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Création de Site Web", href: "/services/creation-site-web", desc: "Un site performant à optimiser" },
                { title: "Stratégie Digitale", href: "/services/strategie-digitale", desc: "Alignez SEO et objectifs business" },
                { title: "Maintenance & Sécurité", href: "/services/maintenance-securite", desc: "Gardez vos performances SEO" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="rounded-2xl border border-glass-border bg-glass-bg p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-white-clean mb-1">{s.title}</h3>
                  <p className="text-xs text-text-pale/60">{s.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-white-clean mb-4">
              Boostez votre visibilité Google
            </h2>
            <p className="mx-auto max-w-xl text-text-pale/70 mb-8">
              Audit SEO gratuit de votre site. Découvrez vos opportunités de
              croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacter"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
              >
                Demander un audit SEO gratuit
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/#tarifs"
                className="inline-flex items-center justify-center rounded-xl border border-glass-border px-8 py-4 text-sm font-medium text-text-pale/70 transition-all duration-300 hover:border-primary/30 hover:text-white-clean"
              >
                Voir nos tarifs
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}