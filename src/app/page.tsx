"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, ThumbsUp, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const featuredProducts = [
  {
    title: "Artisan Wool Carpet",
    category: "Premium Carpet",
    price: "$120 / sq.ft",
    image: "/products/1.webp",
  },
  {
    title: "European White Oak",
    category: "Hardwood",
    price: "$180 / sq.ft",
    image: "/products/3.webp",
  },
  {
    title: "Midnight Slate Luxury Vinyl",
    category: "Vinyl Plank",
    price: "$90 / sq.ft",
    image: "/products/15.webp",
  },
  {
    title: "Cashmere Soft Shag",
    category: "Plush Carpet",
    price: "$150 / sq.ft",
    image: "/products/9.webp",
  },
];

const features = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Premium Quality",
    description: "Sourced from the finest materials worldwide to ensure lasting beauty and durability.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Lifetime Warranty",
    description: "Peace of mind with our comprehensive lifetime warranty on selected hardwood lines.",
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Expert Installation",
    description: "Our certified professionals ensure a perfect fit and flawless finish every time.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Free Shipping",
    description: "Complimentary shipping on all orders over $2,000 across the continental US.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20 pb-32">
          {/* Background Text Element */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-[0.03]">
            <h1 className="text-[20vw] font-black leading-none tracking-tighter text-[var(--color-primary-foreground)] whitespace-nowrap">
              RUBICON
            </h1>
          </div>
          
          <div className="container relative z-10 mx-auto px-6 max-w-7xl flex flex-col items-center justify-center h-full gap-16 mt-16">
            
            {/* Minimal Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-2xl z-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--color-primary-foreground)] mb-6">
                Redefining your foundation.
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-xl mx-auto font-medium">
                Premium flooring solutions that blend enduring quality with modern elegance.
              </p>
              <Link href="/collections" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary-foreground)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300">
                Explore Collections
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Floating Cards Display (Parallax style) */}
            <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] z-10 mt-12 mb-24">
              
              {/* Card 1 (Left) */}
              <motion.div
                 initial={{ opacity: 0, y: 100, rotate: -15, scale: 0.8 }}
                 animate={{ opacity: 1, y: 0, rotate: -8, scale: 1 }}
                 transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
                 whileHover={{ scale: 1.05, rotate: -5, zIndex: 30 }}
                 className="absolute left-[5%] top-[10%] w-[45%] md:w-[30%] aspect-[4/5] rounded-xl shadow-2xl bg-white p-2 md:p-3 transform origin-center cursor-pointer will-change-transform z-10 block"
              >
                  <div className="w-full h-full rounded-lg overflow-hidden bg-gray-100 relative">
                     <img 
                       src="/products/14.webp" 
                       alt="Premium Hardwood" 
                       className="w-full h-full object-cover"
                       onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800";
                       }}
                     />
                     <div className="absolute inset-0 bg-black/10 transition-opacity hover:opacity-0" />
                  </div>
              </motion.div>

              {/* Card 2 (Center/Back) */}
              <motion.div
                 initial={{ opacity: 0, y: 50, scale: 0.9 }}
                 animate={{ opacity: 1, y: -20, scale: 1 }}
                 transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 45 }}
                 whileHover={{ scale: 1.05, y: -30, zIndex: 30 }}
                 className="absolute left-1/2 -translate-x-1/2 top-0 w-[50%] md:w-[35%] aspect-[4/5] rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] bg-white p-2 md:p-3 transform origin-center cursor-pointer will-change-transform z-0 hidden md:block"
              >
                  <div className="w-full h-full rounded-lg overflow-hidden bg-gray-100 relative">
                     <img 
                       src="/products/23.webp" 
                       alt="Luxury Vinyl" 
                       className="w-full h-full object-cover"
                       onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800";
                       }}
                     />
                     <div className="absolute inset-0 bg-black/5 transition-opacity hover:opacity-0" />
                  </div>
              </motion.div>

              {/* Card 3 (Right) */}
              <motion.div
                 initial={{ opacity: 0, y: 80, rotate: 15, scale: 0.8 }}
                 animate={{ opacity: 1, y: 20, rotate: 10, scale: 1 }}
                 transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 55 }}
                 whileHover={{ scale: 1.05, rotate: 5, zIndex: 30 }}
                 className="absolute right-[5%] top-[15%] w-[45%] md:w-[30%] aspect-[4/5] rounded-xl shadow-2xl bg-white p-2 md:p-3 transform origin-center cursor-pointer will-change-transform z-20 block"
              >
                  <div className="w-full h-full rounded-lg overflow-hidden bg-gray-100 relative">
                     <img 
                       src="/products/2.webp" 
                       alt="Artisan Carpet" 
                       className="w-full h-full object-cover"
                         onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800";
                       }}
                     />
                     <div className="absolute inset-0 bg-black/10 transition-opacity hover:opacity-0" />
                  </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-between items-end mb-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Shop By Category</h2>
                <p className="text-gray-500">Find the perfect foundation for every room</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Carpets", href: "/collections/carpets", image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=800" },
                { title: "Hardwood", href: "/collections/hardwood", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800" },
                { title: "Laminate & Vinyl", href: "/collections/vinyl", image: "https://images.unsplash.com/photo-1505691938859-8c8314c5ce5e?auto=format&fit=crop&q=80&w=800" },
              ].map((category, i) => (
                <Link href={category.href} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                  >
                    <motion.img 
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover origin-center transform" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                      <h3 className="text-3xl font-bold text-white tracking-wide mix-blend-overlay shadow-sm">{category.title}</h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            >
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trending Collections</h2>
                <p className="text-gray-500 text-lg">Explore our most sought-after styles that blend durability with breathtaking aesthetics.</p>
              </div>
              <Link href="/collections" className="group flex items-center gap-2 font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors">
                View All Products
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <ProductCard key={index} {...product} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Features/Why Us Section */}
        <section className="py-24 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 mt-16 md:mt-0">The Rubicon Difference</h2>
              <p className="text-gray-400 text-lg">We don't just sell flooring; we provide a foundation for your life's best moments with unparalleled service and quality.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-[var(--color-accent)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 bg-[var(--color-accent)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
          <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Elevate Your Space Today</h2>
              <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                Schedule a free in-home consultation with our design experts and bring your vision to life.
              </p>
              <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Consultation
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
