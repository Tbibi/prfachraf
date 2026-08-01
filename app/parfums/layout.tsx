import { generatePageMetadata } from "@/lib/seo/generateMetadata";

export const metadata = generatePageMetadata("perfumes");

export default function ParfumsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
