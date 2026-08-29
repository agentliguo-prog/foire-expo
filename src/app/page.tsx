"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { StandsSection } from "@/components/sections/StandsSection";
import { ConcoursSection } from "@/components/sections/ConcoursSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ModalRegistration } from "@/components/ModalRegistration";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { EVENT_DETAILS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

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
      {/* Conteneur d'en-tête FIXE et FIGÉ */}
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

        {/* Section Galerie Médias 2025 */}
        <GallerySection />

        {/* Section FAQ & Informations Pratiques */}
        <FAQSection onOpenModal={handleOpenModal} />
      </main>

      {/* Footer Moderne & Réseaux Sociaux Officiels */}
      <footer className="bg-navy-dark border-t border-white/10 py-10 sm:py-14 px-4 text-xs text-slate-400">
        <div className="max-w-[1100px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
            {/* Branding Ligue */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 overflow-hidden shrink-0 shadow-blue-glow border border-white/20">
                <img
                  src="/logo-ligue.jpg"
                  alt="Logo Ligue des Leaders d'Entreprise"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-white text-base leading-tight">
                  {EVENT_DETAILS.organizer}
                </h4>
                <p className="text-brand-light text-xs font-semibold uppercase tracking-wider">
                  Organisateur Officiel • Garoua
                </p>
              </div>
            </div>

            {/* Boutons Réseaux Sociaux Officiels */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${EVENT_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${EVENT_DETAILS.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white border border-emerald-500/30 transition-all duration-200 font-semibold text-xs sm:text-sm"
                title="WhatsApp Officiel Ligue (+237 6 99 99 75 83)"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp (+237 6 99 99 75 83)</span>
              </a>

              {/* TikTok */}
              <a
                href={EVENT_DETAILS.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-600/20 text-pink-400 hover:bg-pink-600 hover:text-white border border-pink-500/30 transition-all duration-200 font-semibold text-xs sm:text-sm"
                title="Compte TikTok Officiel @ligue.des.leaders"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.96-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.36 1.5-1.41 2.5-.07 1.05.37 2.13 1.18 2.8.84.71 2 1.01 3.08.83 1.09-.16 2.06-.86 2.54-1.85.34-.67.47-1.43.46-2.19.03-5.26.01-10.53.02-15.79z" />
                </svg>
                <span>TikTok @ligue.des.leaders</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400">
            <p>© 2026 {EVENT_DETAILS.organizer}. Tous droits réservés.</p>
            <p className="text-slate-500">
              {EVENT_DETAILS.title} — {EVENT_DETAILS.location}
            </p>
          </div>
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
