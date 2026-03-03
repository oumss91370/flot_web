"use client";
import { motion } from "framer-motion";
import { X, Star } from "lucide-react";
import AnimatedSection, { fadeInUp } from "@/components/AnimatedSection";
import Link from "next/link";

interface PricingFeature {
  text: string;
  included: boolean;
}
interface PricingPlan {
  name: string;
  emoji: string;
  price: string;
  priceLabel: string;
  description: string;
  features: PricingFeature[];
  suggested?: boolean;
  accentColor: string;
  glowColor: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    emoji: "⚡",
    price: "499€",
    priceLabel: "",
    description: "Idéal pour lancer votre présence en ligne rapidement.",
    accentColor: "from-[#1a8a7a]/30 to-[#1D6D7A]/20",
    glowColor: "shadow-[#1a8a7a]/20",
    features: [
      { text: "Site vitrine 1 page", included: true },
      { text: "Design responsive", included: true },
      { text: "1 modification / mois", included: true },
      { text: "Gestion de l'Hébergement", included: true },
      { text: "Révisions illimitées", included: false },
      { text: "Copywriting professionnel", included: false },
      { text: "Stratégie SEO", included: false },
      { text: "Base de données", included: false },
      { text: "Support 24/7", included: false },
      { text: "Maintenance continue", included: false },
    ],
  },
  {
    name: "Essentiel",
    emoji: "🌊",
    price: "899€",
    priceLabel: "",
    description: "La formule idéale pour les entreprises en croissance, Site clefs en main !",
    suggested: true,
    accentColor: "from-[#24919f]/40 to-[#1D6D7A]/30",
    glowColor: "shadow-[#24919f]/30",
    features: [
      { text: "1 à 5 pages sur-mesure", included: true },
      { text: "Stratégie SEO avancé", included: true },
      { text: "Formulaire contact", included: true },
      { text: "Prise de RDV", included: true },
      { text: "Design responsive", included: true },
      { text: "Révisions illimitées", included: true },
      { text: "Gestion de l'Hébergement", included: true },
      { text: "Base de données", included: false },
      { text: "Support 7j/7j", included: false },
      { text: "Maintenance continue", included: false },
    ],
  },
  {
    name: "Premium",
    emoji: "🚀",
    price: "1 399€",
    priceLabel: "",
    description: "La solution complète pour dominer votre marché en ligne.",
    accentColor: "from-[#1a8a7a]/30 to-[#4F90C9]/20",
    glowColor: "shadow-[#1a8a7a]/20",
    features: [
      { text: "5 à 10 pages sur-mesure", included: true },
      { text: "Design responsive premium", included: true },
      { text: "Révisions illimitées", included: true },
      { text: "Hébergement premium", included: true },
      { text: "Boutique en ligne complète", included: true },
      { text: "SEO avancé complet", included: true },
      { text: "Base de données intégrée", included: true },
      { text: "Support prioritaire 7j/7j", included: true },
      { text: "Maintenance continue", included: true },
      { text: "Analytics & Reporting", included: true },
    ],
  },
  {
    name: "Optimisation",
    emoji: "🔧",
    price: "199€",
    priceLabel: "",
    description: "Boostez votre site existant (WordPress, Wix, etc.).",
    accentColor: "from-[#1D6D7A]/30 to-[#1a8a7a]/20",
    glowColor: "shadow-[#1D6D7A]/20",
    features: [
      { text: "Audit vitesse complet", included: true },
      { text: "Audit SEO technique", included: true },
      { text: "Audit UI/UX", included: true },
      { text: "Rapport détaillé", included: true },
      { text: "Recommandations prioritaires", included: true },
      { text: "Implémentation des correctifs", included: true },
      { text: "Suivi post-audit", included: false },
      { text: "Maintenance continue", included: false },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="relative py-28 sm:py-36 overflow-hidden" aria-label="Nos tarifs et offres">
      {/* Background turquoise mer */}
      <div className="absolute inset-0 bg-[#0e2a3a]" />
      <div className="absolute inset-0 bg-linear-to-br from-[#0d3d3a]/80 via-[#0e2a3a]/60 to-[#102535]/80" />
      {/* Vagues décoratives */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#24919f]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#1D6D7A]/40 to-transparent" />
      <motion.div
        animate={{ x: [0, 30, 0], opacity: [0.06, 0.12, 0.06] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 h-125 w-125 rounded-full bg-[#24919f]/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], opacity: [0.04, 0.09, 0.04] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-32 -right-32 h-100 w-100 rounded-full bg-[#1D6D7A]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="text-center">
          <span className="inline-block rounded-full border border-[#24919f]/40 bg-[#24919f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#24919f]">
            Tarifs
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white-clean sm:text-4xl lg:text-5xl">
            Des offres{" "}
            <span className="bg-linear-to-r from-[#24919f] to-[#4F90C9] bg-clip-text text-transparent">
              transparentes
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-pale/70">
            Choisissez la formule qui correspond à vos ambitions.
          </p>
            <p className="mx-auto  max-w-2xl text-lg text-text-pale/70">Prix Ultra Attractifs &amp; Aucun coût caché.
          </p>
        </AnimatedSection>

        {/* Grid cartes */}
        <AnimatedSection
          variant="stagger"
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start"
        >
          {plans.map((plan) => (
            <div key={plan.name} className="relative flex flex-col">
              {/* Badge "Recommandé" flottant AU-DESSUS de la carte, aligné à droite du titre */}
              {plan.suggested && (
                <div className="mb-2 flex items-center gap-2 pl-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#24919f]/20 px-3 py-1 text-xs font-semibold text-[#24919f] border border-[#24919f]/30">
                    <Star size={11} fill="currentColor" /> Recommandé
                  </span>
                </div>
              )}
              {/* Espace réservé pour aligner les cartes sans badge */}
              {!plan.suggested && <div className="mb-2 h-7" />}

              <motion.article
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border backdrop-blur-md cursor-pointer ${
                  plan.suggested
                    ? `border-[#24919f]/50 bg-linear-to-b ${plan.accentColor} shadow-xl ${plan.glowColor}`
                    : `border-[#24919f]/15 bg-linear-to-b ${plan.accentColor} shadow-lg ${plan.glowColor} hover:border-[#24919f]/35`
                }`}
              >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-b from-[#24919f]/5 to-transparent rounded-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col flex-1 p-6">

                {/* ── En-tête : Emoji + Titre ── */}
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: plan.suggested
                        ? "rgba(36,145,159,0.2)"
                        : "rgba(29,109,122,0.15)",
                    }}
                  >
                    {plan.emoji}
                  </span>
                  <h3 className="text-xl font-bold text-white-clean tracking-tight">
                    {plan.name}
                  </h3>
                </div>

                <p className="mt-2 text-xs font-semibold leading-relaxed text-text-pale/80">
                  {plan.description}
                </p>

                {/* Prix */}
                <div className="mt-5 mb-5">
                  {plan.priceLabel && (
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-text-pale/45 mb-0.5">
                      {plan.priceLabel}
                    </p>
                  )}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-medium text-text-pale/50">dès</span>
                    <span
                      className={`text-[2.6rem] font-extrabold leading-none tracking-tight transition-colors duration-300 ${
                        plan.suggested
                          ? "text-[#24919f] group-hover:text-[#2ba8b8]"
                          : "text-white-clean group-hover:text-[#24919f]"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Divider animé */}
                <div className="relative h-px w-full overflow-hidden mb-5">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#24919f]/30 to-transparent" />
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-[#24919f]/60 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>

                {/* Features */}
                <ul className="flex flex-1 flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-center gap-2.5 text-sm transition-colors duration-200 ${
                        feature.included
                          ? "text-text-pale group-hover:text-white-clean"
                          : "text-text-pale/25 line-through"
                      }`}
                    >
                      {feature.included ? (
                        /* Coche badge bleu turquoise */
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="shrink-0 w-4.5 h-4.5 transition-transform duration-200 group-hover:scale-110"
                          aria-hidden="true"
                        >
                          <circle cx="10" cy="10" r="10" fill="#24919f" />
                          <path
                            d="M6 10.5l2.5 2.5 5.5-5.5"
                            stroke="#F9FCFD"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <X size={15} className="shrink-0 text-text-pale/20" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contacter"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    plan.suggested
                      ? "bg-[#24919f] text-white-clean shadow-lg shadow-[#24919f]/25 hover:bg-[#2ba8b8] hover:shadow-[#2ba8b8]/35 hover:scale-105"
                      : "border border-[#24919f]/30 text-text-pale hover:border-[#24919f]/60 hover:bg-[#24919f]/10 hover:text-white-clean hover:scale-105"
                  }`}
                >
                  Choisir {plan.name}
                </Link>
              </div>
            </motion.article>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

