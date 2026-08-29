"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "./ui/Modal";
import {
  STANDS_DATA,
  CONCOURS_DATA,
  PAYMENT_DETAILS,
} from "@/lib/constants";
import {
  submitExposantRegistration,
  submitConcoursRegistration,
} from "@/app/actions/register";
import {
  Store,
  Trophy,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Send,
  Building2,
  Phone,
  User,
  Briefcase,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

export interface ModalRegistrationProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "exposant" | "concours";
  initialOptionId?: string;
}

export const ModalRegistration: React.FC<ModalRegistrationProps> = ({
  isOpen,
  onClose,
  initialType = "exposant",
  initialOptionId,
}) => {
  const [activeTab, setActiveTab] = useState<"exposant" | "concours">(initialType);
  const [step, setStep] = useState<"form" | "success">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  // Form State Exposant
  const [exposantForm, setExposantForm] = useState({
    fullName: "",
    companyName: "",
    activity: "",
    description: "",
    phone: "",
    standPackageId: initialOptionId || "stand-35k",
  });

  // Form State Concours
  const [concoursForm, setConcoursForm] = useState({
    fullName: "",
    companyName: "",
    yearsExperience: "2-5 ans",
    concoursId: initialOptionId || "concours-patissier",
    phone: "",
  });

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<any>(null);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialType);
      setStep("form");
      setErrors({});
      setServerMessage(null);
      setSubmittedData(null);

      if (initialType === "exposant" && initialOptionId) {
        setExposantForm((prev) => ({ ...prev, standPackageId: initialOptionId }));
      } else if (initialType === "concours" && initialOptionId) {
        setConcoursForm((prev) => ({ ...prev, concoursId: initialOptionId }));
      }
    }
  }, [isOpen, initialType, initialOptionId]);

  const handleCopyNumber = (number: string) => {
    navigator.clipboard.writeText(number.replace(/\s/g, ""));
    setCopiedNumber(number);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  const handleSubmitExposant = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setServerMessage(null);

    const result = await submitExposantRegistration(exposantForm);

    setIsSubmitting(false);

    if (result.success) {
      setSubmittedData(result.data);
      setStep("success");
    } else {
      if (result.errors) {
        setErrors(result.errors);
      }
      setServerMessage(result.message || "Erreur lors de l'envoi.");
    }
  };

  const handleSubmitConcours = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setServerMessage(null);

    const result = await submitConcoursRegistration(concoursForm);

    setIsSubmitting(false);

    if (result.success) {
      setSubmittedData(result.data);
      setStep("success");
    } else {
      if (result.errors) {
        setErrors(result.errors);
      }
      setServerMessage(result.message || "Erreur lors de l'envoi.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={step === "form" ? "Inscription Officielle 2026" : "Demande Enregistrée !"}
      maxWidth="lg"
    >
      {step === "form" ? (
        <div className="w-full max-w-full overflow-hidden">
          {/* Onglets de Basculement Exposant vs Concours */}
          <div className="flex items-center p-1 rounded-xl bg-navy-main/90 border border-white/10 mb-4 sm:mb-6 gap-1">
            <button
              type="button"
              onClick={() => {
                setActiveTab("exposant");
                setErrors({});
                setServerMessage(null);
              }}
              className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-all duration-200 truncate ${
                activeTab === "exposant"
                  ? "bg-blue-gradient text-white shadow-blue-glow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Store className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Stand (Exposant)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("concours");
                setErrors({});
                setServerMessage(null);
              }}
              className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-all duration-200 truncate ${
                activeTab === "concours"
                  ? "bg-gold-gradient text-navy-dark shadow-gold-glow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Trophy className="w-3.5 h-3.5 shrink-0 text-navy-dark" />
              <span className="truncate">Concours Métiers</span>
            </button>
          </div>

          {/* Message global serveur en cas d'erreur */}
          {serverMessage && (
            <div className="mb-4 p-3 rounded-xl bg-semantic-error/15 border border-semantic-error/40 text-semantic-error text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{serverMessage}</span>
            </div>
          )}

          {/* FORMULAIRE EXPOSANT (STANDS) */}
          {activeTab === "exposant" && (
            <form onSubmit={handleSubmitExposant} className="space-y-3 sm:space-y-4">
              {/* Choix de la Formule de Stand */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Formule de Stand Souhaitée *
                </label>
                <select
                  value={exposantForm.standPackageId}
                  onChange={(e) =>
                    setExposantForm({ ...exposantForm, standPackageId: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-navy-main border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-light truncate"
                >
                  {STANDS_DATA.map((stand) => (
                    <option key={stand.id} value={stand.id} className="bg-navy-card text-white">
                      {stand.name} — {stand.priceFormatted} FCFA {stand.badge ? `(${stand.badge})` : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* Nom Complet */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Nom Complet du Responsable *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={exposantForm.fullName}
                    onChange={(e) =>
                      setExposantForm({ ...exposantForm, fullName: e.target.value })
                    }
                    placeholder="Ex: Oumarou Ibrahim"
                    className="w-full pl-9 pr-3 py-2.5 sm:py-3 rounded-xl bg-navy-main border border-white/15 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-light"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-semantic-error mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Entreprise & Secteur d'activité */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Nom de l'Entreprise / Marque *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={exposantForm.companyName}
                      onChange={(e) =>
                        setExposantForm({ ...exposantForm, companyName: e.target.value })
                      }
                      placeholder="Ex: Sahel Couture"
                      className="w-full pl-9 pr-3 py-2.5 sm:py-3 rounded-xl bg-navy-main border border-white/15 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-light"
                    />
                  </div>
                  {errors.companyName && (
                    <p className="text-[11px] text-semantic-error mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.companyName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Secteur / Activité *
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={exposantForm.activity}
                      onChange={(e) =>
                        setExposantForm({ ...exposantForm, activity: e.target.value })
                      }
                      placeholder="Ex: Artisanat & Textile"
                      className="w-full pl-9 pr-3 py-2.5 sm:py-3 rounded-xl bg-navy-main border border-white/15 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-light"
                    />
                  </div>
                  {errors.activity && (
                    <p className="text-[11px] text-semantic-error mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.activity}
                    </p>
                  )}
                </div>
              </div>

              {/* Numéro de téléphone */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Téléphone (WhatsApp / Mobile Money) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={exposantForm.phone}
                    onChange={(e) =>
                      setExposantForm({ ...exposantForm, phone: e.target.value })
                    }
                    placeholder="Ex: 699000000"
                    className="w-full pl-9 pr-3 py-2.5 sm:py-3 rounded-xl bg-navy-main border border-white/15 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-light font-data"
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-semantic-error mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Description des produits */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Description des produits / services *
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    rows={2}
                    value={exposantForm.description}
                    onChange={(e) =>
                      setExposantForm({ ...exposantForm, description: e.target.value })
                    }
                    placeholder="Décrivez vos articles exposés..."
                    className="w-full pl-9 pr-3 py-2.5 sm:py-3 rounded-xl bg-navy-main border border-white/15 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-light"
                  />
                </div>
                {errors.description && (
                  <p className="text-[11px] text-semantic-error mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.description}
                  </p>
                )}
              </div>

              {/* Bouton de Soumission */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm text-white bg-blue-gradient shadow-blue-glow hover-lift flex items-center justify-center gap-2 mt-4 focus:outline-none disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Enregistrement...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Valider ma Pré-Réservation</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* FORMULAIRE CONCOURS MÉTIERS */}
          {activeTab === "concours" && (
            <form onSubmit={handleSubmitConcours} className="space-y-3 sm:space-y-4">
              {/* Choix du Concours */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Sélection du Concours *
                </label>
                <select
                  value={concoursForm.concoursId}
                  onChange={(e) =>
                    setConcoursForm({ ...concoursForm, concoursId: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-navy-main border border-gold/30 text-white text-xs sm:text-sm focus:outline-none focus:border-gold truncate"
                >
                  {CONCOURS_DATA.map((c) => (
                    <option key={c.id} value={c.id} className="bg-navy-card text-white">
                      {c.title} — {c.priceFormatted} FCFA (Cash Prize 100k)
                    </option>
                  ))}
                </select>
              </div>

              {/* Nom Complet */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Nom Complet du Candidat *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={concoursForm.fullName}
                    onChange={(e) =>
                      setConcoursForm({ ...concoursForm, fullName: e.target.value })
                    }
                    placeholder="Ex: Aminatou Boubakary"
                    className="w-full pl-9 pr-3 py-2.5 sm:py-3 rounded-xl bg-navy-main border border-white/15 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-gold"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-semantic-error mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Entreprise / Atelier & Expérience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Nom de l'Atelier / Marque *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={concoursForm.companyName}
                      onChange={(e) =>
                        setConcoursForm({ ...concoursForm, companyName: e.target.value })
                      }
                      placeholder="Ex: Les Délices de Garoua"
                      className="w-full pl-9 pr-3 py-2.5 sm:py-3 rounded-xl bg-navy-main border border-white/15 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>
                  {errors.companyName && (
                    <p className="text-[11px] text-semantic-error mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.companyName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Années d'Expérience *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={concoursForm.yearsExperience}
                      onChange={(e) =>
                        setConcoursForm({ ...concoursForm, yearsExperience: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 sm:py-3 rounded-xl bg-navy-main border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-gold truncate"
                    >
                      <option value="1 an">1 an d'expérience</option>
                      <option value="2-5 ans">2 à 5 ans d'expérience</option>
                      <option value="Plus de 5 ans">Plus de 5 ans d'expérience</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Numéro de Téléphone */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Téléphone (WhatsApp / Mobile Money) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={concoursForm.phone}
                    onChange={(e) =>
                      setConcoursForm({ ...concoursForm, phone: e.target.value })
                    }
                    placeholder="Ex: 670000000"
                    className="w-full pl-9 pr-3 py-2.5 sm:py-3 rounded-xl bg-navy-main border border-white/15 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-gold font-data"
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-semantic-error mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Bouton de Soumission Concours */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm text-navy-dark bg-gold-gradient shadow-gold-glow hover-lift flex items-center justify-center gap-2 mt-4 focus:outline-none disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-navy-dark border-t-transparent rounded-full animate-spin"></span>
                    <span>Enregistrement...</span>
                  </>
                ) : (
                  <>
                    <Trophy className="w-4 h-4 text-navy-dark" />
                    <span>Valider ma Candidature</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      ) : (
        /* ÉCRAN DE SUCCÈS & CONSIGNES MOBILE MONEY */
        <div className="text-center py-2 animate-in fade-in zoom-in-95 duration-200 w-full max-w-full overflow-hidden">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-semantic-success/20 text-semantic-success flex items-center justify-center mx-auto mb-3 border border-semantic-success/30 shadow-blue-glow">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
          </div>

          <h4 className="font-display font-extrabold text-lg sm:text-2xl text-white mb-1.5 break-words">
            Inscription Enregistrée !
          </h4>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-4 leading-relaxed">
            Merci <strong className="text-white">{submittedData?.fullName}</strong>. Votre pré-réservation pour{" "}
            <strong className="text-brand-light">
              {submittedData?.standName || submittedData?.concoursTitle}
            </strong>{" "}
            a été transmise à l'organisation.
          </p>

          {/* Carte Consignes de Règlement Mobile Money */}
          <div className="p-3.5 sm:p-5 rounded-2xl bg-navy-main/90 border border-gold/30 text-left mb-4 shadow-inner space-y-3 w-full max-w-full overflow-hidden">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-gold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>Consignes Mobile Money / Orange Money</span>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
              {PAYMENT_DETAILS.instructions}
            </p>

            <div className="pt-1">
              {/* Box Orange Money */}
              <div className="p-3.5 rounded-xl bg-navy-card border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-orange-400 block uppercase tracking-wider">
                    {PAYMENT_DETAILS.orange.name} ({PAYMENT_DETAILS.orange.code})
                  </span>
                  <span className="font-data font-extrabold text-base sm:text-lg text-white tracking-tight block">
                    {PAYMENT_DETAILS.orange.number}
                  </span>
                  <span className="text-[11px] text-slate-300 block mt-0.5">
                    Titulaire : <strong className="text-white">{PAYMENT_DETAILS.orange.accountName}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyNumber(PAYMENT_DETAILS.orange.number)}
                  className="w-full sm:w-auto py-2 px-4 rounded-xl bg-orange-500/20 hover:bg-orange-500 text-orange-300 hover:text-white border border-orange-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm shrink-0"
                >
                  {copiedNumber === PAYMENT_DETAILS.orange.number ? (
                    <>
                      <Check className="w-4 h-4 text-semantic-success" />
                      <span className="text-semantic-success text-xs font-bold">Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copier le numéro</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 px-6 rounded-full font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
          >
            Fermer et Terminer
          </button>
        </div>
      )}
    </Modal>
  );
};
