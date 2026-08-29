# Plan : Landing Page Foire d'Exposition des Entrepreneurs 2026

> PRD source : `docs/PRD.md`
> DESIGN source : `docs/DESIGN.md`
> SECURITY source : `docs/SECURITY.md`

## Décisions architecturales

Décisions durables qui s'appliquent à toutes les phases :

- **Structure & Navigation** : Single Page Application (Landing Page unique) avec ancres fluides (`#stands`, `#concours`, `#galerie`, `#contact`) et modale popup dynamique.
- **Gestion des inscriptions** : Soumission asynchrone (AJAX/Fetch) sans rechargement de page vers un endpoint/action serveur d'envoi d'email.
- **Sécurité & Invariants** : Validation et assainissement stricts de toutes les entrées côté serveur, échappement XSS à l'affichage, aucun secret (clés API d'envoi) exposé côté client (Invariants I1, I6, I7 de `SECURITY.md`).

---

## Phase 1 : Structure globale, Navigation & Hero avec Compte à Rebours

**User stories** : US-1, US-9 (partiel)

### Ce qu'on livre
Le squelette complet de la landing page selon `docs/DESIGN.md` (fond Dark Navy `#0B1325`, typographies `Cabinet Grotesk`, `Outfit`, `Geist`). La Top bar d'annonce, le Header fixe avec le logo officiel de la Ligue des Leaders d'Entreprise, la section Hero avec le compte à rebours dynamique fonctionnel jusqu'en décembre 2026, et le bouton d'assistance rapide WhatsApp ancré.

### Critères d'acceptation
- [ ] Rendu visuel conforme aux tokens de `docs/DESIGN.md` (couleurs, typographies, spacing, gradients).
- [ ] Compte à rebours dynamique (Jours / Heures / Minutes / Secondes) calculé et rafraîchi en temps réel sans saut de mise en page.
- [ ] Header sticky avec navigation fluide vers les sections de la page.
- [ ] Bouton flottant WhatsApp ancré en bas à droite de l'écran.
- [ ] Responsivité et lisibilité vérifiées sur écran mobile et ordinateur.

## Bloquée par
Aucune — démarrable immédiatement

---

## Phase 2 : Tarifs des Stands & Espace Concours Métiers

**User stories** : US-2, US-3

### Ce qu'on livre
Les deux sections centrales de conversion : la grille comparative des 3 formules de stand (25 000 FCFA, 35 000 FCFA, 65 000 FCFA) incluant le détail des équipements et le badge "RECOMMANDÉ" sur la formule 35k FCFA, ainsi que la section dédiée aux concours métiers (Meilleur Pâtissier et Meilleur Tailleur/Styliste) avec la mise en avant du cash prize de 100 000 FCFA, du trophée et de l'attestation.

### Critères d'acceptation
- [ ] Cartes de formules de stand rendues selon le design system (bordures vitrées, prix lisibles en FCFA).
- [ ] Liste exacte des équipements affichée pour chaque stand (tables, chaises, badges, vidéo, affiche).
- [ ] Section concours présentant les 2 catégories avec leurs tarifs (10 000 FCFA) et récompenses.
- [ ] Tous les boutons "Réserver ce stand" et "S'inscrire au concours" contiennent les attributs de déclenchement pour la modale d'inscription.

## Bloquée par
Phase 1

---

## Phase 3 : Modale d'Inscription, Envoi d'Email & Consignes Mobile Money

**User stories** : US-4, US-5, US-6, US-7

### Ce qu'on livre
La fenêtre modale popup réutilisable s'ouvrant au clic sur n'importe quel bouton CTA, avec pré-sélection automatique de l'offre (Exposant ou Concours). Le formulaire valide les données saisies (champs requis, format téléphone), déclenche l'envoi d'un email récapitulatif à l'organisation via une action serveur, puis fait pivoter la modale vers l'écran de succès affichant les consignes et numéros pour le paiement par Mobile Money / Orange Money.

### Critères d'acceptation
- [ ] Ouverture et fermeture fluides de la modale d'inscription.
- [ ] Formulaire Exposant comportant tous les champs (Nom, Entreprise, Activité, Description, Téléphone, Logo optionnel).
- [ ] Formulaire Concours comportant tous les champs (Nom, Entreprise, Années d'expérience, Choix du concours, Téléphone).
- [ ] Action serveur d'envoi d'email : réception effective de l'email récapitulatif par la Ligue à chaque soumission.
- [ ] Écran de confirmation affichant instantanément les instructions de dépôt Mobile Money / Orange Money.
- [ ] **Contrôle de sécurité (Surface C & G)** : Entrées utilisateur validées et échappées côté serveur contre toute injection HTML/XSS ; aucune clé privée ou secret exposés dans le bundle client.

## Bloquée par
Phase 2

---

## Phase 4 : Galerie Médias 2025, FAQ & Réseaux Sociaux

**User stories** : US-8, US-9

### Ce qu'on livre
La section de preuve sociale "Retour en images 2025" (galerie responsive de photos et vidéos optimisées de la 1ère édition), la section FAQ & Informations pratiques (confirmation du lieu au Parc Bois de Garoua), les boutons de redirection vers les pages TikTok et Facebook de la Ligue des Leaders d'Entreprise, ainsi qu'un audit de sécurité et de performance pré-déploiement.

### Critères d'acceptation
- [x] Galerie photo/vidéo fluide avec lazy-loading des médias de l'édition 2025.
- [x] Section FAQ répondant aux questions courantes sur l'organisation à Garoua.
- [x] Liens vers les comptes TikTok et Facebook officiels de la Ligue opérationnels.
- [x] **Contrôle de sécurité (Surface H)** : Aucune variable d'environnement sensible manquante, build de production propre et optimisé.

## Bloquée par
Phase 3
