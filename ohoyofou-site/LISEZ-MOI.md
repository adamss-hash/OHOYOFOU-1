# Site web — ONG Ôhôyôfou

## Structure du projet
```
index.html          Accueil
a-propos.html        Qui sommes-nous
objectifs.html       Nos objectifs
projets.html         Nos projets
actions.html         Nos actions
actualites.html      Actualités
galerie.html         Galerie
don.html             Faire un don
contact.html         Contact
css/style.css        Feuille de style unique (couleurs, typographie, mise en page)
js/main.js           Menu mobile, animations légères, formulaires
images/logo.png      Logo officiel (fond rendu transparent)
```

Pour consulter le site : ouvrez simplement `index.html` dans un navigateur,
ou déposez l'ensemble du dossier sur votre hébergement web.

## Éléments à personnaliser avant mise en ligne

1. **Photos réelles** — la page Galerie et la page d'accueil contiennent des
   emplacements identifiés « Photo à venir ». Remplacez les blocs `.g-item`
   et `.about-visual` par vos propres photos (`<img src="images/...">`).
2. **Chiffres clés** — les statistiques (+500 enfants, +200 femmes, etc.)
   sont des exemples réalistes à remplacer par vos données réelles dans
   `index.html` et `objectifs.html`.
3. **Équipe** — les noms de la page « Qui sommes-nous » sont à compléter.
4. **Numéro d'enregistrement** — affiché dans le pied de page et sur la
   page Don, à compléter dès qu'il sera disponible.
5. **Formulaires** (`don.html`, `contact.html`) — actuellement en mode
   démonstration (ils affichent un message de confirmation sans envoyer de
   données). Il faudra les relier à un service d'envoi d'e-mail ou à un
   prestataire de paiement (Mobile Money, carte bancaire).
6. **Carte** — un emplacement est prévu en bas de la page Contact pour une
   carte Google Maps intégrée.
7. **Réseaux sociaux** — les icônes du pied de page et de la page Contact
   pointent vers `#` ; ajoutez vos liens réels.

## Identité visuelle
- Vert principal : `#1B6B3A` (issu du logo)
- Orange principal : `#F0791D` (issu du logo)
- Titres : police Fraunces (serif) — Texte courant : police Work Sans
- Toutes les couleurs sont centralisées en haut de `css/style.css`
  (variables `--green-700`, `--orange-500`, etc.) pour un ajustement facile.

## Compatibilité
Le site est responsive (mobile, tablette, ordinateur), utilise des polices
Google Fonts (nécessite une connexion internet pour les charger — un repli
sur les polices système est prévu automatiquement) et respecte les bonnes
pratiques d'accessibilité (focus clavier visible, contrastes, réduction des
animations si l'utilisateur le demande).
