"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
const footerLinks = {
  navigation: [
    { label: "Services", href: "/#services" },
    { label: "Tarifs", href: "/#tarifs" },
    { label: "Contact", href: "/#contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGV", href: "#" },
  ],
};
export default function Footer() {
  return (
    <footer className="relative border-t border-glass-border bg-bg-deep/90">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo_flot.png"
                alt="Flot Web"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold text-white-clean">
                Flot<span className="text-primary-glow">Web</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-pale/60">
              Agence digitale premium. Nous créons des expériences web
              d&#39;exception pour les entreprises ambitieuses.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white-clean">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-pale/60 transition-colors hover:text-primary-glow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white-clean">
              Légal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-pale/60 transition-colors hover:text-primary-glow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white-clean">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@flotweb.com"
                  className="flex items-center gap-3 text-sm text-text-pale/60 transition-colors hover:text-primary-glow"
                >
                  <Mail size={16} className="shrink-0 text-primary-glow/60" />
                  contact@flotweb.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33613920150"
                  className="flex items-center gap-3 text-sm text-text-pale/60 transition-colors hover:text-primary-glow"
                >
                  <Phone size={16} className="shrink-0 text-primary-glow/60" />
                  +33 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-pale/60">
                <MapPin size={16} className="shrink-0 text-primary-glow/60" />
                France
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-glass-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-text-pale/40">
            &copy; 2026 Flot Web &mdash; Tous droits réservés
          </p>
          <p className="text-sm text-text-pale/30">
            Conçu avec passion à bord du digital
          </p>
        </div>
      </div>
    </footer>
  );
}
