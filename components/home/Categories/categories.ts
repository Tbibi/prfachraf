export type Category = {
  id: "homme" | "femme" | "nouveautes" | "best-sellers";
  href:
    | {
        pathname: "/perfumes";
        query: { category: string };
      }
    | {
        pathname: "/perfumes";
        query: { sort: string };
      };
  accent: string;
};

export const categories: Category[] = [
  {
    id: "homme",
    href: { pathname: "/perfumes", query: { category: "homme" } },
    accent: "#588b76",
  },
  {
    id: "femme",
    href: { pathname: "/perfumes", query: { category: "femme" } },
    accent: "#b9868f",
  },
  {
    id: "nouveautes",
    href: { pathname: "/perfumes", query: { sort: "newest" } },
    accent: "#9b6b45",
  },
  {
    id: "best-sellers",
    href: { pathname: "/perfumes", query: { sort: "bestseller" } },
    accent: "#1e2a25",
  },
];
