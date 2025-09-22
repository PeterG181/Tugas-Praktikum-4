const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
