export type HeroSlide = {
  id: "signature-oud" | "rose-privee" | "ambre-nuit" | "musc-blanc";
  secondaryHref: "/collections" | "/perfumes";
  image: string;
  accent: string;
  accentSoft: string;
  background: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "signature-oud",
    secondaryHref: "/collections",
    image: "/images/Oud%20Wood.jpeg",
    accent: "#588b76",
    accentSoft: "#f6f6df",
    background:
      "radial-gradient(circle at 18% 18%, rgba(88,139,118,0.2), transparent 30%), radial-gradient(circle at 82% 18%, rgba(246,246,223,0.92), transparent 32%), linear-gradient(135deg, #fbfbf1 0%, #fffef7 45%, #f6f6df 100%)",
  },
  {
    id: "rose-privee",
    secondaryHref: "/perfumes",
    image: "/images/Baccarat%20Rouge.jpeg",
    accent: "#b9868f",
    accentSoft: "#fff2f4",
    background:
      "radial-gradient(circle at 18% 20%, rgba(185,134,143,0.22), transparent 30%), radial-gradient(circle at 80% 12%, rgba(255,242,244,0.95), transparent 34%), linear-gradient(135deg, #fff8f7 0%, #fffef7 46%, #fff2f4 100%)",
  },
  {
    id: "ambre-nuit",
    secondaryHref: "/perfumes",
    image: "/images/Oriental.jpeg",
    accent: "#9b6b45",
    accentSoft: "#f4ead8",
    background:
      "radial-gradient(circle at 20% 18%, rgba(155,107,69,0.24), transparent 30%), radial-gradient(circle at 82% 18%, rgba(244,234,216,0.95), transparent 32%), linear-gradient(135deg, #fbf7ef 0%, #fffef7 44%, #f4ead8 100%)",
  },
  {
    id: "musc-blanc",
    secondaryHref: "/perfumes",
    image: "/images/images%20(1).jpeg",
    accent: "#d9c7a3",
    accentSoft: "#fffef7",
    background:
      "radial-gradient(circle at 18% 18%, rgba(217,199,163,0.3), transparent 30%), radial-gradient(circle at 82% 18%, rgba(255,254,247,0.96), transparent 34%), linear-gradient(135deg, #fbfbf1 0%, #fffef7 48%, #f6f6df 100%)",
  },
];
