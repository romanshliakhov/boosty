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

  observer: true,
  observeParents: true,
  loop: true,
  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    768: {
      spaceBetween: 20,
    },
  },
});

// Feedbacks
let feedbacksSlider = new Swiper('.feedbacks__slider', {
  observer: true,
  observeParents: true,
  loop: true,
  navigation: {
    nextEl: ".feedback-next",
    prevEl: ".feedback-prev",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.06,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1.23,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1.25,
      centeredSlides: true,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 1.73,
      centeredSlides: true,
      spaceBetween: 20,
    },
  },
});

// Awards and Partners
let awardsSlider = new Swiper('.awards__slider', {
  observer: true,
  observeParents: true,
  loop: true,
  navigation: {
    nextEl: ".awards-next",
    prevEl: ".awards-prev",
    clickable: true,
  },
  breakpoints: {
    320: {
      // slidesPerView: 2,
      // slidesPerColumn: 2,
      // slidesPerGroup: 4,
      // autoHeight: false,
      // watchOverflow: true,
      // grid: {
      //   rows: 2,
      // },

      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});










