"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  category: string;
  price: string;
  image: string;
  delay?: number;
}

export default function ProductCard({ title, category, price, image, delay = 0 }: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <Link href={`/collections/${title.toLowerCase().replace(/\\s+/g, '-')}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="group relative flex flex-col cursor-pointer"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-50/50">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src={imgSrc}
            alt={title}
            onError={() => setImgSrc("https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800")}
            className="h-full w-full object-cover origin-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--color-primary-foreground)]">{category}</span>
          </div>
        </div>
        
        <div className="mt-5 flex items-start justify-between px-1">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--color-primary-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-300">{title}</h3>
            <p className="mt-1.5 text-sm text-gray-500 font-medium">{price}</p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent group-hover:bg-[var(--color-accent)] text-[var(--color-primary-foreground)] group-hover:text-white transition-colors duration-300"
          >
            <ArrowRight className="w-5 h-5 transform opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </motion.button>
        </div>
      </motion.div>
    </Link>
  );
}
