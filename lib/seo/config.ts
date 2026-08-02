export const seoConfig = {
  siteName: "ACHRAF Perfumes",
  brandName: "Achraf Parfums",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://achrafparfums.ma",
  locale: "fr_MA",
  author: {
    name: "Achraf Parfums",
    url: "https://achrafparfums.ma",
  },
  creator: "Achraf Parfums",
  publisher: "Achraf Parfums",
  twitterHandle: "@achrafparfums",
  defaultImage: "/images/Oud%20Wood.jpeg",
  defaultKeywords: [
    "parfum Maroc",
    "parfums de luxe",
    "parfum homme",
    "parfum femme",
    "parfum niche",
    "Achraf Parfums",
    "e-commerce parfum",
  ],
};

export const seoCollections = {
  homme: {
    path: "/perfumes?category=homme",
    title: "Men's Perfumes",
    description:
      "Discover premium men's perfumes crafted with oud, woods, amber and refined oriental notes.",
    keywords: ["men's perfumes", "parfum homme", "oud homme", "boisé homme"],
    name: "Parfums Homme",
  },
  femme: {
    path: "/perfumes?category=femme",
    title: "Women's Perfumes",
    description:
      "Discover elegant women's perfumes with floral, musky, vanilla and luminous luxury notes.",
    keywords: ["women's perfumes", "parfum femme", "floral perfume", "musc femme"],
    name: "Parfums Femme",
  },
  oriental: {
    path: "/perfumes?category=oriental",
    title: "Oriental Perfumes",
    description:
      "Explore oriental perfumes with amber, spices, oud and enveloping luxury accords.",
    keywords: ["oriental perfume", "parfum oriental", "ambre", "oud"],
    name: "Parfums Oriental",
  },
  boise: {
    path: "/perfumes?category=boise",
    title: "Woody Perfumes",
    description:
      "Explore woody perfumes with cedar, oud, vetiver, patchouli and elegant dry woods.",
    keywords: ["woody perfume", "parfum boisé", "cedar perfume", "vetiver"],
    name: "Parfums Boisés",
  },
  niche: {
    path: "/perfumes?category=niche",
    title: "Niche Perfumes",
    description:
      "Discover rare niche perfumes selected for fragrance lovers seeking a distinctive signature.",
    keywords: ["niche perfume", "parfum niche", "luxury fragrance", "rare perfume"],
    name: "Parfums Niche",
  },
  bestseller: {
    path: "/perfumes?sort=bestseller",
    title: "Best Selling Perfumes",
    description:
      "Shop Achraf Perfumes best sellers, selected from the most loved luxury fragrances.",
    keywords: ["best selling perfume", "best sellers parfum", "parfum populaire"],
    name: "Best Sellers",
  },
  newest: {
    path: "/perfumes?sort=newest",
    title: "New Perfume Arrivals",
    description:
      "Explore the newest perfume arrivals from Achraf Perfumes, curated for modern fragrance lovers.",
    keywords: ["new perfume", "nouveautés parfum", "new arrivals fragrance"],
    name: "New Arrivals",
  },
} as const;

export const seoPages = {
  home: {
    path: "/",
    title: "Parfums de luxe au Maroc",
    description:
      "Découvrez Achraf Parfums, une sélection premium de parfums homme, femme et niche avec livraison partout au Maroc.",
    keywords: ["parfum luxe Maroc", "boutique parfum Maroc", "parfums authentiques"],
  },
  perfumes: {
    path: "/perfumes",
    title: "Nos parfums",
    description:
      "Explorez notre collection de parfums premium: oud, musc, ambre, floral, boisé et créations niche pour homme et femme.",
    keywords: ["acheter parfum Maroc", "parfum oud", "parfum musc", "parfum boisé"],
  },
  collections: {
    path: "/collections",
    title: "Collections parfum",
    description:
      "Parcourez nos collections parfum homme, femme, oriental, boisé, niche, best sellers et nouveautés.",
    keywords: ["collections parfum", "parfum oriental", "parfum boisé", "parfum niche"],
  },
  about: {
    path: "/about",
    title: "À propos",
    description:
      "Découvrez l'histoire d'Achraf Parfums, une maison dédiée aux sillages élégants, authentiques et accessibles.",
    keywords: ["maison parfum Maroc", "Achraf Parfums histoire", "parfumerie premium"],
  },
  contact: {
    path: "/contact",
    title: "Contact",
    description:
      "Contactez Achraf Parfums pour une commande, un conseil parfum ou une assistance livraison au Maroc.",
    keywords: ["contact parfum Maroc", "commande parfum WhatsApp", "conseil parfum"],
  },
  cart: {
    path: "/cart",
    title: "Panier",
    description:
      "Vérifiez votre panier Achraf Parfums et préparez votre commande de parfums premium.",
    keywords: ["panier parfum", "commande parfum", "acheter parfum"],
    robots: {
      index: false,
      follow: false,
    },
  },
  checkout: {
    path: "/checkout",
    title: "Paiement sécurisé",
    description:
      "Finalisez votre commande Achraf Parfums avec livraison au Maroc et paiement sécurisé.",
    keywords: ["checkout parfum", "paiement parfum", "livraison parfum Maroc"],
    robots: {
      index: false,
      follow: false,
    },
  },
} as const;
