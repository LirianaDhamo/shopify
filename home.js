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
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      quote: `<img src="images/thonjza.png" alt="quote-start" class="testimonial thonjza-top">
              The energy I<br>started to have was<br>unbelievable.
              <img src="images/thonjza2.png" alt="quote-end" class="testimonial thonjza-bottom">`,
      name: "_Stephanie S."
    },
    {
      quote: `<img src="images/thonjza.png" alt="quote-start" class="testimonial thonjza-top">
              I finally feel like<br>I’m myself again!
              <img src="images/thonjza2.png" alt="quote-end" class="testimonial thonjza-bottom">`,
      name: "_James K."
    },
    {
      quote: `<img src="images/thonjza.png" alt="quote-start" class="testimonial thonjza-top">
              This changed my<br>entire daily routine.
              <img src="images/thonjza2.png" alt="quote-end" class="testimonial thonjza-bottom">`,
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

  updateTestimonial(index);

  document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(index);
  });

  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    updateTestimonial(index);
  });
});

//Doctor
  const cards = document.querySelectorAll('.doctor-card');
const nextBtn = document.querySelector('#doctor-next');
const prevBtn = document.querySelector('#doctor-prev');
let current = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % cards.length;
  showCard(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
});

//discover
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".discover-carousel");
  const cards = document.querySelectorAll(".discover-card");
  const prev = document.getElementById("discover-prev");
  const next = document.getElementById("discover-next");

  if (cards.length < 2) return;

  function getScrollAmount() {
    const cardWidth = cards[0].offsetWidth;
    const gap = cards[1].offsetLeft - cards[0].offsetLeft - cardWidth;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

    if (isMobile) {
      return cardWidth;
    } else if (isTablet) {
      return (cardWidth + gap) * 2;
    } else {
      return cardWidth + gap;
    }
  }

  next.addEventListener("click", () => {
    carousel.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });
});