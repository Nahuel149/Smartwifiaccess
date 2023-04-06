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
  
  // Funcionalidad para arrow text

  function toggleText(id) {
    var textElement = document.getElementById(id);
    var hiddenTextElements = document.querySelectorAll(".hidden-text");
    var arrowElements = document.querySelectorAll(".arrow");

    hiddenTextElements.forEach(function (element) {
        if (element !== textElement) {
            element.style.maxHeight = "0";
            element.style.display = "none";
        }
    });

    arrowElements.forEach(function (element) {
        if (element.nextElementSibling !== textElement) {
            element.style.transform = "rotate(0deg)";
        }
    });

    if (textElement.style.maxHeight === "0px") {
        textElement.style.display = "block";
        textElement.style.maxHeight = "300px";
        textElement.previousElementSibling.children[1].style.transform = "rotate(180deg)";
    } else {
        textElement.style.maxHeight = "0";
        setTimeout(function () {
            textElement.style.display = "none";
            textElement.previousElementSibling.children[1].style.transform = "rotate(0deg)";
        }, 500);
    }
}

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