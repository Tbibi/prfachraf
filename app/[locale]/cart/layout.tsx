import { generateLocalizedPageMetadata } from "@/lib/seo/localizedMetadata";

type CartLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CartLayoutProps) {
  const { locale } = await params;
  return generateLocalizedPageMetadata(locale, "cart");
}

export default function CartLayout({ children }: CartLayoutProps) {
  return children;
}
