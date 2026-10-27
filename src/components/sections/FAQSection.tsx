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
      className="w-full bg-[#f8fafc] py-16 sm:py-24 border-b border-slate-200 relative z-10"
    >
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        {/* En-tête de Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Informations Pratiques</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-950 tracking-tight mb-3">
            Foire Aux{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
                      ? "bg-white border-2 border-blue-600 shadow-lg"
                      : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-blue-200">
                        ?
                      </span>
                      <span className="font-display font-bold text-sm sm:text-base text-slate-900 pr-2">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Contenu Dépliant */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-fade-in">
                      <div className="mb-2">
                        <span className="inline-block px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-slate-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Carte d'Accès & Assistance Directe (4 colonnes sur Desktop) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Carte Lieu & Dates */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 blur-2xl rounded-full pointer-events-none" />

              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Rendez-vous Officiel</span>
              </div>

              <h3 className="font-display font-black text-xl text-slate-950 mb-4">
                Lieu de l&apos;Événement
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Localisation</div>
                    <div className="text-sm font-black text-slate-950">{EVENT_DETAILS.location}</div>
                    <div className="text-xs text-slate-500">{EVENT_DETAILS.city}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200 mt-0.5">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Dates Réception</div>
                    <div className="text-sm font-black text-slate-950">{EVENT_DETAILS.dateLabel}</div>
                    <div className="text-xs text-slate-500">08h00 — 18h00 chaque jour</div>
                  </div>
                </div>
              </div>

              {onOpenModal && (
                <button
                  onClick={() => onOpenModal("exposant")}
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm hover:brightness-105 transition-all duration-200 shadow-lg shadow-blue-500/25"
                >
                  Réserver un Stand Maintenant
                </button>
              )}
            </div>

            {/* Carte Contact WhatsApp Direct */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-300">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-slate-950 text-base mb-1">
                Une question spécifique ?
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                Notre équipe d&apos;organisation est à votre disposition 7j/7 sur WhatsApp pour vous accompagner.
              </p>
              <a
                href={`https://wa.me/${EVENT_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${EVENT_DETAILS.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-md shadow-emerald-900/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Contacter sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
