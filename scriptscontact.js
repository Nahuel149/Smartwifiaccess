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

// Initialize functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  setupBlinkingImage();

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

// Funcionalidad para moviles

document.addEventListener('click', function (event) {
  if (!event.target.closest('header')) {
      document.querySelector('.navbar').classList.remove('open');
  }
});

$(document).ready(function () {
  $("#menu-btn").click(function () {
      $(".navbar").toggleClass("open");
  });
});