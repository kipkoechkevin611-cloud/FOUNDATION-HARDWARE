"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/>
  </svg>
);

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const categories = [
  "Building Materials",
  "Roofing Materials",
  "Plumbing Supplies",
  "Electrical & Solar",
  "Tools & Equipment",
  "Safety Equipment",
];

export default function Footer() {
  return (
    <footer className="bg-[#0F4C81] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/logo.jpeg"
                alt="General Hardware"
                width={160}
                height={64}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted partner for quality building materials, plumbing, electrical, roofing, tools, and solar products.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1CF9GqqjdN/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F5A623] transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/foundation_hardware?igsh=MXNueWh6NXBqZDEyNQ==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F5A623] transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://www.tiktok.com/@foundationhardware?_r=1&_t=ZS-97HbQsV60XN" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F5A623] transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#F5A623] transition-colors text-sm flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href="/products"
                    className="text-gray-300 hover:text-[#F5A623] transition-colors text-sm flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F5A623] mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:0788874942" className="text-gray-300 text-sm hover:text-[#F5A623] transition-colors">
                    0788 874 942
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F5A623] mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@foundationhardware.com" className="text-gray-300 text-sm hover:text-[#F5A623] transition-colors">
                    info@foundationhardware.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5A623] mt-0.5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-300 text-sm">
                    Main Street, Industrial Area<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/254788874942"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-[#F5A623] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#e09400] transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} General Hardware. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
