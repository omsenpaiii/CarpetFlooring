"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const allProducts = [
  { title: "Artisan Wool Carpet", category: "Premium Carpet", price: "$120 / sq.ft", image: "/products/1.webp" },
  { title: "European White Oak", category: "Hardwood", price: "$180 / sq.ft", image: "/products/3.webp" },
  { title: "Midnight Slate Luxury Vinyl", category: "Vinyl Plank", price: "$90 / sq.ft", image: "/products/15.webp" },
  { title: "Cashmere Soft Shag", category: "Plush Carpet", price: "$150 / sq.ft", image: "/products/9.webp" },
  { title: "Distressed Walnut", category: "Hardwood", price: "$165 / sq.ft", image: "/products/11.webp" },
  { title: "Modern Chevron", category: "Patterned Hardwood", price: "$210 / sq.ft", image: "/products/21.webp" },
  { title: "Nordic Ash", category: "Laminate", price: "$65 / sq.ft", image: "/products/19.webp" },
  { title: "Velvet Dream", category: "Premium Carpet", price: "$130 / sq.ft", image: "/products/6.webp" },
];

export default function CategoryPage() {
  const params = useParams();
  const categoryParam = params?.category as string;
  
  // Try to find if the param matches a specific product first
  const specificProduct = allProducts.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === categoryParam
  );

  // If not a specific product, filter by category keywords
  let filteredProducts = allProducts;
  let pageTitle = "All Collections";
  let pageDesc = "Browse through our meticulously curated selection of premium floorings.";

  if (!specificProduct && categoryParam) {
    if (categoryParam.includes('carpet')) {
      filteredProducts = allProducts.filter(p => p.category.toLowerCase().includes('carpet'));
      pageTitle = "Premium Carpets";
      pageDesc = "Soft, luxurious, hand-crafted carpets for ultimate comfort.";
    } else if (categoryParam.includes('hardwood')) {
      filteredProducts = allProducts.filter(p => p.category.toLowerCase().includes('hardwood'));
      pageTitle = "Hardwood Flooring";
      pageDesc = "Timeless elegance with our premium hardwood selection.";
    } else if (categoryParam.includes('vinyl') || categoryParam.includes('laminate')) {
      filteredProducts = allProducts.filter(p => p.category.toLowerCase().includes('vinyl') || p.category.toLowerCase().includes('laminate'));
      pageTitle = "Luxury Vinyl & Laminate";
      pageDesc = "Durable, modern, and built for life's busy moments.";
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <Link href="/collections" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[var(--color-primary-foreground)] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to all collections
          </Link>

          {specificProduct ? (
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
             >
               <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-50/50 aspect-square">
                 <img src={specificProduct.image} alt={specificProduct.title} className="w-full h-full object-cover" />
               </div>
               <div>
                  <span className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent)] mb-2 block">
                    {specificProduct.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--color-primary-foreground)]">
                    {specificProduct.title}
                  </h1>
                  <p className="text-2xl text-gray-900 font-medium mb-8 pb-8 border-b border-gray-100">
                    {specificProduct.price}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                     This exceptional flooring solution embodies the Rubicon commitment to quality. Carefully crafted to provide both enduring beauty and lasting durability, it transforms any room into a masterpiece of modern design.
                  </p>
                  <button className="w-full sm:w-auto px-10 py-4 bg-[var(--color-primary-foreground)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300">
                    Request a Sample
                  </button>
               </div>
             </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--color-primary-foreground)] capitalize">
                  {pageTitle}
                </h1>
                <p className="text-gray-500 text-lg max-w-2xl">
                  {pageDesc}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={index} {...product} delay={index * 0.05} />
                ))}
              </div>
            </>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
