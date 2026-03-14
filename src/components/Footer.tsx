import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-foreground)] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-black tracking-tighter flex flex-col uppercase leading-none mb-6">
              RUBICON
              <span className="text-[0.45em] tracking-[0.2em] font-bold text-[var(--color-accent)]">Flooring</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Elevating spaces with premium flooring solutions. From plush carpets to enduring hardwood, we bring modern elegance into your home.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-[#D4AF37] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Collections</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/collections/carpet" className="hover:text-white transition-colors">Premium Carpets</Link></li>
              <li><Link href="/collections/hardwood" className="hover:text-white transition-colors">Hardwood</Link></li>
              <li><Link href="/collections/laminate" className="hover:text-white transition-colors">Laminate</Link></li>
              <li><Link href="/collections/vinyl" className="hover:text-white transition-colors">Luxury Vinyl</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Customer Care</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/warranty" className="hover:text-white transition-colors">Warranty</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe for exclusive offers and design inspiration.</p>
            <form className="flex border border-gray-800 rounded-lg overflow-hidden focus-within:border-gray-500 transition-colors">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent px-4 py-3 w-full outline-none text-sm text-white placeholder:text-gray-600"
              />
              <button className="bg-white text-black px-4 py-3 text-sm font-medium hover:bg-gray-200 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Rubicon Flooring. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
