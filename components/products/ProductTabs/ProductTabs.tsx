"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PerfumeProduct } from "@/components/perfumes/ProductGrid/products";

type ProductTabsProps = {
  product: PerfumeProduct;
};

const tabs = [
  { id: "notes", label: "Notes Olfactives" },
  { id: "description", label: "Description" },
  { id: "reviews", label: "Avis Clients" },
];

const olfactiveNotes = {
  top: ["Bergamote", "Citron", "Poivre noir"],
  middle: ["Rose bulgare", "Jasmin", "Géranium"],
  base: ["Bois de santal", "Musc blanc", "Ambre"]
};

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("notes");

  const renderTabContent = () => {
    switch (activeTab) {
      case "notes":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
                  <h4 className="font-semibold text-[#1e2a25]">Notes de Tête</h4>
                </div>
                <ul className="space-y-2">
                  {olfactiveNotes.top.map((note) => (
                    <li key={note} className="text-sm text-[var(--color-muted)]">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-500"></div>
                  <h4 className="font-semibold text-[#1e2a25]">Notes de Cœur</h4>
                </div>
                <ul className="space-y-2">
                  {olfactiveNotes.middle.map((note) => (
                    <li key={note} className="text-sm text-[var(--color-muted)]">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-br from-amber-600 to-yellow-800"></div>
                  <h4 className="font-semibold text-[#1e2a25]">Notes de Fond</h4>
                </div>
                <ul className="space-y-2">
                  {olfactiveNotes.base.map((note) => (
                    <li key={note} className="text-sm text-[var(--color-muted)]">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="rounded-xl bg-gradient-to-br from-[#588b76]/5 to-transparent p-6 border border-[#588b76]/10">
              <h4 className="mb-3 font-semibold text-[#1e2a25]">Évolution Olfactive</h4>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Cette fragrance s&apos;ouvre sur des notes pétillantes et fraîches qui évoluent vers un cœur floral sophistiqué, 
                puis se révèle sur une base boisée et musquée d&apos;une élégance rare. La tenue exceptionnelle de 8-12 heures 
                en fait un choix parfait pour toutes les occasions.
              </p>
            </div>
          </motion.div>
        );
        
      case "description":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="prose max-w-none"
          >
            <div className="space-y-6">
              <p className="text-[var(--color-muted)] leading-relaxed">
                <strong className="text-[#1e2a25]">{product.name}</strong> est une création olfactive d&apos;exception qui incarne 
                l&apos;art de la parfumerie française. Inspiré par les plus grandes maisons de parfum, cette fragrance 
                capture l&apos;essence même de l&apos;élégance et du raffinement.
              </p>
              
              <p className="text-[var(--color-muted)] leading-relaxed">
                Chaque note a été soigneusement sélectionnée et harmonisée pour créer une symphonie olfactive unique. 
                La concentration élevée en essences nobles garantit une tenue exceptionnelle et un sillage remarquable 
                qui ne laisse personne indifférent.
              </p>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-white/50 p-6 border border-[#1e2a25]/10">
                  <h4 className="mb-3 font-semibold text-[#1e2a25]">Caractéristiques</h4>
                  <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                    <li>• Concentration: Eau de Parfum (15-20%)</li>
                    <li>• Tenue: 8-12 heures</li>
                    <li>• Sillage: Modéré à fort</li>
                    <li>• Saison: Toutes saisons</li>
                  </ul>
                </div>
                
                <div className="rounded-xl bg-white/50 p-6 border border-[#1e2a25]/10">
                  <h4 className="mb-3 font-semibold text-[#1e2a25]">Utilisation</h4>
                  <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                    <li>• Pulvériser à 15-20cm de la peau</li>
                    <li>• Points de pulsion recommandés</li>
                    <li>• Ne pas frotter après application</li>
                    <li>• Conserver à l&apos;abri de la lumière</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        );
        
      case "reviews":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1e2a25]">4.8</div>
                  <div className="flex justify-center text-yellow-400 text-lg">
                    ★★★★★
                  </div>
                  <div className="text-sm text-[var(--color-muted)]">Basé sur 124 avis</div>
                </div>
                
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center gap-2 text-sm">
                      <span>{stars} ★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-400 rounded-full" 
                          style={{ width: stars === 5 ? '85%' : stars === 4 ? '12%' : '3%' }}
                        ></div>
                      </div>
                      <span className="text-[var(--color-muted)]">
                        {stars === 5 ? '105' : stars === 4 ? '15' : '4'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  { name: "Sarah M.", rating: 5, date: "Il y a 2 jours", comment: "Parfum absolument magnifique ! La tenue est exceptionnelle et le sillage parfait. Je le recommande vivement." },
                  { name: "Ahmed K.", rating: 5, date: "Il y a 1 semaine", comment: "Excellente qualité, livraison rapide. C'est devenu mon parfum signature !" },
                  { name: "Fatima R.", rating: 4, date: "Il y a 2 semaines", comment: "Très beau parfum, même si je trouve qu'il pourrait avoir un peu plus de tenue sur moi." }
                ].map((review, index) => (
                  <div key={index} className="rounded-xl bg-white/50 p-6 border border-[#1e2a25]/10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-medium text-[#1e2a25]">{review.name}</div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="text-yellow-400">
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                          </div>
                          <span className="text-[var(--color-muted)]">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="border-b border-[#1e2a25]/10 mb-8">
        <nav className="flex gap-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative whitespace-nowrap pb-4 text-sm font-medium transition-colors duration-300 ${
                activeTab === tab.id
                  ? "text-[#588b76]"
                  : "text-[var(--color-muted)] hover:text-[#588b76]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-[#588b76]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <div key={activeTab}>
          {renderTabContent()}
        </div>
      </AnimatePresence>
    </div>
  );
}