"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Rubicon Flooring Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-800 hover:text-[var(--color-accent)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleCart}
            className="p-2 text-gray-800 hover:bg-gray-100/50 rounded-full transition-colors relative"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[var(--color-accent)] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-2 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    toggleCart();
                  }}
                  className="flex items-center gap-2 text-lg font-medium"
                >
                  <ShoppingCart className="w-5 h-5" /> Cart {cartCount > 0 ? `(${cartCount})` : ""}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
