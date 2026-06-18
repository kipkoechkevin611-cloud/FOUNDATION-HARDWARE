"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartContext";
import type { Product } from "@/lib/data";
import OrderModal from "./OrderModal";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      description: product.description,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5}/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1.5}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15l-5-5L5 21"/></svg>
          </div>
        )}
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0v10l-8 4M4 7v10l8 4" /></svg>
            <span className="text-xs font-medium">{product.category}</span>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover group-hover:scale-105 transition-transform duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            unoptimized
          />
        )}
        {product.popular && (
          <span className="absolute top-3 left-3 bg-[#F5A623] text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-xs text-[#F5A623] font-medium mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-[#0F4C81]">
              KSh {product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 ml-1">/ {product.unit}</span>
          </div>
          {product.inStock ? (
            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">In Stock</span>
          ) : (
            <span className="text-xs text-red-500 font-medium bg-red-50 px-2 py-1 rounded-full">Out of Stock</span>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-2.5 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
              added
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
            {added ? "Added" : "Add to Cart"}
          </button>
          <button
            onClick={() => setOrderModalOpen(true)}
            className="flex-1 bg-green-500 text-white py-2.5 px-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.113 1.528 5.845L0 24l6.337-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.927 0-3.73-.502-5.287-1.38l-.378-.224-3.924.93.976-3.83-.247-.394A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Order Now
          </button>
        </div>

        <OrderModal
          isOpen={orderModalOpen}
          onClose={() => setOrderModalOpen(false)}
          productName={product.name}
          quantity={1}
          unit={product.unit}
          totalPrice={`KSh ${product.price.toLocaleString()}`}
        />
      </div>
    </motion.div>
  );
}
