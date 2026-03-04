"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Search,
  Palette,
  ShieldCheck,
  Globe,
  Smartphone,
  X,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import AnimatedSection, { fadeInUp } from "@/components/AnimatedSection";

interface ServiceDetail {
  icon: typeof Code2;
  title: string;
  description: string;
  popupTitle: string;
  popupIntro: string;
  whyImportant: string;
  benefits: string[];
  ourApproach: string;
  cta: string;
}

const services: ServiceDetail[] = [
  {
    icon: Code2,
    title: "Développement Web",
    description:
      "Sites vitrines, e-commerce et applications web performantes avec Next.js, React et les technologies les plus modernes.",
    popupTitle: "Développement Web Sur-Mesure",
    popupIntro:
      "Nous concevons des sites et applications web haute performance avec Next.js et React — les technologies utilisées par Vercel, Netflix et Airbnb.",
    whyImportant:
      "Un site web est votre vitrine digitale. 75 % des utilisateurs jugent la crédibilité d'une entreprise sur le design de son site. Un développement professionnel garantit rapidité, sécurité et une expérience utilisateur irréprochable.",
    benefits: [
      "Architecture Next.js App Router optimisée (SSR, SSG, ISR)",
      "Performance maximale : score Lighthouse > 95",
      "Code sémantique et accessible (WCAG 2.1)",
      "Responsive design parfait sur tous les écrans",
      "Intégration API, bases de données et CMS headless",
      "Déploiement Vercel avec CI/CD automatisé",
    ],
    ourApproach:
      "Nous appliquons les meilleures pratiques Vercel Engineering : élimination des waterfalls, optimisation des bundles, rendu côté serveur parallélisé et Suspense boundaries pour un chargement instantané.",
    cta: "Discutons de votre projet web",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description:
      "Stratégies SEO avancées pour hisser votre site en tête des résultats Google et générer un trafic qualifié.",
    popupTitle: "Référencement SEO Avancé",
    popupIntro:
      "Le SEO est l'art de rendre votre site visible sur Google. Sans lui, même le plus beau site reste invisible pour vos clients potentiels.",
    whyImportant:
      "93 % des expériences en ligne commencent par un moteur de recherche. Le SEO génère 10x plus de trafic que les réseaux sociaux. C'est un investissement durable qui rapporte des clients chaque jour, sans coût publicitaire récurrent.",
    benefits: [
      "Audit SEO complet : crawlabilité, indexation, performance",
      "Recherche de mots-clés et analyse concurrentielle",
      "Optimisation on-page : meta tags, structure Hn, schema markup",
      "SEO technique : vitesse, Core Web Vitals, sitemap XML",
      "Stratégie de contenu et maillage interne optimisé",
      "SEO programmatique pour les pages à grande échelle",
    ],
    ourApproach:
      "Notre méthodologie suit un framework d'audit rigoureux : crawlabilité et indexation d'abord, puis fondations techniques, optimisation on-page, qualité du contenu et autorité. Nous utilisons des données propriétaires pour des résultats mesurables.",
    cta: "Boostez votre visibilité Google",
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    description:
      "Interfaces élégantes et intuitives conçues pour captiver vos visiteurs et maximiser vos conversions.",
    popupTitle: "Design UI/UX Premium",
    popupIntro:
      "Le design n'est pas que de l'esthétique — c'est la clé d'une expérience utilisateur qui convertit. Chaque pixel est pensé pour guider vos visiteurs vers l'action.",
    whyImportant:
      "88 % des utilisateurs ne reviennent pas après une mauvaise expérience. Un design UI/UX professionnel augmente les conversions de 200 % en moyenne. C'est votre avantage concurrentiel le plus visible.",
    benefits: [
      "Design system cohérent et identité visuelle forte",
      "Maquettes Figma interactives avant développement",
      "Tests d'utilisabilité et parcours utilisateur optimisés",
      "Animations fluides avec Framer Motion",
      "Glassmorphism, micro-interactions et effets premium",
      "Conformité aux Web Interface Guidelines",
    ],
    ourApproach:
      "Nous respectons les Web Interface Guidelines et les principes de design les plus exigeants : hiérarchie visuelle claire, accessibilité native, animations performantes et responsive design pixel-perfect.",
    cta: "Créez une interface mémorable",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Sécurité",
    description:
      "Surveillance 24/7, mises à jour régulières et protection avancée pour un site toujours performant et sécurisé.",
    popupTitle: "Maintenance & Sécurité Continue",
    popupIntro:
      "Un site web nécessite une attention constante. Nous assurons sa performance, sa sécurité et sa disponibilité pour que vous puissiez vous concentrer sur votre activité.",
    whyImportant:
      "43 % des cyberattaques ciblent les petites entreprises. Un site non maintenu perd en moyenne 7 % de trafic par mois à cause de la dégradation technique. La maintenance préventive coûte 10x moins qu'une réparation d'urgence.",
    benefits: [
      "Surveillance 24/7 avec alertes en temps réel",
      "Mises à jour de sécurité et correctifs automatiques",
      "Sauvegardes quotidiennes et restauration rapide",
      "Monitoring des performances et Core Web Vitals",
      "Protection DDoS et pare-feu applicatif (WAF)",
      "Rapports mensuels détaillés de santé du site",
    ],
    ourApproach:
      "Nous utilisons un cache LRU intelligent, des authentifications sécurisées sur chaque action serveur et des opérations non-bloquantes pour garantir des performances optimales en continu.",
    cta: "Protégez votre investissement",
  },
  {
    icon: Globe,
    title: "Stratégie Digitale",
    description:
      "Accompagnement complet dans votre transformation digitale : branding, contenus et présence en ligne.",
    popupTitle: "Stratégie Digitale Complète",
    popupIntro:
      "Une stratégie digitale efficace aligne votre présence en ligne avec vos objectifs business. Nous transformons votre vision en un plan d'action concret et mesurable.",
    whyImportant:
      "Les entreprises avec une stratégie digitale claire croissent 2,8x plus vite. Sans roadmap, les investissements numériques sont dispersés et inefficaces. Une stratégie cohérente maximise chaque euro investi.",
    benefits: [
      "Audit complet de votre présence digitale actuelle",
      "Définition des personas et parcours client",
      "Stratégie de contenu et calendrier éditorial",
      "Branding cohérent sur tous les canaux",
      "KPIs et tableaux de bord de suivi",
      "Accompagnement trimestriel et ajustements",
    ],
    ourApproach:
      "Nous construisons des pages qui ciblent des intentions de recherche précises, avec des données propriétaires et un contenu unique par page. Qualité avant quantité, toujours.",
    cta: "Bâtissons votre stratégie",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description:
      "Applications iOS et Android sur-mesure, performantes et intuitives pour étendre votre portée.",
    popupTitle: "Applications Mobiles Natives & Cross-Platform",
    popupIntro:
      "Le mobile représente plus de 60 % du trafic web mondial. Une application mobile dédiée offre une expérience premium et fidélise vos utilisateurs comme aucun autre canal.",
    whyImportant:
      "Les utilisateurs passent 90 % de leur temps mobile dans des applications. Une app bien conçue augmente l'engagement de 300 % par rapport à un site mobile. C'est le canal le plus direct vers vos clients.",
    benefits: [
      "Applications React Native cross-platform (iOS + Android)",
      "Interface native fluide et performante",
      "Notifications push et engagement utilisateur",
      "Intégration avec vos APIs et services existants",
      "Publication App Store et Google Play",
      "Mises à jour OTA (Over-The-Air) sans redéploiement",
    ],
    ourApproach:
      "Nous utilisons React Native pour un code unique déployé sur iOS et Android, avec des performances natives. Chaque composant est optimisé : imports dynamiques, lazy loading et animations à 60 fps.",
    cta: "Lancez votre application",
  },
];

