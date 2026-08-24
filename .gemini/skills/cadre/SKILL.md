---
name: cadre
description: Cadrer un projet par questionnement structuré et produire ou étendre `docs/PRD.md` selon un template fixe en 8 sections (Problème, Solution, Utilisateur cible, User Stories, Critères de succès, Hors périmètre, Décisions d'implémentation, Notes complémentaires). Couvre le cadrage produit d'un SaaS (tenancy, rôles et permissions, cycle de vie de la donnée, facturation) au même titre qu'un site ou un outil. Utilise sur /cadre, "cadre ce projet", "écris le PRD", "fais-moi un PRD", "crée le PRD", "produis le PRD", "étends le PRD", ou dès qu'il faut formaliser le cadrage d'un projet dans un document versionné. Pair naturel de /interroge (amont) et /planifie (aval).
---

Tu interroges l'utilisateur pour produire ou étendre `docs/PRD.md` selon le template ci-dessous.

## Process

1. Explore le repo si nécessaire pour comprendre le contexte existant (`CLAUDE.md`, ADRs, glossaire métier, code adjacent). Réutilise le vocabulaire du projet dans le PRD et respecte les décisions architecturales déjà tranchées. Si la réponse à une question se trouve dans le repo, explore plutôt que de demander.

2. Si `docs/PRD.md` existe, lis-le. Croise avec le brief reçu et n'interroge que sur les deltas. Confronte les contradictions : *« Tu avais tranché X, le brief suggère Y, on garde lequel ? »*. Pas de PRD et pas de brief — ta première question est *« Qu'est-ce que tu veux cadrer ? »*.

3. Interroge une question à la fois, avec ta recommandation justifiée. Suis les dépendances : Problème → Utilisateur cible → Solution → Critères → Hors périmètre. User Stories et Décisions d'implémentation émergent en transverse. Avant de basculer, demande *« Quelque chose pour Notes complémentaires : risques, dépendances, hypothèses ? »*.

   **Branche SaaS — obligatoire si le produit a des utilisateurs authentifiés ET des données persistantes.** Ces quatre sujets ne s'improvisent pas plus tard : ils déterminent l'architecture et coûtent une réécriture s'ils sont tranchés après coup. Interroge-les explicitement, une question à la fois, avec ta recommandation :

   - **Modèle de tenancy** : chaque utilisateur est-il seul avec ses données, ou existe-t-il des espaces partagés (organisation, équipe, atelier, structure) auxquels plusieurs personnes appartiennent ? Une personne peut-elle appartenir à plusieurs espaces ? Formule la réponse en termes d'usage — *« qui voit quoi »* — jamais en termes de schéma de base.
   - **Rôles et permissions** : liste exhaustive des rôles, et pour chacun ce qu'il peut voir, créer, modifier, supprimer, inviter, facturer. Rends-la sous forme de matrice dans Décisions d'implémentation. Traite explicitement le cas du dernier administrateur et celui du membre retiré.
   - **Cycle de vie de la donnée** : à la suppression, la donnée disparaît-elle ou devient-elle invisible et récupérable ? Pendant combien de temps ? L'utilisateur peut-il exporter ses données, et sous quelle forme ? Que devient le contenu d'un membre qui quitte un espace ?
   - **Facturation** : quels plans, quelles limites chiffrées par plan (nombre d'espaces, de membres, d'éléments, de quotas mensuels), que se passe-t-il quand une limite est atteinte, et que se passe-t-il à l'expiration ou à l'échec de paiement — blocage, lecture seule, période de grâce ?

   Chaque réponse produit du contenu observable : les limites chiffrées et les comportements de blocage vont dans **Décisions d'implémentation**, les parcours (inviter, rejoindre, changer de rôle, exporter, supprimer, passer d'un plan à l'autre) deviennent des **User Stories** à part entière — y compris leurs états d'erreur et de refus.

   Si le produit n'est pas concerné (site vitrine, outil mono-utilisateur sans compte), saute la branche sans la mentionner.

4. Quand chaque section peut être rédigée sans trou, annonce-le en une phrase et écris le PRD complet dans le chat selon le template. Les User Stories sont synthétisées à ce moment à partir des autres réponses et présentées à valider.

5. Le user valide ou corrige section par section. Sur correction, re-poste uniquement la section touchée. Une fois tout validé, écris `docs/PRD.md` (crée `docs/` au besoin) et confirme *« ✓ écrit dans `docs/PRD.md` »*.

<prd-template>

## Problème

Ce que vit l'utilisateur : frustration, contexte, « pourquoi maintenant ». Prose en 3ème personne, pas en *je*.

## Solution

Direction produit du point de vue de l'utilisateur : ce que le produit lui permet de faire, pas comment c'est construit.

## Utilisateur cible

Profil + contexte d'usage, suffisamment précis pour imaginer une personne réelle. En mode SaaS, précise aussi les rôles distincts s'il y en a plusieurs.

## User Stories

Liste numérotée exhaustive au format *« En tant que `<acteur>`, je veux `<fonctionnalité>`, afin de `<bénéfice>` »*. Couvre interactions principales, états vides, erreurs, parcours alternatifs, cas limites. En mode SaaS, couvre aussi : inscription, invitation, changement de rôle, retrait d'un membre, atteinte d'une limite de plan, changement de plan, export et suppression des données.

## Critères de succès

Critères directement vérifiables : événement observable (clic, fichier produit, mail reçu) ou mesure objective (durée, nombre, seuil). Pas de jugement de comportement intérieur (« comprend X », « identifie Y »).

## Hors périmètre

Ce qu'on refuse explicitement. Exhaustif, c'est ce qui protège du sur-engineering.

## Décisions d'implémentation

Comportement produit visible par l'utilisateur (limites chiffrées, états vides, format d'affichage, choix d'UX, form factor, erreurs). Pas de détails techniques internes (algorithmes, formules, variables d'env, noms de libs, catégories techno). Test mental : si l'utilisateur ne peut pas observer la différence à l'usage, c'est exclu.

En mode SaaS, cette section contient en plus, formulés en comportement observable :
- **Tenancy** : qui voit quoi, appartenance simple ou multiple.
- **Matrice des permissions** : un tableau rôles × actions.
- **Cycle de vie de la donnée** : suppression (visible/récupérable, durée), export, sort du contenu d'un membre parti.
- **Plans et limites** : limites chiffrées par plan, comportement à la limite atteinte, comportement à l'expiration.

## Notes complémentaires

Catch-all : risques, dépendances externes, hypothèses, références, items futurs. Reste courte ; *« Rien à signaler. »* si rien.

</prd-template>

## Règles

- Vocabulaire = celui de l'utilisateur, verbatim.
- Pas de techno nommée, pas de trou, pas de chemin de fichier, pas de snippet de code dans le PRD. La branche SaaS ne fait pas exception : elle décrit *qui voit quoi* et *ce qui se passe quand*, jamais des tables, des rôles techniques ou un fournisseur d'authentification.
- User Stories obligatoirement numérotées : US-1, US-2 ...
