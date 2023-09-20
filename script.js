// // const burgerIcon = document.getElementById('burger');
// const burgerIcon = document.querySelector('.burger');

// const navMenu = document.getElementById('nav');

// burgerIcon.addEventListener('click', () => {
//   if (navMenu.style.display === 'block') {
//     navMenu.style.display = 'none';
//   } else {
//     navMenu.style.display = 'block';
//   }
// });

const burgerIcon = document.querySelector('.burger');
const navMenu = document.getElementById('nav');

burgerIcon.addEventListener('click', () => {
  if (window.getComputedStyle(navMenu).display === 'block') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'block';
  }
});