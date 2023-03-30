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
  
  // Inicializar funciones cuando el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
  setupDropdowns();
  setupBlinkingImage();

  let navLinks = document.querySelectorAll('nav ul li a');
  let headerHeight = document.querySelector('header').offsetHeight;

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let target = document.querySelector(this.getAttribute('href'));
      let targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
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

 // obtener los enlaces del menú de navegación que tienen el efecto
const navLinksSmooth = document.querySelectorAll('.nav-list a.dropdown-transition:not([href="#"]):not([href="index.html"]):not([href="contact.html"])');

// agregar un manejador de eventos a cada enlace
navLinksSmooth.forEach(link => {
  link.addEventListener('click', event => {
    // prevenir el comportamiento predeterminado del enlace
    event.preventDefault();

    // obtener el destino del enlace (el valor del atributo href)
    const targetId = link.getAttribute('href');

    // obtener el elemento de destino (usando el valor del atributo id)
    const target = document.querySelector(targetId);

    // desplazarse suavemente hacia el elemento de destino
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});