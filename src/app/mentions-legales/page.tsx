import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site Flot Web. Informations sur l'éditeur, l'hébergeur, la propriété intellectuelle et la protection des données personnelles.",
  alternates: {
    canonical: "https://flotweb.com/mentions-legales",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://flotweb.com" },
    { "@type": "ListItem", position: 2, name: "Mentions Légales", item: "https://flotweb.com/mentions-legales" },
  ],
};

export default function MentionsLegalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-white-clean mb-10">
            Mentions Légales
          </h1>

          <div className="space-y-10 text-text-pale/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">
                1. Éditeur du site
              </h2>
              <p>
                Le site <strong className="text-white-clean">flotweb.com</strong> est édité par Flot Web.
              </p>
              <ul className="mt-3 space-y-1">
                <li>Email : contact@flotweb.com</li>
                <li>Téléphone : +33 6 13 92 01 50</li>
                <li>Adresse : Paris, Île-de-France, France</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">
                2. Hébergement
              </h2>
              <p>
                Le site est hébergé par <strong className="text-white-clean">Vercel Inc.</strong>
              </p>
              <ul className="mt-3 space-y-1">
                <li>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li>Site web : vercel.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">
                3. Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes, icônes, code source) est la propriété exclusive de Flot Web ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="mt-3">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de Flot Web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">
                4. Protection des données personnelles
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition concernant vos données personnelles.
              </p>
              <p className="mt-3">
                Les données collectées via le formulaire de contact (nom d&apos;entreprise, email, message) sont utilisées uniquement pour répondre à vos demandes. Elles ne sont ni vendues, ni transmises à des tiers. Elles sont conservées pendant une durée maximale de 3 ans.
              </p>
              <p className="mt-3">
                Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@flotweb.com" className="text-primary-glow hover:underline">contact@flotweb.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">
                5. Cookies
              </h2>
              <p>
                Ce site utilise des cookies strictement nécessaires au fonctionnement technique. Aucun cookie de suivi publicitaire ou analytics n&apos;est utilisé sans votre consentement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">
                6. Limitation de responsabilité
              </h2>
              <p>
                Flot Web s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site. Toutefois, Flot Web ne peut garantir l&apos;exactitude, la complétude et l&apos;actualité des informations publiées. En conséquence, Flot Web décline toute responsabilité pour les éventuelles imprécisions, inexactitudes ou omissions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">
                7. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux de Paris seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
