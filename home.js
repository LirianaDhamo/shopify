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

const heroBanner = document.getElementById('hero-banner');

function updateHeroImage() {
  currentIndex = (currentIndex + 1) % images.length;
  heroBanner.style.backgroundImage = `url('${images[currentIndex]}')`;

  // Optionally update indicators if you are using them
  const indicators = document.querySelectorAll('.carousel-indicators .line');
  indicators.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
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

//scroll buttons
document.querySelectorAll('.weight-loss-button').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('cart-wrapper').scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelector('.get-started-button').addEventListener('click', () => {
  document.getElementById('hero-banner').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.testimonials-button').addEventListener('click', () => {
  document.getElementById('hero-banner').scrollIntoView({ behavior: 'smooth' });
});

//testimonialls
const testimonials = [
    {
      quote: `"The energy I<br>started to have was<br>unbelievable."`,
      name: "_Stephanie S."
    },
    {
      quote: `"I finally feel like<br>I’m myself again!"`,
      name: "_James K."
    },
    {
      quote: `"This changed my<br>entire daily routine."`,
      name: "_Laura M."
    }
  ];

  let index = 0;

  const quoteEl = document.getElementById("testimonial-quote");
  const nameEl = document.getElementById("testimonial-name");
  const buttonEl = document.getElementById("testimonial-button");

  function updateTestimonial(i) {
    quoteEl.innerHTML = testimonials[i].quote;
    nameEl.innerHTML = testimonials[i].name;

    const nameOnly = testimonials[i].name.replace(/^_/, "").split(" ")[0].toUpperCase();
    buttonEl.textContent = `LEARN ${nameOnly}'S STORY`;
  }

  document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(index);
  });

  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    updateTestimonial(index);
  });

  //discover
  const discoverSwiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 600,
  freeMode: true,
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1400: { slidesPerView: 4 }
  }
});