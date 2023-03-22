document.addEventListener('DOMContentLoaded', function() {
  let navLinks = document.querySelectorAll('nav ul li a');
  let headerHeight = document.querySelector('header').offsetHeight;

  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          let target = document.querySelector(this.getAttribute('href'));
          let targetPosition = target.offsetTop - headerHeight;

          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      });
  });
  
  // Funcionalidad para el botón "Volver arriba"
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});