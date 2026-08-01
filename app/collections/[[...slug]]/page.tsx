import CollectionsPageContent from "@/components/collections/CollectionsPageContent";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import { generatePageMetadata } from "@/lib/seo/generateMetadata";

export const metadata = generatePageMetadata("collections");

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <CollectionsPageContent />
      </main>
      <Footer />
    </div>
  );
}
