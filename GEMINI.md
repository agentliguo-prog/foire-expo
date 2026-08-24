# GEMINI.md — v1 (Foire d'Exposition des Entrepreneurs 2026)

> Document constitutionnel du projet. Remplace la v0 suite à la validation du PRD, du DESIGN, du PLAN et du choix de la stack.

## Nature du projet

Landing Page événementielle moderne, responsive et optimisée pour la conversion pour la 2ᵉ Édition de la **Foire d'Exposition des Entrepreneurs** (organisée par la Ligue des Leaders d'Entreprise à Garoua en décembre 2026).

## Stack Technique & Versions

| Composant | Technologie | Rôle / Justification |
|---|---|---|
| **Framework** | Next.js (App Router) | React, Server Actions (envoi d'email sécurisé), SSG/SSR, SEO |
| **Langage** | TypeScript | Typage strict des formulaires et configurations |
| **Styling** | Tailwind CSS | Implémentation fidèle des tokens de `docs/DESIGN.md` |
| **Icônes** | Lucide React | Icônes modernes et épurées |
| **Formulaires / Email** | Server Actions + Nodemailer/Resend | Traitement sécurisé côté serveur sans secret client |

## Arborescence & Conventions de Code

```
d:\DEV\PROJETS\site-ligo-foire\
├── docs/
│   ├── PRD.md
│   ├── DESIGN.md
│   ├── PLAN.md
│   ├── SECURITY.md
│   └── design-preview.html
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── actions/
│   │       └── register.ts      (Server Action pour envoi email)
│   ├── components/
│   │   ├── ui/                  (Boutons, Inputs, Modales...)
│   │   ├── sections/            (Hero, Stands, Concours, Galerie, FAQ...)
│   │   └── ModalRegistration.tsx
│   └── lib/                     (Utilitaires, constantes, validation)
├── public/                      (Logo Ligue, photos/vidéos 2025)
└── GEMINI.md
```

## Documents de Référence

Toute décision durable est consignée dans les documents suivants :

| Fichier | Contenu |
|---|---|
| `docs/PRD.md` | Fonctionnalités, User Stories, Critères de succès, Formulaires |
| `docs/DESIGN.md` | Charte visuelle, typographies, palette Dark Navy, tokens |
| `docs/PLAN.md` | Phases d'exécution par tranches verticales |
| `docs/SECURITY.md` | Invariants de sécurité, validation des entrées & contrôles |

## Invariants de Sécurité (Applicables à la Stack)

- **I1** — Aucun secret (clé API d'envoi d'email) côté client. Les clés vivent uniquement dans les variables d'environnement serveur.
- **I2** — Traitement des soumissions via Server Actions (`src/app/actions/`), jamais via un endpoint exposé non contrôlé.
- **I3** — Validation stricte des données du formulaire en entrée (type, longueur, téléphone) avant tout envoi d'email.
- **I4** — Échappement et assainissement XSS systématiques des textes utilisateur.
- **I5** — Aucun secret commité dans Git (présence obligatoire de `.env.local` dans `.gitignore`).

## Workflow Git & Livraisons

- **Branches** : Tout travail est réalisé sur des branches dédiées (`feat/...` ou `fix/...`) via le skill `/branche`. Jamais de commit direct sur `main`.
- **Livraison** : Chaque phase du plan se conclut par le skill `/livre` pour pousser la branche et ouvrir une PR.

## Définition d'une « Phase Terminée »

Une phase du plan est considérée comme terminée uniquement lorsque :
1. Le code correspondant à la tranche verticale a été implémenté sans régression.
2. Les critères d'acceptation de la phase définis dans `docs/PLAN.md` sont 100% satisfaits.
3. Les contrôles de sécurité associés à la phase ont été vérifiés.
4. L'UI a été testée et validée visuellement sur mobile et desktop selon `docs/DESIGN.md`.

## Ce qui exige l'accord de l'utilisateur

- Modification de la structure des formulaires ou des montants FCFA.
- Ajout d'une nouvelle dépendance npm majeure.
- Modification de `docs/PRD.md`, `docs/DESIGN.md` ou `docs/PLAN.md`.
