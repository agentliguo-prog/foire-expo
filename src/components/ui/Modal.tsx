"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: "md" | "lg" | "xl";
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "lg",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    md: "sm:max-w-md",
    lg: "sm:max-w-xl",
    xl: "sm:max-w-2xl",
  }[maxWidth];

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop sombre flouté */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-navy-dark/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
      />

      {/* Boîte Modale Principale centrée et responsive */}
      <div
        className={`relative w-full max-w-[calc(100vw-1.5rem)] ${maxWidthClasses} bg-navy-card border border-white/15 rounded-2xl sm:rounded-3xl shadow-card-glass p-4 sm:p-7 z-10 my-auto animate-in fade-in zoom-in-95 duration-200 overflow-hidden box-border`}
      >
        {/* En-tête de modale */}
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/10">
          {title && (
            <h3 className="font-display font-bold text-base sm:text-2xl text-white truncate pr-2">
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            aria-label="Fermer la fenêtre modale"
            className="p-1.5 sm:p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-light shrink-0 ml-auto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenu principal */}
        <div className="relative w-full max-w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};
