import React from "react";
import { Sparkles, MapPin } from "lucide-react";
import { EVENT_DETAILS } from "@/lib/constants";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-navy-card via-brand-blue/20 to-navy-card border-b border-white/10 text-xs sm:text-sm py-2 px-4 text-slate-300 relative z-50">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-medium overflow-hidden whitespace-nowrap text-ellipsis">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-light/10 text-brand-light border border-brand-light/30 text-[11px] font-semibold tracking-wide uppercase">
            <Sparkles className="w-3 h-3 animate-pulse" />
            {EVENT_DETAILS.edition}
          </span>
          <span className="hidden md:inline font-semibold text-white">
            {EVENT_DETAILS.title}
          </span>
          <span className="text-slate-400 font-normal flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-brand-light shrink-0" />
            {EVENT_DETAILS.location}
          </span>
        </div>

        <a
          href="#stands"
          className="hidden sm:flex items-center gap-1 text-xs font-semibold text-brand-light hover:text-white transition-colors duration-150 shrink-0 group"
        >
          <span>Réserver un stand</span>
          <span className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
        </a>
      </div>
    </div>
  );
};
