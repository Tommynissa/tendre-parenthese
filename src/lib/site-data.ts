import {
  Baby,
  CalendarHeart,
  Coffee,
  HeartHandshake,
  Palette,
  Sparkles
} from "lucide-react";

export const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Café", href: "/le-cafe" },
  { label: "Garderie", href: "/halte-garderie" },
  { label: "Ateliers", href: "/les-ateliers" },
  { label: "Bien-être", href: "/bien-etre" },
  { label: "Location de salle", href: "/location-de-salle" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Qui sommes nous", href: "/qui-sommes-nous" }
];

export const universes = [
  {
    slug: "le-cafe",
    eyebrow: "Café cocoon",
    title: "Un café poussette pensé pour respirer pendant que les enfants jouent.",
    short: "Boissons douces, petite restauration, circulation fluide et espace jeux intégré.",
    icon: Coffee,
    image: "/images/cafe-poussette.png",
    tint: "rose",
    bullets: ["Carte courte et soignée", "Accès poussettes", "Espace jeux enfant: 5 €/heure"],
    price: "Accès enfant espace jeux: 5 €/heure · Formules café dès 6 €",
    tariff: {
      label: "Accès espace jeux enfant",
      value: "5 €",
      detail: "pour 1 heure, sous la présence des parents"
    },
    sections: [
      "Le Café Poussette est un véritable lieu de vie où les parents peuvent prendre le temps de se retrouver, de travailler ou simplement de savourer une pause dans une atmosphère chaleureuse et cocooning. Entièrement accessible aux poussettes, il a été imaginé pour offrir confort et sérénité à toute la famille.",
      "Notre carte met à l'honneur des produits simples et gourmands : cafés de spécialité, thés et infusions, boissons fraîches, smoothies, pâtisseries maison, cookies, salades et petites collations préparées avec soin.",
      "À quelques pas des tables, un espace de jeux sécurisé permet aux enfants de s'amuser et d'explorer librement tout en restant sous le regard de leurs parents. Pensé pour favoriser les échanges et les rencontres, le Café Poussette est un lieu où petits et grands partagent un moment de détente, dans un cadre lumineux, apaisant et convivial."
    ],
    faq: [
      ["Puis-je venir sans réserver ?", "Oui pour le café, dans la limite des places disponibles."],
      ["Les poussettes sont-elles acceptées ?", "Oui, la circulation et le mobilier sont pensés pour cela."],
      ["Quel est le tarif de l'espace jeux ?", "L'accès enfant à l'espace jeux du café poussette est à 5 € pour 1 heure."],
      ["L'espace jeux est-il un service séparé ?", "Non, il fait partie de l'expérience café poussette. Pour une garde sans présence parentale, il faut choisir la halte-garderie."]
    ]
  },
  {
    slug: "halte-garderie",
    eyebrow: "Halte-garderie",
    title: "Une garde ponctuelle sur réservation, avec un cadre rassurant.",
    short: "Créneaux limités, accueil progressif et transmission claire aux parents.",
    icon: Baby,
    image: "/images/hero-parenthese.png",
    tint: "blue",
    bullets: ["Réservation obligatoire", "Planning administrable", "10 €/heure"],
    price: "10 €/heure",
    tariff: {
      label: "Halte-garderie",
      value: "10 €",
      detail: "par heure, sur réservation"
    },
    sections: [
      "La halte-garderie Tendre Parenthèse est une véritable bulle de relais pour les parents. Confiez votre enfant en toute sérénité pendant quelques heures afin de travailler, honorer un rendez-vous, profiter d'un soin dans notre espace bien-être ou simplement vous accorder un moment pour vous.",
      "Encadrés par des professionnels de la petite enfance, les enfants évoluent dans un environnement chaleureux, sécurisé et adapté à leur âge, favorisant l'éveil, le jeu et la découverte dans le respect du rythme de chacun.",
      "Pour garantir une prise en charge de qualité, chaque créneau est volontairement limité en nombre d'enfants, afin d'offrir une attention personnalisée et un cadre apaisant.",
      "La réservation s'effectue directement en ligne grâce à un planning simple, avec les disponibilités mises à jour en temps réel.",
      "Parce qu'un parent serein est un parent plus disponible, chacun peut ici profiter de sa propre parenthèse."
    ],
    faq: [
      ["Quel est le tarif ?", "La halte-garderie est à 10 €/heure."],
      ["Comment réserver ?", "La réservation se fait depuis la page Réserver, avec choix du créneau."]
    ]
  },
  {
    slug: "les-ateliers",
    eyebrow: "Ateliers",
    title: "Des rendez-vous utiles, beaux et vraiment adaptés aux familles.",
    short: "Éveil, parentalité, créatif, sommeil, nutrition et rencontres professionnelles.",
    icon: Palette,
    image: "/images/ateliers-parenthese.png",
    tint: "sand",
    bullets: ["Calendrier mensuel", "Intervenants qualifiés", "Réservation en ligne"],
    price: "Ateliers dès 18 €",
    tariff: {
      label: "Ateliers",
      value: "Dès 18 €",
      detail: "selon le format et l’intervenant"
    },
    sections: [
      "Les ateliers Tendre Parenthèse sont des moments de partage conçus pour réunir parents, enfants et professionnels dans une ambiance conviviale et bienveillante. À travers des formats variés, chacun peut apprendre, échanger et créer des souvenirs tout en renforçant le lien parent-enfant.",
      "Éveil sensoriel, arts plastiques, musique, yoga parents-bébés, portage, rencontres avec des spécialistes de la petite enfance ou encore ateliers créatifs : chaque activité est pensée pour accompagner les familles à chaque étape de leur parcours.",
      "Animés par des intervenants qualifiés, nos ateliers se déroulent en petits groupes afin de favoriser les échanges, la proximité et une expérience enrichissante pour tous. Parce que grandir et apprendre se vivent encore mieux ensemble, chaque atelier est une nouvelle occasion de partager une tendre parenthèse."
    ],
    faq: [
      ["Les ateliers sont-ils mixtes ?", "Certains sont parent-enfant, d'autres réservés aux parents ou aux enfants."],
      ["Puis-je proposer un atelier ?", "Oui, le formulaire contact permet de présenter une intervention."]
    ]
  },
  {
    slug: "bien-etre",
    eyebrow: "Bien-être",
    title: "Massages, yoga, pilates et soins pour remettre le corps au calme.",
    short: "Des prestations parent-friendly, avec créneaux compatibles avec la garderie.",
    icon: Sparkles,
    image: "/images/bienetre-parenthese.png",
    tint: "rose",
    bullets: ["Massages", "Yoga et pilates", "Esthétique douce"],
    price: "Séances dès 25 €",
    tariff: {
      label: "Bien-être",
      value: "Dès 25 €",
      detail: "massages, yoga, pilates ou soins"
    },
    sections: [
      "Parce que prendre soin de soi est essentiel pour mieux prendre soin de ceux que l'on aime, Tendre Parenthèse propose un espace entièrement dédié au bien-être des parents. Dans une ambiance apaisante et chaleureuse, accordez-vous une véritable parenthèse grâce à des prestations pensées pour vous ressourcer.",
      "Massages, soins du visage, onglerie, yoga, pilates, ateliers de relaxation ou encore accompagnements bien-être : chaque prestation est réalisée par des professionnels qualifiés, dans un cadre propice à la détente et au lâcher-prise.",
      "Que vous disposiez d'une heure ou simplement de quelques instants, notre espace bien-être vous offre l'occasion de ralentir, de vous recentrer et de retrouver un équilibre entre votre vie de parent et votre bien-être personnel.",
      "Parce qu'un parent épanoui est un parent plus serein, chacun mérite de s'accorder sa propre tendre parenthèse.",
      "Les créneaux pourront être synchronisés avec la halte-garderie afin de réserver un soin pendant que l'enfant est accueilli."
    ],
    faq: [
      ["Puis-je réserver un massage avec une garde ?", "Oui, l'architecture de réservation prévoit ce parcours."],
      ["Les cours sont-ils débutants ?", "Oui, les formats yoga et pilates sont pensés pour reprendre doucement."]
    ]
  }
];

