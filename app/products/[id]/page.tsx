import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { products, getProductById, getRelatedProducts } from "@/lib/data";
import ProductDetailClient from "./ProductDetailClient";

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProductById(params.id);
  
  if (!product) {
    return {
      title: "Product Not Found | General Hardware",
    };
  }

  return {
    title: `${product.name} | General Hardware`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 4);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-[#0F4C81]">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-[#0F4C81]">Products</Link></li>
            <li>/</li>
            <li><Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-[#0F4C81]">{product.category}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      </div>
    </div>
  );
}
