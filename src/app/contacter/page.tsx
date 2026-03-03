import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactFAQ from "@/components/ContactFAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contactez-nous — Flot Web",
  description:
    "Discutez de votre projet avec nos experts. Formulaire de contact, informations Flot Web et FAQ. Devis gratuit sous 24h.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center mb-16">
          <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
            Contact
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white-clean sm:text-5xl">
            Parlons de votre{" "}
            <span className="bg-linear-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
              projet
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-pale/70">
            Nos experts sont là pour vous accompagner vers le succès digital.
          </p>
        </div>

        {/* Form + Info cards */}
        <ContactForm />

        {/* FAQ */}
        <ContactFAQ />
      </main>
      <Footer />
    </>
  );
}

