// Initialize functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  setupBlinkingImage();
  setupSmoothDetails(); // Añadir esta línea

  let navLinks = document.querySelectorAll('nav ul li a');
  let headerHeight = document.querySelector('header').offsetHeight;

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      let hrefValue = this.getAttribute('href');
  
      // Check if the link is an internal link
      if (hrefValue.startsWith('#')) {
        event.preventDefault();
        let target = document.querySelector(hrefValue);
        let targetPosition = target.offsetTop - headerHeight;
  
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // Funcionalidad para el botón "Volver arriba"
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Funcionalidad dropdown
function setupBlinkingImage() {
    const header = document.querySelector('header');
    const blinkingImage = document.getElementById('blinking-image');
    
    header.addEventListener('mouseover', () => {
      blinkingImage.classList.add('fadeIn');
      blinkingImage.classList.remove('fadeOut');
    });
    
    header.addEventListener('mouseout', () => {
      blinkingImage.classList.remove('fadeIn');
      blinkingImage.classList.add('fadeOut');
    });
  }
  
// Funcionalidad para el desplazamiento suave de las secciones desplegables
function setupSmoothDetails() {
    const detailsElements = document.querySelectorAll('#privacy-policy details');
    detailsElements.forEach((detail) => {
      const summary = detail.querySelector('summary');
      const content = detail.querySelector('p');
  
      content.style.maxHeight = '0';
      content.style.overflow = 'hidden';
      content.style.transition = 'max-height 1.5s ease';
  
      summary.addEventListener('click', () => {
        if (!detail.open) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          setTimeout(() => {
            content.style.maxHeight = '0';
          }, 0);
        }
      });
    });
  }
