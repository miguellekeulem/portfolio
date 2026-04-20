// projects.js
const projectsData = [
  {
    title: "Application Mobile E-commerce",
    category: "dev",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop",
    description: "App React Native avec panier et paiement intégré. Backend Node.js.",
    link: "#"
  },
  {
    title: "Dashboard Analytics Ventes",
    category: "data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
    description: "Tableau de bord Power BI avec analyses prédictives des ventes.",
    link: "#"
  },
  {
    title: "Portfolio Développeur",
    category: "dev",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop",
    description: "Site portfolio responsive avec animations avancées.",
    link: "#"
  },
  {
    title: "Analyse Sentiment Réseaux Sociaux",
    category: "data",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop",
    description: "Script Python d'analyse de sentiments avec visualisations.",
    link: "#"
  },
  {
    title: "API REST Gestion Tâches",
    category: "dev",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop",
    description: "API robuste avec authentification JWT et documentation Swagger.",
    link: "#"
  },
  {
    title: "Modèle Prédictif Churn Client",
    category: "data",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
    description: "Machine Learning avec scikit-learn pour anticiper les départs clients.",
    link: "#"
  }
];

function renderProjects(category = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  
  const filtered = category === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === category);
  
  grid.innerHTML = filtered.map(project => `
    <div class="project-card bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group">
      <div class="relative h-48 overflow-hidden">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <span class="absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full ${project.category === 'dev' ? 'bg-cyan-500 text-black' : 'bg-purple-500 text-white'}">
          ${project.category === 'dev' ? 'DEV' : 'DATA'}
        </span>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
        <a href="${project.link}" class="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition group/link">
          Voir le projet 
          <i class="fas fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  
  // Gestion des filtres
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Mise à jour de l'état actif
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      renderProjects(filter);
    });
  });
});