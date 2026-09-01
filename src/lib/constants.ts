export const EVENT_DETAILS = {
  title: "Foire d'Exposition des Entrepreneurs 2026",
  edition: "2ᵉ Édition",
  organizer: "Ligue des Leaders d'Entreprise",
  location: "Parc Bois, Garoua",
  city: "Garoua, Nord-Cameroun",
  dateLabel: "18 Décembre 2026",
  targetDateISO: "2026-12-18T09:00:00+01:00",
  whatsappNumber: "+237699997583",
  whatsappMessage: encodeURIComponent("Bonjour ! Je souhaite obtenir des informations sur la Foire d'Exposition des Entrepreneurs 2026 à Garoua."),
  socialLinks: {
    tiktok: "https://www.tiktok.com/@ligue.des.leaders?_r=1&_t=ZS-99HXz2jKaFc",
  },
};

export const PAYMENT_DETAILS = {
  orange: {
    name: "Orange Money",
    number: "+237 6 97 19 38 57",
    accountName: "ROUKAYATOU MOUSKORO",
    code: "#150#",
  },
  instructions: "Veuillez effectuer votre dépôt Orange Money au numéro ci-dessus en indiquant votre Nom / Nom d'Entreprise en motif ou référence de paiement. Un agent de la Ligue vous contactera dans les 24h pour valider définitivement votre réservation.",
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

export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  src: string;
  poster?: string;
  title: string;
  category: "Ambiance" | "Stands & Exposants" | "Concours & Prestations" | "Cérémonie & Vainqueurs" | "Vidéos de l'Édition";
  description?: string;
}

