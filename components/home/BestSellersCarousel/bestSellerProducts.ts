export type BestSellerProduct = {
  id: string;
  name: string;
  brand: string;
  price: string;
  oldPrice: string;
  rating: number;
  reviewCount: number;
  badge: string;
  image: string;
  tone: {
    primary: string;
    secondary: string;
  };
  notes: string;
};

export const bestSellerProducts: BestSellerProduct[] = [
  {
    id: "oud-royal-bestseller",
    name: "Oud Royal",
    brand: "Achraf Signature",
    price: "399 DH",
    oldPrice: "449 DH",
    rating: 4.9,
    reviewCount: 127,
    badge: "Best Seller",
    image: "/images/Oud%20Wood.jpeg",
    tone: { primary: "#588b76", secondary: "#f6f6df" },
    notes: "Oud, ambre, bois précieux"
  },
  {
    id: "rose-privee-bestseller",
    name: "Rose Privée",
    brand: "Maison Florale",
    price: "349 DH",
    oldPrice: "399 DH",
    rating: 4.8,
    reviewCount: 89,
    badge: "Favori",
    image: "/images/Baccarat%20Rouge.jpeg",
    tone: { primary: "#b9868f", secondary: "#fff5f1" },
    notes: "Rose bulgare, musc blanc, vanille"
  },
  {
    id: "musc-blanc-bestseller",
    name: "Musc Blanc",
    brand: "Pure Collection", 
    price: "279 DH",
    oldPrice: "329 DH",
    rating: 4.7,
    reviewCount: 156,
    badge: "Iconique",
    image: "/images/images%20(1).jpeg",
    tone: { primary: "#d9c7a3", secondary: "#fffef7" },
    notes: "Musc propre, coton, iris"
  },
  {
    id: "ambre-nuit-bestseller",
    name: "Ambre Nuit",
    brand: "Nocturne Luxe",
    price: "429 DH",
    oldPrice: "479 DH",
    rating: 4.9,
    reviewCount: 203,
    badge: "Premium",
    image: "/images/Oriental.jpeg",
    tone: { primary: "#9b6b45", secondary: "#f6f6df" },
    notes: "Ambre gris, épices, cèdre"
  },
  {
    id: "neroli-satin-bestseller",
    name: "Néroli Satin",
    brand: "Riviera Élégance",
    price: "319 DH",
    oldPrice: "369 DH",
    rating: 4.6,
    reviewCount: 94,
    badge: "Frais",
    image: "/images/perfums1.jpeg",
    tone: { primary: "#d7a85e", secondary: "#fff8e6" },
    notes: "Néroli, fleur d'oranger, musc"
  },
  {
    id: "vanille-doree-bestseller",
    name: "Vanille Dorée",
    brand: "Gourmand Luxe",
    price: "359 DH",
    oldPrice: "409 DH",
    rating: 4.8,
    reviewCount: 118,
    badge: "Gourmand",
    image: "/images/vanilla-sex-tom-ford.png",
    tone: { primary: "#c99a52", secondary: "#fff1d6" },
    notes: "Vanille bourbon, fève tonka, caramel"
  }
];