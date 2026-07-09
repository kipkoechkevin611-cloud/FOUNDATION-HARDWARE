import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateWhatsAppLink(productName: string, quantity: string = "1"): string {
  const phone = "254788874942";
  const message = encodeURIComponent(
    `Hello General Hardware,\n\nI would like to order:\n\nProduct: ${productName}\nQuantity: ${quantity}\n\nPlease provide pricing and delivery information.\n\nThank you.`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

export function generateGeneralWhatsAppLink(): string {
  const phone = "254788874942";
  const message = encodeURIComponent(
    `Hello General Hardware,\n\nI am interested in your products. Please provide more information.\n\nThank you.`
  );
  return `https://wa.me/${phone}?text=${message}`;
}
