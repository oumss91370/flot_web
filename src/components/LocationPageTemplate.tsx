import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { City } from '@/data/cities';
import type { LocationKeyword } from '@/data/location-keywords';
import { locationKeywords } from '@/data/location-keywords';

interface LocationPageTemplateProps {
  city: City;
  keyword: LocationKeyword;
}

const pricingPlans = [
  {
    name: 'Starter',
    price: '399',
    desc: 'Site vitrine 1 page, livraison en 7 jours',
    highlight: false,
  },
  {
    name: 'Essentiel',
    price: '799',
    desc: '1 à 5 pages sur-mesure, copywriting et SEO',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '1 099',
    desc: '5 à 10 pages + fonctionnalités avancées',
    highlight: false,
  },
];

export default function LocationPageTemplate({
  city,
  keyword,
}: LocationPageTemplateProps) {
  const h1 = keyword.h1Pattern.replace('{city}', city.name);
  const intro = keyword.intro.replace(/\{city\}/g, city.name);
  const isIdf =
    city.type === 'idf-92' ||
    city.type === 'idf-91' ||
    city.type === 'idf-other';

  // Pick 3 other keywords for cross-links
  const relatedKeywords = locationKeywords
    .filter((k) => k.slug !== keyword.slug)
    .slice(0, 3);

  const baseUrl = 'https://flotweb.com';

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: keyword.label.charAt(0).toUpperCase() + keyword.label.slice(1),
        item: `${baseUrl}/${keyword.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: h1,
        item: `${baseUrl}/${keyword.slug}/${city.slug}`,
      },
    ],
  };

  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Flot Web',
    url: baseUrl,
    telephone: '+33613920150',
    email: 'contact@flotweb.com',
    image: `${baseUrl}/images/logo_flot.png`,
    description: `Flot Web — ${keyword.serviceType} à ${city.name}. ${intro}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.region,
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressCountry: 'FR',
    },
    priceRange: '€€',
    openingHours: 'Mo-Fr 09:00-18:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${keyword.serviceType} à ${city.name}`,
      itemListElement: [
        {
          '@type': 'Offer',
          name: `${keyword.serviceType} Starter — ${city.name}`,
          price: '399',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: `${keyword.serviceType} Essentiel — ${city.name}`,
          price: '799',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: `${keyword.serviceType} Premium — ${city.name}`,
          price: '1099',
          priceCurrency: 'EUR',
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* ── Hero ── */}
          <section className="mb-20 text-center">
            <nav aria-label="Fil d'Ariane" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-pale/50">
                <li>
                  <Link href="/" className="hover:text-primary-glow transition-colors">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <Link
                    href={`/${keyword.slug}`}
                    className="hover:text-primary-glow transition-colors capitalize"
                  >
                    {keyword.label.charAt(0).toUpperCase() + keyword.label.slice(1)}
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li className="text-text-pale/80">{city.name}</li>
              </ol>
            </nav>

            <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
              {keyword.serviceType} — {city.name}
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
              {h1.split(city.name)[0]}
              <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
                {city.name}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-pale/70 leading-relaxed">
              {intro}
            </p>

            {isIdf && (
              <p className="mx-auto mt-4 max-w-2xl text-sm text-text-pale/50 leading-relaxed">
                {city.name} fait partie de la région {city.region}, à proximité
                de Paris. Nos équipes interviennent directement sur place pour
                les entreprises basées à {city.name} et dans les communes
                voisines.
              </p>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacter"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
              >
                {keyword.ctaLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={keyword.relatedServicePath}
                className="inline-flex items-center justify-center rounded-xl border border-glass-border px-8 py-4 text-sm font-medium text-text-pale/70 transition-all duration-300 hover:border-primary/30 hover:text-white-clean"
              >
                En savoir plus
              </Link>
            </div>
          </section>

          {/* ── Pourquoi Flot Web à [City] ── */}
          <section className="mb-20">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">
                Pourquoi choisir Flot Web à {city.name} ?
              </h2>
              <p className="text-text-pale/80 leading-relaxed mb-4">
                {city.name} est une ville connue pour être{' '}
                <strong className="text-white-clean">{city.context}</strong>.
                Dans cet environnement compétitif, votre présence digitale doit
                être irréprochable. Flot Web accompagne les entreprises de{' '}
                {city.name} avec des solutions web sur-mesure, performantes et
                visibles sur Google.
              </p>
              <p className="text-text-pale/80 leading-relaxed mb-4">
                Que vous soyez une PME, un indépendant ou une startup à{' '}
                {city.name}, nous adaptons notre approche à votre secteur
                d&apos;activité et à vos objectifs. Notre expertise en{' '}
                {keyword.label} nous permet de répondre précisément aux
                besoins des entreprises de {city.name} et de la région{' '}
                {city.region}.
              </p>
              {isIdf && (
                <p className="text-text-pale/80 leading-relaxed">
                  Idéalement situé pour accompagner les entreprises
                  franciliennes, Flot Web intervient à {city.name} comme dans
                  toute l&apos;Île-de-France. La proximité avec Paris nous
                  permet d&apos;offrir un service réactif et personnalisé aux
                  acteurs économiques de {city.name}.
                </p>
              )}
              {!isIdf && (
                <p className="text-text-pale/80 leading-relaxed">
                  Depuis notre base parisienne, nous accompagnons des clients
                  dans toute la France, y compris à {city.name}. Les échanges
                  se font à distance ou en déplacement selon vos besoins, avec
                  la même exigence de qualité pour chaque projet.
                </p>
              )}
            </div>
          </section>

          {/* ── Avantages / Benefits ── */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">
              Ce que Flot Web apporte à votre entreprise à {city.name}
            </h2>
            <div className="mx-auto max-w-2xl">
              <ul className="space-y-4">
                {keyword.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-primary-glow"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-text-pale/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Notre approche pour [City] ── */}
          <section className="mb-20">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white-clean mb-4">
                Notre approche pour les projets à {city.name}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary-glow mb-3 text-sm font-bold">
                    1
                  </div>
                  <h3 className="text-base font-semibold text-white-clean mb-2">
                    Analyse et stratégie
                  </h3>
                  <p className="text-sm text-text-pale/70 leading-relaxed">
                    Nous étudions votre marché à {city.name}, vos
                    concurrents locaux et vos objectifs pour définir la
                    meilleure stratégie digitale.
                  </p>
                </div>
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary-glow mb-3 text-sm font-bold">
                    2
                  </div>
                  <h3 className="text-base font-semibold text-white-clean mb-2">
                    Conception et développement
                  </h3>
                  <p className="text-sm text-text-pale/70 leading-relaxed">
                    Design sur-mesure, développement Next.js haute performance et
                    optimisation SEO ciblée pour {city.name} et sa région.
                  </p>
                </div>
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary-glow mb-3 text-sm font-bold">
                    3
                  </div>
                  <h3 className="text-base font-semibold text-white-clean mb-2">
                    Lancement et suivi
                  </h3>
                  <p className="text-sm text-text-pale/70 leading-relaxed">
                    Mise en ligne, formation et accompagnement continu pour que
                    votre projet à {city.name} génère des résultats durables.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Services complémentaires dans [City] ── */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-8">
              Services complémentaires à {city.name}
            </h2>
            <p className="text-center text-text-pale/60 mb-8 max-w-xl mx-auto text-sm">
              Découvrez nos autres services disponibles pour les entreprises de{' '}
              {city.name} et aux alentours.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedKeywords.map((kw) => (
                <Link
                  key={kw.slug}
                  href={`/${kw.slug}/${city.slug}`}
                  className="rounded-2xl border border-glass-border bg-glass-bg p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
                >
                  <h3 className="text-base font-semibold text-white-clean mb-1 capitalize">
                    {kw.label.charAt(0).toUpperCase() + kw.label.slice(1)} à{' '}
                    {city.name}
                  </h3>
                  <p className="text-xs text-text-pale/60">{kw.serviceType}</p>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href={keyword.relatedServicePath}
                className="text-sm text-primary-glow hover:underline underline-offset-4"
              >
                Voir notre page {keyword.relatedServiceLabel} →
              </Link>
            </div>
          </section>

          {/* ── Tarifs ── */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-4">
              Nos formules pour {city.name}
            </h2>
            <p className="text-center text-text-pale/60 mb-10 max-w-xl mx-auto text-sm">
              Des tarifs transparents adaptés à tous les budgets. Chaque formule
              inclut un accompagnement personnalisé pour votre projet à{' '}
              {city.name}.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-6 text-center backdrop-blur-md transition-all duration-300 ${
                    plan.highlight
                      ? 'border-primary-glow/40 bg-primary/10 shadow-lg shadow-primary/10'
                      : 'border-glass-border bg-glass-bg'
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block mb-3 rounded-full bg-primary-glow/20 px-3 py-1 text-xs font-semibold text-primary-glow">
                      Populaire
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white-clean">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-3xl font-extrabold text-primary-glow">
                    {plan.price}€
                  </p>
                  <p className="mt-2 text-sm text-text-pale/70">{plan.desc}</p>
                  <Link
                    href="/contacter"
                    className="mt-4 inline-block w-full rounded-xl bg-primary/90 py-2.5 text-sm font-semibold text-white-clean transition-all hover:bg-primary"
                  >
                    Choisir cette formule
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ locale ── */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white-clean text-center mb-10">
              Questions fréquentes — {keyword.label} à {city.name}
            </h2>
            <div className="mx-auto max-w-3xl space-y-4">
              {[
                {
                  q: `Flot Web intervient-il directement à ${city.name} ?`,
                  a: `Oui, Flot Web accompagne les entreprises de ${city.name} pour tous leurs projets de ${keyword.label}. Les échanges se font principalement à distance (visioconférence, email) mais nous pouvons nous déplacer à ${city.name} pour des réunions importantes.`,
                },
                {
                  q: `Quel est le délai pour un projet de ${keyword.label} à ${city.name} ?`,
                  a: `Le délai dépend de la complexité du projet. Pour un site vitrine, comptez 1 à 2 semaines. Pour un projet plus complet, nous établissons un planning personnalisé adapté à vos besoins à ${city.name}.`,
                },
                {
                  q: `Quels types d'entreprises à ${city.name} accompagnez-vous ?`,
                  a: `Nous accompagnons tous types d'entreprises à ${city.name} : PME, TPE, indépendants, startups, commerçants et professions libérales. Notre approche s'adapte à votre secteur et à vos objectifs spécifiques.`,
                },
                {
                  q: `Comment débuter un projet de ${keyword.label} à ${city.name} ?`,
                  a: `Il vous suffit de nous contacter via notre formulaire en ligne ou par téléphone. Nous organisons un premier échange gratuit pour comprendre vos besoins et vous envoyer un devis sous 24h.`,
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-glass-border bg-glass-bg p-6 backdrop-blur-md"
                >
                  <h3 className="text-base font-semibold text-white-clean mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-text-pale/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA final ── */}
          <section className="text-center">
            <div className="rounded-2xl border border-primary-glow/20 bg-primary-glow/5 p-10 md:p-14">
              <h2 className="text-2xl font-bold text-white-clean mb-4">
                Lancez votre projet de {keyword.label} à {city.name}
              </h2>
              <p className="mx-auto max-w-xl text-text-pale/70 mb-8">
                Devis gratuit sous 24h, sans engagement. Rejoignez les
                entreprises de {city.name} qui font confiance à Flot Web pour
                leur présence digitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacter"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
                >
                  {keyword.ctaLabel}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/#tarifs"
                  className="inline-flex items-center justify-center rounded-xl border border-glass-border px-8 py-4 text-sm font-medium text-text-pale/70 transition-all duration-300 hover:border-primary/30 hover:text-white-clean"
                >
                  Voir tous les tarifs
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
