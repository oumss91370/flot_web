import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Web Vitals : Impact sur votre SEO",
  description:
    "Google utilise les Core Web Vitals (LCP, INP, CLS) comme facteur de classement. Découvrez comment optimiser ces métriques pour améliorer votre positionnement et vos conversions.",
  alternates: {
    canonical: "https://flotweb.com/blog/core-web-vitals-impact-seo",
  },
  openGraph: {
    title: "Core Web Vitals : comment la vitesse impacte votre SEO",
    description:
      "LCP, INP, CLS : optimisez les Core Web Vitals pour améliorer votre positionnement Google.",
    url: "https://flotweb.com/blog/core-web-vitals-impact-seo",
    type: "article",
    publishedTime: "2025-02-01T00:00:00Z",
    authors: ["Flot Web"],
  },
};


const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Core Web Vitals : comment la vitesse de votre site impacte votre SEO",
  description: "Guide complet sur les Core Web Vitals et leur impact sur le référencement Google.",
  datePublished: "2025-02-01",
  dateModified: "2025-02-01",
  author: { "@type": "Organization", name: "Flot Web", url: "https://flotweb.com" },
  publisher: {
    "@type": "Organization",
    name: "Flot Web",
    logo: { "@type": "ImageObject", url: "https://flotweb.com/images/logo_flot.png" },
  },
  mainEntityOfPage: "https://flotweb.com/blog/core-web-vitals-impact-seo",
  inLanguage: "fr-FR",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://flotweb.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://flotweb.com/blog" },
    { "@type": "ListItem", position: 3, name: "Core Web Vitals", item: "https://flotweb.com/blog/core-web-vitals-impact-seo" },
  ],
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que les Core Web Vitals ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les Core Web Vitals sont trois métriques de performance web mesurées par Google : LCP (Largest Contentful Paint) pour la vitesse de chargement, INP (Interaction to Next Paint) pour la réactivité, et CLS (Cumulative Layout Shift) pour la stabilité visuelle. Google les utilise comme facteur de classement SEO.",
      },
    },
    {
      "@type": "Question",
      name: "Comment améliorer le LCP de mon site ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour améliorer le LCP : optimisez les images (format WebP/AVIF, lazy loading), utilisez le rendu côté serveur (SSR), préchargez les ressources critiques, utilisez un CDN et minimisez le CSS/JS bloquant le rendu. L'objectif est un LCP inférieur à 2,5 secondes.",
      },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-6 lg:px-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary-glow hover:underline mb-8">
            <ArrowLeft size={14} /> Retour au blog
          </Link>

          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-glow mb-4">
            SEO Technique
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white-clean sm:text-4xl leading-tight">
            Core Web Vitals : comment la vitesse de votre site impacte votre SEO
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-text-pale/50">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> 1 février 2025</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 6 min de lecture</span>
          </div>

          <div className="mt-10 space-y-8 text-text-pale/80 leading-relaxed">
            <p>
              Depuis 2021, Google intègre les <strong className="text-white-clean">Core Web Vitals</strong> comme facteur de classement. Ce sont trois métriques qui mesurent l&apos;expérience utilisateur réelle de votre site. Un site rapide et stable est mieux positionné, et convertit mieux.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Les 3 métriques Core Web Vitals</h2>

            {/* LCP */}
            <div className="rounded-2xl border border-glass-border bg-glass-bg p-6">
              <h3 className="text-lg font-bold text-white-clean mb-2">LCP — Largest Contentful Paint</h3>
              <p className="text-sm mb-3">Mesure le temps de chargement du plus grand élément visible (image hero, titre principal).</p>
              <div className="flex gap-4 text-xs">
                <span className="rounded-full bg-green-500/20 text-green-400 px-3 py-1">Bon : &lt; 2,5s</span>
                <span className="rounded-full bg-yellow-500/20 text-yellow-400 px-3 py-1">Moyen : 2,5s - 4s</span>
                <span className="rounded-full bg-red-500/20 text-red-400 px-3 py-1">Mauvais : &gt; 4s</span>
              </div>
            </div>

            {/* INP */}
            <div className="rounded-2xl border border-glass-border bg-glass-bg p-6">
              <h3 className="text-lg font-bold text-white-clean mb-2">INP — Interaction to Next Paint</h3>
              <p className="text-sm mb-3">Mesure la réactivité aux interactions utilisateur (clics, taps, saisie clavier).</p>
              <div className="flex gap-4 text-xs">
                <span className="rounded-full bg-green-500/20 text-green-400 px-3 py-1">Bon : &lt; 200ms</span>
                <span className="rounded-full bg-yellow-500/20 text-yellow-400 px-3 py-1">Moyen : 200 - 500ms</span>
                <span className="rounded-full bg-red-500/20 text-red-400 px-3 py-1">Mauvais : &gt; 500ms</span>
              </div>
            </div>

            {/* CLS */}
            <div className="rounded-2xl border border-glass-border bg-glass-bg p-6">
              <h3 className="text-lg font-bold text-white-clean mb-2">CLS — Cumulative Layout Shift</h3>
              <p className="text-sm mb-3">Mesure la stabilité visuelle. Un CLS élevé signifie que des éléments bougent pendant le chargement.</p>
              <div className="flex gap-4 text-xs">
                <span className="rounded-full bg-green-500/20 text-green-400 px-3 py-1">Bon : &lt; 0,1</span>
                <span className="rounded-full bg-yellow-500/20 text-yellow-400 px-3 py-1">Moyen : 0,1 - 0,25</span>
                <span className="rounded-full bg-red-500/20 text-red-400 px-3 py-1">Mauvais : &gt; 0,25</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white-clean">Comment optimiser le LCP</h2>
            <p>Le LCP est souvent la métrique la plus impactante. Voici les optimisations clés :</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Optimisez les images</strong> : format WebP ou AVIF, dimensions adaptées, lazy loading pour les images hors écran</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Rendu côté serveur (SSR)</strong> : Next.js génère le HTML sur le serveur, le navigateur affiche le contenu immédiatement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Préchargez les ressources critiques</strong> : fonts, images hero et CSS critique avec des hints de préchargement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Utilisez un CDN</strong> : servez les fichiers depuis un point de présence proche de l&apos;utilisateur</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white-clean">Comment optimiser l&apos;INP</h2>
            <p>
              L&apos;INP remplace le FID depuis mars 2024. Il mesure la réactivité sur <strong className="text-white-clean">toute la durée de la visite</strong>, pas seulement la première interaction.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Réduisez le JavaScript</strong> : code splitting, tree shaking et imports dynamiques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Évitez les tâches longues</strong> : découpez les opérations lourdes avec requestIdleCallback ou Web Workers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Utilisez React Server Components</strong> : moins de JavaScript envoyé au navigateur</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white-clean">Comment optimiser le CLS</h2>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Définissez les dimensions des images</strong> : width et height pour réserver l&apos;espace avant le chargement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Préchargez les fonts</strong> : font-display: swap et préconnexion aux serveurs de fonts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Évitez les injections dynamiques</strong> : pas de bannières ou popups qui décalent le contenu</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white-clean">L&apos;avantage Next.js</h2>
            <p>
              Chez <Link href="/services/creation-site-web" className="text-primary-glow hover:underline">Flot Web</Link>, nous utilisons Next.js qui offre des optimisations natives pour les Core Web Vitals :
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span>Composant Image avec optimisation automatique (WebP/AVIF, lazy loading, dimensions)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span>Composant Font avec préchargement et font-display: swap automatique</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span>Server Components qui réduisent le JavaScript client de 30 à 50 %</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span>Streaming SSR avec Suspense pour un affichage progressif</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white-clean">Comment mesurer vos Core Web Vitals</h2>
            <p>
              Utilisez ces outils gratuits pour mesurer vos performances :
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Google PageSpeed Insights</strong> : données réelles et de laboratoire</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Google Search Console</strong> : rapport Core Web Vitals avec données terrain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Chrome DevTools Lighthouse</strong> : audit complet en local</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <p className="text-lg font-bold text-white-clean mb-2">Votre site est-il performant ?</p>
              <p className="text-sm text-text-pale/70 mb-6">Nous auditons gratuitement la vitesse et les Core Web Vitals de votre site.</p>
              <Link
                href="/contacter"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
              >
                Audit de performance gratuit <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
