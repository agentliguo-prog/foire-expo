"use client";

import React from "react";
import { CONCOURS_DATA } from "@/lib/constants";
import { Trophy, Cake, Scissors, Award, Coins, CheckCircle2, ArrowRight } from "lucide-react";

interface ConcoursSectionProps {
  onSelectConcours?: (concoursId: string) => void;
}

export const ConcoursSection: React.FC<ConcoursSectionProps> = ({ onSelectConcours }) => {
  return (
    <section id="concours" className="py-12 sm:py-28 px-3 sm:px-6 lg:px-8 max-w-[1100px] mx-auto relative z-10 border-t border-white/10">
      {/* Halo lumineux Or Prestige */}
      <div className="absolute top-1/3 right-4 w-[350px] sm:w-[500px] h-[200px] sm:h-[300px] bg-gold/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      {/* En-tête de section Concours */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 shadow-gold-glow">
          <Trophy className="w-3.5 h-3.5 text-gold shrink-0" />
          <span>Grands Concours Métiers 2026</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-5xl text-white tracking-tight leading-tight mb-3 sm:mb-4">
          Démontrez Votre Savoir-Faire & Gagnez jusqu'à{" "}
          <span className="inline-block whitespace-nowrap bg-gradient-to-r from-gold via-yellow-200 to-amber-500 bg-clip-text text-transparent">
            100 000 FCFA
          </span>
        </h2>

        <p className="font-body text-slate-300 text-xs sm:text-lg leading-relaxed">
          Pâtissiers, tailleurs, stylistes et créateurs de mode de Garoua et du Nord-Cameroun : participez aux concours officiels de la Ligue des Leaders d'Entreprise.
        </p>
      </div>

      {/* Hero Banner Récompenses (Cash Prize + Trophée + Attestation) */}
      <div className="mb-10 sm:mb-16 p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-navy-card via-navy-hover to-navy-card border border-gold/30 shadow-gold-glow relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 sm:w-60 h-40 sm:h-60 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left items-center">
          {/* Item 1: Cash Prize */}
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-navy-main/70 border border-gold/20">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gold-gradient text-navy-dark flex items-center justify-center shrink-0 shadow-gold-glow">
              <Coins className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gold block">1ᵉʳ Prix Cash</span>
              <span className="font-data font-extrabold text-lg sm:text-2xl text-white whitespace-nowrap">100 000 FCFA</span>
              <p className="text-[10px] sm:text-xs text-slate-400">Versé immédiatement au vainqueur</p>
            </div>
          </div>

          {/* Item 2: Trophée Officiel */}
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-navy-main/70 border border-gold/20">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gold-gradient text-navy-dark flex items-center justify-center shrink-0 shadow-gold-glow">
              <Trophy className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gold block">Récompense Prestige</span>
              <span className="font-display font-extrabold text-base sm:text-xl text-white">Trophée Officiel</span>
              <p className="text-[10px] sm:text-xs text-slate-400">Édition 2026 de la Ligue</p>
            </div>
          </div>

          {/* Item 3: Attestation d'Excellence */}
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-navy-main/70 border border-gold/20">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gold-gradient text-navy-dark flex items-center justify-center shrink-0 shadow-gold-glow">
              <Award className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gold block">Reconnaissance</span>
              <span className="font-display font-extrabold text-base sm:text-xl text-white">Attestation & Médias</span>
              <p className="text-[10px] sm:text-xs text-slate-400">Visibilité presse & réseaux</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grille des 2 Catégories de Concours */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {CONCOURS_DATA.map((concours) => {
          const isCake = concours.iconName === "cake";

          return (
            <div
              key={concours.id}
              className="flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-navy-card/80 backdrop-blur-md border border-white/10 hover:border-gold/40 transition-all duration-300 hover-lift shadow-card-glass"
            >
              <div>
                {/* En-tête de catégorie avec Icône */}
                <div className="flex items-start justify-between gap-3 mb-4 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gold/10 text-gold flex items-center justify-center border border-gold/20 shrink-0">
                      {isCake ? <Cake className="w-5 h-5 sm:w-6 sm:h-6" /> : <Scissors className="w-5 h-5 sm:w-6 sm:h-6" />}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-2xl text-white">
                        {concours.title}
                      </h3>
                      <span className="text-[11px] sm:text-xs font-medium text-slate-400">
                        {concours.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-6">
                  {concours.description}
                </p>

                {/* Tarif d'inscription responsive */}
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-navy-main/90 border border-white/10 flex items-center justify-between gap-2 shadow-inner">
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Frais d'inscription :
                  </span>
                  <div className="flex items-baseline gap-1 whitespace-nowrap shrink-0">
                    <span className="font-data font-black text-xl sm:text-3xl text-gold tabular-nums tracking-tight">
                      {concours.priceFormatted}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-gold uppercase tracking-wider">FCFA</span>
                  </div>
                </div>

                {/* Critères d'évaluation */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Critères d'évaluation du jury :
                  </span>
                  {concours.criteria.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Récompenses spécifiques */}
                <div className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl bg-gold/5 border border-gold/20">
                  <span className="text-[11px] sm:text-xs font-bold text-gold uppercase tracking-wider block mb-1">
                    Récompenses garanties :
                  </span>
                  {concours.rewards.map((reward, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                      <span>{reward}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton d'inscription au concours */}
              <button
                onClick={() => onSelectConcours?.(concours.id)}
                className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-full font-bold text-xs sm:text-sm text-navy-dark bg-gold-gradient shadow-gold-glow hover-lift flex items-center justify-center gap-2 focus:outline-none"
              >
                <span>{concours.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
