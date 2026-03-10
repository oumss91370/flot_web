import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Conseils Web, SEO & Design",
  description:
    "Découvrez nos articles sur la création de sites web, le référencement SEO, le design UI/UX et la stratégie digitale. Conseils d'experts pour booster votre présence en ligne.",
  alternates: {
    canonical: "https://flotweb.com/blog",
  },
  openGraph: {
    title: "Blog Flot Web | Conseils Web, SEO & Design",
    description:
      "Articles d'experts sur la création web, le SEO, le design et la stratégie digitale.",
    url: "https://flotweb.com/blog",
    type: "website",
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://flotweb.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://flotweb.com/blog" },
  ],
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    slug: "pourquoi-site-web-professionnel-2025",
    title: "Pourquoi un site web professionnel est indispensable en 2025",
    excerpt:
      "75 % des consommateurs jugent la crédibilité d'une entreprise sur son site web. Découvrez pourquoi investir dans un site professionnel est le meilleur retour sur investissement digital.",
    date: "2025-03-01",
    readTime: "5 min",
    category: "Création Web",
  },
  {
    slug: "guide-seo-debutant-pme",
    title: "Le guide SEO complet pour les PME : de 0 à la première page Google",
    excerpt:
      "Apprenez les bases du référencement naturel : mots-clés, balises meta, contenu optimisé et SEO technique. Un guide étape par étape pour les entrepreneurs.",
    date: "2025-02-15",
    readTime: "8 min",
    category: "SEO",
  },
  {
    slug: "core-web-vitals-impact-seo",
    title: "Core Web Vitals : comment la vitesse de votre site impacte votre SEO",
    excerpt:
      "Google utilise les Core Web Vitals comme facteur de classement. LCP, FID, CLS — découvrez comment optimiser ces métriques pour améliorer votre positionnement.",
    date: "2025-02-01",
    readTime: "6 min",
    category: "SEO Technique",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Blog
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
              Conseils &{" "}
              <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
                expertise
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-pale/70">
              Nos derniers articles pour vous aider à réussir en ligne.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="flex flex-1 flex-col p-8">
                  <span className="inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-glow mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-white-clean leading-snug mb-3 group-hover:text-primary-glow transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-text-pale/70 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-xs text-text-pale/50">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-text-pale/50 text-sm">
              D&apos;autres articles arrivent bientôt.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
