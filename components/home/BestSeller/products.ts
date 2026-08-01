export type FeaturedProduct = {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  tone: {
    from: string;
    to: string;
  };
};

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "oud-royal",
    name: "Oud Royal",
    category: "Eau de parfum",
    price: "299 DH",
    description: "Un oud profond aux facettes boisées, pensé pour les soirées élégantes.",
    image: "/images/Oud%20Wood.jpeg",
    tone: {
      from: "#588b76",
      to: "#f6f6df",
    },
  },
  {
    id: "musc-blanc",
    name: "Musc Blanc",
    category: "Signature mixte",
    price: "249 DH",
    description: "Une fragrance propre, douce et raffinée avec une tenue délicate.",
    image: "/images/images%20(1).jpeg",
    tone: {
      from: "#d9c7a3",
      to: "#fffef7",
    },
  },
  {
    id: "ambre-nuit",
    name: "Ambre Nuit",
    category: "Extrait intense",
    price: "349 DH",
    description: "Ambre chaud, épices nobles et sillage enveloppant pour une présence rare.",
    image: "/images/Oriental.jpeg",
    tone: {
      from: "#9b6b45",
      to: "#f6f6df",
    },
  },
  {
    id: "rose-privee",
    name: "Rose Privée",
    category: "Collection privée",
    price: "319 DH",
    description: "Rose moderne, muscs satinés et élégance florale au fini premium.",
    image: "/images/Baccarat%20Rouge.jpeg",
    tone: {
      from: "#b9868f",
      to: "#fff5f1",
    },
  },
];
