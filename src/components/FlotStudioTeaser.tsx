import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Bloc « Nos produits » de la page d'accueil : renvoie vers /flot-studio et flotstudio.com.
export default function FlotStudioTeaser() {
  return (
    <section className="relative py-20" aria-labelledby="nos-produits">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="rounded-2xl border border-primary-glow/20 bg-primary-glow/5 p-8 text-center md:p-12">
          <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
            Nos produits
          </span>
          <h2 id="nos-produits" className="mt-5 text-2xl font-bold text-white-clean sm:text-3xl">
            Flot Studio, notre logiciel de publication vidéo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-pale/70">
            Publiez et programmez vos vidéos sur Instagram, Facebook, TikTok et YouTube depuis un seul
            espace, et répondez à vos commentaires avec des réponses proposées par l&apos;IA que vous
            validez.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/flot-studio"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
            >
              Découvrir Flot Studio <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href="https://flotstudio.com"
              className="inline-flex items-center justify-center rounded-xl border border-glass-border px-8 py-4 text-sm font-medium text-text-pale/70 transition-all duration-300 hover:border-primary/30 hover:text-white-clean"
            >
              Aller sur flotstudio.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
