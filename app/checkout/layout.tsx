import { generatePageMetadata } from "@/lib/seo/generateMetadata";

export const metadata = generatePageMetadata("checkout");

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
