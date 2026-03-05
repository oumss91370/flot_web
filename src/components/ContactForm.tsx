"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Building2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import AnimatedSection, { fadeInUp } from "@/components/AnimatedSection";
import Link from "next/link";

const services = [
  "Site vitrine",
  "Site e-commerce",
  "Application web",
  "Référencement SEO",
  "Design UI/UX",
  "Maintenance & Support",
  "Optimisation de site existant",
  "Autre",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ company: "", email: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        let message = "Erreur lors de l'envoi.";
        try {
          const data = await res.json();
          message = data.error || message;
        } catch {
          // réponse non-JSON (ex: erreur HTML Vercel)
        }
        throw new Error(message);
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Réessayez ou contactez-nous directement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <AnimatedSection variant="stagger" className="grid gap-8 lg:grid-cols-5 lg:items-start">

        {/* ── Formulaire 3/5 ── */}
        <motion.div variants={fadeInUp} className="lg:col-span-3 rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-white-clean">Envoyez-nous un message&nbsp;!</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-pale/60">
                Vous avez un projet en tête&nbsp;? Nos experts sont là pour vous accompagner. Consultez nos{" "}
                <Link href="/#services" className="text-primary-glow underline-offset-2 hover:underline">services complets</Link>{" "}
                ou nos{" "}
                <Link href="/#tarifs" className="text-primary-glow underline-offset-2 hover:underline">tarifs transparents</Link>{" "}
                avant de nous contacter.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-text-pale/60">Nom de votre entreprise</label>
                  <input id="company" name="company" type="text" required placeholder="Ex : Acme Corp" value={form.company} onChange={handleChange}
                    className="rounded-xl border border-glass-border bg-bg-deep/60 px-4 py-3 text-sm text-white-clean placeholder-text-pale/30 outline-none transition-all focus:border-primary-glow/50 focus:ring-1 focus:ring-primary-glow/30" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-text-pale/60">Votre adresse email</label>
                  <input id="email" name="email" type="email" required placeholder="vous@entreprise.com" value={form.email} onChange={handleChange}
                    className="rounded-xl border border-glass-border bg-bg-deep/60 px-4 py-3 text-sm text-white-clean placeholder-text-pale/30 outline-none transition-all focus:border-primary-glow/50 focus:ring-1 focus:ring-primary-glow/30" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-text-pale/60">Je suis intéressé par</label>
                  <select id="service" name="service" required value={form.service} onChange={handleChange}
                    className="rounded-xl border border-glass-border bg-bg-deep/60 px-4 py-3 text-sm text-white-clean outline-none transition-all focus:border-primary-glow/50 focus:ring-1 focus:ring-primary-glow/30 cursor-pointer">
                    <option value="" disabled className="bg-bg-deep">Sélectionnez un service</option>
                    {services.map((s) => <option key={s} value={s} className="bg-bg-deep">{s}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-text-pale/60">Décrivez votre projet</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Décrivez votre projet, vos objectifs, votre budget estimé..." value={form.message} onChange={handleChange}
                    className="resize-none rounded-xl border border-glass-border bg-bg-deep/60 px-4 py-3 text-sm text-white-clean placeholder-text-pale/30 outline-none transition-all focus:border-primary-glow/50 focus:ring-1 focus:ring-primary-glow/30" />
                </div>
                <button type="submit" disabled={loading}
                  className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-primary-glow px-8 py-4 text-base font-semibold text-white-clean shadow-lg shadow-primary-glow/20 transition-all duration-300 hover:scale-105 hover:bg-primary-glow/90 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? (
                    <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white-clean/30 border-t-white-clean" />Envoi en cours...</>
                  ) : (
                    <><Send size={18} />Envoyer mon message</>
                  )}
                </button>
                {error && (
                  <p className="mt-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    ⚠️ {error}
                  </p>
                )}
              </form>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-6 py-12 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-glow/15">
                <CheckCircle2 size={44} className="text-primary-glow" />
              </div>
              <h3 className="text-2xl font-bold text-white-clean">Message envoyé !</h3>
              <p className="max-w-sm text-sm leading-relaxed text-text-pale/70">Merci pour votre message. Notre équipe vous répondra dans les 24h. À très bientôt&nbsp;!</p>
              <button onClick={() => { setSubmitted(false); setForm({ company: "", email: "", service: "", message: "" }); }}
                className="rounded-full border border-glass-border px-6 py-2.5 text-sm font-medium text-text-pale transition-all hover:border-primary-glow/40 hover:text-white-clean">
                Envoyer un autre message
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* ── Carte Infos Contact 2/5 ── */}
        <motion.div variants={fadeInUp} className="lg:col-span-2">
          <div className="rounded-2xl border border-glass-border bg-glass-bg p-6 backdrop-blur-md flex flex-col gap-4">

            {/* Logo + Nom */}
            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
              <Image src="/images/logo_flot.png" alt="Logo Flot Web" width={80} height={80} className="rounded-xl object-contain" />
              <div>
                <h3 className="text-2xl font-extrabold text-white-clean leading-tight">
                  Flot <span className="text-[#24919f]">Web</span>
                </h3>
                <p className="text-xs text-text-pale/50 mt-1">Agence digitale premium</p>
              </div>
            </div>

            {/* Adresse */}
            <div className="flex items-center gap-3 rounded-xl border border-[#24919f]/50 bg-[#24919f]/20 px-4 py-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#24919f]/40 text-[#5ecfdc]"><MapPin size={16} strokeWidth={1.5} /></div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#5ecfdc]/90">Adresse</p>
                <p className="text-sm font-medium text-white-clean">Paris, Île-de-France · France</p>
              </div>
            </div>

            {/* Téléphone */}
            <a href="tel:+33613920150" className="flex items-center gap-3 rounded-xl border border-[#24919f]/50 bg-[#24919f]/20 px-4 py-3 transition-all hover:border-[#24919f]/80 hover:bg-[#24919f]/30">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#24919f]/40 text-[#5ecfdc]"><Phone size={16} strokeWidth={1.5} /></div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#5ecfdc]/90">Téléphone</p>
                <p className="text-sm font-medium text-white-clean">+33 6 13 92 01 50</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:contact@flotweb.com" className="flex items-center gap-3 rounded-xl border border-[#24919f]/50 bg-[#24919f]/20 px-4 py-3 transition-all hover:border-[#24919f]/80 hover:bg-[#24919f]/30">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#24919f]/40 text-[#5ecfdc]"><Mail size={16} strokeWidth={1.5} /></div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#5ecfdc]/90">Email</p>
                <p className="text-sm font-medium text-white-clean">contact@flotweb.com</p>
              </div>
            </a>

            {/* Agence */}
            <div className="flex items-center gap-3 rounded-xl border border-[#24919f]/50 bg-[#24919f]/20 px-4 py-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#24919f]/40 text-[#5ecfdc]"><Building2 size={16} strokeWidth={1.5} /></div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#5ecfdc]/90">Agence</p>
                <p className="text-sm font-medium text-white-clean">Création web · SEO · Design</p>
              </div>
            </div>

          </div>

          {/* Disponibilité — carte séparée en dessous */}
          <div className="mt-4 flex items-center gap-4 rounded-2xl border border-[#24919f]/30 bg-[#24919f]/10 px-5 py-4 backdrop-blur-md">
            <span className="h-3 w-3 shrink-0 rounded-full bg-[#24919f] animate-pulse" />
            <div>
              <p className="text-sm font-bold text-[#24919f]">Disponibles maintenant</p>
              <p className="text-xs text-text-pale/60 mt-0.5">
                Réponse sous <span className="text-white-clean font-semibold">24h</span> · Devis gratuit
              </p>
            </div>
          </div>

        </motion.div>

      </AnimatedSection>
    </div>
  );
}

