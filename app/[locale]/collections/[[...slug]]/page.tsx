import CollectionsPageContent from "@/components/collections/CollectionsPageContent";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import { generateLocalizedPageMetadata } from "@/lib/seo/localizedMetadata";
import { setRequestLocale } from "next-intl/server";

type CollectionsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CollectionsPageProps) {
  const { locale } = await params;
  return generateLocalizedPageMetadata(locale, "collections");
}

export default async function CollectionsPage({ params }: CollectionsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

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
