import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Flot Web et de l'application Publication Flot Web : données utilisées via les API Google et YouTube, stockage, conservation et révocation.",
  alternates: {
    canonical: "https://flotweb.com/confidentialite",
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
    { "@type": "ListItem", position: 2, name: "Politique de confidentialité", item: "https://flotweb.com/confidentialite" },
  ],
};

const link = "text-primary-glow hover:underline";

export default function ConfidentialitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-white-clean mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-text-pale/60 mb-10">Dernière mise à jour : 18 octobre 2026</p>

          <div className="space-y-10 text-text-pale/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">1. Objet</h2>
              <p>
                Cette politique décrit comment Flot Web traite les données personnelles sur le site{" "}
                <strong className="text-white-clean">flotweb.com</strong> et dans l&apos;application{" "}
                <strong className="text-white-clean">Publication Flot Web</strong>, un outil interne qui publie des
                vidéos et gère les commentaires des chaînes YouTube et comptes de réseaux sociaux appartenant à Flot Web
                (notamment « Le Monde De Claude » et « Einstein Labs »).
              </p>
              <p className="mt-3">
                Responsable du traitement : Flot Web, Paris, Île-de-France, France. Contact :{" "}
                <a href="mailto:contact@flotweb.com" className={link}>contact@flotweb.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">2. Données traitées par Publication Flot Web</h2>
              <p>
                L&apos;application utilise les services d&apos;API YouTube (YouTube API Services) après autorisation
                explicite du titulaire de la chaîne via Google. Selon les autorisations accordées, elle accède à :
              </p>
              <ul className="mt-3 space-y-1 list-disc pl-6">
                <li>les informations publiques de la chaîne (nom, identifiant, statistiques) ;</li>
                <li>la liste des vidéos de la chaîne et leurs métadonnées (titre, description, statut, statistiques) ;</li>
                <li>l&apos;envoi de nouvelles vidéos et la modification de leur visibilité ;</li>
                <li>les commentaires publiés sous les vidéos de la chaîne, et la publication de réponses.</li>
              </ul>
              <p className="mt-3">
                Les commentaires lus peuvent contenir le nom public et le texte publiés par d&apos;autres utilisateurs de
                YouTube. Ces données sont consultées uniquement pour y répondre au nom de la chaîne.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">3. Utilisation des données</h2>
              <p>Les données sont utilisées exclusivement pour :</p>
              <ul className="mt-3 space-y-1 list-disc pl-6">
                <li>publier les vidéos produites par Flot Web sur ses propres chaînes ;</li>
                <li>consulter les statistiques et la liste des vidéos de ces chaînes ;</li>
                <li>lire les commentaires et y répondre.</li>
              </ul>
              <p className="mt-3">
                Aucune donnée n&apos;est vendue, louée, utilisée à des fins publicitaires ni transmise à des tiers.
                L&apos;utilisation et le transfert des informations reçues des API Google respectent la{" "}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" className={link} target="_blank" rel="noopener noreferrer">
                  Règle relative aux données utilisateur des services d&apos;API Google
                </a>
                , y compris les exigences d&apos;utilisation limitée (Limited Use).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">4. Stockage et sécurité</h2>
              <p>
                Les jetons d&apos;autorisation Google sont stockés localement, sur un poste de travail de Flot Web, dans
                des fichiers non publiés et non versionnés. Aucune base de données externe n&apos;est utilisée. Les vidéos
                et commentaires ne sont pas copiés en dehors de YouTube, sauf affichage temporaire pendant leur traitement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">5. Conservation et suppression</h2>
              <p>
                Les jetons sont conservés tant que l&apos;outil est utilisé et supprimés dès la fin de son usage. Vous
                pouvez révoquer l&apos;accès à tout moment depuis la page{" "}
                <a href="https://myaccount.google.com/permissions" className={link} target="_blank" rel="noopener noreferrer">
                  Autorisations de votre compte Google
                </a>
                , ou en écrivant à{" "}
                <a href="mailto:contact@flotweb.com" className={link}>contact@flotweb.com</a> pour demander la
                suppression de toute donnée vous concernant.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">6. Services YouTube et Google</h2>
              <p>
                En utilisant Publication Flot Web, vous acceptez les{" "}
                <a href="https://www.youtube.com/t/terms" className={link} target="_blank" rel="noopener noreferrer">
                  Conditions d&apos;utilisation de YouTube
                </a>
                . Les données traitées par Google sont régies par les{" "}
                <a href="https://policies.google.com/privacy" className={link} target="_blank" rel="noopener noreferrer">
                  Règles de confidentialité de Google
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">7. Site flotweb.com</h2>
              <p>
                Les données saisies dans le formulaire de contact (nom d&apos;entreprise, e-mail, message) servent
                uniquement à répondre à vos demandes et sont conservées 3 ans au maximum. Voir aussi les{" "}
                <a href="/mentions-legales" className={link}>mentions légales</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white-clean mb-3">8. Vos droits</h2>
              <p>
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de
                rectification, d&apos;effacement, d&apos;opposition et de limitation. Pour les exercer :{" "}
                <a href="mailto:contact@flotweb.com" className={link}>contact@flotweb.com</a>. Vous pouvez aussi
                introduire une réclamation auprès de la CNIL (cnil.fr).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
