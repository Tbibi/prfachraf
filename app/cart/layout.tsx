import { generatePageMetadata } from "@/lib/seo/generateMetadata";

export const metadata = generatePageMetadata("cart");

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
