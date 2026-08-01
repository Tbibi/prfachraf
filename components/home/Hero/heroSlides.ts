export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryMessage: string;
  secondaryLabel: string;
  secondaryHref: string;
  bottleTitle: string;
  bottleCaption: string;
  imageBadge: string;
  image: string;
  accent: string;
  accentSoft: string;
  background: string;
  stats: {
    value: string;
    label: string;
  }[];
};

export const heroSlides: HeroSlide[] = [
  {
    id: "signature-oud",
    eyebrow: "Maison de parfums premium",
    title: "Oud Royal Signature",
    description:
      "Un parfum profond et magnétique, composé autour de l'oud, de l'ambre et des bois précieux pour une présence inoubliable.",
    primaryLabel: "Commander sur WhatsApp",
    primaryMessage: "Bonjour Achraf Parfums, je souhaite commander Oud Royal Signature.",
    secondaryLabel: "Découvrir la collection",
    secondaryHref: "/collections",
    bottleTitle: "Oud Royal",
    bottleCaption: "Intense & boisé",
    imageBadge: "Signature",
    image: "/images/Oud%20Wood.jpeg",
    accent: "#588b76",
    accentSoft: "#f6f6df",
    background:
      "radial-gradient(circle at 18% 18%, rgba(88,139,118,0.2), transparent 30%), radial-gradient(circle at 82% 18%, rgba(246,246,223,0.92), transparent 32%), linear-gradient(135deg, #fbfbf1 0%, #fffef7 45%, #f6f6df 100%)",
    stats: [
      { value: "+500", label: "clients" },
      { value: "Livraison", label: "Maroc" },
      { value: "Authentiques", label: "produits" },
    ],
  },
  {
    id: "rose-privee",
    eyebrow: "Élégance florale",
    title: "Rose Privée Couture",
    description:
      "Une rose moderne et satinée, mêlée à des muscs doux et une vanille discrète pour un sillage féminin et raffiné.",
    primaryLabel: "Commander sur WhatsApp",
    primaryMessage: "Bonjour Achraf Parfums, je souhaite commander Rose Privée Couture.",
    secondaryLabel: "Voir les nouveautés",
    secondaryHref: "/collections/nouveautes",
    bottleTitle: "Rose Privée",
    bottleCaption: "Floral & musqué",
    imageBadge: "Nouveauté",
    image: "/images/Baccarat%20Rouge.jpeg",
    accent: "#b9868f",
    accentSoft: "#fff2f4",
    background:
      "radial-gradient(circle at 18% 20%, rgba(185,134,143,0.22), transparent 30%), radial-gradient(circle at 80% 12%, rgba(255,242,244,0.95), transparent 34%), linear-gradient(135deg, #fff8f7 0%, #fffef7 46%, #fff2f4 100%)",
    stats: [
      { value: "Floral", label: "signature" },
      { value: "Longue", label: "tenue" },
      { value: "Premium", label: "sélection" },
    ],
  },
  {
    id: "ambre-nuit",
    eyebrow: "Sillage du soir",
    title: "Ambre Nuit Élixir",
    description:
      "Un élixir chaud et enveloppant, entre ambre, épices nobles et cèdre, imaginé pour les soirées élégantes.",
    primaryLabel: "Commander sur WhatsApp",
    primaryMessage: "Bonjour Achraf Parfums, je souhaite commander Ambre Nuit Élixir.",
    secondaryLabel: "Explorer les best sellers",
    secondaryHref: "/collections/best-sellers",
    bottleTitle: "Ambre Nuit",
    bottleCaption: "Chaud & ambré",
    imageBadge: "Best seller",
    image: "/images/Oriental.jpeg",
    accent: "#9b6b45",
    accentSoft: "#f4ead8",
    background:
      "radial-gradient(circle at 20% 18%, rgba(155,107,69,0.24), transparent 30%), radial-gradient(circle at 82% 18%, rgba(244,234,216,0.95), transparent 32%), linear-gradient(135deg, #fbf7ef 0%, #fffef7 44%, #f4ead8 100%)",
    stats: [
      { value: "Ambre", label: "noble" },
      { value: "Soirée", label: "idéale" },
      { value: "Rare", label: "présence" },
    ],
  },
  {
    id: "musc-blanc",
    eyebrow: "Pureté moderne",
    title: "Musc Blanc Éclat",
    description:
      "Une fragrance propre et lumineuse, portée par des muscs doux, de l'iris et une sensation coton pour une élégance quotidienne.",
    primaryLabel: "Commander sur WhatsApp",
    primaryMessage: "Bonjour Achraf Parfums, je souhaite commander Musc Blanc Éclat.",
    secondaryLabel: "Voir les parfums frais",
    secondaryHref: "/collections/frais",
    bottleTitle: "Musc Blanc",
    bottleCaption: "Propre & lumineux",
    imageBadge: "Iconique",
    image: "/images/images%20(1).jpeg",
    accent: "#d9c7a3",
    accentSoft: "#fffef7",
    background:
      "radial-gradient(circle at 18% 18%, rgba(217,199,163,0.3), transparent 30%), radial-gradient(circle at 82% 18%, rgba(255,254,247,0.96), transparent 34%), linear-gradient(135deg, #fbfbf1 0%, #fffef7 48%, #f6f6df 100%)",
    stats: [
      { value: "Musc", label: "propre" },
      { value: "Jour", label: "idéal" },
      { value: "Doux", label: "sillage" },
    ],
  },
];
