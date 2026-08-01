export type Category = {
  id: string;
  title: string;
  href: string;
  description: string;
  accent: string;
};

export const categories: Category[] = [
  {
    id: "homme",
    title: "Perfumes Homme",
    href: "/perfumes?category=homme",
    description: "Sillages boisés, ambrés et puissants pour une signature élégante.",
    accent: "#588b76",
  },
  {
    id: "femme",
    title: "Perfumes Femme",
    href: "/perfumes?category=femme",
    description: "Notes florales, musquées et raffinées pour une présence lumineuse.",
    accent: "#b9868f",
  },
  {
    id: "nouveautes",
    title: "Nouveautés",
    href: "/perfumes?sort=newest",
    description: "Les dernières arrivées premium sélectionnées pour la saison.",
    accent: "#9b6b45",
  },
  {
    id: "best-sellers",
    title: "Best Sellers",
    href: "/perfumes?sort=bestseller",
    description: "Les parfums favoris de nos clients, choisis pour leur tenue.",
    accent: "#1e2a25",
  },
];
