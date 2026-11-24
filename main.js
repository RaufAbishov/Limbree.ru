document.addEventListener('DOMContentLoaded', () => {
  // Highlight active navigation link based on current page path
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Hover animations for product cards
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.transition = 'transform 0.3s ease, border-color 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});