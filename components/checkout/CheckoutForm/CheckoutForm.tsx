"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button/Button";

export type CheckoutOrderData = {
  customer: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
  shipping: {
    city: string;
    address: string;
    deliveryMethod: string;
  };
  payment: {
    method: string;
  };
};

type CheckoutFormProps = {
  onSubmit: (data: CheckoutOrderData) => void;
};

const moroccanCities = [
  "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir", "Meknès", "Oujda",
  "Kenitra", "Tétouan", "Safi", "Mohammedia", "Khouribga", "El Jadida", "Beni Mellal",
  "Nador", "Taza", "Settat", "Berrechid", "Khemisset", "Inezgane", "Ksar El Kebir",
  "Larache", "Guelmim", "Berkane", "Taourirt", "Bouskoura", "Fquih Ben Salah",
  "Dcheira El Jihadia", "Oued Zem"
];

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    deliveryMethod: "standard",
    paymentMethod: "cod",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
    else if (!/^(06|07|05)\d{8}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Format invalide (ex: 0661234567)";
    }
    if (!formData.city) newErrors.city = "La ville est requise";
    if (!formData.address.trim()) newErrors.address = "L'adresse est requise";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    onSubmit({
      customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
      },
      shipping: {
        city: formData.city,
        address: formData.address,
        deliveryMethod: formData.deliveryMethod,
      },
      payment: {
        method: formData.paymentMethod,
      },
    });
    
    setIsSubmitting(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Customer Information */}
      <div className="rounded-[2rem] border border-[#1e2a25]/10 bg-white/60 backdrop-blur-sm p-6">
        <h2 className="mb-6 font-serif text-xl font-semibold text-[#1e2a25]">
          Informations personnelles
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-[#1e2a25]">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring-4 ${
                errors.firstName
                  ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100"
                  : "border-[#1e2a25]/10 bg-white focus:border-[#588b76]/40 focus:ring-[#588b76]/10"
              }`}
              placeholder="Votre prénom"
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-[#1e2a25]">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className={`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring-4 ${
                errors.lastName
                  ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100"
                  : "border-[#1e2a25]/10 bg-white focus:border-[#588b76]/40 focus:ring-[#588b76]/10"
              }`}
              placeholder="Votre nom de famille"
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#1e2a25]">
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring-4 ${
                errors.phone
                  ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100"
                  : "border-[#1e2a25]/10 bg-white focus:border-[#588b76]/40 focus:ring-[#588b76]/10"
              }`}
              placeholder="0661234567"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1e2a25]">
              Email (optionnel)
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-xl border border-[#1e2a25]/10 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-[#588b76]/40 focus:outline-none focus:ring-4 focus:ring-[#588b76]/10"
              placeholder="votre@email.com"
            />
          </div>
        </div>
      </div>

      {/* Shipping Information */}
      <div className="rounded-[2rem] border border-[#1e2a25]/10 bg-white/60 backdrop-blur-sm p-6">
        <h2 className="mb-6 font-serif text-xl font-semibold text-[#1e2a25]">
          Adresse de livraison
        </h2>

        <div className="grid gap-4">
          <div>
            <label htmlFor="city" className="mb-2 block text-sm font-medium text-[#1e2a25]">
              Ville <span className="text-red-500">*</span>
            </label>
            <select
              id="city"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className={`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring-4 ${
                errors.city
                  ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100"
                  : "border-[#1e2a25]/10 bg-white focus:border-[#588b76]/40 focus:ring-[#588b76]/10"
              }`}
            >
              <option value="">Sélectionnez votre ville</option>
              {moroccanCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="mt-1 text-xs text-red-600">{errors.city}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="mb-2 block text-sm font-medium text-[#1e2a25]">
              Adresse complète <span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              rows={3}
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className={`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring-4 resize-none ${
                errors.address
                  ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100"
                  : "border-[#1e2a25]/10 bg-white focus:border-[#588b76]/40 focus:ring-[#588b76]/10"
              }`}
              placeholder="Numéro, rue, quartier, points de repère..."
            />
            {errors.address && (
              <p className="mt-1 text-xs text-red-600">{errors.address}</p>
            )}
          </div>
        </div>

        {/* Delivery Method */}
        <div className="mt-6">
          <h3 className="mb-4 text-sm font-medium text-[#1e2a25]">
            Mode de livraison
          </h3>
          <div className="space-y-3">
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#1e2a25]/10 bg-white p-4 transition-all duration-300 hover:border-[#588b76]/30">
              <input
                type="radio"
                name="deliveryMethod"
                value="standard"
                checked={formData.deliveryMethod === "standard"}
                onChange={(e) => handleChange("deliveryMethod", e.target.value)}
                className="h-4 w-4 text-[#588b76] focus:ring-[#588b76]"
              />
              <div className="flex-1">
                <div className="font-medium text-[#1e2a25]">Livraison standard</div>
                <div className="text-sm text-[var(--color-muted)]">2-4 jours ouvrables • 30 DH (Gratuite dès 300 DH)</div>
              </div>
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#1e2a25]/10 bg-white p-4 transition-all duration-300 hover:border-[#588b76]/30">
              <input
                type="radio"
                name="deliveryMethod"
                value="express"
                checked={formData.deliveryMethod === "express"}
                onChange={(e) => handleChange("deliveryMethod", e.target.value)}
                className="h-4 w-4 text-[#588b76] focus:ring-[#588b76]"
              />
              <div className="flex-1">
                <div className="font-medium text-[#1e2a25]">Livraison express</div>
                <div className="text-sm text-[var(--color-muted)]">24-48h • 50 DH</div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="rounded-[2rem] border border-[#1e2a25]/10 bg-white/60 backdrop-blur-sm p-6">
        <h2 className="mb-6 font-serif text-xl font-semibold text-[#1e2a25]">
          Mode de paiement
        </h2>

        <div className="space-y-3">
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#1e2a25]/10 bg-white p-4 transition-all duration-300 hover:border-[#588b76]/30">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={formData.paymentMethod === "cod"}
              onChange={(e) => handleChange("paymentMethod", e.target.value)}
              className="h-4 w-4 text-[#588b76] focus:ring-[#588b76]"
            />
            <div className="flex-1">
              <div className="font-medium text-[#1e2a25]">Paiement à la livraison</div>
              <div className="text-sm text-[var(--color-muted)]">Payez en espèces lors de la réception</div>
            </div>
            <span className="text-2xl">💸</span>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#1e2a25]/10 bg-white p-4 transition-all duration-300 hover:border-[#588b76]/30">
            <input
              type="radio"
              name="paymentMethod"
              value="whatsapp"
              checked={formData.paymentMethod === "whatsapp"}
              onChange={(e) => handleChange("paymentMethod", e.target.value)}
              className="h-4 w-4 text-[#588b76] focus:ring-[#588b76]"
            />
            <div className="flex-1">
              <div className="font-medium text-[#1e2a25]">Commande WhatsApp</div>
              <div className="text-sm text-[var(--color-muted)]">Finaliser par WhatsApp avec nos conseillers</div>
            </div>
            <span className="text-2xl">💬</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          loading={isSubmitting}
          className="min-w-[200px] h-14 text-base font-semibold"
        >
          {formData.paymentMethod === "whatsapp" ? "Finaliser sur WhatsApp" : "Confirmer la commande"}
        </Button>
      </div>
    </motion.form>
  );
}