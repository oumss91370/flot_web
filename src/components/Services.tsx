"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Search,
  Palette,
  ShieldCheck,
  Globe,
  Smartphone,
} from "lucide-react";
import AnimatedSection, { fadeInUp } from "@/components/AnimatedSection";

const services = [
  {
    icon: Code2,
    title: "Développement Web",
    description:
      "Sites vitrines, e-commerce et applications web performantes avec Next.js, React et les technologies les plus modernes.",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description:
      "Stratégies SEO avancées pour hisser votre site en tête des résultats Google et générer un trafic qualifié.",
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    description:
      "Interfaces élégantes et intuitives conçues pour captiver vos visiteurs et maximiser vos conversions.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Sécurité",
    description:
      "Surveillance 24/7, mises à jour régulières et protection avancée pour un site toujours performant et sécurisé.",
  },
  {
    icon: Globe,
    title: "Stratégie Digitale",
    description:
      "Accompagnement complet dans votre transformation digitale : branding, contenus et présence en ligne.",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description:
      "Applications iOS et Android sur-mesure, performantes et intuitives pour étendre votre portée.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
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
                className="group relative overflow-hidden rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:bg-primary/10 hover:-translate-y-1"
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
                </div>
              </motion.article>
            );
          })}
        </AnimatedSection>
      </div>

      {/* Transition vers Tarifs */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #0e2a3a 100%)" }}
      />
    </section>
  );
}
