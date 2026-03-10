import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code2,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Création de Site Web Sur-Mesure | Développement Next.js & React",
  description:
    "Création de sites web professionnels sur-mesure avec Next.js et React. Sites vitrines, e-commerce, applications web. Performance optimale, SEO intégré, responsive design. Devis gratuit.",
  alternates: {
    canonical: "https://flotweb.com/services/creation-site-web",
  },
  openGraph: {
    title: "Création de Site Web Sur-Mesure | Flot Web",
    description:
      "Sites web professionnels haute performance avec Next.js et React. Score Lighthouse > 95, SEO intégré, design responsive.",
    url: "https://flotweb.com/services/creation-site-web",
    type: "website",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création de Site Web Sur-Mesure",
  description:
    "Développement de sites web professionnels avec Next.js et React. Sites vitrines, e-commerce et applications web haute performance.",
  provider: {
    "@type": "Organization",
    name: "Flot Web",
    url: "https://flotweb.com",
  },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Développement Web",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "399",
    highPrice: "1099",
    priceCurrency: "EUR",
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
      name: "Création de Site Web",
      item: "https://flotweb.com/services/creation-site-web",
    },
  ],
};

const benefits = [
  "Architecture Next.js App Router optimisée (SSR, SSG, ISR)",
  "Score Lighthouse > 95 sur toutes les métriques",
  "Code sémantique et accessible (WCAG 2.1)",
  "Responsive design parfait sur tous les écrans",
  "Intégration API, bases de données et CMS headless",
  "Déploiement Vercel avec CI/CD automatisé",
];

const features = [
  {
    icon: Zap,
    title: "Performance Maximale",
    description:
      "Chargement instantané grâce au rendu serveur, au code splitting et à l'optimisation automatique des images.",
  },
  {
    icon: Shield,
    title: "Sécurité Intégrée",
    description:
      "Headers de sécurité, protection CSRF, validation côté serveur et bonnes pratiques OWASP.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description:
      "Design responsive pensé mobile en premier pour une expérience parfaite sur tous les appareils.",
  },
];

export default function CreationSiteWebPage() {
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
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Développement Web
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
              Création de{" "}
              <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
                sites web sur-mesure
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-pale/70">
              Nous concevons des sites et applications web haute performance
              avec Next.js et React — les technologies utilisées par Vercel,
              Netflix et Airbnb.
            </p>
          </div>

          {/* Why it matters */}
          <section className="mb-20">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">
                Pourquoi un site web professionnel est essentiel
              </h2>
              <p className="text-text-pale/80 leading-relaxed">
                75 % des utilisateurs jugent la crédibilité d&apos;une
                entreprise sur le design de son site. Un développement
                professionnel garantit rapidité, sécurité et une expérience
                utilisateur irréprochable. Votre site est votre vitrine
                digitale, disponible 24h/24 pour convaincre vos prospects.
              </p>
            </div>
          </section>

          {/* Features grid */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">
              Notre expertise technique
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
              Ce que Flot Web vous apporte
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
                Nous appliquons les meilleures pratiques d&apos;ingénierie :
                élimination des waterfalls réseau, optimisation des bundles
                JavaScript, rendu côté serveur parallélisé et Suspense
                boundaries pour un chargement instantané. Chaque site est testé
                sur les métriques Core Web Vitals avant livraison.
              </p>
            </div>
          </section>

          {/* Pricing summary */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">
              Nos formules
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "399",
                  desc: "Site vitrine 1 page",
                },
                {
                  name: "Essentiel",
                  price: "799",
                  desc: "1 à 5 pages sur-mesure",
                },
                {
                  name: "Premium",
                  price: "1 099",
                  desc: "5 à 10 pages + fonctionnalités avancées",
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border border-glass-border bg-glass-bg p-6 text-center backdrop-blur-md"
                >
                  <h3 className="text-lg font-semibold text-white-clean">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-3xl font-extrabold text-primary-glow">
                    {plan.price}€
                  </p>
                  <p className="mt-2 text-sm text-text-pale/70">{plan.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services complémentaires */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-8">Services complémentaires</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Référencement SEO", href: "/services/referencement-seo", desc: "Rendez votre site visible sur Google" },
                { title: "Design UI/UX", href: "/services/design-ui-ux", desc: "Des interfaces qui convertissent" },
                { title: "Maintenance & Sécurité", href: "/services/maintenance-securite", desc: "Protégez votre investissement" },
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
              Prêt à lancer votre projet web ?
            </h2>
            <p className="mx-auto max-w-xl text-text-pale/70 mb-8">
              Discutons de votre projet. Devis gratuit sous 24h, sans
              engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacter"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
              >
                Demander un devis gratuit
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/#tarifs"
                className="inline-flex items-center justify-center rounded-xl border border-glass-border px-8 py-4 text-sm font-medium text-text-pale/70 transition-all duration-300 hover:border-primary/30 hover:text-white-clean"
              >
                Voir tous les tarifs
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
