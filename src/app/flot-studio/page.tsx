import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  MessageSquareText,
  BarChart3,
  Bot,
  Store,
  Video,
  Briefcase,
} from "lucide-react";

const PAGE_URL = "https://flotweb.com/flot-studio";
const STUDIO_URL = "https://flotstudio.com";
const TITLE = "Flot Studio, le logiciel de publication vidéo de Flot Web";
const DESCRIPTION =
  "Flot Studio, logiciel édité par Flot Web : publiez et programmez vos vidéos sur Instagram, Facebook, TikTok et YouTube, et répondez à vos commentaires avec l'IA.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Flot Web",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Flot Studio, logiciel de Flot Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Flot Studio",
  url: STUDIO_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  inLanguage: "fr-FR",
  description:
    "Logiciel de publication et de programmation de vidéos sur Instagram, Facebook, TikTok et YouTube, avec boîte de réception des commentaires et réponses proposées par l'IA.",
  publisher: {
    "@type": "Organization",
    name: "Flot Web",
    url: "https://flotweb.com",
  },
  mainEntityOfPage: PAGE_URL,
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://flotweb.com" },
    { "@type": "ListItem", position: 2, name: "Flot Studio", item: PAGE_URL },
  ],
};

const features = [
  {
    icon: CalendarClock,
    title: "Publier et programmer partout",
    description:
      "Préparez une vidéo une seule fois, choisissez vos comptes Instagram, Facebook, TikTok et YouTube, puis publiez tout de suite ou à la date de votre choix, depuis un seul espace.",
  },
  {
    icon: MessageSquareText,
    title: "Répondre aux commentaires avec l'IA",
    description:
      "Les commentaires arrivent dans une boîte de réception unique. L'IA propose une réponse, vous la relisez, la modifiez si besoin et la validez : rien ne part sans votre accord.",
  },
  {
    icon: BarChart3,
    title: "Suivre vos statistiques",
    description:
      "Retrouvez les statistiques de vos comptes et de vos publications au même endroit, sans passer d'une application à l'autre.",
  },
  {
    icon: Bot,
    title: "Un connecteur pour votre agent IA",
    description:
      "Flot Studio propose un connecteur pour votre agent IA : il peut préparer une publication, lire vos commentaires ou consulter vos statistiques, avec les mêmes règles que l'application.",
  },
];

const audiences = [
  {
    icon: Video,
    title: "Créateurs de contenu",
    description:
      "Vidéastes, formateurs, influenceurs : publiez la même vidéo sur tous vos réseaux et gardez le lien avec votre communauté.",
  },
  {
    icon: Store,
    title: "TPE et commerces",
    description:
      "Une boutique, un restaurant, un artisan : montrez votre activité en vidéo sans y passer vos soirées.",
  },
  {
    icon: Briefcase,
    title: "Indépendants",
    description:
      "Gérez seul votre présence sur les réseaux, avec un outil simple qui centralise publications et réponses.",
  },
];

