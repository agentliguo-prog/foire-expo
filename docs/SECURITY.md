# SECURITY.md — v0 (agnostique de la stack)

> Ce document a deux usages :
> 1. **`/planifie` le lit** pour injecter les bons contrôles dans les critères d'acceptation de chaque phase.
> 2. **Le skill `audit-securite-saas` le complète** après chaque audit (invariants renforcés, faux positifs connus, dettes acceptées).
>
> Version v0 : la stack n'est pas encore choisie, donc rien ici n'est spécifique à un outil.
> Après le choix de la stack, ajouter la section « Invariants de la stack » et les faire remonter dans GEMINI.md v1.

## Les trois étages

| Étage | Où ça vit | Quand |
|---|---|---|
| **1. Invariants** | `GEMINI.md` (v1) | permanent, à chaque message |
| **2. Contrôles par phase** | critères d'acceptation de `docs/PLAN.md` | à la fin de chaque phase |
| **3. Audit complet** | skill `audit-securite-saas` → `docs/audits/` | après la phase 1, puis avant la mise en production |

L'étage 1 est préventif et gratuit. L'étage 2 attrape les régressions au fil de l'eau.
L'étage 3 est la vérification indépendante — il ne remplace jamais les deux premiers.

## Invariants (à reporter dans GEMINI.md v1)

- **I1** — Aucun secret côté client. Aucune clé privilégiée, aucun token de service, aucune variable sensible dans une variable d'environnement exposée au navigateur.
- **I2** — L'identité de l'utilisateur ne vient jamais du client. Elle est lue depuis la session côté serveur, jamais depuis un identifiant reçu dans la requête.
- **I3** — Toute mutation vérifie deux choses : session valide **et** propriété de la ressource (ou appartenance à l'espace).
- **I4** — L'isolation des données est appliquée au niveau de la base, pas seulement dans le code applicatif. Aucune table n'est créée sans sa règle d'isolation dans le même commit.
- **I5** — L'autorisation n'est jamais implémentée uniquement dans l'interface. Masquer un bouton n'est pas une protection.
- **I6** — Toute entrée est validée à la frontière (type, taille, forme) avant d'atteindre la base.
- **I7** — Les erreurs renvoyées au client sont génériques ; le détail reste dans les logs serveur.
- **I8** — Tout upload est borné en taille et restreint en type ; il n'est jamais servi depuis un emplacement public non contrôlé.

## Contrôles par type de surface

`/planifie` : pour chaque phase, identifie les surfaces qu'elle touche et recopie les contrôles correspondants dans ses critères d'acceptation. Une phase purement visuelle n'en porte aucun.

### Surface A — Authentification / sessions
- [ ] Mots de passe hachés par l'algorithme du fournisseur d'auth, jamais stockés ni loggés en clair
- [ ] Cookies de session : `HttpOnly`, `Secure`, `SameSite` explicite, expiration définie
- [ ] Limitation du nombre de tentatives de connexion
- [ ] Déconnexion effective : la session est invalidée côté serveur

### Surface B — Nouvelle table / nouveau modèle de données
- [ ] Règle d'isolation activée sur la table, écrite dans le même commit que la table
- [ ] Testée : un compte A ne lit rien du compte B (test des deux comptes)
- [ ] Aucune donnée sensible renvoyée par défaut dans les listes (sélection de colonnes explicite)

### Surface C — Nouvel endpoint / action serveur
- [ ] Session vérifiée en entrée
- [ ] Propriété ou appartenance vérifiée avant lecture comme avant écriture
- [ ] Entrées validées (type, taille, valeurs autorisées)
- [ ] Aucun identifiant de ressource pris tel quel depuis le client sans re-vérification

### Surface D — Rôles et permissions
- [ ] Comportement conforme à la matrice du PRD, vérifié côté serveur pour chaque rôle
- [ ] Cas du dernier administrateur traité
- [ ] Cas du membre retiré : perte d'accès immédiate et effective
- [ ] L'escalade de privilège par modification de la requête est impossible

### Surface E — Upload de fichiers
- [ ] Taille maximale imposée côté serveur
- [ ] Types de fichiers restreints, vérifiés autrement que par l'extension
- [ ] Accès aux fichiers soumis aux mêmes règles de propriété que les données
- [ ] Noms de fichiers assainis, pas de chemin traversable

### Surface F — Facturation / quotas
- [ ] Les limites de plan sont appliquées côté serveur, jamais seulement dans l'interface
- [ ] Le changement de plan ne peut pas être déclenché depuis le client sans vérification
- [ ] Les webhooks de paiement vérifient leur signature

### Surface G — Formulaires et affichage de contenu utilisateur
- [ ] Contenu utilisateur échappé à l'affichage ; injection HTML impossible
- [ ] Requêtes paramétrées, jamais de concaténation de chaînes

### Surface H — Mise en production
- [ ] Aucun secret dans le bundle client (vérifié sur le build final, pas sur les sources)
- [ ] Aucune route de test, de debug, de seed ou de réinitialisation accessible
- [ ] En-têtes de sécurité en place
- [ ] Variables d'environnement vérifiées au démarrage : absence d'une clé = refus de démarrer
- [ ] Dépendances de production auditées
- [ ] Historique Git propre de tout secret ayant pu y transiter

## Calendrier des audits complets

| Audit | Déclencheur | Exigence pour continuer |
|---|---|---|
| **nº1 — architecture** | juste après la phase 1 (auth + tenancy) | zéro 🔴 avant d'entamer la phase 2 |
| **nº2 — pré-production** | avant la première mise en ligne réelle | verdict PRÊT À LANCER, zéro 🔴, zéro 🟠 non planifié |

Chaque 🔴 et 🟠 issu d'un audit devient une phase `fix/` dans `docs/PLAN.md` avant d'être corrigé.
Un point classé ⚪️ NON VÉRIFIÉ n'est jamais compté comme conforme.

## Dettes acceptées

*(vide au démarrage — à remplir après chaque audit : ce qu'on a choisi de ne pas corriger, pourquoi, et à quelle échéance on y revient.)*
