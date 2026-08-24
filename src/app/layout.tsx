import type { Metadata } from "next";
import "./globals.css";
import { EVENT_DETAILS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${EVENT_DETAILS.title} | ${EVENT_DETAILS.organizer}`,
  description: "Réservez votre stand ou participez aux concours professionnels à Garoua (Nord-Cameroun). 2ᵉ Édition au Parc Bois en Décembre 2026.",
  keywords: [
    "Foire Garoua",
    "Ligue des Leaders d'Entreprise",
    "Exposition Garoua",
    "Concours Pâtissier Garoua",
    "Concours Styliste Garoua",
    "Stand exposition Cameroun",
    "Événement Nord Cameroun 2026",
  ],
  authors: [{ name: EVENT_DETAILS.organizer }],
  openGraph: {
    title: EVENT_DETAILS.title,
    description: "Le rendez-vous économique majeur du Nord-Cameroun au Parc Bois, Garoua.",
    url: "https://foire-entrepreneurs-garoua.cm",
    siteName: EVENT_DETAILS.title,
    locale: "fr_CM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className="bg-navy-main text-white antialiased selection:bg-brand-light selection:text-navy-dark min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
