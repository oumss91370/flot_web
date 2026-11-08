# Rapport : pages villes de flotweb.com (8 novembre 2026)

## Contexte

Search Console classe 175 pages en « Explorée, actuellement non indexée ». Il s'agit surtout de pages villes : `/creer-son-site-ecommerce/<ville>`, `/agence-web/<ville>`, `/creer-son-site-vitrine/<ville>`, `/design-ui-ux/<ville>`, etc.

Ce rapport ne modifie rien. Aucune page n'est supprimée et aucun `noindex` n'est ajouté : c'est à Omar de décider.

## Méthode

- Inventaire : `src/data/location-keywords.ts` (9 modèles) × `src/data/cities.ts` (42 villes), rendus par `src/components/LocationPageTemplate.tsx`.
- Mesure du texte commun : j'ai récupéré le HTML de production le 8 novembre 2026 et extrait le texte visible du `<main>`. J'ai ensuite comparé les pages deux à deux, au sein d'un même modèle, sur des séquences de 5 mots (5-grammes), avec part commune = intersection ÷ plus petit ensemble. J'ai fait la mesure deux fois : texte brut, puis nom de ville remplacé par `{ville}`. La seconde mesure montre ce qui reste vraiment propre à chaque page.
- Limite : je n'ai pas pu interroger Search Console dans cette session (accès non autorisé). Les recommandations ne s'appuient donc pas encore sur les clics et les impressions réels par URL. Il faut les confirmer avec ces données avant toute fusion (voir « Étape avant décision »).

## Nombre de pages par modèle

| Modèle (URL) | Pages | Mots moyens dans `<main>` | Texte commun (brut) | Texte commun (ville masquée) |
|---|---:|---:|---:|---:|
| `/creation-site-web/<ville>` | 42 | 649 | 69,0 % | 94,1 % |
| `/agence-web/<ville>` | 42 | 625 | 68,1 % | 93,9 % |
| `/referencement-seo/<ville>` | 42 | 620 | 67,6 % | 93,9 % |
| `/design-ui-ux/<ville>` | 42 | 615 | 67,4 % | 93,8 % |
| `/developpeur-web/<ville>` | 42 | 628 | 68,1 % | 94,0 % |
| `/site-vitrine/<ville>` | 42 | 621 | 67,7 % | 93,9 % |
| `/site-ecommerce/<ville>` | 42 | 617 | 67,7 % | 93,9 % |
| `/creer-son-site-ecommerce/<ville>` | 42 | 648 | 69,1 % | 94,1 % |
| `/creer-son-site-vitrine/<ville>` | 42 | 651 | 69,2 % | 94,1 % |
| **Total** | **378** | | | |

Pour une même ville (Paris), deux modèles différents ont encore **80,7 %** de texte commun en moyenne.

Répartition des 42 villes : 16 grandes villes, 12 villes des Hauts-de-Seine (92), 8 de l'Essonne (91) et 6 autres villes d'Île-de-France (78, 94).

## Diagnostic

1. **Le seul texte propre à chaque ville tient en une phrase.** C'est le champ `context` de la ville (par exemple « deuxième métropole économique de France »), plus la région et un paragraphe générique « Île-de-France » ou « hors Île-de-France ». Une fois la ville masquée, environ 94 % du texte est identique d'une page à l'autre. Pour Google, ce sont des pages quasi dupliquées : il les explore puis choisit de ne pas les indexer, ce qui explique le statut « Explorée, actuellement non indexée ».
2. **Les modèles se cannibalisent.** `site-vitrine` et `creer-son-site-vitrine`, `site-ecommerce` et `creer-son-site-ecommerce`, `creation-site-web` et `developpeur-web` visent la même intention et partagent environ 80 % de leur texte. Pour une ville donnée, Google n'en gardera au mieux qu'une.
3. **Les données structurées ne correspondent pas à la réalité.** Chaque page déclare un `ProfessionalService` avec une adresse **dans la ville de la page** (`addressLocality: city.name`). Or Flot Web n'a pas d'établissement dans les 42 villes. Google considère ce type de balisage comme trompeur, et il affaiblit la confiance dans tout le gabarit. Les prix des offres sont aussi répétés sur 378 pages.
4. **Le fil d'Ariane était cassé** (corrigé dans cette PR). Son 2e niveau pointait vers `/<modèle>` (par exemple `/agence-web`), une page en 404. Il y avait donc 9 liens cassés, répétés sur les 378 pages et dans le JSON-LD `BreadcrumbList`. Il pointe maintenant vers la page service correspondante.
5. **Le volume dilue l'exploration.** Le site compte 378 pages villes pour environ 20 pages éditoriales. Google répartit son exploration sur ces pages faibles au détriment des pages services, du blog et de la nouvelle page `/flot-studio`.

## Recommandations

### A. Passer de 9 à 4 modèles et fusionner les autres par redirection 301

| Modèle conservé | Modèles fusionnés dedans (301 ville par ville) |
|---|---|
| `/creation-site-web/<ville>` | `/developpeur-web/<ville>`, `/agence-web/<ville>` |
| `/site-vitrine/<ville>` | `/creer-son-site-vitrine/<ville>` |
| `/site-ecommerce/<ville>` | `/creer-son-site-ecommerce/<ville>` |
| `/referencement-seo/<ville>` | aucun |
| aucun modèle ville | `/design-ui-ux/<ville>` → 301 vers `/services/design-ui-ux` (peu de recherches locales sur ce terme) |

