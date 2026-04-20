// main.js
(function() {
  // Canvas de particules (effet futuriste)
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    }
    
    function initParticles() {
      particles = [];
      const particleCount = Math.floor(width * height / 8000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.3})`
        });
      }
    }
    
    function drawParticles() {
      ctx.clearRect(0, 0, width, height);
      
      // Lignes de connexion
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Particules
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Déplacement
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Rebond
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;
      });
      
      requestAnimationFrame(drawParticles);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();
  }
  
  // Toggle entre Dev et Data dans la section compétences
  const devBtn = document.getElementById('dev-skill-btn');
  const dataBtn = document.getElementById('data-skill-btn');
  const devPanel = document.getElementById('dev-skills');
  const dataPanel = document.getElementById('data-skills');
  
  if (devBtn && dataBtn) {
    devBtn.addEventListener('click', () => {
      devBtn.classList.add('bg-cyan-500', 'text-white', 'shadow-lg');
      devBtn.classList.remove('text-gray-700', 'dark:text-gray-300');
      dataBtn.classList.remove('bg-purple-500', 'text-white', 'shadow-lg');
      dataBtn.classList.add('text-gray-700', 'dark:text-gray-300');
      
      devPanel.style.opacity = '1';
      devPanel.style.transform = 'scale(1)';
      dataPanel.style.opacity = '0.6';
      dataPanel.style.transform = 'scale(0.95)';
    });
    
    dataBtn.addEventListener('click', () => {
      dataBtn.classList.add('bg-purple-500', 'text-white', 'shadow-lg');
      dataBtn.classList.remove('text-gray-700', 'dark:text-gray-300');
      devBtn.classList.remove('bg-cyan-500', 'text-white', 'shadow-lg');
      devBtn.classList.add('text-gray-700', 'dark:text-gray-300');
      
      dataPanel.style.opacity = '1';
      dataPanel.style.transform = 'scale(1)';
      devPanel.style.opacity = '0.6';
      devPanel.style.transform = 'scale(0.95)';
    });
  }
  













  // Gestion du formulaire (simulation EmailJS)
  // const contactForm = document.getElementById('contact-form');
  // if (contactForm) {

  //   // initialisation de EmailJS 
  
  //   emailjs.init("XG4gdoLKtkZYPjmGD")

  //   contactForm.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     // Ici tu peux intégrer EmailJS ou Formspree
  //     alert('Message envoyé ! (Simulation - À connecter à un service d\'envoi)');
  //     contactForm.reset();

  //     emailjs.sendForm('service_uvpyhwq', 'template_ayqmu0r', contactForm).then(() => {
  //       alert('Message envoye avec succes !');
  //       contactForm.reset();
  //     }, (error) => {
  //       alert('Erreur lors de l\'envoi. veuillez reessayer.');
  //       console.error('Erreur Emails:', error);
  //     });

  //   });
  // }


  // Gestion du formulaire avec EmailJS
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  // Vérifier que la bibliothèque EmailJS est bien chargée
  if (typeof emailjs !== 'undefined') {
    // Initialise EmailJS avec ta clé publique
    emailjs.init("XG4gdoLKtkZYPjmGD"); // ⚠️ Remplace par ta vraie clé

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_uvpyhwq', 'template_ayqmu0r', contactForm)
        .then(() => {
          alert('✅ Message envoyé avec succès !');
          contactForm.reset();
        })
        .catch((error) => {
          alert('❌ Erreur lors de l\'envoi. Veuillez réessayer.');
          console.error('Erreur EmailJS:', error);
        });
    });
  } else {
    console.warn("EmailJS n'est pas chargé. Le formulaire fonctionnera en mode simulation.");
    // Mode fallback : simulation
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message envoyé ! (Simulation - EmailJS non configuré)');
      contactForm.reset();
    });
  }
}















  
  // Animation au scroll (fade-in)
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
  });
  
  // Navigation mobile simplifiée
  // À implémenter selon besoin
})();