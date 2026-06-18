import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { CartProvider } from "./components/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foundation Hardware | Your Trusted Building & Hardware Partner",
  description: "Quality Building Materials, Plumbing, Electrical, Roofing, Tools, Solar Products and More. One-stop supplier for all your construction needs.",
  keywords: "building materials, hardware store, plumbing supplies, electrical products, roofing materials, tools, solar products, construction, Kenya",
  openGraph: {
    title: "Foundation Hardware | Your Trusted Building & Hardware Partner",
    description: "Quality Building Materials, Plumbing, Electrical, Roofing, Tools, Solar Products and More.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
