import BestSeller from "@/components/home/BestSeller/BestSeller";
import BestSellersCarousel from "@/components/home/BestSellersCarousel/BestSellersCarousel";
import Categories from "@/components/home/Categories/Categories";
import Hero from "@/components/home/Hero/Hero";
import WhatsAppCTA from "@/components/home/WhatsAppCTA/WhatsAppCTA";
import WhyChooseUs from "@/components/home/WhyChooseUs/WhyChooseUs";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import { generatePageMetadata } from "@/lib/seo/generateMetadata";

export const metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <Hero />
        <BestSellersCarousel />
        <Categories />
        <BestSeller />
        <WhyChooseUs />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
