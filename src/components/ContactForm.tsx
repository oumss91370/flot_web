"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Building2,
  CheckCircle2,
} from "lucide-react";
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
  const [form, setForm] = useState({
    company: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation d'envoi (à remplacer par votre API)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <AnimatedSection
        variant="stagger"
        className="grid gap-8 lg:grid-cols-5 lg:items-start"
      >
        {/* ── Formulaire (3/5) ── */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-3 rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md"
        >
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-white-clean">
                Envoyez-nous un message&nbsp;!
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-pale/60">
                Vous avez un projet en tête&nbsp;? Nos experts sont là pour vous
                accompagner. Consultez nos{" "}
                <Link
                  href="/#services"
                  className="text-primary-glow underline-offset-2 hover:underline"
                >
                  services complets
                </Link>{" "}
                ou nos{" "}
                <Link
                  href="/#tarifs"
                  className="text-primary-glow underline-offset-2 hover:underline"
                >
                  tarifs transparents
                </Link>{" "}
                avant de nous contacter.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-5"
              >
                {/* Nom entreprise */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="company"
                    className="text-xs font-semibold uppercase tracking-wider text-text-pale/60"
                  >
                    Nom de votre entreprise
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Ex : Acme Corp"
                    value={form.company}
                    onChange={handleChange}
                    className="rounded-xl border border-glass-border bg-bg-deep/60 px-4 py-3 text-sm text-white-clean placeholder-text-pale/30 outline-none transition-all focus:border-primary-glow/50 focus:ring-1 focus:ring-primary-glow/30"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wider text-text-pale/60"
                  >
                    Votre adresse email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="vous@entreprise.com"
                    value={form.email}
                    onChange={handleChange}
                    className="rounded-xl border border-glass-border bg-bg-deep/60 px-4 py-3 text-sm text-white-clean placeholder-text-pale/30 outline-none transition-all focus:border-primary-glow/50 focus:ring-1 focus:ring-primary-glow/30"
                  />
                </div>

                {/* Service */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="service"
                    className="text-xs font-semibold uppercase tracking-wider text-text-pale/60"
                  >
                    Je suis intéressé par
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="rounded-xl border border-glass-border bg-bg-deep/60 px-4 py-3 text-sm text-white-clean outline-none transition-all focus:border-primary-glow/50 focus:ring-1 focus:ring-primary-glow/30 cursor-pointer"
                  >
                    <option value="" disabled className="bg-bg-deep">
                      Sélectionnez un service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-bg-deep">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wider text-text-pale/60"
                  >
                    Décrivez votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Décrivez votre projet, vos objectifs, votre budget estimé..."
                    value={form.message}
                    onChange={handleChange}
                    className="resize-none rounded-xl border border-glass-border bg-bg-deep/60 px-4 py-3 text-sm text-white-clean placeholder-text-pale/30 outline-none transition-all focus:border-primary-glow/50 focus:ring-1 focus:ring-primary-glow/30"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-primary-glow px-8 py-4 text-base font-semibold text-white-clean shadow-lg shadow-primary-glow/20 transition-all duration-300 hover:scale-105 hover:bg-primary-glow/90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white-clean/30 border-t-white-clean" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer mon message
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* ── Succès ── */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-6 py-12 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-glow/15">
                <CheckCircle2 size={44} className="text-primary-glow" />
              </div>
              <h3 className="text-2xl font-bold text-white-clean">
                Message envoyé !
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-text-pale/70">
                Merci pour votre message. Notre équipe vous répondra dans les
                24h. À très bientôt&nbsp;!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ company: "", email: "", service: "", message: "" });
                }}
                className="rounded-full border border-glass-border px-6 py-2.5 text-sm font-medium text-text-pale transition-all hover:border-primary-glow/40 hover:text-white-clean"
              >
                Envoyer un autre message
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* ── Carte Infos Contact (2/5) ── */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          {/* Card principale */}
          <div className="rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary-glow">
                <Building2 size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white-clean">Flot Web</h3>
            </div>

            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary-glow">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-pale/50 mb-1">
                    Adresse
                  </p>
                  <p className="text-sm text-text-pale/80 leading-relaxed">
                    Paris, Île-de-France
                    <br />
                    France
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary-glow">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-pale/50 mb-1">
                    Téléphone
                  </p>
                  <a
                    href="tel:+33613920150"
                    className="text-sm text-text-pale/80 hover:text-primary-glow transition-colors"
                  >
                    +33 6 13 92 01 50
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary-glow">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-pale/50 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:contact@flotweb.com"
                    className="text-sm text-text-pale/80 hover:text-primary-glow transition-colors"
                  >
                    contact@flotweb.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary-glow">
                  <Building2 size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-pale/50 mb-1">
                    Agence
                  </p>
                  <p className="text-sm text-text-pale/80 leading-relaxed">
                    Agence digitale premium
                    <br />
                    Création web · SEO · Design
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Card disponibilité */}
          <div className="rounded-2xl border border-primary-glow/20 bg-primary-glow/5 p-6 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary-glow animate-pulse" />
              <span className="text-sm font-semibold text-primary-glow">
                Disponibles maintenant
              </span>
            </div>
            <p className="text-sm text-text-pale/60 leading-relaxed">
              Réponse garantie sous{" "}
              <span className="text-white-clean font-medium">24h</span>. Devis
              gratuit et sans engagement.
            </p>
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

