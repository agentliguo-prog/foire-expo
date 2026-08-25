import React from "react";
import { MessageCircle } from "lucide-react";
import { EVENT_DETAILS } from "@/lib/constants";

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${EVENT_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${EVENT_DETAILS.whatsappMessage}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex items-center group pointer-events-auto">
      {/* Tooltip au hover sur Desktop */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-2 rounded-xl bg-navy-card/95 border border-white/20 text-xs font-semibold text-white shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Besoin d'aide ? Écrivez-nous sur WhatsApp 💬
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter la Ligue des Leaders d'Entreprise sur WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 pulse-whatsapp focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 shrink-0"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