export const GALLERY_MEDIA: GalleryItem[] = [
  // Photos (20 items)
  {
    id: "photo-01",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0011.jpg",
    title: "Inauguration & Cérémonie d'Ouverture",
    category: "Cérémonie & Vainqueurs",
    description: "Lancement officiel de la 1ʳᵉ Édition de la Foire d'Exposition des Entrepreneurs à Garoua.",
  },
  {
    id: "photo-02",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0031.jpg",
    title: "Stands & Présentation des Produits Artisans",
    category: "Stands & Exposants",
    description: "Exposition des produits locaux et échanges enrichissants avec les premiers visiteurs.",
  },
  {
    id: "photo-03",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0038.jpg",
    title: "Affluence & Dynamisme de la Foire",
    category: "Ambiance",
    description: "Une foule enthousiaste venue célébrer l'esprit d'entreprise au Parc Bois de Garoua.",
  },
  {
    id: "photo-04",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0044.jpg",
    title: "Démonstrations des Concours Métiers",
    category: "Concours & Prestations",
    description: "Les candidats au travail sous le regard attentif des membres du jury.",
  },
  {
    id: "photo-05",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0053.jpg",
    title: "Espace d'Exposition & Networking",
    category: "Stands & Exposants",
    description: "Rencontres entre créateurs, investisseurs et clients potentiels.",
  },
  {
    id: "photo-06",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0054.jpg",
    title: "Présentation des Créations de Mode",
    category: "Concours & Prestations",
    description: "Défilé et exposition des modèles confectionnés par les stylistes locaux.",
  },
  {
    id: "photo-07",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0058.jpg",
    title: "Ambiance & Animations au Parc Bois",
    category: "Ambiance",
    description: "Animations culturelles et festives tout au long de la journée d'exposition.",
  },
  {
    id: "photo-08",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0060.jpg",
    title: "Stand de Pâtisserie et Dégustation",
    category: "Concours & Prestations",
    description: "Dégustation des œuvres gourmandes réalisées pour le Concours de Pâtisserie.",
  },
  {
    id: "photo-09",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0081.jpg",
    title: "Stand VIP & Partenaires Officiels",
    category: "Stands & Exposants",
    description: "Présentation des entreprises sponsors et grands partenaires de la Ligue.",
  },
  {
    id: "photo-10",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0082.jpg",
    title: "Échanges B2B & Opportunités Commerciales",
    category: "Stands & Exposants",
    description: "Négociations directes et partenariats conclus sur le site d'exposition.",
  },
  {
    id: "photo-11",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0086.jpg",
    title: "Visite des Officiels et Autorités",
    category: "Cérémonie & Vainqueurs",
    description: "Passage des délégués régionaux et soutien institutionnel à l'entreprenariat.",
  },
  {
    id: "photo-12",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0102.jpg",
    title: "Le Jury du Concours Stylisme",
    category: "Concours & Prestations",
    description: "Évaluation minutieuse des coupes, finitions et textures des vêtements exposés.",
  },
  {
    id: "photo-13",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0103.jpg",
    title: "Sourires & Fierté des Exposants",
    category: "Ambiance",
    description: "La joie des entrepreneurs locaux de faire découvrir leurs marques.",
  },
  {
    id: "photo-14",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0105.jpg",
    title: "Remise des Trophées et Attestations",
    category: "Cérémonie & Vainqueurs",
    description: "Couronnement des grands vainqueurs des concours Pâtissier et Styliste.",
  },
  {
    id: "photo-15",
    type: "photo",
    src: "/galerie/images/IMG-20260824-WA0109.jpg",
    title: "Photo de Famille — Ligue des Leaders d'Entreprise",
    category: "Cérémonie & Vainqueurs",
    description: "L'équipe organisatrice et les partenaires réunis à la clôture de l'édition 2025.",
  },
  {
    id: "photo-16",
    type: "photo",
    src: "/galerie/images/IMG-20260829-WA0005.jpg",
    title: "Focus sur la Créativité des Jeunes Talents",
    category: "Stands & Exposants",
    description: "Mise en avant des jeunes startups et innovateurs du Nord-Cameroun.",
  },
  {
    id: "photo-17",
    type: "photo",
    src: "/galerie/images/IMG-20260829-WA0006.jpg",
    title: "Exposition des Produits Cosmétiques & Bio",
    category: "Stands & Exposants",
    description: "Valorisation des soins naturels et produits du terroir camrounais.",
  },
  {
    id: "photo-18",
    type: "photo",
    src: "/galerie/images/IMG-20260829-WA0007.jpg",
    title: "Visiteurs en Session de Découverte",
    category: "Ambiance",
    description: "Une affluence soutenue sur tous les îlots de stands.",
  },
  {
    id: "photo-19",
    type: "photo",
    src: "/galerie/images/IMG-20260829-WA0008.jpg",
    title: "Couverture Médias & Reportages Vidéo",
    category: "Cérémonie & Vainqueurs",
    description: "Entretiens et interviews des exposants diffusés sur les canaux officiels.",
  },
  {
    id: "photo-20",
    type: "photo",
    src: "/galerie/images/IMG-20260829-WA0009.jpg",
    title: "Clôture Festive & Rendez-vous en 2026",
    category: "Ambiance",
    description: "Célébration du succès de la 1ʳᵉ édition et annonce de la 2ᵉ édition 2026.",
  },

  // Vidéos (4 items)
  {
    id: "video-01",
    type: "video",
    src: "/galerie/videos/VID-20260829-WA0000.mp4",
    poster: "/galerie/images/IMG-20260824-WA0011.jpg",
    title: "Reportage vidéo : L'Esprit de la Foire 2025",
    category: "Vidéos de l'Édition",
    description: "Retour en vidéo sur l'ambiance globale et les temps forts de la première édition à Garoua.",
  },
  {
    id: "video-02",
    type: "video",
    src: "/galerie/videos/VID-20260829-WA0001.mp4",
    poster: "/galerie/images/IMG-20260824-WA0038.jpg",
    title: "Temps Forts & Défilé des Concours",
    category: "Vidéos de l'Édition",
    description: "Extraits du concours de stylisme et défilé de mode en direct sur le podium principal.",
  },
  {
    id: "video-03",
    type: "video",
    src: "/galerie/videos/VID-20260829-WA0002.mp4",
    poster: "/galerie/images/IMG-20260824-WA0082.jpg",
    title: "Témoignages & Interviews des Exposants",
    category: "Vidéos de l'Édition",
    description: "Les exposants partagent leur satisfaction et les ventes réalisées pendant l'événement.",
  },
  {
    id: "video-04",
    type: "video",
    src: "/galerie/videos/VID-20260829-WA0003.mp4",
    poster: "/galerie/images/IMG-20260824-WA0105.jpg",
    title: "Grande Cérémonie de Remise des Prix",
    category: "Vidéos de l'Édition",
    description: "Remise du Cash Prize de 100 000 FCFA et des trophées aux gagnants des concours.",
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Général & Lieu" | "Stands & Réservation" | "Concours Métiers" | "Paiement Mobile Money";
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Où et quand se déroulera la Foire d'Exposition des Entrepreneurs 2026 ?",
    answer: "La 2ᵉ Édition aura lieu le 18 Décembre 2026 sur le site prestigieux du Parc Bois de Garoua, dans la région du Nord-Cameroun. Les horaires d'ouverture au public s'étendent de 08h00 à 18h00 chaque jour.",
    category: "Général & Lieu",
  },
  {
    id: "faq-2",
    question: "Comment réserver un stand pour exposer mes produits ou services ?",
    answer: "Il vous suffit de cliquer sur le bouton 'Réserver ce stand' dans la section Tarifs de notre site. Choisissez parmi nos 3 formules (Standard 25 000 FCFA, Premium 35 000 FCFA ou VIP Prestige 65 000 FCFA), remplissez le formulaire avec le nom de votre entreprise, puis validez pour recevoir les consignes de règlement.",
    category: "Stands & Réservation",
  },
  {
    id: "faq-3",
    question: "Quels sont les équipements inclus dans la réservation de stand ?",
    answer: "Chaque formule comprend des tables, des chaises d'exposition, des badges d'accès officiels ainsi qu'un package de communication visuelle (vidéo publicitaire et affiche). Consultez notre grille comparative pour le détail des équipements selon la formule choisie.",
    category: "Stands & Réservation",
  },
  {
    id: "faq-4",
    question: "Comment s'inscrire aux Grands Concours (Pâtissier et Styliste) ?",
    answer: "Sélectionnez le concours auquel vous désirez participer (Meilleur Pâtissier ou Meilleur Tailleur/Styliste) et cliquez sur 'S'inscrire au concours'. Les frais de participation s'élèvent à 10 000 FCFA. Les vainqueurs remporteront un Cash Prize de 100 000 FCFA, le trophée officiel et une attestation d'excellence.",
    category: "Concours Métiers",
  },
  {
    id: "faq-5",
    question: "Quels sont les moyens de paiement acceptés pour valider ma souscription ?",
    answer: "Le règlement s'effectue facilement via Orange Money (#150#) au numéro officiel +237 6 97 19 38 57 (Titulaire : ROUKAYATOU MOUSKORO). Pensez à indiquer votre nom ou nom d'entreprise comme référence de paiement.",
    category: "Paiement Mobile Money",
  },
  {
    id: "faq-6",
    question: "Que se passe-t-il après l'envoi de mon formulaire d'inscription ?",
    answer: "Dès validation de votre formulaire, un message de confirmation s'affiche à l'écran avec le numéro de dépôt Orange Money (+237 6 97 19 38 57). Un email récapitulatif est automatiquement transmis à notre équipe, et un agent de la Ligue vous contactera sous 24h pour confirmer votre emplacement.",
    category: "Stands & Réservation",
  },
  {
    id: "faq-7",
    question: "L'accès à la Foire est-il payant pour les visiteurs ?",
    answer: "Non, l'accès au site d'exposition du Parc Bois de Garoua est entièrement libre et gratuit pour l'ensemble du public, acheteurs, familles et visiteurs.",
    category: "Général & Lieu",
  },
  {
    id: "faq-8",
    question: "Comment contacter l'organisation en cas de question complémentaire ?",
    answer: "Vous pouvez nous écrire directement sur WhatsApp (+237 6 99 99 75 83) via le bouton vert flottant en bas de l'écran, ou suivre nos actualités sur le compte TikTok officiel de la Ligue des Leaders d'Entreprise.",
    category: "Général & Lieu",
  },
];

