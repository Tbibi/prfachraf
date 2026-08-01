"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-[2rem] border border-[#1e2a25]/10 bg-white/60 backdrop-blur-sm p-8 text-center"
      >
        <div className="mb-6 text-6xl">✨</div>
        <h3 className="mb-4 font-serif text-2xl font-semibold text-[#1e2a25]">
          Message envoyé !
        </h3>
        <p className="text-[var(--color-muted)]">
          Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#588b76]">
          Formulaire
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#1e2a25] sm:text-4xl">
          Envoyez-nous un message
        </h2>
        <p className="mt-4 text-[var(--color-muted)]">
          Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#1e2a25]/10 bg-white/60 backdrop-blur-sm p-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#1e2a25]">
              Nom complet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full rounded-xl border border-[#1e2a25]/10 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-[#588b76]/40 focus:outline-none focus:ring-4 focus:ring-[#588b76]/10"
              placeholder="Votre nom et prénom"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#1e2a25]">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full rounded-xl border border-[#1e2a25]/10 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-[#588b76]/40 focus:outline-none focus:ring-4 focus:ring-[#588b76]/10"
              placeholder="0661234567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1e2a25]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full rounded-xl border border-[#1e2a25]/10 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-[#588b76]/40 focus:outline-none focus:ring-4 focus:ring-[#588b76]/10"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#1e2a25]">
            Sujet <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            className="w-full rounded-xl border border-[#1e2a25]/10 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-[#588b76]/40 focus:outline-none focus:ring-4 focus:ring-[#588b76]/10"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="conseil">Conseil parfum</option>
            <option value="commande">Question sur une commande</option>
            <option value="produit">Information produit</option>
            <option value="livraison">Livraison</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#1e2a25]">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full rounded-xl border border-[#1e2a25]/10 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-[#588b76]/40 focus:outline-none focus:ring-4 focus:ring-[#588b76]/10 resize-none"
            placeholder="Décrivez votre demande en détail..."
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            loading={isSubmitting}
            className="min-w-[150px] h-12"
          >
            Envoyer le message
          </Button>
        </div>
      </form>
    </motion.div>
  );
}