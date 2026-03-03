"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#tarifs" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo_flot.png"
            alt="Flot Web Agence Digitale Premium"
            width={44}
            height={44}
            className="transition-transform duration-300 group-hover:scale-110"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-white-clean">
            Flot<span className="text-primary-glow">Web</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-text-pale/80 transition-colors hover:text-white-clean group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary-glow transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white-clean shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-glow hover:shadow-primary-glow/30 hover:scale-105 md:inline-flex"
        >
          Contact
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 rounded-lg p-2 text-text-pale md:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden glass-strong md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 pb-6 pt-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-text-pale transition-colors hover:bg-white/5 hover:text-white-clean"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white-clean transition-all hover:bg-primary-glow"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
