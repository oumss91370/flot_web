import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublishClient from "./PublishClient";

export const metadata: Metadata = {
  title: "Publication Flot Web – Post to TikTok",
  description: "Internal tool used by Flot Web to publish its own educational videos to its TikTok accounts.",
  robots: { index: false, follow: false },
};

export default function TikTokPublishPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-deep pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
          <p className="text-sm uppercase tracking-widest text-primary-glow mb-2">Publication Flot Web</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white-clean mb-3">Post to TikTok</h1>
          <p className="text-text-pale/70 mb-10">
            Publish Flot Web&apos;s original educational videos to the TikTok accounts you connect. Nothing is posted until
            you review every setting and press <strong className="text-white-clean">Post</strong>.
          </p>
          <PublishClient />
          <p className="mt-12 text-sm text-text-pale/50">
            <a href="/conditions-utilisation" className="text-primary-glow hover:underline">Terms of Service</a>
            {" · "}
            <a href="/confidentialite" className="text-primary-glow hover:underline">Privacy Policy</a>
            {" · "}Not affiliated with or endorsed by TikTok.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
