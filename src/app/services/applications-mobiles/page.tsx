import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, CheckCircle2, ArrowRight, Bell, Cpu, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Apps Mobiles iOS & Android - React Native",
  description:
    "Développement d'applications mobiles iOS et Android avec React Native. Applications cross-platform performantes, notifications push, publication App Store et Google Play. Devis gratuit.",
  alternates: {
    canonical: "https://flotweb.com/services/applications-mobiles",
  },
  openGraph: {
    title: "Applications Mobiles iOS & Android | Flot Web",
    description: "Applications mobiles cross-platform performantes avec React Native. iOS et Android depuis un code unique.",
    url: "https://flotweb.com/services/applications-mobiles",
    type: "website",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développement d'Applications Mobiles",
  description: "Applications iOS et Android cross-platform avec React Native. Performances natives, notifications push et publication stores.",
  provider: { "@type": "Organization", name: "Flot Web", url: "https://flotweb.com" },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Développement mobile",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://flotweb.com" },
    { "@type": "ListItem", position: 2, name: "Applications Mobiles", item: "https://flotweb.com/services/applications-mobiles" },
  ],
};

const benefits = [
  "Applications React Native cross-platform (iOS + Android)",
  "Interface native fluide et performante",
  "Notifications push et engagement utilisateur",
  "Intégration avec vos APIs et services existants",
  "Publication App Store et Google Play",
  "Mises à jour OTA (Over-The-Air) sans redéploiement",
];

const features = [
  { icon: Cpu, title: "Performance Native", description: "React Native offre des performances proches du natif avec un seul codebase pour iOS et Android. Animations à 60 fps garanties." },
  { icon: Bell, title: "Engagement Utilisateur", description: "Notifications push, deep linking et fonctionnalités offline pour garder vos utilisateurs engagés et fidèles." },
  { icon: Rocket, title: "Déploiement Rapide", description: "Publication sur App Store et Google Play, avec mises à jour OTA pour déployer des corrections sans passer par les stores." },
];

export default function ApplicationsMobilesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Applications Mobiles
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
              Votre app sur{" "}
              <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">iOS & Android</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-pale/70">
              Le mobile représente plus de 60 % du trafic web mondial. Une application dédiée augmente l&apos;engagement de 300 % par rapport à un site mobile.
            </p>
          </div>

          <section className="mb-20">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">Pourquoi une application mobile</h2>
              <p className="text-text-pale/80 leading-relaxed">
                Les utilisateurs passent 90 % de leur temps mobile dans des applications. Une app bien conçue offre une expérience premium et fidélise vos utilisateurs comme aucun autre canal. C&apos;est le moyen le plus direct de communiquer avec vos clients.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">Notre expertise mobile</h2>
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
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">Ce que nous développons</h2>
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
                { title: "Design UI/UX", href: "/services/design-ui-ux", desc: "Un design mobile pensé utilisateur" },
                { title: "Création de Site Web", href: "/services/creation-site-web", desc: "Complétez avec un site web" },
                { title: "Maintenance & Sécurité", href: "/services/maintenance-securite", desc: "Maintenez votre app à jour" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="rounded-2xl border border-glass-border bg-glass-bg p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-white-clean mb-1">{s.title}</h3>
                  <p className="text-xs text-text-pale/60">{s.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold text-white-clean mb-4">Lancez votre application</h2>
            <p className="mx-auto max-w-xl text-text-pale/70 mb-8">
              De l&apos;idée à la publication sur les stores. Devis gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacter" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25">
                Discuter de votre app <ArrowRight size={16} />
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
