"use client";

import { useState } from "react";
import { X, Phone, User, MapPin, Package } from "lucide-react";

interface OrderInfo {
  name: string;
  phone: string;
  location: string;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  quantity?: number;
  unit?: string;
  totalPrice?: string;
  cartMessage?: string;
}

export default function OrderModal({
  isOpen,
  onClose,
  productName,
  quantity,
  unit,
  totalPrice,
  cartMessage,
}: OrderModalProps) {
  const [info, setInfo] = useState<OrderInfo>({ name: "", phone: "", location: "" });
  const [errors, setErrors] = useState<Partial<OrderInfo>>({});

  const validate = () => {
    const newErrors: Partial<OrderInfo> = {};
    if (!info.name.trim()) newErrors.name = "Full name is required";
    if (!info.phone.trim()) newErrors.phone = "Phone number is required";
    if (!info.location.trim()) newErrors.location = "Delivery location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const phone = "254788874942";
    let message = "";
    if (cartMessage) {
      message = `Hello Foundation Hardware,\n\n*Customer Details:*\nName: ${info.name}\nPhone: ${info.phone}\nDelivery Location: ${info.location}\n\n${cartMessage}`;
    } else {
      message = `Hello Foundation Hardware,\n\n*Customer Details:*\nName: ${info.name}\nPhone: ${info.phone}\nDelivery Location: ${info.location}\n\n*Order Details:*\nProduct: ${productName}\nQuantity: ${quantity} ${unit}\nEstimated Total: ${totalPrice}\n\nPlease confirm pricing and delivery.\n\nThank you.`;
    }
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    onClose();
    setInfo({ name: "", phone: "", location: "" });
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Complete Your Order</h2>
            <p className="text-sm text-gray-500 mt-0.5">Enter your details to proceed to WhatsApp</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product summary */}
        {productName && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5 flex items-start gap-3">
            <div className="w-9 h-9 bg-[#0F4C81] rounded-lg flex items-center justify-center flex-shrink-0">
              <Package className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Ordering</p>
              <p className="font-semibold text-gray-900 text-sm leading-tight">{productName}</p>
              {quantity && unit && (
                <p className="text-xs text-[#0F4C81] mt-0.5">
                  Qty: {quantity} {unit} &bull; {totalPrice}
                </p>
              )}
            </div>
          </div>
        )}

        {cartMessage && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5 flex items-start gap-3">
            <div className="w-9 h-9 bg-[#0F4C81] rounded-lg flex items-center justify-center flex-shrink-0">
              <Package className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Cart Order</p>
              <p className="font-semibold text-gray-900 text-sm">Multiple items in cart</p>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. John Kamau"
                value={info.name}
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none text-sm transition-colors ${
                  errors.name ? "border-red-400 bg-red-50" : "border-gray-200"
                }`}
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="tel"
                placeholder="e.g. 0712 345 678"
                value={info.phone}
                onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none text-sm transition-colors ${
                  errors.phone ? "border-red-400 bg-red-50" : "border-gray-200"
                }`}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Delivery Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <textarea
                placeholder="e.g. Nairobi, Westlands, near ABC Plaza"
                value={info.location}
                onChange={(e) => setInfo({ ...info, location: e.target.value })}
                rows={2}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none text-sm resize-none transition-colors ${
                  errors.location ? "border-red-400 bg-red-50" : "border-gray-200"
                }`}
              />
            </div>
            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-green-500 text-white py-4 rounded-xl font-semibold text-base hover:bg-green-600 active:bg-green-700 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-green-200"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.113 1.528 5.845L0 24l6.337-1.502A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.927 0-3.73-.502-5.287-1.38l-.378-.224-3.924.93.976-3.83-.247-.394A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Send Order via WhatsApp
        </button>

        <p className="text-center text-xs text-gray-400 mt-3">
          You will be redirected to WhatsApp to confirm your order
        </p>
      </div>
    </div>
  );
}
