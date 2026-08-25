"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { StandsSection } from "@/components/sections/StandsSection";
import { ConcoursSection } from "@/components/sections/ConcoursSection";
import { ModalRegistration } from "@/components/ModalRegistration";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { EVENT_DETAILS } from "@/lib/constants";
import { Image as ImageIcon, HelpCircle } from "lucide-react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"exposant" | "concours">("exposant");
  const [modalOptionId, setModalOptionId] = useState<string | undefined>(undefined);

  const handleOpenModal = (type: "exposant" | "concours", optionId?: string) => {
    setModalType(type);
    setModalOptionId(optionId);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-navy-main text-white selection:bg-brand-light selection:text-navy-dark relative overflow-x-clip">
      {/* Conteneur d'en-tête FIXE et FIGÉ (ne défile jamais en haut comme en bas) */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full shadow-2xl backdrop-blur-xl">
        {/* Top Bar d'Annonce */}
        <TopBar onOpenModal={handleOpenModal} />

        {/* Header Sticky avec Navigation */}
        <Header onOpenModal={handleOpenModal} />
      </div>

      {/* Main Content avec padding-top ajusté sous l'en-tête fixe */}
      <main className="flex-grow pt-[96px] sm:pt-[116px]">
        {/* Section Hero */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Section Grille des Tarifs de Stands */}
        <StandsSection onSelectStand={(standId) => handleOpenModal("exposant", standId)} />

        {/* Section Grands Concours Métiers */}
        <ConcoursSection onSelectConcours={(concoursId) => handleOpenModal("concours", concoursId)} />

        {/* Section Placeholder Galerie 2025 */}
        <section id="galerie" className="py-12 sm:py-16 px-4 max-w-[1100px] mx-auto text-center border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-semibold uppercase mb-4">
            <ImageIcon className="w-4 h-4 text-brand-light" />
            <span>Édition Précédente</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-3">
            Retour en Images — 1ʳᵉ Édition 2025
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Revivez les moments forts, l'ambiance et l'affluence de la première édition à Garoua.
          </p>
        </section>

        {/* Section Placeholder FAQ */}
        <section id="faq" className="py-12 sm:py-16 px-4 max-w-[1100px] mx-auto text-center border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-semibold uppercase mb-4">
            <HelpCircle className="w-4 h-4 text-brand-light" />
            <span>Informations Pratiques</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-3">
            Foire Aux Questions
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Toutes les réponses sur le lieu ({EVENT_DETAILS.location}), les horaires et l'organisation.
          </p>
        </section>
      </main>

      {/* Footer avec logo officiel */}
      <footer className="bg-navy-dark border-t border-white/10 py-8 sm:py-10 px-4 text-xs text-slate-400">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white p-0.5 overflow-hidden shrink-0">
              <img
                src="/logo-ligue.jpg"
                alt="Logo Ligue des Leaders d'Entreprise"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-slate-200">
              {EVENT_DETAILS.organizer}
            </span>
          </div>
          <p>© 2026 {EVENT_DETAILS.organizer}. Tous droits réservés.</p>
          <p className="text-slate-500">{EVENT_DETAILS.title} — {EVENT_DETAILS.location}</p>
        </div>
      </footer>

      {/* Fenêtre Modale d'Inscription Réutilisable */}
      <ModalRegistration
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialType={modalType}
        initialOptionId={modalOptionId}
      />

      {/* Bouton d'Assistance WhatsApp Flottant et Figé */}
      <WhatsAppButton />
    </div>
  );
}
