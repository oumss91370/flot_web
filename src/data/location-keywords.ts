export interface LocationKeyword {
  slug: string;
  label: string;
  titlePattern: string;
  h1Pattern: string;
  descPattern: string;
  intro: string;
  serviceType: string;
  relatedServicePath: string;
  relatedServiceLabel: string;
  benefits: string[];
  ctaLabel: string;
}

export const locationKeywords: LocationKeyword[] = [
  {
    slug: 'creation-site-web',
    label: 'création de site web',
    titlePattern: '{keyword} à {city}',
    h1Pattern: 'Création de site web à {city}',
    descPattern:
      'Création de site web professionnel à {city}. Sites sur-mesure avec Next.js et React, SEO intégré, responsive. Devis gratuit sous 24h.',
    intro:
      'Vous cherchez un expert en création de site web à {city} ? Flot Web conçoit des sites modernes, rapides et optimisés pour le référencement. Notre équipe livre votre projet en 2 à 4 semaines.',
    serviceType: 'Développement Web',
    relatedServicePath: '/services/creation-site-web',
    relatedServiceLabel: 'Création de site web',
    benefits: [
      'Site responsive adapté mobile et tablette',
      'Score Lighthouse > 95 garanti',
      'SEO technique intégré dès la conception',
      'Livraison en 2 à 4 semaines',
      'Hébergement et maintenance inclus',
    ],
    ctaLabel: 'Créer mon site web',
  },
  {
    slug: 'agence-web',
    label: 'agence web',
    titlePattern: '{keyword} à {city}',
    h1Pattern: 'Agence web à {city}',
    descPattern:
      'Agence web à {city} spécialisée en création de sites, SEO et design. Flot Web accompagne les entreprises de {city} dans leur transformation digitale. Devis gratuit.',
    intro:
      "Flot Web est votre agence web de référence pour les entreprises de {city}. Nous concevons des sites web performants, des stratégies SEO efficaces et des designs modernes qui convertissent.",
    serviceType: 'Agence Digitale',
    relatedServicePath: '/services',
    relatedServiceLabel: 'Tous nos services',
    benefits: [
      'Expertise complète web, SEO et design',
      'Interlocuteur dédié pour votre projet',
      'Technologies modernes Next.js et React',
      'Tarifs transparents dès 399€',
      'Support réactif après livraison',
    ],
    ctaLabel: "Contacter l'agence",
  },
  {
    slug: 'referencement-seo',
    label: 'référencement SEO',
    titlePattern: '{keyword} à {city}',
    h1Pattern: 'Référencement SEO à {city}',
    descPattern:
      'Expert SEO à {city}. Audit, optimisation on-page, stratégie de contenu et suivi mensuel. Améliorez votre positionnement Google et générez plus de clients depuis {city}. Devis gratuit.',
    intro:
      'Le référencement SEO est le meilleur investissement digital pour les entreprises de {city}. Flot Web améliore votre visibilité Google avec une méthodologie rigoureuse et des résultats mesurables.',
    serviceType: 'Référencement SEO',
    relatedServicePath: '/services/referencement-seo',
    relatedServiceLabel: 'Référencement SEO',
    benefits: [
      'Audit SEO complet de votre site',
      'Optimisation on-page et technique',
      'Stratégie de contenu ciblée',
      'Suivi mensuel des positions',
      'Core Web Vitals optimisés',
    ],
    ctaLabel: 'Booster mon SEO',
  },
  {
    slug: 'design-ui-ux',
    label: 'design UI/UX',
    titlePattern: '{keyword} à {city}',
    h1Pattern: 'Design UI/UX à {city}',
    descPattern:
      'Studio design UI/UX à {city}. Interfaces modernes, intuitives et accessibles. Maquettes Figma, design system et animations. Augmentez vos conversions avec un design qui convertit. Devis gratuit.',
    intro:
      'Les entreprises de {city} font confiance à Flot Web pour leurs projets de design UI/UX. Nous créons des interfaces élégantes et intuitives qui captivent vos visiteurs et maximisent vos conversions.',
    serviceType: 'Design UI/UX',
    relatedServicePath: '/services/design-ui-ux',
    relatedServiceLabel: 'Design UI/UX',
    benefits: [
      'Maquettes Figma interactives',
      'Design system cohérent',
      'Accessibilité WCAG 2.1',
      'Animations Framer Motion',
      'Responsive pixel-perfect',
    ],
    ctaLabel: 'Créer mon design',
  },
  {
    slug: 'developpeur-web',
    label: 'développeur web',
    titlePattern: '{keyword} à {city}',
    h1Pattern: 'Développeur web à {city}',
    descPattern:
      'Développeur web freelance à {city}. Expert Next.js et React, sites vitrines et applications web sur-mesure. Disponible pour vos projets web à {city} et alentours. Devis gratuit.',
    intro:
      'Vous cherchez un développeur web à {city} pour votre projet ? Flot Web met son expertise Next.js et React à votre service. Sites vitrines, e-commerce ou applications web, nous livrons un code propre et performant.',
    serviceType: 'Développement Web',
    relatedServicePath: '/services/creation-site-web',
    relatedServiceLabel: 'Création de site web',
    benefits: [
      'Expert Next.js, React et TypeScript',
      'Code propre et maintenable',
      'Performance maximale Lighthouse > 95',
      'Déploiement Vercel automatisé',
      'Formation et documentation incluses',
    ],
    ctaLabel: 'Engager un développeur',
  },
  {
    slug: 'site-vitrine',
    label: 'site vitrine',
    titlePattern: '{keyword} à {city}',
    h1Pattern: 'Site vitrine à {city}',
    descPattern:
      'Création de site vitrine professionnel à {city}. Sites sur-mesure, responsive, rapides et optimisés SEO. Présentez votre activité en ligne dès 399€. Devis gratuit sous 24h.',
    intro:
      "Un site vitrine professionnel est indispensable pour toute entreprise à {city}. Flot Web crée des sites vitrines modernes qui présentent votre activité et génèrent de nouveaux clients.",
    serviceType: 'Site Vitrine',
    relatedServicePath: '/services/creation-site-web',
    relatedServiceLabel: 'Création de site web',
    benefits: [
      'Design sur-mesure et responsive',
      'Livraison en 1 à 2 semaines',
      'SEO local intégré',
      'Formulaire de contact inclus',
      'Hébergement géré',
    ],
    ctaLabel: 'Créer mon site vitrine',
  },
  {
    slug: 'site-ecommerce',
    label: 'site e-commerce',
    titlePattern: '{keyword} à {city}',
    h1Pattern: 'Site e-commerce à {city}',
    descPattern:
      'Création de site e-commerce à {city}. Boutiques en ligne sur-mesure, paiement sécurisé, gestion des stocks. Vendez en ligne depuis {city} avec une boutique performante. Devis gratuit.',
    intro:
      "Lancez votre boutique en ligne depuis {city} avec Flot Web. Nous créons des sites e-commerce performants, sécurisés et optimisés pour convertir vos visiteurs en acheteurs.",
    serviceType: 'E-commerce',
    relatedServicePath: '/services/creation-site-web',
    relatedServiceLabel: 'Création de site web',
    benefits: [
      'Catalogue produits illimité',
      'Paiement sécurisé (Stripe, PayPal)',
      'Gestion des commandes et stocks',
      'SEO e-commerce optimisé',
      'Mobile-first pour maximiser les ventes',
    ],
    ctaLabel: 'Lancer ma boutique',
  },
  {
    slug: 'creer-son-site-ecommerce',
    label: 'créer son site e-commerce',
    titlePattern: '{keyword} à {city}',
    h1Pattern: 'Créer son site e-commerce à {city}',
    descPattern:
      'Comment créer son site e-commerce à {city} ? Flot Web vous accompagne de A à Z : conception, développement, paiement en ligne et mise en ligne. Démarrez votre commerce en ligne depuis {city}.',
    intro:
      "Vous souhaitez créer votre site e-commerce à {city} ? Flot Web vous accompagne à chaque étape : de la conception au lancement, en passant par l'intégration des paiements et le référencement.",
    serviceType: 'E-commerce',
    relatedServicePath: '/services/creation-site-web',
    relatedServiceLabel: 'Création de site web',
    benefits: [
      'Accompagnement complet de A à Z',
      'Design adapté à votre secteur',
      'Intégration paiement sécurisé',
      'Formation à la gestion de votre boutique',
      'Support après lancement',
    ],
    ctaLabel: 'Créer ma boutique en ligne',
  },
  {
    slug: 'creer-son-site-vitrine',
    label: 'créer son site vitrine',
    titlePattern: '{keyword} à {city}',
    h1Pattern: 'Créer son site vitrine à {city}',
    descPattern:
      'Comment créer son site vitrine à {city} ? Flot Web vous guide et développe votre site vitrine professionnel, responsive et optimisé SEO. Visible sur Google dès le lancement. Devis gratuit.',
    intro:
      "Créer son site vitrine à {city} n'a jamais été aussi simple avec Flot Web. Nous prenons en charge tout le processus : design, développement, contenu et mise en ligne pour que vous soyez visible rapidement.",
    serviceType: 'Site Vitrine',
    relatedServicePath: '/services/creation-site-web',
    relatedServiceLabel: 'Création de site web',
    benefits: [
      'Processus simple et guidé',
      'Design professionnel garanti',
      'Visible sur Google dès le lancement',
      'Contenu et textes inclus',
      'Livraison rapide en 7 à 14 jours',
    ],
    ctaLabel: 'Créer mon site vitrine',
  },
];
