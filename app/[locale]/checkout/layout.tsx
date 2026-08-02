import { generateLocalizedPageMetadata } from "@/lib/seo/localizedMetadata";

type CheckoutLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CheckoutLayoutProps) {
  const { locale } = await params;
  return generateLocalizedPageMetadata(locale, "checkout");
}

export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  return children;
}