const faqs = [
  {
    q: "Qu'est-ce que Flot Studio ?",
    a: "Flot Studio est un logiciel en ligne édité par Flot Web. Il sert à publier et programmer vos vidéos sur Instagram, Facebook, TikTok et YouTube depuis un seul espace, et à répondre à vos commentaires avec l'aide de l'IA.",
  },
  {
    q: "Flot Studio a-t-il un lien avec FL Studio ?",
    a: "Non. Flot Studio n'a aucun lien avec le logiciel de musique FL Studio. Flot Studio est un outil de publication vidéo pour les réseaux sociaux, édité par Flot Web, l'agence web qui gère ce site.",
  },
  {
    q: "L'IA répond-elle à ma place sans me demander ?",
    a: "Non. L'IA propose une réponse à chaque commentaire, mais c'est vous qui la validez avant l'envoi. Vous gardez la main sur ce qui est publié en votre nom.",
  },
  {
    q: "Quels réseaux sociaux sont pris en charge ?",
    a: "Flot Studio publie sur Instagram, Facebook, TikTok et YouTube. La boîte de réception des commentaires dépend de ce que chaque réseau autorise : tous ne donnent pas accès aux commentaires depuis un outil externe. Le détail par réseau est indiqué sur flotstudio.com.",
  },
  {
    q: "Comment commencer avec Flot Studio ?",
    a: "Rendez-vous sur flotstudio.com pour découvrir l'outil, consulter les offres et créer votre accès.",
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25";
const secondaryButton =
  "inline-flex items-center justify-center rounded-xl border border-glass-border px-8 py-4 text-sm font-medium text-text-pale/70 transition-all duration-300 hover:border-primary/30 hover:text-white-clean";
const textLink = "text-primary-glow underline-offset-4 hover:underline";

export default function FlotStudioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* ── Hero ── */}
          <section className="mb-20 text-center">
            <nav aria-label="Fil d'Ariane" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-pale/50">
                <li>
                  <Link href="/" className="transition-colors hover:text-primary-glow">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li className="text-text-pale/80">Flot Studio</li>
              </ol>
            </nav>
            <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Un logiciel édité par Flot Web
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
              <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
                Flot Studio
              </span>{" "}
              : publiez vos vidéos partout et répondez à vos commentaires avec l&apos;IA
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-pale/70">
              <a href={STUDIO_URL} className={textLink}>
                Flot Studio
              </a>{" "}
              est le logiciel de publication vidéo conçu par Flot Web. Il réunit au même endroit la
              publication sur Instagram, Facebook, TikTok et YouTube, les réponses aux commentaires et
              les statistiques de vos comptes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href={STUDIO_URL} className={primaryButton}>
                Découvrir Flot Studio <ArrowRight size={16} aria-hidden="true" />
              </a>
              <Link href="/contacter" className={secondaryButton}>
                Une question ? Contactez-nous
              </Link>
            </div>
          </section>

          {/* ── Ce que fait l'outil ── */}
          <section className="mb-20" aria-labelledby="fonctionnalites">
            <h2 id="fonctionnalites" className="mb-10 text-center text-2xl font-bold text-white-clean">
              Ce que fait Flot Studio
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                      <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white-clean">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-text-pale/70">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Pourquoi ── */}
          <section className="mb-20">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-8 md:p-10">
              <h2 className="mb-4 text-2xl font-bold text-white-clean">Un seul espace au lieu de quatre applications</h2>
              <p className="mb-4 leading-relaxed text-text-pale/80">
                Publier la même vidéo sur plusieurs réseaux oblige souvent à répéter les mêmes gestes : se
                connecter à chaque application, recopier la description, choisir l&apos;heure, puis revenir
                plus tard lire les commentaires un par un. Flot Studio regroupe ces étapes.
              </p>
              <ul className="space-y-3">
                {[
                  "Une vidéo préparée une fois, publiée sur les comptes choisis",
                  "Des publications programmées à l'avance",
                  "Des réponses proposées par l'IA, toujours validées par vous",
                  "Les statistiques de vos comptes réunies au même endroit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary-glow" aria-hidden="true" />
                    <span className="text-text-pale/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Pour qui ── */}
          <section className="mb-20" aria-labelledby="pour-qui">
            <h2 id="pour-qui" className="mb-10 text-center text-2xl font-bold text-white-clean">
              Pour qui ?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {audiences.map((a) => {
                const Icon = a.icon;
                return (
                  <div key={a.title} className="rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                      <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white-clean">{a.title}</h3>
                    <p className="text-sm leading-relaxed text-text-pale/70">{a.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="mb-20" aria-labelledby="faq">
            <h2 id="faq" className="mb-10 text-center text-2xl font-bold text-white-clean">
              Questions fréquentes sur Flot Studio
            </h2>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-glass-border bg-glass-bg p-6 backdrop-blur-md">
                  <h3 className="mb-2 text-base font-semibold text-white-clean">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-text-pale/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA final ── */}
          <section className="text-center">
            <div className="rounded-2xl border border-primary-glow/20 bg-primary-glow/5 p-10 md:p-14">
              <h2 className="mb-4 text-2xl font-bold text-white-clean">Essayez Flot Studio</h2>
              <p className="mx-auto mb-8 max-w-xl text-text-pale/70">
                Toutes les informations, les offres et l&apos;accès à l&apos;outil se trouvent sur le site
                officiel :{" "}
                <a href={STUDIO_URL} className={textLink}>
                  flotstudio.com
                </a>
                .
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a href={STUDIO_URL} className={primaryButton}>
                  Découvrir Flot Studio <ArrowRight size={16} aria-hidden="true" />
                </a>
                <Link href="/services" className={secondaryButton}>
                  Voir les services de l&apos;agence
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
