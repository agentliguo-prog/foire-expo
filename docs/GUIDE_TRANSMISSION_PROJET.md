# 📋 Dossier de Transmission & Guide de Passation du Projet

**Projet** : Landing Page Officielle pour la 2ᵉ Édition de la **Foire d'Exposition des Entrepreneurs**  
**Organisateur** : Ligue des Leaders d'Entreprise (Garoua, Nord-Cameroun)  
**Date d'événement** : **18 Décembre 2026** (Parc Bois, Garoua)  
**Document créé le** : 29 Août 2026  

---

## 💡 1. Philosophie & Objectif de ce Document

Ce document a été conçu pour transmettre la **propriété intégrale, autonome et indépendante** du projet web de la Foire d'Exposition des Entrepreneurs. 

Même si le concepteur initial venait à ne plus être disponible, **ce document contient toutes les clés, architectures et procédures permettant au propriétaire ou à tout nouveau développeur/webdesigner d'administrer, maintenir et faire évoluer le projet sans dépendre de personne.**

---

## 🏛️ 2. Architecture Globale : Les 3 Piliers de Propriété

L'ensemble de l'écosystème numérique repose sur **3 comptes clés interconnectés**. Posséder l'accès à ces 3 piliers vous garantit le contrôle total à 100% sur le site, le code source, l'hébergement et la réception des inscriptions.

