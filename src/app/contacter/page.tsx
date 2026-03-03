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
        text: "Nos sites web sont livrés en 2 à 4 semaines selon la complexité du projet. Nous respectons scrupuleusement les délais convenus dès la signature du devis.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les tarifs de Flot Web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sites web dès 499€, optimisation dès 199€. Aucun coût caché, devis gratuit sous 24h. Chaque offre est clairement détaillée avec toutes les prestations incluses.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les spécialités de Flot Web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Création de sites web sur-mesure, référencement SEO, design UI/UX, maintenance et sécurité, stratégie digitale et applications mobiles.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le processus de travail de Flot Web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consultation gratuite, devis personnalisé, validation, création puis livraison. Un processus transparent et collaboratif pour garantir votre satisfaction.",
      },
    },
    {
      "@type": "Question",
      name: "Quel support client propose Flot Web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Support réactif 7j/7, maintenance incluse, formation à l'utilisation. Nous restons à vos côtés même après la livraison de votre projet.",
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

