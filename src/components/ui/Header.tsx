"use client";

import React, { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenModal?: (type: "exposant" | "concours", optionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full glass-nav transition-all duration-200">
      <div className="max-w-[1100px] mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo officiel Ligue */}
        <a href="#accueil" className="flex items-center gap-2 sm:gap-3 group focus:outline-none rounded-xl p-0.5 overflow-hidden">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white p-0.5 sm:p-1 flex items-center justify-center shadow-blue-glow group-hover:scale-105 transition-transform duration-200 overflow-hidden border border-white/20 shrink-0">
            <img
              src="/logo-ligue.jpg"
              alt="Logo Ligue des Leaders d'Entreprise"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="font-display font-extrabold text-xs sm:text-lg tracking-tight text-white group-hover:text-brand-light transition-colors leading-tight truncate max-w-[160px] sm:max-w-none">
              LIGUE DES LEADERS
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-brand-light uppercase truncate">
              D'Entreprise • Garoua
            </span>
          </div>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-150 relative group"
            >
              {link.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-light rounded-full group-hover:w-1/2 transition-all duration-200"></span>
            </a>
          ))}
        </nav>

        {/* Bouton CTA & Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={() => onOpenModal?.("exposant", "stand-35k")}
            className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-gradient shadow-blue-glow hover-lift focus:outline-none focus:ring-2 focus:ring-brand-light transition-all shrink-0"
          >
            <span>Réserver <span className="hidden xs:inline">un stand</span></span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-navy-card/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2.5 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-brand-light hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal?.("exposant", "stand-35k");
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-center text-xs sm:text-sm font-semibold text-white bg-blue-gradient shadow-blue-glow"
            >
              <span>Réserver un stand</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
