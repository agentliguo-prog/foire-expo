import React from "react";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { EVENT_DETAILS } from "@/lib/constants";
import { Store, Trophy, Image as ImageIcon, HelpCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-main text-white selection:bg-brand-light selection:text-navy-dark">
      {/* Top Bar d'Annonce */}
      <TopBar />

      {/* Header Sticky avec Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Section Hero */}
        <Hero />

        {/* Section Placeholder Stands (Prévue Phase 2) */}
        <section id="stands" className="py-16 px-4 max-w-[1100px] mx-auto text-center border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-light text-xs font-semibold uppercase mb-4">
            <Store className="w-4 h-4" />
            <span>Formules d'Exposition</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Réservez Votre Stand d'Exposition
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Découvrez nos 3 formules adaptées à la taille de votre entreprise (25 000 FCFA, 35 000 FCFA et 65 000 FCFA).
          </p>
        </section>

        {/* Section Placeholder Concours (Prévue Phase 2) */}
        <section id="concours" className="py-16 px-4 max-w-[1100px] mx-auto text-center border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase mb-4">
            <Trophy className="w-4 h-4" />
            <span>Concours Métiers</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Concours Pâtissiers & Tailleurs / Stylistes
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Participez pour 10 000 FCFA et tentez de remporter le Cash Prize de 100 000 FCFA, le trophée et votre attestation.
          </p>
        </section>

        {/* Section Placeholder Galerie 2025 (Prévue Phase 4) */}
        <section id="galerie" className="py-16 px-4 max-w-[1100px] mx-auto text-center border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-semibold uppercase mb-4">
            <ImageIcon className="w-4 h-4 text-brand-light" />
            <span>Édition Précédente</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Retour en Images — 1ʳᵉ Édition 2025
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Revivez les moments forts, l'ambiance et l'affluence de la première édition à Garoua.
          </p>
        </section>

        {/* Section Placeholder FAQ (Prévue Phase 4) */}
        <section id="faq" className="py-16 px-4 max-w-[1100px] mx-auto text-center border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-semibold uppercase mb-4">
            <HelpCircle className="w-4 h-4 text-brand-light" />
            <span>Informations Pratiques</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Foire Aux Questions
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Toutes les réponses sur le lieu ({EVENT_DETAILS.location}), les horaires et l'organisation.
          </p>
        </section>
      </main>

      {/* Footer avec logo officiel */}
      <footer className="bg-navy-dark border-t border-white/10 py-10 px-4 text-xs text-slate-400">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white p-0.5 overflow-hidden shrink-0">
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

      {/* Bouton d'Assistance WhatsApp Flottant */}
      <WhatsAppButton />
    </div>
  );
}
