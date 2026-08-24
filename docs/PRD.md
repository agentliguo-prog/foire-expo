# PRD — Landing Page Foire d'Exposition des Entrepreneurs 2026

## 1. Problème

Les entrepreneurs, artisans, pâtissiers et créateurs de mode de Garoua et de la région du Nord-Cameroun manquent de visibilité directe et d'opportunités pour promouvoir leurs produits et services auprès du grand public. 

Pour l'organisation de la 2ᵉ édition de la **Foire d'Exposition des Entrepreneurs** (décembre 2026 au Parc Bois, Garoua), la **Ligue des Leaders d'Entreprise** a besoin d'une vitrine officielle pour centraliser la communication, rassurer les participants grâce au succès de l'édition 2025, et simplifier la réservation de stands ainsi que l'inscription aux concours métiers. Sans un canal web clair, captivant et simple, la collecte des réservations et la transmission des consignes de règlement Mobile Money manquent d'efficacité.

## 2. Solution

Une landing page événementielle moderne, dynamique et ultra-simple dédiée à la Foire d'Exposition des Entrepreneurs 2026. Elle permet aux visiteurs de :
* Découvrir l'événement, son lieu (**Parc Bois, Garoua**) et la date (décembre 2026) avec un compte à rebours dynamique.
* Rassurer les souscripteurs grâce à une galerie médias ("Retour en images 2025").
* Consulter et comparer les 3 formules de stand (**25 000, 35 000 et 65 000 FCFA**) ainsi que les 2 concours (**Meilleur Pâtissier** et **Meilleur Tailleur/Styliste** à 10 000 FCFA).
* S'inscrire en quelques clics via une fenêtre modale épurée.
* Obtenir immédiatement à l'écran les **consignes de règlement par Mobile Money / Orange Money** tout en déclenchant l'envoi automatique d'un email récapitulatif à la Ligue.
* Contacter directement l'organisation via un bouton WhatsApp et accéder aux comptes TikTok et Facebook officiels.

## 3. Utilisateur cible

* **Exposants / Entrepreneurs & Artisans** : TPE, PME, commerçants et créateurs locaux souhaitant louer un stand d'exposition.
* **Candidats aux Concours** : Pâtissiers et Tailleurs / Stylistes / Modélistes souhaitant concourir pour remporter le cash prize (100 000 FCFA), le trophée et l'attestation.
* **Visiteurs & Grand Public** : Habitants de Garoua et visiteurs cherchant les informations pratiques sur la Foire.
* **Équipe Organisatrice (Ligue des Leaders d'Entreprise)** : Destinataires des notifications d'inscription par email pour le suivi opérationnel.

## 4. User Stories

* **US-1** : En tant que visiteur, je me déplace sur la page pour consulter la date, le lieu (Parc Bois, Garoua) et le compte à rebours dynamique en haut de page, afin de connaître l'échéance de l'événement.
* **US-2** : En tant qu'exposant potentiel, je veux comparer les 3 formules de stand (25 000 FCFA, 35 000 FCFA, 65 000 FCFA) et leurs équipements associés (tables, chaises, badges, vidéo et affiche de pub), afin de choisir l'offre adaptée à mon activité.
* **US-3** : En tant que candidat à un concours, je veux consulter les informations des concours (Pâtissier et Tailleur/Styliste, frais de 10 000 FCFA, récompenses), afin de décider de ma participation.
* **US-4** : En tant qu'exposant, je veux cliquer sur "Réserver ce stand" pour ouvrir la modale pré-sélectionnée et saisir mes informations (Nom complet, Nom entreprise, Activité, Description, Logo, Téléphone), afin de transmettre ma demande.
* **US-5** : En tant que candidat au concours, je veux cliquer sur "S'inscrire au concours" pour ouvrir la modale dédiée et saisir mes coordonnées (Nom complet, Nom entreprise, Années d'expérience, Choix du concours, Téléphone), afin d'enregistrer ma candidature.
* **US-6** : En tant que souscripteur, je veux voir immédiatement après validation un écran de succès affichant les consignes et numéros pour le paiement par Mobile Money / Orange Money, afin d'effectuer le règlement.
* **US-7** : En tant qu'organisateur de la Ligue, je veux recevoir un email récapitulatif structuré contenant les informations du formulaire à chaque soumission, afin d'enregistrer la réservation.
* **US-8** : En tant que visiteur, je veux explorer la galerie photos et vidéos de la 1ère édition (2025), afin d'évaluer la qualité et l'affluence de la Foire.
* **US-9** : En tant que visiteur ayant une question, je veux pouvoir cliquer sur un bouton WhatsApp direct ou accéder aux comptes TikTok et Facebook de la Ligue, afin d'échanger avec l'organisation.

## 5. Critères de succès

* **Ergonomie & Rapidité d'accès** : Accès au formulaire d'inscription en 1 seul clic depuis n'importe quelle formule.
* **Affichage des consignes de paiement** : Validation et affichage instantané (moins de 3 secondes) du message de confirmation avec les numéros Mobile Money.
* **Livrabilité des notifications** : 100% des soumissions valides déclenchent l'envoi d'un email à l'équipe organisatrice.
* **Responsivité Mobile** : Rendu parfait et sans bug sur smartphones et tablettes.
* **Accessibilité des CTA** : Bouton d'action toujours accessible via le menu Header fixe et le bouton flottant WhatsApp.

## 6. Hors périmètre

* **Passerelle de paiement en ligne automatisée (API carte bancaire ou guichet automatique)** : Le règlement se fait par dépôt manuel Mobile Money / Orange Money selon les consignes affichées.
* **Espace membre ou système d'authentification** : Pas de compte utilisateur à créer ni de dashboard exposant.
* **Gestionnaire de contenu (CMS)** : Le site est statique, optimisé et maintenu directement dans le code source.
* **Vente de billetterie en ligne pour les visiteurs** : Pas de tickets visiteurs gérés sur la plateforme.

## 7. Décisions d'implémentation

* **Architecture visuelle** : Single Page Application (Landing Page unique) avec défilement fluide et modale popup dynamique pour les formulaires.
* **Navigation & CTA** :
  * Top bar avec compte à rebours discret.
  * Header fixe avec le logo officiel de la Ligue des Leaders d'Entreprise et bouton CTA principal.
  * Bouton flottant WhatsApp ancré en bas à droite de l'écran.
* **Modale d'inscription & Formulaires** :
  * **Formulaire Exposant** : Nom complet (requis), Entreprise (requis), Activité (requis), Description (requis), Téléphone (requis), Logo (optionnel).
  * **Formulaire Concours** : Nom complet (requis), Entreprise (requis), Années d'expérience (requis), Choix du concours (requis), Téléphone (requis).
* **Feedback Utilisateur** : Écran de confirmation dans la modale après envoi : *"Inscription enregistrée avec succès ! Veuillez effectuer votre dépôt Mobile Money / Orange Money au numéro [Numéro Ligue] en indiquant votre nom en référence."*
* **Design & Couleurs** : Palette moderne basée sur le bleu élégant du logo de la Ligue des Leaders d'Entreprise, rehaussée de nuances lumineuses, avec une typographie lisible et aérée.

## 8. Notes complémentaires

* **Données à fournir avant livraison** : Numéro(s) de téléphone pour la réception des dépositions Mobile Money / Orange Money et adresse email de destination.
* **Optimisation des médias** : Compression et optimisation web des 50+ photos/vidéos de l'édition 2025.
