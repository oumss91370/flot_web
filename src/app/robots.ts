import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /_next/ n'est pas bloqué : Google doit pouvoir charger le JS et le CSS pour afficher les pages.
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://flotweb.com/sitemap.xml",
  };
}