![Schéma d'Architecture des 3 Piliers du Projet](diagramme-architecture.svg)

| Pilier | Service | Rôle dans le Projet | Mode de Connexion |
|---|---|---|---|
| **Pilier 1 : Compte Maître** | **Google Account** (Gmail / Google Drive) | Identité centrale & propriétaire ultime de tous les services. | Email + Mot de passe principal |
| **Pilier 2 : Code Source** | **GitHub** | Stockage, sauvegarde et versionnage de tout le code source. | Connexion directe via Google (*Sign in with Google*) |
| **Pilier 3 : Hébergeur** | **Netlify** | Serveur Web, hébergement haut débit & envoi automatique d'emails. | Connexion automatique via Google / GitHub |

---

## 🔐 3. Identifiants & Procédure de Sécurité Obligatoire

> [!CAUTION]
> ### ⚠️ ACTION DE SÉCURITÉ PRIORITAIRE (À effectuer dès la réception du projet)
> Le compte Google a été créé par le développeur pour centraliser la propriété. Pour que vous soyez le seul maître à bord :
> 1. Connectez-vous au **Compte Google Maître** ci-dessous.
> 2. Allez dans **Gérer votre compte Google** > **Sécurité** > **Numéros de téléphone de récupération**.
> 3. **Supprimez le numéro de téléphone temporaire du développeur**.
> 4. **Ajoutez votre propre numéro de téléphone** + **un deuxième numéro de secours** (ex: un associé ou un membre de confiance de la Ligue).

### 🔑 Détail des Accès aux 3 Comptes :

#### 1️⃣ Compte Google Maître (Compte Central)
- **Adresse email** : `[VOTRE-EMAIL-GOOGLE-DU-PROJET@gmail.com]` *(à compléter)*
- **Mot de passe** : `[VOTRE-MOT-DE-PASSE]` *(à consigner manuellement par vos soins)*
- **Google Drive** : Ce document et tous les visuels du projet y sont sauvegardés.

#### 2️⃣ Compte GitHub (Gestion du Code Source)
- **URL du Répertoire Officiel** : [`https://github.com/agentliguo-prog/foire-expo.git`](https://github.com/agentliguo-prog/foire-expo.git)
- **Accès** : Cliquez sur **"Sign in with GitHub"** puis choisissez de vous connecter avec le **Compte Google Maître**. Aucune saisie de mot de passe séparé n'est nécessaire.

#### 3️⃣ Compte Netlify (Hébergement & Envoi de Mail)
- **Tableau de bord** : [`app.netlify.com`](https://app.netlify.com)
- **Accès** : Cliquez sur **"Log in with Google"** avec le Compte Maître.
- **Variables d'environnement configurées sur Netlify** :
  - `NOTIFICATION_EMAIL` : Votre adresse email de réception des formulaires d'inscriptions.
  - `RESEND_API_KEY` : Clé d'envoi automatique des emails récapitulatifs (Service Resend gratuit 3 000 mails/mois).

---

## 🛠️ 4. Guide de Prise en Main pour un Futur Développeur / Designer

Si vous confiez ce projet à un autre développeur ou webdesigner à l'avenir, transmettez-lui ce chapitre. Il contient les commandes exactes pour démarrer en moins de 2 minutes.

### Étape 1 : Récupérer le projet depuis GitHub
```bash
git clone https://github.com/agentliguo-prog/foire-expo.git
cd foire-expo
```

### Étape 2 : Installer les dépendances & démarrer en local
```bash
npm install
npm run dev
```
Le site sera immédiatement accessible dans le navigateur à l'adresse : `http://localhost:3000`.

### Étape 3 : Cartographie des fichiers à modifier
Toutes les données du site sont organisées de façon claire et centralisée :

- **Changer la date, les numéros Orange Money/WhatsApp et les prix** :  
  👉 Fichier [`src/lib/constants.ts`](file:///d:/DEV/PROJETS/site-ligo-foire/src/lib/constants.ts) (contient `EVENT_DETAILS`, `PAYMENT_DETAILS`, `STANDS_DATA`, `CONCOURS_DATA`, `FAQ_DATA`).

- **Changer ou ajouter des photos/vidéos de la galerie** :  
  👉 Dossier [`public/galerie/images/`](file:///d:/DEV/PROJETS/site-ligo-foire/public/galerie/images) et [`public/galerie/videos/`](file:///d:/DEV/PROJETS/site-ligo-foire/public/galerie/videos).

- **Personnaliser le format des emails d'inscriptions** :  
  👉 Fichier [`src/app/actions/register.ts`](file:///d:/DEV/PROJETS/site-ligo-foire/src/app/actions/register.ts).

- **Modifier la mise en page et les sections** :  
  👉 Dossier [`src/components/sections/`](file:///d:/DEV/PROJETS/site-ligo-foire/src/components/sections).

### Étape 4 : Déploiement automatique en 1 clic
Chaque modification enregistrée et poussée sur GitHub via `git push origin main` déclenche **automatiquement** la mise à jour du site en ligne sur Netlify en moins de 60 secondes.

---

## 📱 5. Synthèse des Fonctionnalités Livrées

- **Header Fixe & Réactif** : Navigation fluide avec CTA *"Réserver un stand"* perpétuellement accessible sur mobile.
- **Compte à rebours dynamique** : Calcul automatique du temps restant jusqu'au **18 Décembre 2026**.
- **Grille des Tarifs de Stands** : Comparatif interactif des 3 formules (25 000, 35 000 et 65 000 FCFA).
- **Grands Concours Métiers** : Présentation des concours Pâtissier et Styliste (Cash Prize 100 000 FCFA).
- **Galerie Médias 2025** : 20 photos et 4 vidéos HD avec filtre par onglets et modale Lightbox / Lecteur vidéo.
- **FAQ Accordéon** : Réponses dépliantes et carte de localisation au **Parc Bois de Garoua**.
- **Formulaires & Transaction Orange Money** : Fenêtre modale avec consignes et copie 1-clic du numéro Orange Money (`+237 6 97 19 38 57`).
- **Canaux Officiels** : Boutons directs vers WhatsApp (`+237 6 99 99 75 83`) et TikTok (`@ligue.des.leaders`).

---

## 📜 6. Invariants de Sécurité & Confidentialité

- **I1** — Aucun mot de passe ni clé API d'envoi n'est visible dans le code client.
- **I2** — Les formulaires sont assainis contre les injections XSS côté serveur avant tout traitement.
- **I3** — Les 3 comptes principaux (Google, GitHub, Netlify) vous appartiennent à 100%.

---
*Document rédigé et validé pour la Ligue des Leaders d'Entreprise — Foire d'Exposition des Entrepreneurs 2026.*
