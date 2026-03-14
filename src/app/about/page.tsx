"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Award, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden pt-20 bg-white min-h-screen">
        
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="/products/23.webp"
              alt="Rubicon Flooring Workspace"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&q=80&w=2000";
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase">
                Our Story
              </h1>
              <p className="text-xl text-gray-200 font-medium leading-relaxed max-w-2xl mx-auto">
                Crafting the perfect foundation for life's best moments with uncompromising quality and modern elegance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-foreground)] mb-6">
                  Elevating spaces since 2005.
                </h2>
                <div className="space-y-6 text-gray-600 text-lg">
                  <p>
                    At Rubicon Flooring, we believe that every great room starts from the ground up. What began as a small boutique Australian showroom has grown into a leading destination for premium hardwood, plush carpets, and luxury vinyl.
                  </p>
                  <p>
                    Our mission is simple: to provide our clients with exceptional materials that blend timeless craftsmanship with contemporary design. We curate our collections meticulously, ensuring that every plank and every thread meets our rigorous standards for durability and aesthetics.
                  </p>
                  <p className="font-medium text-gray-900 border-l-2 border-[var(--color-accent)] pl-4 italic py-2">
                    "We don't just sell flooring; we provide the foundation for your most cherished memories."
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="/products/14.webp" 
                  alt="Rubicon Craftsmanship" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6 max-w-7xl">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {[
                  { icon: <Clock className="w-8 h-8"/>, stat: "18+", label: "Years of Experience" },
                  { icon: <Users className="w-8 h-8"/>, stat: "10k+", label: "Happy Customers" },
                  { icon: <Award className="w-8 h-8"/>, stat: "150+", label: "Premium Collections" },
                ].map((item, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: i * 0.1 }}
                     className="flex flex-col items-center"
                   >
                     <div className="text-[var(--color-accent)] mb-4">{item.icon}</div>
                     <div className="text-4xl md:text-5xl font-black text-[var(--color-primary-foreground)] mb-2">{item.stat}</div>
                     <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">{item.label}</div>
                   </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-foreground)] mb-6">Ready to transform your space?</h2>
              <p className="text-gray-500 text-lg mb-10">
                Explore our collections or schedule a consultation with our design experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link href="/collections" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary-foreground)] text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300">
                    View Collections
                 </Link>
                 <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-50 transition-colors duration-300">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                 </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