Résultat : 4 × 42 = 168 pages au plus, puis moins une fois le lot 3 ci-dessous traité.

Exemple : `/creer-son-site-vitrine/lyon` → 301 vers `/site-vitrine/lyon`. La redirection se pose dans `next.config.ts` (`redirects()`, `permanent: true`), et les URL fusionnées sortent du sitemap en même temps. Le choix du modèle conservé est à confirmer avec Search Console : on garde celui qui a déjà le plus d'impressions dans chaque paire.

### B. Choisir les villes à garder et enrichir

**Lot 1 : garder et enrichir en priorité** (proximité réelle avec l'activité, ou grand marché)
- Paris
- Hauts-de-Seine (92), où Flot Web peut intervenir sur place : Boulogne-Billancourt, Issy-les-Moulineaux, Levallois-Perret, Neuilly-sur-Seine, Courbevoie, Nanterre, Rueil-Malmaison, Antony, Montrouge, Clamart, Châtillon, Sceaux
- Essonne (91) : Massy, Palaiseau, Évry-Courcouronnes

**Lot 2 : garder, enrichir dans un second temps**
- Grandes villes : Lyon, Marseille, Bordeaux, Lille, Nantes, Toulouse
- Autres villes d'Île-de-France : Versailles, Créteil, Vincennes, Saint-Germain-en-Laye, Ivry-sur-Seine
- Essonne (91) : Verrières-le-Buisson, Gif-sur-Yvette, Orsay, Savigny-sur-Orge, Longjumeau

**Lot 3 : fusionner (301) si Search Console confirme qu'elles n'ont ni clic ni impression**
- Strasbourg, Rennes, Montpellier, Grenoble, Rouen, Metz, Nancy, Tours, Clermont-Ferrand

Ces villes sont éloignées, et le texte reconnaît lui-même que le travail s'y fait « à distance ». Une page ville n'y apporte rien de plus que la page service nationale. Cible de la 301 : la page service correspondante (`/services/creation-site-web`, `/services/referencement-seo`, etc.).

### C. Enrichir une page ville (ce qui la rend unique)

Pour chaque page gardée, il faut ajouter au moins 250 à 400 mots **réellement propres à la ville**. Ne rien inventer : pas de faux clients, de faux avis ni de faux chiffres.
- Une réalisation ou un client réel de la ville (avec accord), ou rien.
- Le tissu économique local (quartiers d'affaires, secteurs dominants) et ce que cela change pour le site.
- Les déplacements possibles (intervention sur place dans le 92 et le 91).
- Une FAQ propre à la ville, plutôt que les 4 mêmes questions où seul le nom change.
- Des liens vers les communes voisines conservées, au lieu des « 3 premiers modèles » identiques partout.

Techniquement, il suffit d'ajouter des champs optionnels dans `cities.ts` (par exemple `localIntro`, `localFaq`, `neighbours`) et de les afficher dans le gabarit lorsqu'ils sont remplis.

### D. Corriger le balisage (sans attendre)

- Remplacer l'adresse `addressLocality: city.name` du `ProfessionalService` par l'adresse réelle de Flot Web. On garde `areaServed: { "@type": "City", name: city.name }`, qui est exact.
- Retirer le catalogue d'offres et ses prix des pages villes : il figure déjà sur l'accueil.

### E. Étape avant décision

1. Search Console, rapport Performances, filtre « page contient » `/<modèle>/` sur 16 mois : exporter clics et impressions par URL.
2. Toute URL avec des clics est conservée, même si elle est classée au lot 3.
3. Poser les 301 par vagues (un modèle à la fois), retirer les URL du sitemap, puis suivre le rapport « Pages » pendant 4 à 6 semaines.

## Autres constats de l'audit (corrigés dans cette PR)

- `www.flotweb.com` répondait 200 avec le même contenu que `flotweb.com`. Le site était donc servi en double, ce qui explique probablement le « doublon avec canonique ». J'ai ajouté une redirection 308 vers `https://flotweb.com` dans `next.config.ts`. Il reste à vérifier dans Vercel, réglages des domaines, que `www` est aussi configuré en redirection.
- `http://` et l'URL avec barre finale redirigent déjà (308) vers l'URL propre. C'est normal : ce sont sans doute les « 2 pages avec redirection » de Search Console. Elles ne figurent pas dans le sitemap et il n'y a rien à corriger.
- `robots.txt` bloquait `/_next/`, ce qui empêchait Google de charger le JS et le CSS nécessaires à l'affichage des pages. Le blocage est retiré ; seul `/api/` reste bloqué.
- La canonique `https://flotweb.com` était définie dans le layout racine : toute page sans canonique propre en héritait et pointait vers l'accueil. Elle est maintenant déclarée uniquement sur l'accueil.
- `/confidentialite` et `/conditions-utilisation` existaient mais n'étaient pas dans le sitemap : elles y sont ajoutées. Le pied de page envoyait « Politique de confidentialité » vers `/mentions-legales#donnees`, une ancre qui n'existe pas : le lien pointe maintenant vers `/confidentialite`.
