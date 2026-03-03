"use client";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36" aria-label="Contactez-nous">
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-bg-deep to-bg-deep-light/30" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-glow/10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/10"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <AnimatedSection>
          <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
            Contact
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white-clean sm:text-4xl lg:text-5xl">
            Prêt à{" "}
            <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
              prendre le large
            </span>{" "}
            ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-pale/70">
            Parlez-nous de votre projet. Notre équipe vous accompagne de la
            conception au lancement pour transformer votre vision en réalité digitale.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <Link
              href="/contacter"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-lg font-semibold text-white-clean transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 glass-strong rounded-full transition-all duration-300 group-hover:bg-primary/40" />
              <span className="absolute inset-0 rounded-full border border-primary-glow/30 transition-all duration-300 group-hover:border-primary-glow/60" />
              <Send size={20} className="relative z-10" />
              <span className="relative z-10">Discutons de votre projet</span>
            </Link>
            <a
            href="/#tarifs"
              className="inline-flex items-center gap-2 rounded-full border border-text-pale/20 px-8 py-4 text-lg font-semibold text-text-pale transition-all duration-300 hover:border-secondary/40 hover:bg-secondary/10 hover:text-white-clean"
            >
              Voir les tarifs
              <ArrowRight size={18} />
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-text-pale/40">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary-glow" />
              Réponse sous 24h
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Devis gratuit
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary-glow" />
              Sans engagement
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
