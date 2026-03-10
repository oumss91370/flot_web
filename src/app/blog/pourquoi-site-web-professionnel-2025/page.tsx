import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Site Web Pro : Pourquoi c'est Clé en 2025",
  description:
    "75 % des consommateurs jugent la crédibilité d'une entreprise sur son site web. Découvrez pourquoi un site professionnel est le meilleur investissement digital pour votre entreprise.",
  alternates: {
    canonical:
      "https://flotweb.com/blog/pourquoi-site-web-professionnel-2025",
  },
  openGraph: {
    title: "Pourquoi un site web professionnel est indispensable en 2025",
    description:
      "75 % des consommateurs jugent la crédibilité d'une entreprise sur son site. Investir dans un site professionnel est le meilleur ROI digital.",
    url: "https://flotweb.com/blog/pourquoi-site-web-professionnel-2025",
    type: "article",
    publishedTime: "2025-03-01T00:00:00Z",
    authors: ["Flot Web"],
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pourquoi un site web professionnel est indispensable en 2025",
  description:
    "75 % des consommateurs jugent la crédibilité d'une entreprise sur son site web.",
  datePublished: "2025-03-01",
  dateModified: "2025-03-01",
  author: { "@type": "Organization", name: "Flot Web", url: "https://flotweb.com" },
  publisher: {
    "@type": "Organization",
    name: "Flot Web",
    logo: { "@type": "ImageObject", url: "https://flotweb.com/images/logo_flot.png" },
  },
  mainEntityOfPage: "https://flotweb.com/blog/pourquoi-site-web-professionnel-2025",
  inLanguage: "fr-FR",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://flotweb.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://flotweb.com/blog" },
    { "@type": "ListItem", position: 3, name: "Pourquoi un site web professionnel", item: "https://flotweb.com/blog/pourquoi-site-web-professionnel-2025" },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-6 lg:px-10">
          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary-glow hover:underline mb-8">
            <ArrowLeft size={14} /> Retour au blog
          </Link>

          {/* Header */}
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-glow mb-4">
            Création Web
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white-clean sm:text-4xl leading-tight">
            Pourquoi un site web professionnel est indispensable en 2025
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-text-pale/50">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> 1 mars 2025</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 5 min de lecture</span>
          </div>

          {/* Content */}
          <div className="mt-10 space-y-8 text-text-pale/80 leading-relaxed">
            <p>
              En 2025, votre site web est bien plus qu&apos;une simple carte de visite en ligne. C&apos;est votre commercial le plus efficace, disponible 24h/24, 7j/7. Pourtant, de nombreuses entreprises négligent encore cet investissement.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">La première impression se joue en ligne</h2>
            <p>
              <strong className="text-white-clean">75 % des consommateurs</strong> jugent la crédibilité d&apos;une entreprise sur le design de son site web. Avant même de vous appeler ou de visiter votre boutique, vos prospects vous évaluent en ligne. Un site daté, lent ou mal conçu envoie un signal négatif immédiat.
            </p>
            <p>
              À l&apos;inverse, un site professionnel et moderne inspire confiance instantanément. Il montre que vous prenez votre activité au sérieux et que vous investissez dans la qualité.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Un site web rapide = plus de clients</h2>
            <p>
              La vitesse est un facteur déterminant. <strong className="text-white-clean">53 % des visiteurs mobiles</strong> quittent un site qui met plus de 3 secondes à charger. Chaque seconde de chargement supplémentaire réduit vos conversions de 7 %.
            </p>
            <p>
              Les technologies modernes comme <strong className="text-white-clean">Next.js</strong> permettent un rendu côté serveur qui affiche le contenu instantanément. Combiné à l&apos;optimisation automatique des images et au code splitting, votre site atteint des scores Lighthouse supérieurs à 95.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Le SEO, votre meilleur investissement</h2>
            <p>
              Un site professionnel est construit avec le <Link href="/services/referencement-seo" className="text-primary-glow hover:underline">référencement SEO</Link> en tête dès le départ. Structure sémantique HTML, balises meta optimisées, données structurées JSON-LD, sitemap XML : autant d&apos;éléments invisibles pour vos visiteurs mais essentiels pour Google.
            </p>
            <p>
              Le SEO génère <strong className="text-white-clean">10x plus de trafic</strong> que les réseaux sociaux. Et contrairement à la publicité payante, ce trafic est gratuit et durable.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Le mobile n&apos;est plus une option</h2>
            <p>
              Plus de <strong className="text-white-clean">60 % du trafic web</strong> provient des smartphones. Un site qui ne s&apos;adapte pas parfaitement aux écrans mobiles perd la majorité de ses visiteurs. Le responsive design est devenu une exigence, pas un simple bonus.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Combien coûte un site professionnel ?</h2>
            <p>
              Chez Flot Web, nos <Link href="/#tarifs" className="text-primary-glow hover:underline">formules démarrent à 399 €</Link> pour un site vitrine professionnel. C&apos;est un investissement qui se rentabilise dès les premiers clients acquis en ligne.
            </p>
            <p>
              Pour les entreprises en croissance, notre formule Essentiel à 799 € inclut jusqu&apos;à 5 pages sur-mesure, le copywriting professionnel et une stratégie SEO avancée.
            </p>

            <h2 className="text-2xl font-bold text-white-clean">Conclusion</h2>
            <p>
              En 2025, ne pas avoir de site web professionnel, c&apos;est laisser vos concurrents capter vos clients potentiels. La question n&apos;est plus &quot;faut-il un site ?&quot; mais &quot;quand est-ce que je lance le mien ?&quot;.
            </p>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <p className="text-lg font-bold text-white-clean mb-2">Prêt à créer votre site professionnel ?</p>
              <p className="text-sm text-text-pale/70 mb-6">Devis gratuit sous 24h, sans engagement.</p>
              <Link
                href="/contacter"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
              >
                Demander un devis gratuit <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
