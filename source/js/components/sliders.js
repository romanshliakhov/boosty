import Swiper from '../vendor/swiper.js';

// slider partners top
let heroSlider = new Swiper('.hero__slider', {
  observer: true,
  observeParents: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  speed: 8000,
  loop: true,
  autoplay: {
    delay: 0,
  },
});

// Reasons
let reasonsSlider = new Swiper('.reasons__slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  loop: true,
  // navigation: {
  //   nextEl: ".reasons-next",
  //   prevEl: ".reasons-prev",
  //   clickable: true,
  // },
});

// Feedbacks
let feedbacksSlider = new Swiper('.feedbacks__slider', {
  slidesPerView: 2,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  loop: true,
  navigation: {
    nextEl: ".feedback-next",
    prevEl: ".feedback-prev",
    clickable: true,
  },
});

// Awards and Partners
let awardsSlider = new Swiper('.awards__slider', {
  slidesPerView: 4,
  observer: true,
  observeParents: true,
  loop: true,
  navigation: {
    nextEl: ".awards-next",
    prevEl: ".awards-prev",
    clickable: true,
  },
});

// Recent Articles
let recentsSlider = new Swiper('.recents__slider', {
  slidesPerView: 2,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  loop: true,
  navigation: {
    nextEl: ".recents-next",
    prevEl: ".recents-prev",
    clickable: true,
  },
});










