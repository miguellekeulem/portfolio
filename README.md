# Portfolio - Développeur Web & Mobile / Data & BI Analyst

Portfolio professionnel moderne avec double thématique Dev et Data.

## 🚀 Fonctionnalités

- Design futuriste avec Glassmorphism et animations fluides.
- Double profil mis en avant via une animation typewriter.
- Section compétences avec bascule visuelle entre Dev et Data.
- Projets filtrés par catégorie (Développement / Data).
- Mode clair / sombre avec détection automatique.
- Canvas de particules interactif en arrière-plan.
- Formulaire de contact prêt à être connecté (EmailJS).

## 🛠️ Technologies

- HTML5, CSS3, JavaScript (Vanilla)
- Tailwind CSS (via CDN)
- Font Awesome pour les icônes

## 📁 Structure
portfolio/
├── index.html
├── tailwind.config.js
├── assets/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ ├── main.js
│ │ ├── theme.js
│ │ ├── typewriter.js
│ │ └── projects.js
│ └── images/
│ └── profile.jpg
└── README.md


## 🔧 Personnalisation

1. Remplace `assets/images/profile.jpg` par ta photo.
2. Modifie les informations personnelles dans `index.html` (nom, email, réseaux).
3. Ajoute tes vrais projets dans `assets/js/projects.js`.
4. Pour le formulaire, configure [EmailJS](https://www.emailjs.com/) ou [Formspree](https://formspree.io/).

## 🌐 Déploiement

Le site est statique, tu peux le déployer sur :
- GitHub Pages
- Netlify
- Vercel

## 📝 Licence

Libre d'utilisation pour ton portfolio personnel.

Notes finales
Photo de profil : Place ton image dans assets/images/profile.jpg.

Formulaire : Actuellement simulé. Pour le rendre fonctionnel, il suffit d'intégrer EmailJS (quelques lignes de code) ou d'utiliser un service comme Formspree en modifiant l'attribut action du formulaire.

Responsive : Le design est entièrement responsive grâce à Tailwind.

Améliorations possibles : Ajouter un vrai canvas avec connexions plus complexes, intégrer une carte interactive, etc.