"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight, Phone } from "lucide-react";
import { useCart } from "../components/CartContext";
import OrderModal from "../components/OrderModal";
import { useState } from "react";

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    updateNotes,
    clearCart,
    totalItems,
    generateWhatsAppMessage,
  } = useCart();
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Browse our products and add items to your cart. When you&apos;re ready, send your order via WhatsApp.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#0F4C81] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0a3a63] transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
              Browse Products
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-4 flex gap-4"
              >
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-[#F5A623] font-medium">{item.category}</p>
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Notes Field */}
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Add notes (e.g., size, color, brand preference)"
                      value={item.notes || ""}
                      onChange={(e) => updateNotes(item.id, e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="text-red-500 font-medium hover:text-red-700 transition-colors flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-md p-6 sticky top-24"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Total Items</span>
                  <span className="font-semibold">{totalItems}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Products</span>
                  <span className="font-semibold">{items.length}</span>
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                <p className="text-sm text-gray-600">
                  Prices will be provided when you send your order. Our team will respond with a detailed quote including delivery options.
                </p>

                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order Now
                </button>

                <OrderModal
                  isOpen={orderModalOpen}
                  onClose={() => setOrderModalOpen(false)}
                  cartMessage={generateWhatsAppMessage().split("text=")[1] ? decodeURIComponent(generateWhatsAppMessage().split("text=")[1]) : "Cart items"}
                />

                <a
                  href={`https://wa.me/254788874942`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#F5A623] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#e09400] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call to Order
                </a>

                <Link
                  href="/products"
                  className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>How it works:</strong>
                </p>
                <ol className="text-sm text-blue-700 mt-2 space-y-1 list-decimal list-inside">
                  <li>Add items to your cart</li>
                  <li>Add any specific notes (sizes, brands)</li>
                  <li>Click &quot;Order Now&quot;</li>
                  <li>We&apos;ll reply with pricing and delivery info</li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
