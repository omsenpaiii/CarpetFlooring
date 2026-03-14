"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext"; // Added import
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react"; // Added Check icon

const allProducts = [
  {
    title: "Artisan Wool Carpet",
    category: "Premium Carpet",
    price: "$120 AUD / sqm",
    image: "/products/asiancarpet.jpg",
    id: "artisan-1",
    description: "Soft, luxurious, hand-crafted carpets for ultimate comfort and timeless elegance in your space.",
    features: ["Handcrafted Quality", "100% Premium Wool", "Naturally Stain Resistant", "Incredible Sound Absorption"],
    specifications: {
      type: "Broadloom Carpet",
      thickness: "0.5 inch",
      wearLayer: "N/A",
      installation: "Stretch-in Pad"
    }
  },
  { title: "European White Oak", category: "Hardwood", price: "$180 AUD / sqm", image: "/products/3.webp" },
  {
    title: "Midnight Slate Luxury Vinyl",
    category: "Vinyl Plank",
    price: "$90 AUD / sqm",
    image: "/products/vinyl.jpg", // Updated image path
    id: "vinyl-2", // Added id for cart functionality
    description: "Enjoy the bold aesthetic of midnight slate with the supreme durability and minimal maintenance of luxury vinyl.",
    features: ["100% Waterproof", "Scratch & Dent Resistant", "Click-Lock Installation", "Lifetime Residential Warranty"],
    specifications: {
      type: "Luxury Vinyl Tile (LVT)",
      thickness: "6.5mm",
      wearLayer: "20 mil",
      installation: "Floating/Click-lock"
    }
  },
  { title: "Cashmere Soft Shag", category: "Plush Carpet", price: "$150 AUD / sqm", image: "/products/9.webp" },
  { title: "Distressed Walnut", category: "Hardwood", price: "$165 AUD / sqm", image: "/products/11.webp" },
  { title: "Modern Chevron", category: "Patterned Hardwood", price: "$210 AUD / sqm", image: "/products/21.webp" },
  { title: "Nordic Ash", category: "Laminate", price: "$65 AUD / sqm", image: "/products/19.webp" },
  { title: "Velvet Dream", category: "Premium Carpet", price: "$130 AUD / sqm", image: "/products/6.webp" },
];

export default function CategoryPage() { // Reverted to original component signature
  const params = useParams();
  const categoryParam = params?.category as string;
  const { addToCart } = useCart(); // Destructured addToCart from useCart()
  
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
      pageDesc = "Durable, modern, and built for life's busy moments in Australia.";
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
                     {specificProduct.description || "This exceptional flooring solution embodies the Rubicon commitment to quality. Carefully crafted to provide both enduring beauty and lasting durability, it transforms any room into a masterpiece of modern design."}
                  </p>
                  {specificProduct.features && specificProduct.features.length > 0 && (
                    <div className="mb-8">
                      <h3 className="font-semibold text-lg mb-6">Key Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {specificProduct.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-gray-800 shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                    <button 
                      onClick={() => addToCart({
                        title: specificProduct.title,
                        category: specificProduct.category,
                        price: specificProduct.price,
                        image: specificProduct.image
                      })}
                      className="flex-1 py-4 bg-[var(--color-primary-foreground)] text-white font-bold rounded-xl hover:bg-[var(--color-accent)] transition-colors"
                    >
                      Add to Cart
                    </button>
                    <button className="flex-1 py-4 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                      Request a Sample
                    </button>
                  </div>
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
