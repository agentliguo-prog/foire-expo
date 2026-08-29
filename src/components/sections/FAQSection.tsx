"use client";

import React, { useState } from "react";
import { FAQ_DATA, EVENT_DETAILS } from "@/lib/constants";
import {
  HelpCircle,
  ChevronDown,
  MapPin,
  Calendar,
  MessageCircle,
  Sparkles,
} from "lucide-react";

interface FAQSectionProps {
  onOpenModal?: (type: "exposant" | "concours") => void;
}

export function FAQSection({ onOpenModal }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-[1150px] mx-auto border-b border-white/10 relative"
    >
      {/* Halo de fond lumineux */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-light/5 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* En-tête de Section */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-light text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <HelpCircle className="w-4 h-4 text-brand-light" />
          <span>Informations Pratiques</span>
        </div>
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-3">
          Foire Aux <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Retrouvez toutes les réponses sur l&apos;organisation de la Foire au {EVENT_DETAILS.location}, les modalités de souscription et les consignes de paiement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Accordéon FAQ (8 colonnes sur Desktop) */}
        <div className="lg:col-span-8 space-y-3.5">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? "bg-navy-card border-brand-light/40 shadow-xl shadow-brand-primary/10"
                    : "bg-navy-card/60 hover:bg-navy-card border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-brand-primary/20 text-brand-light font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-brand-primary/30">
                      ?
                    </span>
                    <span className="font-display font-semibold text-sm sm:text-base text-slate-100 pr-2">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-brand-primary text-white" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Contenu Dépliant */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-fade-in">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-0.5 rounded bg-white/5 text-brand-light text-[10px] font-semibold uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-slate-300">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Carte d'Accès & Assistance Directe (4 colonnes sur Desktop) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Carte Lieu & Dates */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-card via-navy-card to-navy-dark border border-brand-light/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/10 blur-2xl rounded-full pointer-events-none" />

            <div className="flex items-center gap-2 text-brand-light font-semibold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Rendez-vous Officiel</span>
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-4">
              Lieu de l&apos;Événement
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-primary/20 text-brand-light flex items-center justify-center shrink-0 border border-brand-primary/30 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Localisation</div>
                  <div className="text-sm font-bold text-white">{EVENT_DETAILS.location}</div>
                  <div className="text-xs text-slate-400">{EVENT_DETAILS.city}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold-main/20 text-gold-light flex items-center justify-center shrink-0 border border-gold-main/30 mt-0.5">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Dates Réception</div>
                  <div className="text-sm font-bold text-white">{EVENT_DETAILS.dateLabel}</div>
                  <div className="text-xs text-slate-400">08h00 — 18h00 chaque jour</div>
                </div>
              </div>
            </div>

            {onOpenModal && (
              <button
                onClick={() => onOpenModal("exposant")}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-light text-white font-bold text-xs sm:text-sm hover:brightness-110 transition-all duration-200 shadow-lg shadow-brand-primary/25"
              >
                Réserver un Stand Maintenant
              </button>
            )}
          </div>

          {/* Carte Contact WhatsApp Direct */}
          <div className="p-6 rounded-2xl bg-navy-card/80 border border-white/10 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-white text-base mb-1">
              Une question spécifique ?
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Notre équipe d&apos;organisation est à votre disposition 7j/7 sur WhatsApp pour vous accompagner.
            </p>
            <a
              href={`https://wa.me/${EVENT_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${EVENT_DETAILS.whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-md shadow-emerald-900/30"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contacter sur WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
