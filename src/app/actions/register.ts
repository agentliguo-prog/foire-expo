"use server";

import {
  validateExposantForm,
  validateConcoursForm,
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

    const resultData = {
      ...sanitizedData,
      standName: selectedStand.name,
      standPrice: selectedStand.priceFormatted,
    };

    // Traitement de l'envoi d'email serveur
    await sendNotificationEmail({
      type: "Exposant",
      details: resultData,
    });

    return {
      success: true,
      message: "Votre pré-inscription de stand a été enregistrée avec succès !",
      data: resultData,
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

    const resultData = {
      ...sanitizedData,
      concoursTitle: selectedConcours.title,
      concoursPrice: selectedConcours.priceFormatted,
    };

    // Traitement de l'envoi d'email serveur
    await sendNotificationEmail({
      type: "Concours",
      details: resultData,
    });

    return {
      success: true,
      message: "Votre candidature au concours a été enregistrée avec succès !",
      data: resultData,
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
  const sanitizedPhone = (payload.details.phone || "").replace(/[^0-9]/g, "");

  console.log(`\n======================================================`);
  console.log(`[NOUVELLE INSCRIPTION - ${payload.type.toUpperCase()}] ${EVENT_DETAILS.title}`);
  console.log(`Destinataire notification : ${notificationRecipient}`);
  console.log(`Détails de la soumission :`, JSON.stringify(payload.details, null, 2));
  console.log(`======================================================\n`);

  const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b1325; color: #ffffff; margin: 0; padding: 20px; }
          .card { max-width: 600px; margin: 0 auto; background-color: #131e36; border: 1px solid rgba(255,255,255,0.15); border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); }
          .badge { display: inline-block; padding: 6px 14px; border-radius: 20px; background-color: #0066FF; color: #ffffff; font-size: 12px; font-weight: bold; text-transform: uppercase; }
          .title { color: #ffffff; font-size: 20px; font-weight: 800; margin-top: 12px; margin-bottom: 4px; }
          .subtitle { color: #00D2FF; font-size: 13px; margin: 0; }
          .content-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          .content-table td { padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 14px; }
          .label { color: #94A3B8; font-weight: 600; width: 40%; }
          .value { color: #ffffff; font-weight: 700; width: 60%; }
          .btn-wa { display: inline-block; margin-top: 24px; padding: 12px 24px; background-color: #10b981; color: #ffffff; font-weight: bold; text-decoration: none; border-radius: 12px; text-align: center; }
          .footer { margin-top: 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <span class="badge">Nouvelle Inscription ${payload.type}</span>
            <h1 class="title">${EVENT_DETAILS.title}</h1>
            <p class="subtitle">${EVENT_DETAILS.organizer} — ${EVENT_DETAILS.location}</p>
          </div>
          
          <table class="content-table">
            <tr>
              <td class="label">Nom Complet :</td>
              <td class="value">${payload.details.fullName}</td>
            </tr>
            <tr>
              <td class="label">Téléphone :</td>
              <td class="value">${payload.details.phone}</td>
            </tr>
            <tr>
              <td class="label">Entreprise / Atelier :</td>
              <td class="value">${payload.details.companyName}</td>
            </tr>
            ${
              payload.type === "Exposant"
                ? `
                <tr>
                  <td class="label">Stand Sélectionné :</td>
                  <td class="value" style="color: #00D2FF;">${payload.details.standName} (${payload.details.standPrice} FCFA)</td>
                </tr>
                <tr>
                  <td class="label">Secteur / Activité :</td>
                  <td class="value">${payload.details.activity}</td>
                </tr>
                <tr>
                  <td class="label">Description :</td>
                  <td class="value">${payload.details.description}</td>
                </tr>
              `
                : `
                <tr>
                  <td class="label">Concours Sélectionné :</td>
                  <td class="value" style="color: #FFB800;">${payload.details.concoursTitle} (${payload.details.concoursPrice} FCFA)</td>
                </tr>
                <tr>
                  <td class="label">Expérience :</td>
                  <td class="value">${payload.details.yearsExperience}</td>
                </tr>
              `
            }
          </table>

          ${
            sanitizedPhone
              ? `<div style="text-align: center;">
                  <a href="https://wa.me/${sanitizedPhone}" class="btn-wa">Contacter le souscripteur sur WhatsApp</a>
                </div>`
              : ""
          }

          <div class="footer">
            <p>Notification automatique transmise par la plateforme web de la ${EVENT_DETAILS.organizer}.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // 1. Envoi via Resend API si disponible
  if (process.env.RESEND_API_KEY) {
    try {
      const resendSender = process.env.RESEND_SENDER || "Foire Garoua <onboarding@resend.dev>";
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: resendSender,
          to: [notificationRecipient],
          subject: `[Foire Garoua 2026] Nouvelle Inscription ${payload.type} : ${payload.details.fullName} (${payload.details.companyName})`,
          html: htmlBody,
        }),
      });

      const data = await response.json();
      console.log("[Resend API Email Response]:", data);
    } catch (resendErr) {
      console.error("[Resend API Error]:", resendErr);
    }
  }

  // 2. Envoi via Webhook générique / Formspree / Webhook Netlify (Optionnel)
  if (process.env.WEBHOOK_EMAIL_URL) {
    try {
      await fetch(process.env.WEBHOOK_EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipient: notificationRecipient,
          subject: `[Foire Garoua 2026] Inscription ${payload.type} - ${payload.details.fullName}`,
          type: payload.type,
          data: payload.details,
          html: htmlBody,
        }),
      });
      console.log("[Webhook Email Notification Sent]");
    } catch (wbErr) {
      console.error("[Webhook Email Error]:", wbErr);
    }
  }
}
