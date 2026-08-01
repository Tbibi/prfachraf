"use client";

import { motion } from "framer-motion";

const contactDetails = [
  {
    title: "Téléphone",
    icon: "📞",
    details: ["+212 6 00 00 00 00", "Lun - Ven: 9h - 18h", "Sam: 9h - 17h"],
    action: { text: "Appeler maintenant", href: "tel:+212600000000" }
  },
  {
    title: "Email",
    icon: "✉️",
    details: ["contact@achrafparfums.ma", "Réponse sous 24h", "Support technique"],
    action: { text: "Envoyer un email", href: "mailto:contact@achrafparfums.ma" }
  },
  {
    title: "WhatsApp",
    icon: "💬",
    details: ["+212 6 00 00 00 00", "Réponse immédiate", "Conseils personnalisés"],
    action: { text: "Discuter maintenant", href: "https://wa.me/212600000000" }
  },
  {
    title: "Adresse",
    icon: "📍",
    details: ["123 Avenue Mohammed V", "Casablanca, Maroc", "20000"],
    action: { text: "Voir sur la carte", href: "#map" }
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: "📷",
    href: "https://instagram.com/achrafparfums",
    color: "hover:text-pink-600"
  },
  {
    name: "Facebook",
    icon: "👥",
    href: "https://facebook.com/achrafparfums",
    color: "hover:text-blue-600"
  },
  {
    name: "TikTok",
    icon: "🎵",
    href: "https://tiktok.com/@achrafparfums",
    color: "hover:text-gray-900"
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Business Hours */}
      <div className="rounded-[2rem] border border-[#1e2a25]/10 bg-white/60 backdrop-blur-sm p-6">
        <h3 className="mb-4 font-serif text-xl font-semibold text-[#1e2a25]">
          Horaires d&apos;ouverture
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-[var(--color-muted)]">Lundi - Vendredi</span>
            <span className="font-medium text-[#1e2a25]">9h00 - 18h00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[var(--color-muted)]">Samedi</span>
            <span className="font-medium text-[#1e2a25]">9h00 - 17h00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[var(--color-muted)]">Dimanche</span>
            <span className="font-medium text-red-600">Fermé</span>
          </div>
        </div>
        
        <div className="mt-4 rounded-lg bg-green-50 p-3 border border-green-200">
          <div className="flex items-center gap-2">
            <span className="text-green-600">🟢</span>
            <span className="text-sm font-medium text-green-800">Ouvert maintenant</span>
          </div>
          <p className="text-xs text-green-600 mt-1">Ferme à 18h00 aujourd&apos;hui</p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactDetails.map((contact, index) => (
          <motion.div
            key={contact.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="rounded-2xl border border-[#1e2a25]/10 bg-white/60 backdrop-blur-sm p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#588b76]/10 text-xl">
                {contact.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#1e2a25] mb-2">{contact.title}</h4>
                <div className="space-y-1">
                  {contact.details.map((detail, i) => (
                    <p key={i} className="text-sm text-[var(--color-muted)]">
                      {detail}
                    </p>
                  ))}
                </div>
                <a
                  href={contact.action.href}
                  target={contact.action.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.action.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-[#588b76] hover:text-[#4a7563] transition-colors duration-300"
                >
                  {contact.action.text}
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Media */}
      <div className="rounded-[2rem] border border-[#1e2a25]/10 bg-white/60 backdrop-blur-sm p-6">
        <h3 className="mb-4 font-serif text-xl font-semibold text-[#1e2a25]">
          Suivez-nous
        </h3>
        <p className="text-sm text-[var(--color-muted)] mb-4">
          Restez connecté pour découvrir nos nouveautés et conseils parfum
        </p>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-12 w-12 items-center justify-center rounded-full border border-[#1e2a25]/10 bg-white text-xl transition-all duration-300 hover:border-[#588b76]/30 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA */}
      <motion.a
        href="https://wa.me/212600000000?text=Bonjour,%20j'aimerais%20avoir%20des%20informations%20sur%20vos%20parfums"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="block rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-green-100 p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl">
            💬
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-green-800 mb-1">
              Besoin d&apos;aide immédiate ?
            </h4>
            <p className="text-sm text-green-600">
              Contactez-nous sur WhatsApp pour un conseil personnalisé
            </p>
          </div>
          <div className="text-green-600">
            →
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}