"use client";

import React, { useState, useEffect } from "react";
import { GALLERY_MEDIA, GalleryItem } from "@/lib/constants";
import {
  Image as ImageIcon,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Film,
  Camera,
} from "lucide-react";

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "photos" | "videos">("all");
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);
  const [mediaIndex, setMediaIndex] = useState<number>(0);

  const filteredMedia = GALLERY_MEDIA.filter((item) => {
    if (activeFilter === "photos") return item.type === "photo";
    if (activeFilter === "videos") return item.type === "video";
    return true;
  });

  const photoCount = GALLERY_MEDIA.filter((m) => m.type === "photo").length;
  const videoCount = GALLERY_MEDIA.filter((m) => m.type === "video").length;

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredMedia.findIndex((m) => m.id === item.id);
    setMediaIndex(idx !== -1 ? idx : 0);
    setSelectedMedia(item);
  };

  const handleCloseLightbox = () => {
    setSelectedMedia(null);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (filteredMedia.length === 0) return;
    const newIdx = (mediaIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setMediaIndex(newIdx);
    setSelectedMedia(filteredMedia[newIdx]);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (filteredMedia.length === 0) return;
    const newIdx = (mediaIndex + 1) % filteredMedia.length;
    setMediaIndex(newIdx);
    setSelectedMedia(filteredMedia[newIdx]);
  };

  // Gestion des touches du clavier (Échap, Flèche Gauche, Flèche Droite)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia, mediaIndex, filteredMedia]);

  return (
    <section
      id="galerie"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-[1150px] mx-auto border-b border-white/10 relative"
    >
      {/* Halo de fond lumineux */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-light/5 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* En-tête de Section */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-light text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <ImageIcon className="w-4 h-4 text-brand-light" />
          <span>Preuve Sociale & Succès 2025</span>
        </div>
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-3">
          Retour en Images — <span className="gradient-text">1ʳᵉ Édition 2025</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Revivez l&apos;affluence, l&apos;énergie et les moments d&apos;émotion de la première édition à Garoua. Une vitrine concrète de l&apos;impact de notre Foire.
        </p>
      </div>

      {/* Filtres par Onglets */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
            activeFilter === "all"
              ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25 scale-105"
              : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Tout voir ({GALLERY_MEDIA.length})</span>
        </button>

        <button
          onClick={() => setActiveFilter("photos")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
            activeFilter === "photos"
              ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25 scale-105"
              : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
          }`}
        >
          <Camera className="w-4 h-4" />
          <span>Photos ({photoCount})</span>
        </button>

        <button
          onClick={() => setActiveFilter("videos")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
            activeFilter === "videos"
              ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25 scale-105"
              : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
          }`}
        >
          <Film className="w-4 h-4" />
          <span>Vidéos HD ({videoCount})</span>
        </button>
      </div>

      {/* Grille Média Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {filteredMedia.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(item)}
            className="group relative rounded-2xl overflow-hidden bg-navy-card border border-white/10 hover:border-brand-light/50 transition-all duration-300 cursor-pointer shadow-md hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-1"
          >
            {/* Conteneur d'Image / Miniature */}
            <div className="aspect-[4/3] w-full relative overflow-hidden bg-navy-dark">
              {item.type === "photo" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              ) : (
                <div className="w-full h-full relative">
                  {item.poster ? (
                    <img
                      src={item.poster}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-90"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover pointer-events-none brightness-90"
                    />
                  )}
                  {/* Badge Vidéo en haut */}
                  <div className="absolute top-3 left-3 bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md flex items-center gap-1 uppercase tracking-wider">
                    <Film className="w-3 h-3" />
                    <span>Vidéo HD</span>
                  </div>

                  {/* Bouton Play au centre */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand-light transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
              )}

              {/* Overlay d'effet sur Hover pour Photos */}
              {item.type === "photo" && (
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              )}
            </div>

            {/* Légende sous le média */}
            <div className="p-3.5 bg-navy-card/90">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[11px] font-medium text-brand-light truncate">
                  {item.category}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {item.type === "photo" ? "Photo" : "Vidéo"}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-brand-light transition-colors line-clamp-1">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox & Lecteur Vidéo Popup Modale */}
      {selectedMedia && (
        <div
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 bg-navy-dark/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in"
        >
          {/* Bouton de Fermeture */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
            title="Fermer (Échap)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Bouton Précédent */}
          {filteredMedia.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-brand-primary text-white flex items-center justify-center transition-all z-20 shadow-lg"
              title="Précédent (Flèche gauche)"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Bouton Suivant */}
          {filteredMedia.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-brand-primary text-white flex items-center justify-center transition-all z-20 shadow-lg"
              title="Suivant (Flèche droite)"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Contenu Lightbox */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-navy-card border border-white/15 shadow-2xl relative"
          >
            {/* Zone de Média principal */}
            <div className="w-full flex-grow max-h-[70vh] bg-black flex items-center justify-center relative overflow-hidden">
              {selectedMedia.type === "photo" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="max-w-full max-h-[70vh] object-contain select-none"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[70vh] w-full"
                />
              )}
            </div>

            {/* Description & Méta-données */}
            <div className="w-full p-4 sm:p-6 bg-navy-card border-t border-white/10 text-left">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-primary/20 text-brand-light text-xs font-semibold border border-brand-primary/30">
                  {selectedMedia.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {mediaIndex + 1} / {filteredMedia.length}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                {selectedMedia.title}
              </h3>
              {selectedMedia.description && (
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {selectedMedia.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
