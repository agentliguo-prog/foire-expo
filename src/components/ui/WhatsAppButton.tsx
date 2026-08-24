import React from "react";
import { MessageCircle } from "lucide-react";
import { EVENT_DETAILS } from "@/lib/constants";

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${EVENT_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${EVENT_DETAILS.whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip au hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-xl bg-navy-card/90 border border-white/10 text-xs font-semibold text-white shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Besoin d'aide ? Écrivez-nous sur WhatsApp 💬
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter la Ligue des Leaders d'Entreprise sur WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 pulse-whatsapp focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
