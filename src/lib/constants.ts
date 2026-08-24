export const EVENT_DETAILS = {
  title: "Foire d'Exposition des Entrepreneurs 2026",
  edition: "2ᵉ Édition",
  organizer: "Ligue des Leaders d'Entreprise",
  location: "Parc Bois, Garoua",
  city: "Garoua, Nord-Cameroun",
  dateLabel: "Décembre 2026",
  targetDateISO: "2026-12-01T09:00:00+01:00",
  whatsappNumber: "+237699000000",
  whatsappMessage: encodeURIComponent("Bonjour ! Je souhaite obtenir des informations sur la Foire d'Exposition des Entrepreneurs 2026 à Garoua."),
  socialLinks: {
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
};

export const NAV_LINKS = [
  { name: "Accueil", href: "#accueil" },
  { name: "Stands", href: "#stands" },
  { name: "Concours", href: "#concours" },
  { name: "Retour en images", href: "#galerie" },
  { name: "FAQ", href: "#faq" },
];

export interface StandPackage {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
  ctaLabel: string;
}

export const STANDS_DATA: StandPackage[] = [
  {
    id: "stand-25k",
    name: "Stand Standard",
    price: 25000,
    priceFormatted: "25 000",
    description: "Idéal pour les jeunes entreprises et artisans souhaitant une première présence.",
    features: [
      "1 Table & 2 Chaises d'exposition",
      "2 Badges d'accès exposants officiels",
      "1 Vidéo publicitaire sur réseaux officiels",
      "1 Affiche promotionnelle de votre marque",
      "Visibilité standard sur le site d'exposition",
    ],
    ctaLabel: "Réserver ce stand (25k FCFA)",
  },
  {
    id: "stand-35k",
    name: "Stand Premium",
    price: 35000,
    priceFormatted: "35 000",
    badge: "RECOMMANDÉ",
    popular: true,
    description: "La formule la plus plébiscitée avec espace étendu et visibilité renforcée.",
    features: [
      "2 Tables & 4 Chaises d'exposition",
      "4 Badges d'accès exposants officiels",
      "1 Vidéo publicitaire HD dédiée",
      "1 Affiche promotionnelle grand format",
      "Emplacement stratégique prioritaire",
      "Diffusion vidéo sur l'écran géant de l'événement",
    ],
    ctaLabel: "Réserver ce stand (35k FCFA)",
  },
  {
    id: "stand-65k",
    name: "Stand VIP Prestige",
    price: 65000,
    priceFormatted: "65 000",
    badge: "MAXIMUM DE VISIBILITÉ",
    description: "Espace maximal et statut de partenaire VIP pour entreprises et PME majeures.",
    features: [
      "4 Tables & 8 Chaises d'exposition",
      "8 Badges d'accès exposants officiels",
      "1 Vidéo publicitaire Premium + Interview",
      "Affiches publicitaires prioritaires & Bannières",
      "Emplacement d'honneur à l'entrée principale",
      "Mention spéciale logo sponsor sur les supports web",
    ],
    ctaLabel: "Réserver ce stand VIP (65k FCFA)",
  },
];

export interface ConcoursCategory {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  priceFormatted: string;
  iconName: "cake" | "scissors";
  description: string;
  criteria: string[];
  rewards: string[];
  ctaLabel: string;
}

export const CONCOURS_DATA: ConcoursCategory[] = [
  {
    id: "concours-patissier",
    title: "Meilleur Pâtissier",
    subtitle: "Concours de Pâtisserie & Création Gourmande",
    price: 10000,
    priceFormatted: "10 000",
    iconName: "cake",
    description: "Mettez en avant vos talents de pâtissier(e), la finesse de vos gâteaux et la créativité de vos recettes locales.",
    criteria: [
      "Originalité de la recette & Goût",
      "Finition & Esthétique du gâteau d'exposition",
      "Utilisation de produits et saveurs du Cameroun",
      "Présentation devant le jury professionnel",
    ],
    rewards: [
      "Cash Prize de 100 000 FCFA pour le vainqueur",
      "Trophée Officiel du Meilleur Pâtissier 2026",
      "Attestation d'Excellence & Couverture Médias",
    ],
    ctaLabel: "S'inscrire au Concours Pâtissier (10k)",
  },
  {
    id: "concours-styliste",
    title: "Meilleur Tailleur / Styliste",
    subtitle: "Concours de Mode, Stylisme & Modélisme",
    price: 10000,
    priceFormatted: "10 000",
    iconName: "scissors",
    description: "Révélez votre génie de création textile, vos coupes parfaites et la beauté des tissus africains et modernes.",
    criteria: [
      "Qualité de coupe & finitions des tenues",
      "Créativité du design & choix des matières",
      "Défilé de présentation devant le jury",
      "Respect du thème d'élégance entrepreneuriale",
    ],
    rewards: [
      "Cash Prize de 100 000 FCFA pour le vainqueur",
      "Trophée Officiel du Meilleur Styliste 2026",
      "Attestation d'Excellence & Couverture Médias",
    ],
    ctaLabel: "S'inscrire au Concours Styliste (10k)",
  },
];
