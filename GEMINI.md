# GEMINI.md — v0 (phase de cadrage)

> **État du projet : Jour 0.** Les documents fondateurs n'existent pas encore.
> Ce fichier est une constitution **provisoire et procédurale**. Il sera remplacé
> par une v1 complète (avec la stack) dès que PRD, DESIGN et PLAN seront validés.

## Nature du projet

Application SaaS (utilisateurs authentifiés, données persistantes, espaces cloisonnés).
Développement assisté, en français, piloté par documents.

## Documents de référence

Toute décision durable vit dans un fichier, jamais uniquement dans la conversation.

| Fichier | Contenu | Producteur |
|---|---|---|
| `docs/PRD.md` | le quoi (problème, users, stories, tenancy, rôles, données, facturation) | `/cadre` |
| `docs/DESIGN.md` | la vérité visuelle (tokens, densité, app shell, états) | `/design` |
| `docs/PLAN.md` | les phases d'implémentation (tranches verticales) | `/planifie` |
| `docs/SECURITY.md` | invariants + contrôles par type de surface | manuel + `audit-securite-saas` |
| `docs/ADR/` | une décision architecturale datée par fichier | manuel |
| `docs/audits/` | rapports d'audit de sécurité | `audit-securite-saas` |

## Ordre de travail (Jour 0)

1. `/interroge` → brief
2. `/cadre` → `docs/PRD.md` — **branche SaaS obligatoire** : tenancy, matrice des rôles, cycle de vie de la donnée, plans et limites
3. `/design` → `docs/DESIGN.md` + `docs/design-preview.html` — **mode SaaS obligatoire**
4. `/planifie` → `docs/PLAN.md`
5. Choix de la stack, puis **régénération de ce fichier en v1**

Ces quatre étapes se font dans l'ordre. Chaque skill lit les documents produits en amont.

## Règles absolues (v0)

**R1 — Aucun code applicatif avant `docs/PLAN.md`.** Pendant le Jour 0, on n'écrit que
des documents. Pas de `npm create`, pas de scaffolding, pas de composant « pour montrer ».

**R2 — Aucune technologie n'est décidée.** Ne propose ni framework, ni base de données,
ni librairie, ni hébergeur, et n'en écris aucun nom dans PRD, DESIGN ou PLAN. Si une
question de cadrage dépend d'un choix technique, note-la dans les Notes complémentaires
du PRD et continue.

**R3 — La phase 1 du plan est toujours le socle authentification + tenancy.** Une tranche
verticale complète : inscription, connexion, création d'une donnée, lecture de cette donnée
**filtrée par propriétaire ou par espace**. Aucune autre phase ne peut la précéder. Cette
règle prime sur toute autre considération de découpage.

**R4 — Chaque phase du plan porte ses contrôles de sécurité.** Au moment de rédiger
`docs/PLAN.md`, lis `docs/SECURITY.md` et ajoute aux critères d'acceptation de chaque
phase les contrôles correspondant aux surfaces qu'elle touche. Une phase sans surface
sensible n'en porte aucun ; ne pas en inventer pour remplir.

**R5 — Jamais de commit sur `main`.** Tout travail passe par `/branche` puis `/livre`.
Cette règle s'applique dès le Jour 0, y compris pour les documents.

**R6 — `docs/DESIGN.md` est la seule source de vérité visuelle.** Le skill `design` la
produit ; le skill `construis-ui` l'exécute et ne la contredit jamais. Aucun autre skill
ni aucune inspiration externe ne peut trancher couleurs, fonts, spacing, radius ou motion.

**R7 — Un bug s'investigue avant de se corriger.** Symptôme inattendu → `/investigue`,
ses 4 phases, dans l'ordre. Jamais de correctif improvisé.

**R8 — Pas de divergence silencieuse.** Si une découverte contredit un document, mets à
jour le document dans le même commit et consigne la décision dans `docs/ADR/`. Ne jamais
laisser le code et les documents diverger.

## Communication

- Français, vocabulaire du produit tel que je l'emploie.
- Une question à la fois pendant le cadrage, avec ta recommandation justifiée.
- Si une règle de ce fichier bloque une demande que je te fais, dis-le au lieu de contourner.

## Sortie de la v0

Ce fichier est remplacé dès que PRD + DESIGN + PLAN sont validés et la stack arrêtée.
La v1 ajoutera : la stack et ses versions, les conventions de code et d'arborescence,
les invariants de sécurité applicables à cette stack, la définition de « phase terminée »,
et la liste de ce qui exige mon accord avant action.
