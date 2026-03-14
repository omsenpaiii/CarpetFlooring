import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Rubicon Flooring | Premium Carpet & Hardwood",
  description: "Modern, premium carpets and flooring solutions for your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased bg-primary text-foreground min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
