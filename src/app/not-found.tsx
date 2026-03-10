import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-deep flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-8xl font-extrabold text-primary-glow">404</p>
          <h1 className="mt-4 text-3xl font-bold text-white-clean sm:text-4xl">
            Page introuvable
          </h1>
          <p className="mt-4 max-w-md text-text-pale/70">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-primary/90 px-8 py-4 text-sm font-semibold text-white-clean transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/contacter"
              className="inline-flex items-center justify-center rounded-xl border border-glass-border px-8 py-4 text-sm font-medium text-text-pale/70 transition-all duration-300 hover:border-primary/30 hover:text-white-clean"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
