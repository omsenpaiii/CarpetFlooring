"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const allProducts = [
  { title: "Artisan Wool Carpet", category: "Premium Carpet", price: "$120 / sqm", image: "/products/asiancarpet.jpg" },
  { title: "European White Oak", category: "Hardwood & Timber", price: "$180 / sqm", image: "/products/3.webp" },
  { title: "Midnight Slate Luxury Vinyl", category: "Vinyl Plank", price: "$90 / sqm", image: "/products/vinyl.jpg" },
  { title: "Cashmere Soft Shag", category: "Plush Carpet", price: "$150 / sqm", image: "/products/9.webp" },
  { title: "Distressed Walnut", category: "Hardwood & Timber", price: "$165 / sqm", image: "/products/11.webp" },
  { title: "Modern Chevron", category: "Patterned Hardwood", price: "$210 / sqm", image: "/products/21.webp" },
  { title: "Nordic Ash", category: "Laminate", price: "$65 / sqm", image: "/products/19.webp" },
  { title: "Velvet Dream", category: "Premium Carpet", price: "$130 / sqm", image: "/products/6.webp" },
];

export default function Collections() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-primary min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Collections</h1>
            <p className="text-gray-500 text-lg max-w-2xl">
              Browse through our meticulously curated selection of premium floorings. Filter by category, style, and material to find exactly what you need.
            </p>
          </motion.div>

          {/* Filters/Categories bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {["All", "Carpets", "Hardwood & Timber", "Laminate", "Vinyl"].map((cat, i) => (
              <button
                key={i}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0 
                    ? "bg-black text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {allProducts.map((product, index) => (
              <ProductCard key={index} {...product} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
