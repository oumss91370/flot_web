import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Anchor, Target, Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos | Notre Agence Digitale à Paris",
  description:
    "Découvrez Flot Web, agence digitale premium à Paris. Notre mission : propulser les entreprises ambitieuses avec des sites web sur-mesure, un SEO performant et un design UI/UX d'exception.",
  alternates: {
    canonical: "https://flotweb.com/a-propos",
  },
  openGraph: {
    title: "À Propos de Flot Web | Agence Digitale Premium",
    description:
      "Une équipe passionnée au service de votre réussite digitale. Création web, SEO et design UI/UX.",
    url: "https://flotweb.com/a-propos",
    type: "website",
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://flotweb.com" },
    { "@type": "ListItem", position: 2, name: "À Propos", item: "https://flotweb.com/a-propos" },
  ],
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Chaque projet est traité avec le plus haut niveau d'exigence. Score Lighthouse > 95, code propre et maintenable, design pixel-perfect.",
  },
  {
    icon: Users,
    title: "Transparence",
    description:
      "Pas de jargon inutile, pas de coûts cachés. Vous savez exactement ce que vous obtenez, à quel prix et dans quel délai.",
  },
  {
    icon: Heart,
    title: "Accompagnement",
    description:
      "Nous ne livrons pas un site pour disparaître. Support réactif, maintenance continue et conseils stratégiques sur le long terme.",
  },
  {
    icon: Anchor,
    title: "Innovation",
    description:
      "Next.js, React, Vercel — nous utilisons les technologies les plus performantes du marché pour vous donner un avantage concurrentiel.",
  },
];

export default function AProposPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
              À Propos
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
              Votre succès digital,{" "}
              <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
                notre cap
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-pale/70">
              Flot Web est une agence digitale premium basée à Paris. Nous accompagnons les entreprises ambitieuses dans leur transformation numérique.
            </p>
          </div>

          {/* Notre histoire */}
          <section className="mb-20">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">Notre mission</h2>
              <p className="text-text-pale/80 leading-relaxed mb-4">
                Nous croyons que chaque entreprise mérite une présence en ligne à la hauteur de ses ambitions. Trop de sites web sont lents, mal référencés ou visuellement datés. Notre mission est de changer cela.
              </p>
              <p className="text-text-pale/80 leading-relaxed">
                Nous combinons les technologies les plus performantes (<strong className="text-white-clean">Next.js, React, Vercel</strong>) avec un design soigné et une stratégie SEO rigoureuse pour créer des sites qui <strong className="text-white-clean">convertissent</strong>.
              </p>
            </div>
          </section>

          {/* Nos valeurs */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">Nos valeurs</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-semibold text-white-clean">{value.title}</h3>
                    </div>
                    <p className="text-sm text-text-pale/70 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Notre expertise */}
          <section className="mb-20">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">Notre expertise</h2>
              <p className="text-text-pale/80 leading-relaxed mb-4">
                Notre équipe maîtrise l&apos;ensemble de la chaîne de création digitale :
              </p>
              <div className="grid gap-4 sm:grid-cols-2 mt-6">
                <Link href="/services/creation-site-web" className="flex items-center gap-2 text-text-pale/80 hover:text-primary-glow transition-colors">
                  <ArrowRight size={14} className="text-primary-glow" />
                  Création de sites web sur-mesure
                </Link>
                <Link href="/services/referencement-seo" className="flex items-center gap-2 text-text-pale/80 hover:text-primary-glow transition-colors">
                  <ArrowRight size={14} className="text-primary-glow" />
                  Référencement SEO avancé
                </Link>
                <Link href="/services/design-ui-ux" className="flex items-center gap-2 text-text-pale/80 hover:text-primary-glow transition-colors">
                  <ArrowRight size={14} className="text-primary-glow" />
                  Design UI/UX premium
                </Link>
                <Link href="/services/maintenance-securite" className="flex items-center gap-2 text-text-pale/80 hover:text-primary-glow transition-colors">
                  <ArrowRight size={14} className="text-primary-glow" />
                  Maintenance et sécurité
                </Link>
                <Link href="/services/strategie-digitale" className="flex items-center gap-2 text-text-pale/80 hover:text-primary-glow transition-colors">
                  <ArrowRight size={14} className="text-primary-glow" />
                  Stratégie digitale
                </Link>
                <Link href="/services/applications-mobiles" className="flex items-center gap-2 text-text-pale/80 hover:text-primary-glow transition-colors">
                  <ArrowRight size={14} className="text-primary-glow" />
                  Applications mobiles
                </Link>
              </div>
            </div>
          </section>

          {/* Chiffres */}
          <section className="mb-20">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { value: "24h", label: "Délai de réponse garanti" },
                { value: "95+", label: "Score Lighthouse moyen" },
                { value: "100%", label: "Sites responsive et SEO-ready" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-glass-border bg-glass-bg p-8 text-center backdrop-blur-md">
                  <p className="text-4xl font-extrabold text-primary-glow">{stat.value}</p>
                  <p className="mt-2 text-sm text-text-pale/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-white-clean mb-4">Prêt à naviguer avec nous ?</h2>
            <p className="mx-auto max-w-xl text-text-pale/70 mb-8">
              Discutons de votre projet. Devis gratuit sous 24h, sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacter" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25">
                Discutons de votre projet <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-xl border border-glass-border px-8 py-4 text-sm font-medium text-text-pale/70 transition-all duration-300 hover:border-primary/30 hover:text-white-clean">
                Découvrir nos services
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
