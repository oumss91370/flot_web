import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main role="main" aria-label="Contenu principal Flot Web">
        <Hero />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
