"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle, Star } from "lucide-react";
import CategoryCard from "./components/CategoryCard";
import ProductCard from "./components/ProductCard";
import HeroSlider from "./components/HeroSlider";
import { categories, products, testimonials, WHY_CHOOSE_US } from "@/lib/data";
import { generateGeneralWhatsAppLink } from "@/lib/utils";

const features = WHY_CHOOSE_US;

export default function Home() {
  const featuredProducts = products.filter((p) => p.popular).slice(0, 12);
  const featuredCategories = categories;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <section className="relative">
        <HeroSlider />

        {/* CTA Buttons Overlay */}
        <div className="absolute bottom-24 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-[#F5A623] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e09400] transition-colors inline-flex items-center gap-2"
              >
                Shop Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#0F4C81] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-[#0F4C81]">General Hardware</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the best quality building materials with exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#0F4C81]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0F4C81]">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product <span className="text-[#F5A623]">Categories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our wide range of building materials and hardware supplies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {featuredCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-[#0F4C81]">Products</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Popular products that our customers love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[#0F4C81] font-semibold hover:text-[#F5A623] transition-colors"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-[#0F4C81]">Customers</span> Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by builders, contractors, and homeowners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0F4C81]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Building Materials?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact General Hardware Today for Quality Products and Competitive Prices
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={generateGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5A623] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e09400] transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Order
              </a>
              <Link
                href="/contact"
                className="bg-white text-[#0F4C81] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

