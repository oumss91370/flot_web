import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Le guide SEO complet pour les PME : de 0 à la première page Google",
  description:
    "Apprenez les bases du référencement naturel : recherche de mots-clés, optimisation on-page, SEO technique et stratégie de contenu. Guide étape par étape pour les PME et entrepreneurs.",
  alternates: {
    canonical: "https://flotweb.com/blog/guide-seo-debutant-pme",
  },
  openGraph: {
    title: "Le guide SEO complet pour les PME",
    description:
      "De 0 à la première page Google : mots-clés, balises meta, contenu optimisé et SEO technique.",
    url: "https://flotweb.com/blog/guide-seo-debutant-pme",
    type: "article",
    publishedTime: "2025-02-15T00:00:00Z",
    authors: ["Flot Web"],
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Le guide SEO complet pour les PME : de 0 à la première page Google",
  description: "Guide étape par étape du référencement naturel pour les PME et entrepreneurs.",
  datePublished: "2025-02-15",
  dateModified: "2025-02-15",
  author: { "@type": "Organization", name: "Flot Web", url: "https://flotweb.com" },
  publisher: {
    "@type": "Organization",
    name: "Flot Web",
    logo: { "@type": "ImageObject", url: "https://flotweb.com/images/logo_flot.png" },
  },
  mainEntityOfPage: "https://flotweb.com/blog/guide-seo-debutant-pme",
  inLanguage: "fr-FR",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://flotweb.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://flotweb.com/blog" },
    { "@type": "ListItem", position: 3, name: "Guide SEO PME", item: "https://flotweb.com/blog/guide-seo-debutant-pme" },
  ],
};

const checklist = [
  "Chaque page a un title unique (< 60 caractères)",
  "Chaque page a une meta description unique (< 160 caractères)",
  "Structure Hn logique (un seul H1, puis H2, H3...)",
  "Images avec attributs alt descriptifs",
  "URLs propres et lisibles",
  "Site responsive et rapide (< 3 secondes)",
  "Sitemap XML soumis à Google Search Console",
  "Fichier robots.txt configuré",
  "Données structurées JSON-LD",
  "Liens internes entre les pages",
];

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-6 lg:px-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary-glow hover:underline mb-8">
            <ArrowLeft size={14} /> Retour au blog
          </Link>

          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-glow mb-4">
            SEO
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white-clean sm:text-4xl leading-tight">
            Le guide SEO complet pour les PME : de 0 à la première page Google
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-text-pale/50">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> 15 février 2025</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 8 min de lecture</span>
          </div>

          <div className="mt-10 space-y-8 text-text-pale/80 leading-relaxed">
            <p>
              Le <Link href="/services/referencement-seo" className="text-primary-glow hover:underline">référencement naturel (SEO)</Link> est le meilleur levier d&apos;acquisition pour les PME. Contrairement à la publicité, il génère un trafic gratuit et durable. Ce guide vous accompagne étape par étape.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Étape 1 : Comprendre ce que Google veut</h2>
            <p>
              Google a un objectif simple : fournir la <strong className="text-white-clean">meilleure réponse</strong> à la question de l&apos;utilisateur. Pour bien vous positionner, votre contenu doit être pertinent, complet et facile d&apos;accès.
            </p>
            <p>
              Les trois piliers du SEO sont : le <strong className="text-white-clean">contenu</strong> (pertinence), la <strong className="text-white-clean">technique</strong> (accessibilité) et l&apos;<strong className="text-white-clean">autorité</strong> (confiance).
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Étape 2 : La recherche de mots-clés</h2>
            <p>
              Avant de créer du contenu, identifiez ce que vos clients recherchent. Utilisez des outils gratuits comme Google Suggest, Google Trends ou la section &quot;Autres questions posées&quot; de Google.
            </p>
            <p>
              Ciblez des <strong className="text-white-clean">mots-clés longue traîne</strong> (3-5 mots). Par exemple, &quot;agence création site web Paris&quot; est plus facile à cibler que &quot;site web&quot;. Ces requêtes ont moins de volume mais convertissent mieux car elles sont plus précises.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Étape 3 : Optimisation on-page</h2>
            <p>
              Chaque page de votre site doit être optimisée individuellement :
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Balise title</strong> : incluez votre mot-clé principal, moins de 60 caractères</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Meta description</strong> : résumé attractif de 150-160 caractères avec le mot-clé</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Structure Hn</strong> : un seul H1 par page, puis H2 et H3 pour organiser le contenu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">URLs propres</strong> : courtes, lisibles, avec le mot-clé (ex: /blog/guide-seo-pme)</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white-clean">Étape 4 : Le SEO technique</h2>
            <p>
              Le SEO technique garantit que Google peut explorer et indexer votre site correctement. Les éléments essentiels :
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Vitesse de chargement</strong> : moins de 3 secondes, optimisez les images et le code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Mobile-first</strong> : Google indexe d&apos;abord la version mobile de votre site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">Sitemap XML</strong> : guide Google vers toutes vos pages importantes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-glow mt-1">•</span>
                <span><strong className="text-white-clean">HTTPS</strong> : certificat SSL obligatoire, signal de confiance pour Google</span>
              </li>
            </ul>
            <p>
              Consultez notre article sur les <Link href="/blog/core-web-vitals-impact-seo" className="text-primary-glow hover:underline">Core Web Vitals</Link> pour approfondir l&apos;aspect performance.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Étape 5 : Le maillage interne</h2>
            <p>
              Les liens internes entre vos pages distribuent l&apos;&quot;autorité SEO&quot; et aident Google à comprendre la structure de votre site. Reliez vos articles de blog à vos <Link href="/services" className="text-primary-glow hover:underline">pages de services</Link>, vos services entre eux, et ajoutez des liens contextuels pertinents dans votre contenu.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Étape 6 : Mesurer et ajuster</h2>
            <p>
              Le SEO n&apos;est pas du one-shot. Utilisez <strong className="text-white-clean">Google Search Console</strong> (gratuit) pour suivre vos positions, identifier les pages qui performent et celles qui ont besoin d&apos;optimisation. Analysez vos données chaque mois et ajustez votre stratégie.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Checklist SEO pour votre site</h2>
            <div className="rounded-2xl border border-glass-border bg-glass-bg p-6">
              <ul className="space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary-glow" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <p className="text-lg font-bold text-white-clean mb-2">Besoin d&apos;aide avec votre SEO ?</p>
              <p className="text-sm text-text-pale/70 mb-6">Audit SEO gratuit de votre site. Découvrez vos opportunités.</p>
              <Link
                href="/contacter"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
              >
                Demander un audit SEO gratuit <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
