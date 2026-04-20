// theme.js
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const htmlElement = document.documentElement;

  // Vérifier le thème sauvegardé ou la préférence système
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    htmlElement.classList.add('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    htmlElement.classList.remove('dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }

  themeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  });
})();