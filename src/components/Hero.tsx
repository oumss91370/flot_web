"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/image-arriere-plan-bateau.webp"
          alt="Proue de bateau naviguant sur ocean Flot Web agence digitale"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-br from-bg-deep/80 via-bg-deep/60 to-bg-deep/75" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(195,216,235,0.4) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:items-start lg:text-left lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass-bg px-4 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
          <span className="text-sm font-medium text-text-pale">Agence Digitale Premium</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white-clean sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Creons votre{" "}
          <span className="bg-linear-to-r from-primary-glow via-secondary to-primary-glow bg-clip-text text-transparent">
            presence digitale
          </span>{" "}
          d&#39;exception
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-text-pale/80 sm:text-xl"
        >
          Sites web sur-mesure, referencement SEO et design UI/UX haut de gamme.
          Nous propulsons les entreprises ambitieuses vers de nouveaux horizons.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          {/* Bouton principal — glaçage transparent */}
          <a
            href="/#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.30), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.08)",
            }}
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-full bg-linear-to-b from-white/20 to-transparent" />
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <span className="relative z-10">Prendre rendez-vous</span>
          </a>

          {/* Bouton secondaire — glaçage transparent */}
          <a
            href="/#tarifs"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.20), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.06)",
            }}
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-full bg-linear-to-b from-white/15 to-transparent" />
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <span className="relative z-10">Nos Tarifs</span>
          </a>
        </motion.div>
      </div>
      <motion.a
        href="https://wa.me/33613920150"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.4, type: "spring" }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#25D366]/50"
        aria-label="Nous contacter sur WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-text-pale/50">Scroll</span>
          <div className="h-10 w-px bg-linear-to-b from-text-pale/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
