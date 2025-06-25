const burger = document.getElementById('burger-menu');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  burger.classList.toggle('active');
});