import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Rubicon Flooring Australia | Expert Carpet Flooring & Master Installation",
  description: "Experience Rubicon Flooring - Australia's premier destination for high-end carpets and professional installation. Premium wool carpets, plush collections, and masterclass flooring services across Melbourne and Australia.",
  keywords: ["Rubicon Flooring", "Rubicon Flooring Australia", "Carpet Installation Australia", "Premium Carpet Melbourne", "Wool Carpets Australia", "Professional Flooring Installation", "Luxury Carpets Australia"],
  authors: [{ name: "Rubicon Flooring" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://rubicon-flooring.vercel.app",
  },
  openGraph: {
    title: "Rubicon Flooring Australia | Expert Carpet & Installation",
    description: "Premium carpets and masterclass installation services across Australia. Transform your home with Rubicon's high-end flooring solutions.",
    url: "https://rubicon-flooring.vercel.app",
    siteName: "Rubicon Flooring",
    locale: "en_AU",
    type: "website",
  },
  verification: {
    google: "Q6Ldm0sovSRzNdbw_i1kofOLB15GmjRiCDZeG0W5Zyg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} antialiased bg-white text-gray-900`}>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
