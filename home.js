// Burger menu
const burger = document.getElementById('burger-menu');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  burger.classList.toggle('active');
});

/* Carousel */
const toggleBtn = document.getElementById('toggle-btn');
const icon = toggleBtn.querySelector('i');

let currentIndex = 0;
let intervalId = null;
const images = [
  'images/heroImg.jpeg',
  'images/slide2.jpg',
  'images/slide3.webp',
  'images/slide4.jpg',
];

const heroBanner = document.querySelector('.hero-banner');

function updateHeroImage() {
  currentIndex = (currentIndex + 1) % images.length;
  heroBanner.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function startCarousel() {
  if (!intervalId) {
    intervalId = setInterval(updateHeroImage, 5000);
    icon.className = 'ri-pause-line';
  }
}

function pauseCarousel() {
  clearInterval(intervalId);
  intervalId = null;
  icon.className = 'ri-play-line';
}

toggleBtn.addEventListener('click', () => {
  if (intervalId) {
    pauseCarousel();
  } else {
    startCarousel();
  }
});

startCarousel();

//scroll buttons
document.querySelectorAll('.weight-loss-button').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('cart-wrapper').scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelector('.get-started-button').addEventListener('click', () => {
  document.getElementById('hero-banner').scrollIntoView({ behavior: 'smooth' });
});