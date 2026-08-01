import AboutPageContent from "@/components/about/AboutPageContent";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import { generatePageMetadata } from "@/lib/seo/generateMetadata";

export const metadata = generatePageMetadata("about");

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  );
}