/* ── Popup overlay animation ── */
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

/* ── Popup card animation : rotation 3D + scale ── */
const popupVariants = {
  hidden: {
    opacity: 0,
    rotateY: -90,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 18,
      mass: 0.8,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    rotateY: 90,
    scale: 0.7,
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const closePopup = useCallback(() => setSelectedService(null), []);

  /* Fermer avec Échap */
  useEffect(() => {
    if (!selectedService) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedService, closePopup]);

  return (
    <section id="services" className="relative py-28 sm:py-36" aria-label="Nos services digitaux">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-bg-deep via-bg-deep-light/30 to-bg-deep" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
            Services
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white-clean sm:text-4xl lg:text-5xl">
            Des solutions{" "}
            <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
              sur-mesure
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-pale/70">
            Une expertise complète pour propulser votre présence digitale vers l&apos;excellence
          </p>
        </AnimatedSection>

        {/* Grid */}
        <AnimatedSection
          variant="stagger"
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={fadeInUp}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:bg-primary/10 hover:-translate-y-1"
                role="button"
                tabIndex={0}
                aria-label={`En savoir plus sur ${service.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedService(service);
                  }
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary-glow transition-colors duration-300 group-hover:bg-primary/25">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white-clean">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-pale/70">
                    {service.description}
                  </p>
                  {/* Indicateur cliquable */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-primary-glow opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>En savoir plus</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatedSection>
      </div>

      {/* ── POPUP MODAL ── */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ perspective: "1200px" }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-bg-deep/80 backdrop-blur-sm"
              onClick={closePopup}
            />

            {/* Card popup avec rotation 3D */}
            <motion.div
              className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-glass-border bg-bg-deep/95 backdrop-blur-xl shadow-2xl"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ transformStyle: "preserve-3d" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-primary-glow/60 to-transparent" />

              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-glass-border bg-glass-bg text-text-pale/60 transition-all duration-200 hover:bg-primary/20 hover:text-white-clean hover:border-primary/40"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>

              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary-glow">
                    <selectedService.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white-clean">
                      {selectedService.popupTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-pale/80">
                      {selectedService.popupIntro}
                    </p>
                  </div>
                </div>

                {/* Pourquoi c'est important */}
                <div className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/5 p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                    Pourquoi c&apos;est essentiel
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-text-pale/80">
                    {selectedService.whyImportant}
                  </p>
                </div>

                {/* Ce que nous apportons */}
                <div className="mt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
                    Ce que Flot Web vous apporte
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {selectedService.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-primary-glow"
                        />
                        <span className="text-sm leading-relaxed text-text-pale/80">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Notre approche */}
                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
                    Notre approche
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-text-pale/80">
                    {selectedService.ourApproach}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contacter"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-6 py-3.5 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
                  >
                    {selectedService.cta}
                    <ArrowRight size={16} />
                  </a>
                  <button
                    onClick={closePopup}
                    className="inline-flex items-center justify-center rounded-xl border border-glass-border px-6 py-3.5 text-sm font-medium text-text-pale/70 transition-all duration-300 hover:border-primary/30 hover:text-white-clean"
                  >
                    Retour aux services
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition vers Tarifs */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #0e2a3a 100%)" }}
      />
    </section>
  );
}
