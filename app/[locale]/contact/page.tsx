import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ContactHero from "@/components/contact/ContactHero/ContactHero";
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo/ContactInfo";
import ContactMap from "@/components/contact/ContactMap/ContactMap";
import ContactFAQ from "@/components/contact/ContactFAQ/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA/ContactCTA";
import Container from "@/components/ui/Container/Container";
import { generateLocalizedPageMetadata } from "@/lib/seo/localizedMetadata";
import { setRequestLocale } from "next-intl/server";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;
  return generateLocalizedPageMetadata(locale, "contact");
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <ContactHero />
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <Container>
            <div className="grid gap-16 lg:grid-cols-[2fr_1fr] lg:gap-20">
              <div className="space-y-16">
                <ContactForm />
                <ContactMap />
              </div>
              <ContactInfo />
            </div>
          </Container>
        </section>
        <ContactFAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
