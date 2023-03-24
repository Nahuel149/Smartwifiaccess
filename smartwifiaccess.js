// Funcionalidad del menú desplegable
function setupDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseover', function () {
        this.querySelector('.dropdown-content').style.display = 'block';
      });
  
      dropdown.addEventListener('mouseout', function () {
        this.querySelector('.dropdown-content').style.display = 'none';
      });
    });
  }
  
 // Funcionalidad de la imagen que aparece y desaparece lentamente
function setupBlinkingImage() {
    const blinkingImage = document.getElementById('blinking-image');
    const BLINK_INTERVAL = 2000; // Intervalo de tiempo en milisegundos (2000 ms = 2 segundos)
  
    setInterval(() => {
      if (blinkingImage.style.opacity === '0') {
        blinkingImage.style.opacity = '1';
      } else {
        blinkingImage.style.opacity = '0';
      }
    }, BLINK_INTERVAL);
  }
  
  // Inicializar funciones cuando el contenido del DOM esté cargado
  document.addEventListener('DOMContentLoaded', function () {
    setupDropdowns();
    setupBlinkingImage();
  
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

  });