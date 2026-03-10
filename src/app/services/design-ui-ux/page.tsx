import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Palette, CheckCircle2, ArrowRight, Eye, Layers, MousePointerClick } from "lucide-react";

export const metadata: Metadata = {
  title: "Design UI/UX Premium - Interfaces Web",
  description:
    "Design UI/UX professionnel pour sites web et applications. Maquettes Figma, design system, animations fluides, accessibilité. Augmentez vos conversions de 200 %. Devis gratuit.",
  alternates: {
    canonical: "https://flotweb.com/services/design-ui-ux",
  },
  openGraph: {
    title: "Design UI/UX Premium | Flot Web",
    description:
      "Interfaces élégantes et intuitives conçues pour captiver vos visiteurs et maximiser vos conversions.",
    url: "https://flotweb.com/services/design-ui-ux",
    type: "website",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Design UI/UX Premium",
  description:
    "Conception d'interfaces web modernes, intuitives et accessibles. Maquettes Figma, design system et animations premium.",
  provider: {
    "@type": "Organization",
    name: "Flot Web",
    url: "https://flotweb.com",
  },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Design UI/UX",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://flotweb.com" },
    { "@type": "ListItem", position: 2, name: "Design UI/UX", item: "https://flotweb.com/services/design-ui-ux" },
  ],
};

const benefits = [
  "Design system cohérent et identité visuelle forte",
  "Maquettes Figma interactives avant développement",
  "Tests d'utilisabilité et parcours utilisateur optimisés",
  "Animations fluides avec Framer Motion",
  "Glassmorphism, micro-interactions et effets premium",
  "Conformité accessibilité WCAG 2.1",
];

const features = [
  {
    icon: Eye,
    title: "Hiérarchie Visuelle",
    description: "Chaque élément guide l'utilisateur vers l'action souhaitée grâce à une hiérarchie visuelle claire et intuitive.",
  },
  {
    icon: Layers,
    title: "Design System",
    description: "Composants réutilisables, typographie cohérente et palette de couleurs harmonieuse pour une identité forte.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Optimisée",
    description: "Parcours utilisateur pensés pour maximiser les conversions : CTA stratégiques, formulaires optimisés, micro-interactions.",
  },
];

export default function DesignUiUxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Design UI/UX
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
              Des interfaces qui{" "}
              <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
                convertissent
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-pale/70">
              88 % des utilisateurs ne reviennent pas après une mauvaise expérience. Un design UI/UX professionnel augmente les conversions de 200 % en moyenne.
            </p>
          </div>

          <section className="mb-20">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">Le design, clé de votre succès digital</h2>
              <p className="text-text-pale/80 leading-relaxed">
                Le design va au-delà de l&apos;esthétique : il guide vos visiteurs vers l&apos;action. Chaque pixel sert votre taux de conversion. C&apos;est votre avantage concurrentiel le plus visible et le plus impactant.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">Notre expertise design</h2>
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
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">Ce que Flot Web vous apporte</h2>
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

          <section className="mb-20">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">Notre approche</h2>
              <p className="text-text-pale/80 leading-relaxed">
                Nous respectons les principes de design les plus exigeants : hiérarchie visuelle claire, accessibilité native, animations performantes et responsive design pixel-perfect. Chaque projet commence par des maquettes Figma interactives validées avec vous avant le développement.
              </p>
            </div>
          </section>

          {/* Services complémentaires */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-8">Services complémentaires</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Création de Site Web", href: "/services/creation-site-web", desc: "Développez votre design en site réel" },
                { title: "Applications Mobiles", href: "/services/applications-mobiles", desc: "Étendez votre design au mobile" },
                { title: "Stratégie Digitale", href: "/services/strategie-digitale", desc: "Un design aligné avec vos objectifs" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="rounded-2xl border border-glass-border bg-glass-bg p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-white-clean mb-1">{s.title}</h3>
                  <p className="text-xs text-text-pale/60">{s.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold text-white-clean mb-4">Créez une interface mémorable</h2>
            <p className="mx-auto max-w-xl text-text-pale/70 mb-8">
              Discutons de votre projet design. Devis gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacter" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25">
                Demander un devis gratuit <ArrowRight size={16} />
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