export const storyPillars = [
  { value: "4", label: "univers réunis" },
  { value: "2", label: "clics pour réserver" },
  { value: "6 €", label: "formules café" },
  { value: "10 €", label: "l'heure de garderie" }
];

export const cafeMenu = [
  {
    category: "Boissons froides",
    note: "Fraîches, douces, faciles à boire entre deux poussettes.",
    items: [
      { name: "Limonade maison rose & citron", detail: "Citron pressé, eau pétillante, sirop floral léger", price: "5,50 €" },
      { name: "Thé glacé pêche blanche", detail: "Infusion froide, peu sucrée", price: "4,80 €" },
      { name: "Latte glacé vanille douce", detail: "Café ou décaféiné, lait au choix", price: "5,90 €" },
      { name: "Jus pressé du moment", detail: "Orange, pomme ou poire selon arrivage", price: "4,90 €" },
      { name: "Smoothie parent-enfant", detail: "Banane, fraise, yaourt ou lait végétal", price: "6,20 €" }
    ]
  },
  {
    category: "Snacks doux",
    note: "Des petites faims propres, simples et rassurantes.",
    items: [
      { name: "Banana bread moelleux", detail: "Tranche épaisse, option sans chocolat", price: "4,50 €" },
      { name: "Cookie avoine & chocolat", detail: "Recette maison, texture fondante", price: "3,80 €" },
      { name: "Assiette mini tartines", detail: "Fromage frais, confiture douce, fruits", price: "7,50 €" },
      { name: "Compote artisanale", detail: "Pomme, poire ou saison, format enfant", price: "3,20 €" },
      { name: "Planche goûter à partager", detail: "Fruits, cake, granola, petites douceurs", price: "12 €" }
    ]
  }
];

