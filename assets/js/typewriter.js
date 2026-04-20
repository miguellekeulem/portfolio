// typewriter.js
(function() {
  const words = ["Développeur Web & Mobile", "Data & BI Analyst"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriterElement = document.getElementById('typewriter');
  
  function type() {
    const currentWord = words[index];
    
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }
    
    typewriterElement.textContent = currentWord.substring(0, charIndex);
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentWord.length) {
      // Pause à la fin du mot
      typeSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % words.length;
      typeSpeed = 300;
    }
    
    setTimeout(type, typeSpeed);
  }
  
  // Démarrer l'animation
  setTimeout(type, 500);
})();