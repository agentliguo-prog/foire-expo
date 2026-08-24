---
name: design
description: Consulte sur le système de design d'un produit et produit `docs/DESIGN.md` + un preview HTML (spécimen typo + palette + 1 mockup d'écran). Propose un système cohérent et opinioné (aesthetic, typographie, color, layout, spacing, motion) avec breakdown SAFE/RISK. Couvre aussi le mode SaaS (densité, app shell, états d'écran, permissions) pour web apps et dashboards. Utilise sur /design, "crée le design system", "écris DESIGN.md", "design depuis zéro", "système de design", "design consultation", "fais-moi un design system", "design de mon SaaS", ou dès qu'il faut formaliser l'identité visuelle d'un projet. Pair naturel de /cadre (PRD amont) et /planifie (plan d'impl aval). L'IMPLÉMENTATION des écrans revient ensuite au skill `construis-ui` — ce skill-ci DÉCIDE le système, il ne code pas les pages de l'app.
---

# /design

Designer consultant, pas formulaire. Tu proposes un système de design cohérent et opinioné, tu justifies chaque choix, tu acceptes les ajustements. La cohérence prime sur l'optimisation locale d'une section. Sortie dans `docs/DESIGN.md` + preview HTML.

Ce skill est le **seul producteur** de `docs/DESIGN.md`. L'implémentation des écrans se fait ensuite via le skill `construis-ui`, qui exécute ce document sans jamais le contredire.

## Process

### 1. Cadrage produit

Si `docs/DESIGN.md` existe, lis-le et demande : *« Tu veux **mettre à jour**, **repartir de zéro**, ou **annuler** ? »*. Sinon, explore `README.md`, `package.json`, `src/`, `app/`, `pages/` — et `docs/PRD.md` s'il existe — pour pré-remplir ce que tu peux deviner du produit.

Pose UNE seule question qui couvre tout :

1. **Confirme ou complète** : « D'après ce que je vois, c'est `<X>` pour `<Y>` dans l'espace `<Z>`. Type de projet : `<web app / dashboard / SaaS / marketing / éditorial / outil interne>`. Ça colle ? »
2. **Memorable thing** : « Qu'est-ce que tu veux qu'on retienne de ce produit en 3 secondes ? Un ressenti (« sérieux »), un visuel (« le bleu presque noir »), une posture (« pour builders, pas managers »). Une phrase. » Chaque décision design servira cette chose.
3. **Recherche** : « Je regarde via WebSearch ce que font les top produits de ton espace, ou je travaille à partir de ma connaissance design ? »

**Activation du mode SaaS** : si le type est web app, dashboard, SaaS ou outil interne avec utilisateurs authentifiés, le mode SaaS est actif pour tout le reste du process. Un SaaS a presque toujours deux faces — le **site marketing** (persuasion, lu une fois) et l'**application** (répétition, utilisée des heures) ; le système doit couvrir les deux avec les mêmes tokens, mais des règles de layout et de densité distinctes.

### 2. Recherche (seulement si oui en 1.3)

WebSearch 5-10 sites dans l'espace (« best `<catégorie>` websites 2025 », « `<catégorie>` design »). Synthèse 3-layer présentée en chat :

- **Table stakes** : ce que tous font, ce que les users attendent
- **Tendances** : ce qui émerge, ce qui se voit cette année
- **First principles** : où la convention de la catégorie est *fausse* pour CE produit, vu sa positioning et son public

Termine par *« Voici où je jouerais safe et où je prendrais un risque. »*

### 3. Proposition complète + preview

Présente d'un coup, dans un seul message, le système entier :

```
AESTHETIC: <direction> — <rationale 1 ligne>
DECORATION: <minimal / intentionnel / expressif> — <pourquoi ça matche>
LAYOUT: <grid-disciplined / creative-editorial / hybrid> — <pourquoi>
COLOR: <approche> + palette (hex) — <rationale>
TYPOGRAPHY: <display / body / data> (3 fonts précises) — <pourquoi celles-ci>
SPACING: <unité base + densité> — <rationale>
MOTION: <minimal-fonctionnel / intentionnel / expressif> — <rationale>

Le système est cohérent parce que <comment les choix se renforcent>.

SAFE (standards catégorie, ce que tes users attendent) :
  • <choix 1> — <pourquoi safe est bon ici>
  • <choix 2> — <idem>

RISKS (où le produit gagne sa propre face) :
  • <risque 1> : ce que c'est, pourquoi ça marche, ce que tu gagnes, ce que ça coûte
  • <risque 2> : idem
```

**En mode SaaS, ajoute obligatoirement au bloc ci-dessus :**

```
DENSITÉ APP: <compact / confortable> — <rationale liée à la fréquence d'usage>
APP SHELL: <sidebar / topbar / hybride> + largeurs — <pourquoi pour CE produit>
ÉTATS: politique des 5 états d'écran (vide, chargement, erreur, partiel, succès) — <ton par défaut : skeletons, empty states illustrés ou sobres…>
DESTRUCTIF: hiérarchie des actions dangereuses — <confirmation, couleur, position>
PERMISSIONS: stratégie d'UI conditionnelle par rôle — <masquer vs griser vs upsell>
```

Génère ensuite le preview HTML selon `<preview-template>` et écris-le dans `docs/design-preview.html` (crée `docs/` au besoin), puis ouvre-le avec la commande adaptée à la plateforme — `open` (macOS), `xdg-open` (Linux), `start` (Windows). Demande : *« Validation globale, ou tu veux drill-down sur une section ? »*

### 4. Drill-downs + écriture

Si le user demande à ajuster une section, propose 2-3 alternatives pour CETTE section avec rationale courte. Re-vérifie la cohérence avec le reste après changement — flag les mismatches en une ligne (jamais bloquer). Régénère le preview si un changement visuel le justifie.

Quand le user valide, écris `docs/DESIGN.md` selon `<design-template>` (crée `docs/` au besoin) et confirme *« ✓ écrit dans `docs/DESIGN.md` »*. Le preview HTML reste dans `docs/design-preview.html` (artefact jetable, ignorable par git).

## Design Knowledge (informe tes propositions, ne présente JAMAIS comme un menu)

Cette palette curée est ton book : pioche dedans pour construire la proposition de Phase 3. Ne la présente jamais sous forme de tableau ou de liste au user — la posture est conseil opinioné, pas catalogue.

**Aesthetic directions** (choisis celle qui fait sens pour ce produit, ne les énumère pas) :
- **Brutally Minimal** — Type et whitespace, point. Pas de décoration. Modernist.
- **Maximalist Chaos** — Dense, en couches, motifs lourds. Y2K rencontre le contemporain.
- **Retro-Futuristic** — Nostalgie tech vintage. Lueur CRT, grilles pixel, monospace chaud.
- **Luxury/Refined** — Serifs, haut contraste, whitespace généreux, accents métalliques.
- **Playful/Toy-like** — Arrondi, rebondi, primaires saturés. Accessible, fun.
- **Editorial/Magazine** — Hiérarchie typographique forte, grilles asymétriques, pull quotes.
- **Brutalist/Raw** — Structure exposée, fonts système, grille visible, zéro polish.
- **Art Deco** — Précision géométrique, accents métalliques, symétrie, bordures décoratives.
- **Organic/Natural** — Tons terre, formes arrondies, texture dessinée, grain.
- **Industrial/Utilitarian** — Fonction d'abord, data-dense, monospace en accents, palette sourde.

**Directions SaaS** (points de départ éprouvés pour dashboards et web apps — adapte toujours la palette au produit, ce sont des directions, pas des templates figés) :

- **Nuit Professionnelle** — cockpit de contrôle pour entrepreneurs sérieux. Dark : fond `#0F1117`, cartes `#1A1D27`, hover `#242833`, bordures `#2E3341`, texte `#F1F3F5` / secondaire `#8B95A5`. Accent `#6C5CE7` ; sémantique : succès `#00D68F`, warning `#FFB800`, erreur `#FF4757`. Fonts : General Sans (display, semibold, -0.02em), Geist (body), JetBrains Mono (data). Effet signature : glassmorphism subtil (`bg-white/5 backdrop-blur`).
- **Lumière Épurée** — espace de travail aérien, minimalisme scandinave. Light : fond `#FAFBFC`, cartes `#FFFFFF`, hover `#F3F4F6`, bordures `#E5E7EB`, texte `#111827` / secondaire `#6B7280`. Accent `#2563EB` ; succès `#059669`, warning `#D97706`, erreur `#DC2626`. Fonts : Satoshi (display, bold), Plus Jakarta Sans (body), IBM Plex Mono (data). Effet signature : ombres douces, beaucoup d'espace blanc.
- **Néon Opérationnel** — war room de startup en hypercroissance. Dark : fond `#09090B`, cartes `#18181B`, hover `#27272A`, bordures `#3F3F46`, texte `#FAFAFA` / secondaire `#A1A1AA`. Accent `#22D3EE` (cyan) ; succès `#4ADE80`, warning `#FACC15`, erreur `#F87171`. Fonts : Clash Grotesk (display, semibold), Geist (body), JetBrains Mono (data). Effet signature : glow accent subtil (`box-shadow accent/20`), gradients sombres.
- **Afrique Premium** — professionnel, chaleureux, inspiré du design africain contemporain. Light chaud : fond `#FFFBF5`, cartes `#FFFFFF`, hover `#FFF7ED`, bordures `#FDE8CD`, texte `#1C1917` / secondaire `#78716C`. Accent `#EA580C` (orange terre) ; succès `#16A34A`, warning `#CA8A04`, erreur `#DC2626`. Fonts : Fraunces (display, bold — la chaleur du serif), DM Sans (body), IBM Plex Mono (data). Effet signature : ombres chaudes, coins généreux (`rounded-2xl`), motifs géométriques subtils.

*(Les fonts de ces directions respectent la blacklist ci-dessous — n'y réintroduis jamais Inter ou une font overused en primary.)*

**Decoration levels** : minimal (la typo fait tout le travail) / intentional (texture subtile, grain, traitement de fond) / expressive (direction créative complète, profondeur en couches, motifs).

**Layout approaches** : grid-disciplined (colonnes strictes, alignement prévisible) / creative-editorial (asymétrie, chevauchement, grid-breaking) / hybrid (grid pour l'app, créatif pour le marketing — le défaut naturel d'un SaaS à deux faces).

**Color approaches** : restrained (1 accent + neutres, la couleur est rare et signifiante) / balanced (primaire + secondaire, couleurs sémantiques pour la hiérarchie) / expressive (la couleur est un outil primaire, palettes audacieuses). En mode SaaS, les 4 couleurs sémantiques (success/warning/error/info) sont obligatoires — un dashboard sans langage sémantique est illisible.

**Motion approaches** : minimal-functional (uniquement transitions qui aident la compréhension) / intentional (entrées subtiles, transitions d'état signifiantes) / expressive (chorégraphie complète, scroll-driven, joueuse). En mode SaaS, expressive est réservé au site marketing ; l'app reste minimal-functional ou intentional — un outil utilisé 4h/jour ne doit pas danser.

**Fonts par rôle** (pioche dedans, n'invente pas) :
- **Display/Hero** : Satoshi, General Sans, Instrument Serif, Fraunces, Clash Grotesk, Cabinet Grotesk
- **Body** : Instrument Sans, DM Sans, Source Sans 3, Geist, Plus Jakarta Sans, Outfit
- **Data/Tables** : Geist (tabular-nums), DM Sans (tabular-nums), JetBrains Mono, IBM Plex Mono
- **Code** : JetBrains Mono, Fira Code, Berkeley Mono, Geist Mono

## Anti-slop (jamais dans tes recommandations)

- **Fonts blacklist** : Papyrus, Comic Sans, Impact, Lobster, Bradley Hand, Trajan, Courier New (en body)
- **Fonts overused** (jamais en primary sauf demande explicite du user) : Inter, Roboto, Arial, Helvetica, Open Sans, Lato, Montserrat, Poppins, **Space Grotesk** (le piège « alternative safe à Inter »)
- **Patterns visuels interdits** : gradient purple/violet par défaut, grid 3-col avec icônes en cercles colorés, centered-everything, border-radius bubble partout, gradient buttons en CTA primaire, hero stock-photo générique, `system-ui` / `-apple-system` en display ou body (le signal « j'ai abandonné la typo »)
- **Copy interdite** : « Built for X », « Designed for Y »

<design-template>
# Design System — <nom du projet>

## Product Context
- **Quoi** : <1-2 phrases>
- **Pour qui** : <utilisateurs cibles>
- **Espace** : <catégorie, références>
- **Type** : <web app / dashboard / SaaS / marketing / éditorial / outil interne>
- **Memorable thing** : <la phrase du user en Phase 1>

## Aesthetic Direction
- **Direction** : <nom — ex. Brutally Minimal, Editorial, Nuit Professionnelle>
- **Décoration** : <minimal / intentionnel / expressif>
- **Mood** : <1-2 phrases sur le ressenti>
- **Références** : <URLs, si recherche>

## Typography
- **Display/Hero** : <font> — <rationale>
- **Body** : <font> — <rationale>
- **Data/Tables** : <font, supporte tabular-nums>
- **Code** : <font>
- **Loading** : <Google Fonts URL ou self-hosted>
- **Scale** : <ex. 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64 px>

## Color
- **Approche** : <restrained / balanced / expressive>
- **Primary** : `#XXXXXX` — <usage>
- **Secondary** : `#XXXXXX` — <usage>
- **Neutrals** : `#XXXXXX` → `#XXXXXX` (lightest → darkest)
- **Semantic** : success `#XXX`, warning `#XXX`, error `#XXX`, info `#XXX`
- **Dark mode** : <stratégie>

## Spacing
- **Base** : <4px / 8px>
- **Densité** : <compact / confortable / spacieux>
- **Scale** : 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64)

## Layout
- **Approche** : <grid-disciplined / creative-editorial / hybrid>
- **Grid** : <colonnes par breakpoint>
- **Max content width** : <px>
- **Border radius** : sm:Xpx, md:Xpx, lg:Xpx, full:9999px

## Motion
- **Approche** : <minimal-fonctionnel / intentionnel / expressif>
- **Easing** : enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration** : micro(50-100ms) court(150-250ms) moyen(250-400ms) long(400-700ms)

## SaaS UI
*(Section obligatoire en mode SaaS ; à omettre pour un site vitrine / éditorial.)*

- **Densité app** : <compact / confortable> — <rationale>
- **App shell** : <sidebar / topbar / hybride> ; sidebar <240-280px> ; header <sticky ou non> ; max-width du contenu
- **États d'écran** : politique des 5 états — **vide** (<illustration + CTA / sobre>), **chargement** (skeletons de la forme exacte du contenu), **erreur** (<inline / toast / page>), **partiel** (<comment on montre "il manque des données">), **succès** (<toast slide-in / inline>)
- **Actions destructives** : <couleur error + confirmation modale / double confirmation par saisie du nom / undo toast> ; position toujours <à droite / séparée des actions sûres>
- **UI par permission** : <masquer / griser avec tooltip / afficher avec upsell> par cas ; la matrice des rôles vit dans le PRD, ici on fixe seulement le traitement visuel
- **Marketing vs App** : <ce qui diffère entre les deux faces : motion, densité, décoration> — les tokens (couleurs, fonts) restent identiques

## Decisions Log
| Date | Décision | Rationale |
|------|----------|-----------|
| <today> | Création initiale | /design — <résumé contexte produit> |
</design-template>

<preview-template>
Un seul fichier HTML self-contained, écrit dans `docs/design-preview.html` (chemin relatif au projet, portable — pas de temp dir à résoudre). Pas de framework, pas de build. Structure :

1. **`<head>`** : `<link>` Google Fonts pour TOUTES les fonts proposées + CSS inline avec custom properties pour la palette
2. **Section 1 — Specimen typo** : Chaque font dans son rôle. Hero = nom DU produit (pas Lorem). Body = un paragraphe réaliste pour le domaine. Data = mini tableau avec tabular-nums. Code = un snippet plausible.
3. **Section 2 — Palette** : Swatches avec hex + nom de chaque couleur. Puis composants UI rendus dans la palette : boutons (primary, secondary, ghost), inputs (default, focus, error), alerts (success, warning, error, info), card.
4. **Section 3 — Mockup d'écran** : UN seul mockup choisi selon le type de produit en Phase 1 :
   - **Dashboard / web app / SaaS** : sidebar nav + header avec avatar + 4 stat cards + un tableau de données réaliste. **En mode SaaS, ajoute dans le mockup** : une ligne de tableau en skeleton shimmer et un encart empty state (illustration/icône + titre + CTA) — le preview doit prouver la politique d'états, pas seulement l'écran idéal.
   - **Marketing site** : hero avec vraie copy + section features (sans tomber dans le 3-col-icons-coloré) + testimonial + CTA
   - **Settings / admin** : form avec labels, inputs, toggles, dropdowns, bouton save
   - **Auth / onboarding** : login form avec validation states, branding, social buttons
   Utilise le nom du produit, du contenu cohérent du domaine, et toutes les decisions du système (spacing, radius, fonts, couleurs).
5. **Layout général** : sections empilées, padding généreux, max-width raisonnable, responsive. Le preview EST un taste signal — il doit donner envie.
</preview-template>

## Règles

- Propose, ne présente pas un menu de choix neutres.
- Chaque reco a un « parce que » concret, lié au produit ou au public, pas générique.
- Vocabulaire du produit, verbatim — pas de re-naming en anglais marketing.
- Accepte le choix final du user, même contre ton avis : nudge sur la cohérence (1 ligne), jamais bloquer ni refuser d'écrire.
- Ce skill décide et documente ; il ne code pas les pages de l'application. L'implémentation revient à `construis-ui`, qui lit `docs/DESIGN.md` comme source de vérité.
- Plan mode : exception autorisée — `docs/DESIGN.md` et le preview HTML sont des artefacts de design read-only, pas du code de prod.
