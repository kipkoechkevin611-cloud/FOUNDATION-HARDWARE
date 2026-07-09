"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Truck, Shield, Phone } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We source only the highest quality materials from trusted manufacturers and suppliers.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Our team has extensive knowledge of building materials to help you make the right choice.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We prioritize our customers' needs and provide personalized service for every project.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Fast and efficient delivery to your construction site or preferred location.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Happy Customers" },
  { value: "1000+", label: "Products" },
  { value: "24/7", label: "Support" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0F4C81] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About General Hardware</h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Your trusted partner in construction and building materials since 2014
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Building Kenya&apos;s Future, <span className="text-[#F5A623]">One Project at a Time</span>
              </h2>
              <p className="text-gray-600 mb-4">
                General Hardware has been serving builders, contractors, and homeowners since 2014. 
                We have grown from a small local supplier to one of the most trusted names in building 
                materials across the region.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to quality, competitive pricing, and exceptional customer service has 
                earned us the trust of thousands of customers. Whether you&apos;re building a home, 
                renovating, or managing a large construction project, we have the materials and expertise 
                you need.
              </p>
              <p className="text-gray-600">
                We stock a comprehensive range of products including cement, steel, roofing materials, 
                plumbing supplies, electrical products, paints, tools, and solar equipment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
                alt="Construction site"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#0F4C81] mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0F4C81] p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To provide high-quality building materials and exceptional service that enable our 
                customers to build strong, durable, and sustainable structures. We aim to be the 
                go-to supplier for all construction needs in Kenya, supporting both small-scale 
                and large-scale projects with equal dedication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F5A623] p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-100 leading-relaxed">
                To be the leading and most trusted supplier of building materials in East Africa, 
                known for quality, reliability, and innovation. We envision a future where every 
                construction project, from homes to commercial buildings, starts with General Hardware.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-14 h-14 bg-[#0F4C81]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#0F4C81]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
                alt="Hardware store"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Customers <span className="text-[#0F4C81]">Trust Us</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F5A623] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Guaranteed</h4>
                    <p className="text-gray-600 text-sm">All products meet industry standards and come from reputable manufacturers.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F5A623] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                    <p className="text-gray-600 text-sm">Fair prices with bulk discounts and special rates for contractors.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F5A623] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Wide Selection</h4>
                    <p className="text-gray-600 text-sm">Over 1,000 products across all building categories in one place.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F5A623] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Advice</h4>
                    <p className="text-gray-600 text-sm">Our knowledgeable team helps you choose the right materials for your project.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F5A623] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Convenient Ordering</h4>
                    <p className="text-gray-600 text-sm">Easy WhatsApp ordering and fast delivery to your site.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F4C81]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us today for quotes, product inquiries, or expert advice on your construction needs.
            </p>
            <a
              href="https://wa.me/254788874942"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F5A623] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e09400] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