export const testimonials = [
  {
    quote: "Enfin un lieu qui ne demande pas aux parents de choisir entre respirer et s'occuper de leur enfant.",
    author: "Camille, maman de deux enfants"
  },
  {
    quote: "On sent tout de suite que l'espace a été pensé pour la vraie vie: sacs, poussettes, fatigue et moments précieux.",
    author: "Nora, parent testeuse"
  },
  {
    quote: "Le positionnement est premium sans être intimidant. C'est chaleureux, très clair, très rassurant.",
    author: "Julien, parent testeur"
  }
];

export const teamMembers = [
  {
    name: "Anaïs Murcia",
    role: "Responsable administratif et financier",
    image: "/images/team-anais-murcia.png",
    credentials: [
      "BTS Assistante de Gestion",
      "10 ans d’expérience comptable",
      "Responsable administratif et financier"
    ]
  },
  {
    name: "Lisa Braquet",
    role: "Responsable commerciale et communication",
    image: "/images/team-lisa-braquet.png",
    credentials: [
      "BTS Assistante de Gestion",
      "Assistante commerciale",
      "Expérience restauration, vente et hôtellerie",
      "Responsable commerciale et communication"
    ]
  },
  {
    name: "Maëva Salvo",
    role: "Référente PMI et halte-garderie",
    image: "/images/team-maeva-salvo.png",
    credentials: [
      "Diplôme d’État auxiliaire de puériculture",
      "6 ans d’expérience en crèche",
      "Référente PMI et halte-garderie"
    ]
  }
];

export const workshops = [
  { title: "Eveil sensoriel", category: "Parent-enfant", date: "Mercredi 10h", price: "18 €" },
  { title: "Sommeil du tout-petit", category: "Professionnel", date: "Jeudi 18h", price: "25 €" },
  { title: "Yoga postnatal doux", category: "Bien-être", date: "Samedi 9h30", price: "22 €" }
];

export const adminModules = [
  "Ateliers",
  "Horaires",
  "Créneaux",
  "Prix",
  "Photos",
  "Intervenants",
  "Evénements",
  "Promotions",
  "Réservations",
  "Export CSV"
];

export const reservationTypes = [
  "Garderie",
  "Atelier",
  "Massage",
  "Yoga",
  "Location de salle",
  "Autre"
];

export const legalPages = {
  "mentions-legales": {
    title: "Mentions légales",
    content: [
      "Ce site est une maquette fonctionnelle pour le lancement de Tendre Parenthèse.",
      "Les informations légales définitives devront être complétées avec la raison sociale, l'adresse, le SIRET, l'hébergeur et les responsables de publication."
    ]
  },
  cgu: {
    title: "Conditions générales d'utilisation",
    content: [
      "L'utilisation du site implique l'acceptation des présentes conditions.",
      "Les services, tarifs et créneaux présentés pourront être ajustés avant ouverture officielle."
    ]
  },
  "politique-de-confidentialite": {
    title: "Politique de confidentialité",
    content: [
      "Les formulaires préparent la collecte de données nécessaires aux réservations et demandes de contact.",
      "Une intégration future devra préciser les bases légales, durées de conservation, droits RGPD et sous-traitants comme Stripe ou un outil de newsletter."
    ]
  }
};

export const contactCards = [
  { label: "Adresse", value: "Lieu en préparation, France", icon: HeartHandshake },
  { label: "Email", value: "bonjour@tendre-parenthese.fr", icon: CalendarHeart },
  { label: "Ouverture", value: "Bientôt, sur réservation", icon: Sparkles }
];
