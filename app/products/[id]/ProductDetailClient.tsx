"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ShoppingCart, ArrowRight, ChevronRight } from "lucide-react";
import type { Product } from "@/lib/data";
import { useCart } from "../../components/CartContext";
import OrderModal from "../../components/OrderModal";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const { addItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      description: product.description,
      image: product.image,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Product Detail Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="relative aspect-square bg-gray-100">
            {!imgLoaded && !imgError && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5}/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1.5}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15l-5-5L5 21"/></svg>
              </div>
            )}
            {imgError ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                <svg className="w-20 h-20 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0v10l-8 4M4 7v10l8 4" /></svg>
                <span className="text-sm font-medium">{product.category}</span>
              </div>
            ) : (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={`object-cover ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                priority
                unoptimized
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
            )}
            {product.popular && (
              <span className="absolute top-4 left-4 bg-[#F5A623] text-white text-sm font-semibold px-4 py-1 rounded-full">
                Popular
              </span>
            )}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <p className="text-[#F5A623] font-medium mb-2">{product.category}</p>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
          </div>

          {/* Price */}
          <div className="bg-gray-100 p-6 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">Price per {product.unit}</p>
            <p className="text-4xl font-bold text-[#0F4C81]">{formatPrice(product.price)}</p>
            <p className="text-sm text-gray-500 mt-1">per {product.unit}</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-gray-100 border-r"
              >
                -
              </button>
              <span className="px-6 py-2 font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-gray-100 border-l"
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="text-xl">
            <span className="text-gray-600">Total: </span>
            <span className="font-bold text-[#0F4C81]">{formatPrice(product.price * quantity)}</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => setOrderModalOpen(true)}
              className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-3"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.113 1.528 5.845L0 24l6.337-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.927 0-3.73-.502-5.287-1.38l-.378-.224-3.924.93.976-3.83-.247-.394A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Order Now
            </button>

            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-3 ${
                addedToCart
                  ? "bg-green-500 text-white"
                  : "bg-[#0F4C81] text-white hover:bg-[#0a3a63]"
              }`}
            >
              {addedToCart ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </>
              )}
            </button>
          </div>

          <OrderModal
            isOpen={orderModalOpen}
            onClose={() => setOrderModalOpen(false)}
            productName={product.name}
            quantity={quantity}
            unit={product.unit}
            totalPrice={formatPrice(product.price * quantity)}
          />

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
            <span className={product.inStock ? "text-green-600" : "text-red-600"}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <Check className="w-5 h-5 text-[#F5A623]" />
                <span className="text-gray-700">{spec}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#0F4C81] transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-[#F5A623] font-bold mt-1">{formatPrice(relatedProduct.price)}</p>
                  <p className="text-gray-500 text-sm">per {relatedProduct.unit}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {/* How to Order */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-blue-50 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-[#0F4C81] mb-4">How to Order</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#0F4C81] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h3 className="font-semibold text-gray-900">Select Quantity</h3>
              <p className="text-gray-600 text-sm">Choose how many units you need</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#0F4C81] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h3 className="font-semibold text-gray-900">Click Order</h3>
              <p className="text-gray-600 text-sm">Tap &quot;Order on WhatsApp&quot; button</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#0F4C81] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h3 className="font-semibold text-gray-900">Get Quote</h3>
              <p className="text-gray-600 text-sm">We reply with pricing & delivery</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
