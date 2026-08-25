"use server";

import {
  validateExposantForm,
  validateConcoursForm,
  ExposantFormData,
  ConcoursFormData,
} from "@/lib/validation";
import { STANDS_DATA, CONCOURS_DATA, EVENT_DETAILS } from "@/lib/constants";

export interface ServerActionResponse {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
  data?: any;
}

/**
 * Server Action pour l'inscription Exposant (Stands)
 * Invariants I1 & I2 : Exécution 100% côté serveur
 */
export async function submitExposantRegistration(
  formData: Record<string, any>
): Promise<ServerActionResponse> {
  try {
    const { isValid, errors, sanitizedData } = validateExposantForm(formData);

    if (!isValid) {
      return {
        success: false,
        message: "Veuillez corriger les erreurs dans le formulaire exposant.",
        errors,
      };
    }

    const selectedStand = STANDS_DATA.find((s) => s.id === sanitizedData.standPackageId) || STANDS_DATA[1];

    // Traitement de l'envoi d'email serveur (Nodemailer / Resend ou notification console)
    await sendNotificationEmail({
      type: "Exposant",
      details: {
        ...sanitizedData,
        standName: selectedStand.name,
        standPrice: selectedStand.priceFormatted,
      },
    });

    return {
      success: true,
      message: "Votre pré-inscription de stand a été enregistrée avec succès !",
      data: {
        ...sanitizedData,
        standName: selectedStand.name,
        standPrice: selectedStand.priceFormatted,
      },
    };
  } catch (error) {
    console.error("[Server Action Error - submitExposantRegistration]:", error);
    return {
      success: false,
      message: "Une erreur serveur est survenue lors de l'enregistrement. Veuillez réanalyser vos saisies.",
    };
  }
}

/**
 * Server Action pour l'inscription Concours Métiers
 * Invariants I1 & I2 : Exécution 100% côté serveur
 */
export async function submitConcoursRegistration(
  formData: Record<string, any>
): Promise<ServerActionResponse> {
  try {
    const { isValid, errors, sanitizedData } = validateConcoursForm(formData);

    if (!isValid) {
      return {
        success: false,
        message: "Veuillez corriger les erreurs dans le formulaire concours.",
        errors,
      };
    }

    const selectedConcours = CONCOURS_DATA.find((c) => c.id === sanitizedData.concoursId) || CONCOURS_DATA[0];

    // Traitement de l'envoi d'email serveur
    await sendNotificationEmail({
      type: "Concours",
      details: {
        ...sanitizedData,
        concoursTitle: selectedConcours.title,
        concoursPrice: selectedConcours.priceFormatted,
      },
    });

    return {
      success: true,
      message: "Votre candidature au concours a été enregistrée avec succès !",
      data: {
        ...sanitizedData,
        concoursTitle: selectedConcours.title,
        concoursPrice: selectedConcours.priceFormatted,
      },
    };
  } catch (error) {
    console.error("[Server Action Error - submitConcoursRegistration]:", error);
    return {
      success: false,
      message: "Une erreur serveur est survenue lors de l'enregistrement. Veuillez réanalyser vos saisies.",
    };
  }
}

/**
 * Envoi sécurisé d'email côté serveur (Invariant I1 - aucun secret exposé côté client)
 */
async function sendNotificationEmail(payload: {
  type: "Exposant" | "Concours";
  details: Record<string, any>;
}) {
  const notificationRecipient = process.env.NOTIFICATION_EMAIL || "ligue.entrepreneurs.garoua@gmail.com";

  console.log(`\n======================================================`);
  console.log(`[NOUVELLE INSCRIPTION - ${payload.type.toUpperCase()}] ${EVENT_DETAILS.title}`);
  console.log(`Destinataire notification : ${notificationRecipient}`);
  console.log(`Détails de la soumission :`, JSON.stringify(payload.details, null, 2));
  console.log(`======================================================\n`);

  // Si des clés SMTP ou Resend sont configurées dans .env.local, l'envoi effectif est déclenché
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Foire Garoua <noreply@foire-entrepreneurs-garoua.cm>",
          to: [notificationRecipient],
          subject: `[Foire 2026] Nouvelle inscription ${payload.type} - ${payload.details.fullName}`,
          html: `
            <h2>Nouvelle inscription ${payload.type} - Foire Garoua 2026</h2>
            <p><strong>Nom complet :</strong> ${payload.details.fullName}</p>
            <p><strong>Téléphone :</strong> ${payload.details.phone}</p>
            <p><strong>Entreprise / Marque :</strong> ${payload.details.companyName}</p>
            ${
              payload.type === "Exposant"
                ? `
                <p><strong>Stand choisi :</strong> ${payload.details.standName} (${payload.details.standPrice} FCFA)</p>
                <p><strong>Secteur d'activité :</strong> ${payload.details.activity}</p>
                <p><strong>Description :</strong> ${payload.details.description}</p>
              `
                : `
                <p><strong>Concours choisi :</strong> ${payload.details.concoursTitle} (${payload.details.concoursPrice} FCFA)</p>
                <p><strong>Années d'expérience :</strong> ${payload.details.yearsExperience}</p>
              `
            }
          `,
        }),
      });
      const data = await response.json();
      console.log("[Resend Email Result]:", data);
    } catch (resendErr) {
      console.error("[Resend API Error]:", resendErr);
    }
  }
}
