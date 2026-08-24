import React from "react";
import { Countdown } from "./Countdown";
import { EVENT_DETAILS } from "@/lib/constants";
import { Sparkles, Trophy, Store, ArrowRight, ShieldCheck } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="accueil"
      className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-hero-glow border-b border-white/5"
    >
      {/* Halos de lumière décoratifs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[200px] bg-gold/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Organisateur officiel avec logo */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
          <div className="w-6 h-6 rounded-md bg-white p-0.5 overflow-hidden shrink-0">
            <img
              src="/logo-ligue.jpg"
              alt="Ligue des Leaders d'Entreprise"
              className="w-full h-full object-contain"
            />
          </div>
          <span>Présenté par la <strong className="text-white font-semibold">Ligue des Leaders d'Entreprise</strong></span>
        </div>

        {/* Badge d'Événement */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-light/10 border border-brand-light/30 text-brand-light text-xs sm:text-sm font-semibold tracking-wide shadow-blue-glow">
            <Sparkles className="w-4 h-4 text-brand-light" />
            <span>{EVENT_DETAILS.edition} — {EVENT_DETAILS.location}</span>
          </span>
        </div>

        {/* Grand Titre Display */}
        <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
          La Foire d'Exposition des{" "}
          <span className="bg-gradient-to-r from-white via-brand-light to-brand-blue bg-clip-text text-transparent">
            Entrepreneurs 2026
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="font-body text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
          Le rendez-vous économique majeur de Garoua. Exposez vos savoir-faire,
          développez votre réseau et gagnez jusqu'à{" "}
          <strong className="text-gold font-semibold">100 000 FCFA</strong> aux
          concours métiers.
        </p>

        {/* Compte à Rebours Dynamique */}
        <Countdown />

        {/* Boutons d'Action Principaux */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="#stands"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-blue-gradient shadow-blue-glow hover-lift focus:outline-none focus:ring-4 focus:ring-brand-light/30"
          >
            <Store className="w-5 h-5" />
            <span>Réserver mon Stand</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#concours"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-navy-dark bg-gold-gradient shadow-gold-glow hover-lift focus:outline-none focus:ring-4 focus:ring-gold/30"
          >
            <Trophy className="w-5 h-5 text-navy-dark" />
            <span>Participer au Concours</span>
          </a>
        </div>

        {/* Preuve sociale / Métriques rapides */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-16 pt-8 border-t border-white/10 text-slate-400 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-semantic-success" />
            <span>Organisé par la Ligue des Leaders</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Store className="w-4 h-4 text-brand-light" />
            <span>3 Formules de Stands à partir de 25k FCFA</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-4 h-4 text-gold" />
            <span>Pâtissiers & Tailleurs/Stylistes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
