"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection, { fadeInUp } from "@/components/AnimatedSection";
import Link from "next/link";

const faqs = [
  {
    icon: "⏱️",
    question: "Délais de livraison",
    answer:
      "Nos sites sont livrés en 2 à 4 semaines selon la formule choisie. Un site Starter (399€) est livré en 1 à 2 semaines, un Essentiel (799€) en 2 à 3 semaines, un Premium (1 099€) en 3 à 4 semaines. Les délais sont fixés dès la signature du devis et scrupuleusement respectés.",
    cta: { label: "Voir nos offres", href: "/#tarifs" },
  },
  {
    icon: "💰",
    question: "Tarifs transparents",
    answer:
      "Nos sites web démarrent à 399€ (Starter), 799€ (Essentiel), 1 099€ (Premium). L'optimisation de site existant  est disponible dès 899€. Aucun coût caché, devis gratuit sous 24h.",
    cta: { label: "Consulter tous nos tarifs", href: "/#tarifs" },
  },
  {
    icon: "🎯",
    question: "Nos spécialités",
    answer:
      "Développement web (Next.js, React), référencement SEO, design UI/UX, maintenance & sécurité, stratégie digitale et applications mobiles iOS/Android. Chaque site est responsive, optimisé SEO et livré avec hébergement géré.",
    cta: { label: "Découvrir nos services", href: "/#services" },
  },
  {
    icon: "🚀",
    question: "Processus de travail",
    answer:
      "1. Consultation gratuite — 2. Devis personnalisé sous 24h — 3. Validation & signature — 4. Création sur-mesure — 5. Livraison & mise en ligne. Vous suivez l'avancement à chaque étape avec des points réguliers.",
    cta: null,
  },
  {
    icon: "📞",
    question: "Support client",
    answer:
      "Support réactif 7j/7 par téléphone (+33 6 13 92 01 50) et email (contact@flotweb.com). Maintenance incluse selon la formule, formation à l'utilisation fournie à la livraison. Nous restons disponibles après la mise en ligne.",
    cta: null,
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={fadeInUp}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="group w-full rounded-2xl border border-glass-border bg-glass-bg px-6 py-5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 text-left"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">
              {faq.icon}
            </span>
            <span className="text-base font-semibold text-white-clean">
              {faq.question}
            </span>
          </div>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0 text-text-pale/50 group-hover:text-primary-glow"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm leading-relaxed text-text-pale/70 pl-11">
                {faq.answer}
              </p>
              {faq.cta && (
                <div className="mt-3 pl-11">
                  <Link
                    href={faq.cta.href}
                    className="text-sm font-medium text-primary-glow underline-offset-2 hover:underline"
                  >
                    {faq.cta.label} →
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export default function ContactFAQ() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-24">
      {/* Header */}
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-2xl font-bold text-white-clean sm:text-3xl">
          Questions avant de nous{" "}
          <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
            contacter&nbsp;?
          </span>
        </h2>
        <p className="mt-3 text-sm text-text-pale/60">
          Tout ce que vous devez savoir avant de nous envoyer un message.
        </p>
      </AnimatedSection>

      {/* FAQ items */}
      <AnimatedSection variant="stagger" className="flex flex-col gap-4 max-w-3xl mx-auto">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} faq={faq} />
        ))}
      </AnimatedSection>
    </section>
  );
}

