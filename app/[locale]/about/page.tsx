import AboutPageContent from "@/components/about/AboutPageContent";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import { generateLocalizedPageMetadata } from "@/lib/seo/localizedMetadata";
import { setRequestLocale } from "next-intl/server";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params;
  return generateLocalizedPageMetadata(locale, "about");
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

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
