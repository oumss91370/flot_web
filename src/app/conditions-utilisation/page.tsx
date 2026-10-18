import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description:
    "Conditions d'utilisation de l'application Publication Flot Web, outil interne de publication de vidéos sur les comptes YouTube et TikTok de Flot Web.",
  alternates: {
    canonical: "https://flotweb.com/conditions-utilisation",
  },
  robots: { index: true, follow: true },
};

const link = "text-primary-glow hover:underline";
const h2 = "text-xl font-bold text-white-clean mb-3";

export default function ConditionsUtilisationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-white-clean mb-4">
            Conditions d&apos;utilisation
          </h1>
          <p className="text-text-pale/60 mb-10">Dernière mise à jour : 18 octobre 2026</p>

          <div className="space-y-10 text-text-pale/80 leading-relaxed">
            <section>
              <h2 className={h2}>1. Le service</h2>
              <p>
                <strong className="text-white-clean">Publication Flot Web</strong> est un outil interne édité par Flot
                Web (Paris, France). Il permet aux titulaires des comptes YouTube et TikTok de Flot Web (notamment
                « Le Monde De Claude » et « Einstein Labs ») de téléverser et publier leurs propres vidéos originales
                via les API officielles de ces plateformes.
              </p>
            </section>

            <section>
              <h2 className={h2}>2. Utilisateurs</h2>
              <p>
                Le service n&apos;est pas proposé au public. Il est utilisé uniquement par Flot Web et par les titulaires
                des comptes qu&apos;ils connectent, âgés de 18 ans au moins, qui s&apos;engagent à respecter les
                conditions d&apos;utilisation et les règles de la communauté de chaque plateforme.
              </p>
            </section>

            <section>
              <h2 className={h2}>3. Contenus</h2>
              <p>
                Vous restez propriétaire des vidéos publiées et garantissez disposer des droits nécessaires. Avant chaque
                publication, vous choisissez la légende, le niveau de confidentialité et les options d&apos;interaction ;
                rien n&apos;est publié sans votre action.
              </p>
            </section>

            <section>
              <h2 className={h2}>4. Plateformes tierces</h2>
              <p>
                Publication Flot Web n&apos;est ni affilié, ni approuvé, ni sponsorisé par TikTok, YouTube ou Google.
                L&apos;utilisation de leurs services reste régie par leurs propres conditions, notamment les{" "}
                <a href="https://www.tiktok.com/legal/terms-of-service" className={link} target="_blank" rel="noopener noreferrer">
                  Conditions d&apos;utilisation de TikTok
                </a>{" "}
                et les{" "}
                <a href="https://www.youtube.com/t/terms" className={link} target="_blank" rel="noopener noreferrer">
                  Conditions d&apos;utilisation de YouTube
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className={h2}>5. Données personnelles</h2>
              <p>
                Le traitement des données est décrit dans la{" "}
                <a href="/confidentialite" className={link}>politique de confidentialité</a>. Vous pouvez révoquer
                l&apos;accès de l&apos;outil à tout moment depuis les paramètres de votre compte TikTok ou Google.
              </p>
            </section>

            <section>
              <h2 className={h2}>6. Responsabilité</h2>
              <p>
                Le service est fourni « en l&apos;état ». Dans les limites prévues par la loi, Flot Web ne saurait être
                tenu responsable des dommages indirects liés à son utilisation ou à une indisponibilité des plateformes
                tierces.
              </p>
            </section>

            <section>
              <h2 className={h2}>7. Droit applicable et contact</h2>
              <p>
                Ces conditions sont régies par le droit français. Contact :{" "}
                <a href="mailto:contact@flotweb.com" className={link}>contact@flotweb.com</a>. Voir aussi les{" "}
                <a href="/mentions-legales" className={link}>mentions légales</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
