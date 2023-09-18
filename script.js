const burgerIcon = document.getElementById('burger');
const navMenu = document.getElementById('nav');

burgerIcon.addEventListener('click', () => {
  if (navMenu.style.display === 'block') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'block';
  }
});