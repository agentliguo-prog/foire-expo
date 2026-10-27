import React from "react";
import { Countdown } from "./Countdown";
import { EVENT_DETAILS } from "@/lib/constants";
import { Sparkles, Trophy, Store, ArrowRight, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOpenModal?: (type: "exposant" | "concours", optionId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section
      id="accueil"
      className="relative pt-6 pb-16 sm:pt-20 sm:pb-32 overflow-hidden bg-slate-100 border-b border-slate-200"
    >
      {/* Arrière-plan héro : Image éclatante et hautement visible du Stade Omnisport de Garoua */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/stade-omnisport-garoua.jpg"
          alt="Stade Omnisports de Garoua"
          className="w-full h-full object-cover object-[center_30%] opacity-85 brightness-100 contrast-105"
        />
        {/* Dégradé doux et lumineux pour sublimer le stade tout en assurant une lisibilité maximale */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-slate-100/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.55)_0%,_rgba(241,245,249,0.92)_100%)]"></div>
      </div>

      {/* Halos de lumière décoratifs doux */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[200px] sm:h-[300px] bg-blue-400/15 blur-[100px] rounded-full pointer-events-none z-[1]"></div>
      <div className="absolute top-1/3 right-4 w-[200px] sm:w-[300px] h-[150px] sm:h-[200px] bg-amber-300/15 blur-[80px] rounded-full pointer-events-none z-[1]"></div>

      <div className="max-w-[1100px] mx-auto px-3 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Organisateur officiel avec logo */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 border border-slate-300/80 text-slate-800 text-[11px] sm:text-sm font-semibold mb-4 sm:mb-6 shadow-md backdrop-blur-md max-w-full overflow-hidden">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-white p-0.5 overflow-hidden shrink-0 shadow-sm border border-slate-200">
            <img
              src="/logo-ligue.jpg"
              alt="Ligue des Leaders d'Entreprise"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="truncate">Présenté par la <strong className="text-slate-950 font-bold">Ligue des Leaders d'Entreprise</strong></span>
        </div>

        {/* Badge d'Événement & Lieu */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-600/10 border border-blue-600/30 text-blue-700 text-[11px] sm:text-sm font-bold tracking-wide shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>{EVENT_DETAILS.edition} — {EVENT_DETAILS.location}</span>
          </span>
        </div>

        {/* Grand Titre Display Mobile-First */}
        <h1 className="font-display font-black text-2xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.15] max-w-4xl mx-auto mb-4 sm:mb-6 break-words text-slate-950">
          La Foire d&apos;Exposition des{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Entrepreneurs 2026
          </span>
        </h1>

        {/* Sous-titre avec mise en valeur des dates et du nouveau lieu */}
        <p className="font-body text-slate-800 text-xs sm:text-xl max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-1">
          Le rendez-vous économique majeur de Garoua du <strong className="text-slate-950 font-bold">18 au 20 Décembre 2026</strong> au <strong className="text-blue-700 font-bold">{EVENT_DETAILS.location}</strong>. Exposez vos savoir-faire, développez votre réseau et gagnez jusqu&apos;à{" "}
          <strong className="text-amber-700 font-extrabold whitespace-nowrap">100 000 FCFA</strong> aux
          concours métiers.
        </p>

        {/* Compte à Rebours Dynamique */}
        <Countdown />

        {/* Boutons d'Action Principaux */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full max-w-md sm:max-w-none mx-auto">
          <button
            onClick={() => onOpenModal?.("exposant", "stand-35k")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full text-xs sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover-lift focus:outline-none"
          >
            <Store className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Réserver mon Stand</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </button>

          <button
            onClick={() => onOpenModal?.("concours", "concours-patissier")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full text-xs sm:text-base font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-lg shadow-amber-400/25 hover-lift focus:outline-none"
          >
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-slate-950" />
            <span>Participer au Concours</span>
          </button>
        </div>

        {/* Preuve sociale / Métriques rapides */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-300/80 text-slate-700 font-semibold text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Organisé par la Ligue des Leaders</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Store className="w-4 h-4 text-blue-600 shrink-0" />
            <span>3 Formules à partir de 25k FCFA</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Pâtissiers & Tailleurs/Stylistes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
