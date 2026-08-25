"use client";

import React from "react";
import { STANDS_DATA } from "@/lib/constants";
import { Store, Check, Sparkles, ArrowRight, Star } from "lucide-react";

interface StandsSectionProps {
  onSelectStand?: (standId: string) => void;
}

export const StandsSection: React.FC<StandsSectionProps> = ({ onSelectStand }) => {
  return (
    <section id="stands" className="py-12 sm:py-28 px-3 sm:px-6 lg:px-8 max-w-[1100px] mx-auto relative z-10">
      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[200px] sm:h-[300px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      {/* En-tête de section */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-light/10 border border-brand-light/30 text-brand-light text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 shadow-blue-glow">
          <Store className="w-3.5 h-3.5 text-brand-light shrink-0" />
          <span>Espace Exposition 2026</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-5xl text-white tracking-tight leading-tight mb-3 sm:mb-4">
          Choisissez la Formule de Stand{" "}
          <span className="bg-gradient-to-r from-brand-light to-brand-blue bg-clip-text text-transparent">
            Adaptée à Votre Marque
          </span>
        </h2>

        <p className="font-body text-slate-300 text-xs sm:text-lg leading-relaxed">
          Exposez au Parc Bois de Garoua devant des milliers de visiteurs et développez votre réseau commercial. Tous nos stands incluent du matériel et de la promotion publicitaire.
        </p>
      </div>

      {/* Grille des 3 Formules de Stands */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {STANDS_DATA.map((stand) => {
          const isPopular = stand.popular;

          return (
            <div
              key={stand.id}
              className={`relative flex flex-col justify-between rounded-2xl p-5 sm:p-8 transition-all duration-300 hover-lift ${
                isPopular
                  ? "bg-gradient-to-b from-navy-card via-navy-hover to-navy-card border-2 border-brand-light shadow-blue-glow-lg md:-translate-y-2"
                  : "bg-navy-card/80 backdrop-blur-md border border-white/10 hover:border-white/20 shadow-card-glass"
              }`}
            >
              {/* Badge Recommandé */}
              {stand.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-gradient text-white text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full shadow-blue-glow flex items-center gap-1 uppercase tracking-wider whitespace-nowrap">
                  <Sparkles className="w-3 h-3 fill-white shrink-0" />
                  <span>{stand.badge}</span>
                </div>
              )}

              <div>
                {/* En-tête de carte */}
                <div className="mb-4 sm:mb-6 pt-1 sm:pt-2">
                  <h3 className="font-display font-bold text-lg sm:text-2xl text-white mb-1.5 flex items-center gap-2">
                    {stand.name}
                    {isPopular && <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-gold shrink-0" />}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed sm:min-h-[40px]">
                    {stand.description}
                  </p>
                </div>

                {/* Bloc Prix */}
                <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl bg-navy-main/70 border border-white/5 flex items-baseline gap-2">
                  <span className="font-data font-black text-2xl sm:text-4xl text-white tracking-tight tabular-nums whitespace-nowrap">
                    {stand.priceFormatted}
                  </span>
                  <span className="font-body text-xs sm:text-sm font-semibold text-brand-light uppercase">
                    FCFA
                  </span>
                </div>

                {/* Liste des équipements */}
                <div className="space-y-2.5 sm:space-y-3.5 mb-6 sm:mb-8">
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Inclus dans ce stand :
                  </span>
                  {stand.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center shrink-0 mt-0.5 border border-brand-light/20">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton d'action */}
              <button
                onClick={() => onSelectStand?.(stand.id)}
                className={`w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none ${
                  isPopular
                    ? "bg-blue-gradient text-white shadow-blue-glow hover:brightness-110"
                    : "bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20"
                }`}
              >
                <span>{stand.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
