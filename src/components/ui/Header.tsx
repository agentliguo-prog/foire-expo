"use client";

import React, { useState } from "react";
import { NAV_LINKS, EVENT_DETAILS } from "@/lib/constants";
import { Building2, Menu, X, ArrowRight } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full glass-nav transition-all duration-200">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo officiel Ligue */}
        <a href="#accueil" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-light/50 rounded-xl p-1">
          <div className="relative w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-blue-glow group-hover:scale-105 transition-transform duration-200 overflow-hidden border border-white/20">
            <img
              src="/logo-ligue.jpg"
              alt="Logo Ligue des Leaders d'Entreprise"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-brand-light transition-colors leading-tight">
              LIGUE DES LEADERS
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-brand-light uppercase">
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
        <div className="flex items-center gap-3">
          <a
            href="#stands"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-blue-gradient shadow-blue-glow hover-lift focus:outline-none focus:ring-2 focus:ring-brand-light"
          >
            <span>Réserver un stand</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-navy-card/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-slate-200 hover:text-brand-light hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="#stands"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-center text-sm font-semibold text-white bg-blue-gradient shadow-blue-glow"
            >
              <span>Réserver un stand</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
