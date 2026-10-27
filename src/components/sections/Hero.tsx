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
      className="relative pt-6 pb-14 sm:pt-12 sm:pb-20 overflow-hidden bg-slate-900 border-b border-slate-200"
    >
      {/* Arrière-plan héro : Image du Stade Omnisport 100% nette, vive et éclatante */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/stade-omnisport-garoua.jpg"
          alt="Stade Omnisports Roumdé-Adjia de Garoua"
          className="w-full h-full object-cover object-[center_35%] opacity-100 contrast-[1.15] saturate-[1.25] brightness-[0.98]"
        />
        {/* Filtre subtil de profondeur sans masquer les couleurs naturelles du stade */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60"></div>
      </div>

      <div className="max-w-[1050px] mx-auto px-3 sm:px-6 relative z-10">
        {/* Carte Glassmorphic centrale haute lisibilité laissant transparaître le stade tout autour */}
        <div className="backdrop-blur-md bg-white/[0.88] sm:bg-white/[0.92] p-5 sm:p-10 rounded-3xl border border-white/90 shadow-2xl shadow-slate-950/30 text-center">
          {/* Organisateur officiel avec logo */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-[11px] sm:text-sm font-semibold mb-4 sm:mb-5 shadow-sm max-w-full overflow-hidden">
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
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-600/10 border border-blue-600/30 text-blue-700 text-[11px] sm:text-sm font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>{EVENT_DETAILS.edition} — {EVENT_DETAILS.location}</span>
            </span>
          </div>

          {/* Grand Titre Display */}
          <h1 className="font-display font-black text-2xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] max-w-4xl mx-auto mb-4 sm:mb-5 break-words text-slate-950">
            La Foire d&apos;Exposition des{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Entrepreneurs 2026
            </span>
          </h1>

          {/* Sous-titre avec mise en valeur des dates et du nouveau lieu */}
          <p className="font-body text-slate-700 text-xs sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-1">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mt-10 sm:mt-12 pt-6 sm:pt-7 border-t border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm">
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
      </div>
    </section>
  );
};
