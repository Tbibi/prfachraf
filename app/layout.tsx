import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/Toast/Toast";
import MiniCart from "@/components/cart/MiniCart/MiniCart";
import FloatingCart from "@/components/cart/FloatingCart/FloatingCart";
import { generateSiteMetadata } from "@/lib/seo/generateMetadata";
import JsonLd from "@/components/seo/JsonLd";
import {
  createOrganizationSchema,
  createWebsiteSchema,
} from "@/lib/seo/jsonld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = generateSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body 
        className={`${inter.className} min-h-full flex flex-col`}
        suppressHydrationWarning={true}
      >
        <JsonLd data={[createOrganizationSchema(), createWebsiteSchema()]} />
        {children}
        <ToastProvider />
        <MiniCart />
        <FloatingCart />
      </body>
    </html>
  );
}
