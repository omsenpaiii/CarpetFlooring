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
  title: "Rubicon Flooring | Premium Carpet & Hardwood Australia",
  description: "Modern, premium carpets and flooring solutions for your home in Australia.",
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
