/**
 * Utilitaires de validation et d'assainissement de sécurité (Invariants I3 & I4 - GEMINI.md)
 */

export function sanitizeInput(input: string): string {
  if (!input) return "";
  return input
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export function validateCameroonPhone(phone: string): boolean {
  if (!phone) return false;
  // Format accepté : +237 6XXXXXXXX, 237 6XXXXXXXX, 6XXXXXXXX, 2XXXXXXXX
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  const phoneRegex = /^(?:\+?237)?([26]\d{8})$/;
  return phoneRegex.test(cleaned);
}

export interface ExposantFormData {
  fullName: string;
  companyName: string;
  activity: string;
  description: string;
  phone: string;
  standPackageId: string;
}

export interface ConcoursFormData {
  fullName: string;
  companyName: string;
  yearsExperience: string;
  concoursId: string;
  phone: string;
}

export interface ValidationErrors {
  [key: string]: string;
}

export function validateExposantForm(data: Partial<ExposantFormData>): {
  isValid: boolean;
  errors: ValidationErrors;
  sanitizedData: ExposantFormData;
} {
  const errors: ValidationErrors = {};

  const fullName = sanitizeInput(data.fullName || "");
  const companyName = sanitizeInput(data.companyName || "");
  const activity = sanitizeInput(data.activity || "");
  const description = sanitizeInput(data.description || "");
  const phone = (data.phone || "").trim();
  const standPackageId = sanitizeInput(data.standPackageId || "stand-35k");

  if (!fullName || fullName.length < 2) {
    errors.fullName = "Veuillez entrer votre nom complet (au moins 2 caractères).";
  }

  if (!companyName || companyName.length < 2) {
    errors.companyName = "Veuillez préciser le nom de votre entreprise ou marque.";
  }

  if (!activity || activity.length < 2) {
    errors.activity = "Veuillez indiquer votre secteur d'activité.";
  }

  if (!description || description.length < 5) {
    errors.description = "Veuillez écrire une courte description de vos produits (au moins 5 caractères).";
  }

  if (!phone) {
    errors.phone = "Le numéro de téléphone est obligatoire.";
  } else if (!validateCameroonPhone(phone)) {
    errors.phone = "Format invalide. Exemple : 699000000 ou +237699000000.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData: {
      fullName,
      companyName,
      activity,
      description,
      phone,
      standPackageId,
    },
  };
}

export function validateConcoursForm(data: Partial<ConcoursFormData>): {
  isValid: boolean;
  errors: ValidationErrors;
  sanitizedData: ConcoursFormData;
} {
  const errors: ValidationErrors = {};

  const fullName = sanitizeInput(data.fullName || "");
  const companyName = sanitizeInput(data.companyName || "");
  const yearsExperience = sanitizeInput(data.yearsExperience || "");
  const concoursId = sanitizeInput(data.concoursId || "concours-patissier");
  const phone = (data.phone || "").trim();

  if (!fullName || fullName.length < 2) {
    errors.fullName = "Veuillez entrer votre nom complet (au moins 2 caractères).";
  }

  if (!companyName || companyName.length < 2) {
    errors.companyName = "Veuillez indiquer le nom de votre entreprise ou atelier.";
  }

  if (!yearsExperience) {
    errors.yearsExperience = "Veuillez indiquer vos années d'expérience.";
  }

  if (!phone) {
    errors.phone = "Le numéro de téléphone est obligatoire.";
  } else if (!validateCameroonPhone(phone)) {
    errors.phone = "Format invalide. Exemple : 699000000 ou +237699000000.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData: {
      fullName,
      companyName,
      yearsExperience,
      concoursId,
      phone,
    },
  };
}
