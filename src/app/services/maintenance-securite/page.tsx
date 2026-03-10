import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, CheckCircle2, ArrowRight, Activity, Lock, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Maintenance & Sécurité Web 24/7",
  description:
    "Maintenance et sécurité de sites web. Surveillance 24/7, mises à jour automatiques, sauvegardes quotidiennes, protection DDoS, monitoring Core Web Vitals. Gardez votre site performant et sécurisé.",
  alternates: {
    canonical: "https://flotweb.com/services/maintenance-securite",
  },
  openGraph: {
    title: "Maintenance & Sécurité Web | Flot Web",
    description: "Surveillance 24/7, mises à jour régulières et protection avancée pour un site toujours performant et sécurisé.",
    url: "https://flotweb.com/services/maintenance-securite",
    type: "website",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maintenance & Sécurité Web",
  description: "Surveillance 24/7, mises à jour automatiques, sauvegardes et protection avancée pour sites web.",
  provider: { "@type": "Organization", name: "Flot Web", url: "https://flotweb.com" },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Maintenance et sécurité web",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://flotweb.com" },
    { "@type": "ListItem", position: 2, name: "Maintenance & Sécurité", item: "https://flotweb.com/services/maintenance-securite" },
  ],
};

const benefits = [
  "Surveillance 24/7 avec alertes en temps réel",
  "Mises à jour de sécurité et correctifs automatiques",
  "Sauvegardes quotidiennes et restauration rapide",
  "Monitoring des performances et Core Web Vitals",
  "Protection DDoS et pare-feu applicatif (WAF)",
  "Rapports mensuels détaillés de santé du site",
];

const features = [
  { icon: Activity, title: "Monitoring Continu", description: "Surveillance en temps réel de la disponibilité, de la vitesse et des erreurs. Alertes instantanées en cas d'anomalie." },
  { icon: Lock, title: "Sécurité Renforcée", description: "Protection contre les injections SQL, XSS, CSRF et attaques DDoS. Headers de sécurité et certificats SSL gérés." },
  { icon: RefreshCw, title: "Mises à Jour Automatiques", description: "Dépendances, frameworks et plugins maintenus à jour pour combler les failles de sécurité connues." },
];

export default function MaintenanceSecuritePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Maintenance & Sécurité
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
              Votre site, toujours{" "}
              <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">protégé</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-pale/70">
              43 % des cyberattaques ciblent les petites entreprises. La maintenance préventive coûte 10x moins qu&apos;une réparation d&apos;urgence.
            </p>
          </div>

          <section className="mb-20">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">Pourquoi la maintenance est essentielle</h2>
              <p className="text-text-pale/80 leading-relaxed">
                Un site non maintenu perd en moyenne 7 % de trafic par mois à cause de la dégradation technique. Failles de sécurité, dépendances obsolètes, certificats expirés : chaque risque ignoré est une porte ouverte aux problèmes. Nous assurons la tranquillité d&apos;esprit.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">Nos services de maintenance</h2>
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
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">Ce que nous couvrons</h2>
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
                { title: "Création de Site Web", href: "/services/creation-site-web", desc: "Un site bien construit, facile à maintenir" },
                { title: "Référencement SEO", href: "/services/referencement-seo", desc: "Optimisez en continu votre visibilité" },
                { title: "Stratégie Digitale", href: "/services/strategie-digitale", desc: "Planifiez votre croissance long terme" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="rounded-2xl border border-glass-border bg-glass-bg p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-white-clean mb-1">{s.title}</h3>
                  <p className="text-xs text-text-pale/60">{s.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold text-white-clean mb-4">Protégez votre investissement</h2>
            <p className="mx-auto max-w-xl text-text-pale/70 mb-8">
              Audit de sécurité gratuit. Découvrez les vulnérabilités de votre site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacter" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25">
                Demander un audit sécurité <ArrowRight size={16} />
              </Link>
              <Link href="/#tarifs" className="inline-flex items-center justify-center rounded-xl border border-glass-border px-8 py-4 text-sm font-medium text-text-pale/70 transition-all duration-300 hover:border-primary/30 hover:text-white-clean">
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
