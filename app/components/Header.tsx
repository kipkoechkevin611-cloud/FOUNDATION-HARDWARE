"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ShoppingCart, Store, ChevronRight } from "lucide-react";
import { useCart } from "./CartContext";
import { categories } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-[#0F4C81] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>0788 874 942</span>
          </div>
          <div className="hidden sm:block">
            <span>Quality Building Materials | Fast Delivery</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0F4C81] rounded-lg flex items-center justify-center">
              <Store className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#0F4C81]">Foundation</h1>
              <p className="text-xs text-gray-600 -mt-1">Hardware</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#0F4C81] font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5A623] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-[#0F4C81] transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F5A623] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <a
              href="https://wa.me/254788874942"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5A623] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#e09400] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Order Now
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#0F4C81] font-medium py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/cart"
                className="bg-[#0F4C81] text-white px-4 py-3 rounded-lg font-medium text-center flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="w-4 h-4" />
                Cart ({totalItems})
              </Link>
              <a
                href="https://wa.me/254788874942"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5A623] text-white px-4 py-3 rounded-lg font-medium text-center flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Order Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Category Bar */}
      <div className="bg-[#0F4C81] border-t border-blue-700 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-0">
            <Link
              href="/products"
              className="flex-shrink-0 text-white/80 hover:text-white hover:bg-white/10 px-3 py-2.5 text-xs font-semibold rounded transition-colors whitespace-nowrap flex items-center gap-1"
            >
              All Products
              <ChevronRight className="w-3 h-3" />
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${encodeURIComponent(cat.name)}`}
                className={`flex-shrink-0 px-3 py-2.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  pathname?.includes(cat.id)
                    ? "bg-white text-[#0F4C81]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Category Row */}
      <div className="bg-[#0F4C81] border-t border-blue-700 md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1 px-4 py-2">
          <Link
            href="/products"
            className="flex-shrink-0 text-white/80 hover:text-white bg-white/10 px-3 py-1.5 text-xs font-bold rounded-full whitespace-nowrap"
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${encodeURIComponent(cat.name)}`}
              className="flex-shrink-0 text-white/70 hover:text-white hover:bg-white/10 px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
