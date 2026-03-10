import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactFAQ from "@/components/ContactFAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contactez-nous | Devis Gratuit sous 24h",
  description:
    "Contactez Flot Web pour votre projet web. Formulaire de contact, devis gratuit sous 24h. Création de sites, SEO et design UI/UX à Paris.",
  alternates: {
    canonical: "https://flotweb.com/contacter",
  },
  openGraph: {
    title: "Contactez Flot Web | Devis Gratuit",
    description:
      "Discutez de votre projet digital avec nos experts. Réponse garantie sous 24h, devis gratuit et sans engagement.",
    url: "https://flotweb.com/contacter",
    type: "website",
  },
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels sont les délais de livraison d'un site web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos sites sont livrés en 2 à 4 semaines selon la formule choisie. Un site Starter (399€) est livré en 1 à 2 semaines, un Essentiel (799€) en 2 à 3 semaines, un Premium (1 099€) en 3 à 4 semaines. Les délais sont fixés dès la signature du devis et scrupuleusement respectés.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les tarifs de Flot Web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos sites web démarrent à 399€ (Starter), 799€ (Essentiel), 1 099€ (Premium). L'optimisation de site existant (WordPress, Wix…) est disponible dès 99€. Aucun coût caché, devis gratuit sous 24h.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les spécialités de Flot Web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Développement web (Next.js, React), référencement SEO, design UI/UX, maintenance & sécurité, stratégie digitale et applications mobiles iOS/Android. Chaque site est responsive, optimisé SEO et livré avec hébergement géré.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le processus de travail de Flot Web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. Consultation gratuite — 2. Devis personnalisé sous 24h — 3. Validation & signature — 4. Création sur-mesure — 5. Livraison & mise en ligne. Vous suivez l'avancement à chaque étape avec des points réguliers.",
      },
    },
    {
      "@type": "Question",
      name: "Quel support client propose Flot Web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Support réactif 7j/7 par téléphone (+33 6 13 92 01 50) et email (contact@flotweb.com). Maintenance incluse selon la formule, formation à l'utilisation fournie à la livraison.",
      },
    },
  ],
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
      name: "Contact",
      item: "https://flotweb.com/contacter",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center mb-16">
          <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
            Contact
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
            Parlons de votre{" "}
            <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
              projet
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-pale/70">
            Nos experts sont là pour vous accompagner vers le succès digital.
          </p>
        </div>

        {/* Form + Info cards */}
        <ContactForm />

        {/* FAQ */}
        <ContactFAQ />
      </main>
      <Footer />
    </>
  );
}

