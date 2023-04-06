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

  // Functionality for the "Back to top" button
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

// Add an event handler to each link
navLinksSmooth.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Obtain the target of the link (the value of the href attribute)
    const targetId = link.getAttribute('href');

    // Obtain the target element (using the value of the id attribute)
    const target = document.querySelector(targetId);

    // Scroll smoothly to the target element
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});