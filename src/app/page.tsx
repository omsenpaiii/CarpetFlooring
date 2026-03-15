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
    price: "$120 AUD / sqm",
    image: "/products/asiancarpet.jpg",
  },
  {
    title: "Cashmere Soft Shag",
    category: "Plush Carpet",
    price: "$150 AUD / sqm",
    image: "/products/9.webp",
  },
  {
    title: "European White Oak",
    category: "Hardwood",
    price: "$180 AUD / sqm",
    image: "/products/3.webp",
  },
  {
    title: "Midnight Slate Luxury Vinyl",
    category: "Vinyl Plank",
    price: "$90 AUD / sqm",
    image: "/products/vinyl.jpg",
  },
];

const features = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Premium Quality",
    description: "Sourced from Australian materials worldwide to ensure lasting beauty and durability.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Lifetime Warranty",
    description: "Peace of mind with our comprehensive lifetime warranty on selected hardwood lines.",
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Expert Carpet Installation",
    description: "Our certified master installers specialize in seamless carpet fitting for a flawless, long-lasting finish.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Free Shipping",
    description: "Complimentary shipping on all orders over $2,000 across Australia.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden pt-10 pb-20">
          {/* Background Text Element */}
          <div className="absolute top-[28%] left-0 w-full flex justify-center z-0 pointer-events-none opacity-[0.03]">
            <h1 className="text-[20vw] font-black leading-none tracking-tighter text-[var(--color-primary-foreground)] whitespace-nowrap">
              RUBICON
            </h1>
          </div>
          
          <div className="container relative z-10 mx-auto px-6 max-w-7xl flex flex-col items-center justify-center h-full gap-8 mt-4">
            
            {/* Minimal Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-2xl z-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--color-primary-foreground)] mb-6">
                Expert Carpet Flooring & Professional Installation.
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                Australia's premier destination for high-end carpets and masterclass installations. We bring comfort and prestige to your floors.
              </p>
              <Link href="/collections" className="relative z-30 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary-foreground)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300">
                Explore Collections
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              {/* Floating Emojis Decoration */}
              <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
                  className="absolute top-[20%] left-[10%] text-5xl opacity-40 drop-shadow-md"
                >
                  🪵
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 15, 0], rotate: [0, -15, 15, 0] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
                  className="absolute top-[40%] left-[20%] text-4xl opacity-50 drop-shadow-md"
                >
                  ✨
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 20, 0] }} 
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} 
                  className="absolute top-[15%] right-[15%] text-5xl opacity-60 drop-shadow-md"
                >
                  🏠
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} 
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} 
                  className="absolute top-[45%] right-[25%] text-4xl opacity-40 drop-shadow-md"
                >
                  🪚
                </motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }} 
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
                  className="absolute top-[25%] right-[5%] text-3xl opacity-30 drop-shadow-sm"
                >
                  🌟
                </motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], y: [0, -10, 0] }} 
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} 
                  className="absolute top-[60%] left-[5%] text-4xl opacity-30 drop-shadow-sm"
                >
                  📐
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 15, -5, 0] }} 
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} 
                  className="absolute top-[10%] left-[30%] text-4xl opacity-50 drop-shadow-md"
                >
                  🧶
                </motion.div>
              </div>

            </motion.div>

            {/* Floating Cards Display (Parallax style) */}
            <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] z-10 mt-8 mb-20">
              
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
                       src="/capet-card1.jpg" 
                       alt="Luxury Carpet Installation" 
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
                       src="/capet-card2.jpeg" 
                       alt="Plush Premium Carpet" 
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
                       src="/capet-card3.jpg" 
                       alt="Artisan Carpet Detail" 
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
                { title: "Carpets", href: "/collections/carpets", image: "/products/carpets.jpg" },
                { title: "Hardwood & Timber", href: "/collections/hardwood", image: "/products/cat2.jpg" },
                { title: "Laminate & Vinyl", href: "/collections/vinyl", image: "/products/cat3.jpg" },
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
        
        {/* Installation Spotlight Section */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="/carpet-install.jpg" 
                  alt="Professional Carpet Installation" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-sm font-bold uppercase tracking-widest mb-2 text-[var(--color-accent)]">Masterclass Installation</p>
                    <p className="text-xl font-medium italic">"Precision in every fiber, excellence in every room."</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-5xl font-black text-[var(--color-primary-foreground)] mb-8 tracking-tighter uppercase">
                  Flawless Installations. <br/>Guaranteed.
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Our specialty isn't just providing premium carpets; it's the professional touch we apply when laying them. With over 18 years of experience in high-end Australian homes, our certified installers ensure your carpet is fitted with surgical precision.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Laser-accurate measurements & cutting",
                    "Seamless joins and expert stretching",
                    "Acoustic & thermal underlay specialist",
                    "Lifetime warranty on all workmanship"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white">
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary-foreground)] text-white font-bold rounded-full hover:bg-[var(--color-accent)] transition-all duration-300 shadow-xl">
                  Get a Free Installation Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
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
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 mt-16 md:mt-0">The Rubicon Legacy</h2>
              <p className="text-gray-400 text-lg">Specializing in premium carpet solutions and master installations since 2005. We provide the perfect foundation for Australian homes.</p>
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
        <section className="py-24 bg-[var(--color-accent)] relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] transition-opacity duration-1000 group-hover:opacity-30" />
          <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter">
                Elevate Your Space Today
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Experience the heritage of Rubicon Flooring. Schedule your complimentary design consultation across Australia today.
              </p>
              <button className="px-12 py-5 bg-[var(--color-primary-foreground)] text-white font-bold rounded-full hover:bg-white hover:text-[var(--color-primary-foreground)] transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)] transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm">
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
