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
      slidesPerView: 2,
      slidesPerColumn: 2,
      // centeredSlides: true,
      // slidesPerGroup: 4,
      // autoHeight: false,
      // watchOverflow: true,
      // grid: {
      //   rows: 2,
      // },
      spaceBetween: 0,
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

// Cases Slider
let casesSlider = new Swiper('.cases__slider', {
  observer: true,
  observeParents: true,
  loop: true,
  navigation: {
    nextEl: ".cases-next",
    prevEl: ".cases-prev",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.55,
      spaceBetween: 10,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// Advisors Slider
for (const advisorsSlider of document.querySelectorAll('.advisors__slider')) {
  if (advisorsSlider) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(min-width:1025px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(advisorsSlider, {
          slidesPerView: 'auto',
          loop: true,
          freeMode: true,
          spaceBetween: 10,
          observer: true,
          observeParents: true,
          adaptiveHeight: true,
          navigation: {
            nextEl: ".advisors-next",
            prevEl: ".advisors-prev",
            clickable: true,
          },
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);
          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }
}

// Инициализация Swiper
let historySlider = new Swiper('.history__slider', {
  observer: true,
  observeParents: true,
  slidesPerView: 'auto',
  // loop: true,
  // centeredSlides: true,
  spaceBetween: 50,
  mousewheel: true // Включаем прокрутку колесиком мыши
});

// Обработчик события прокрутки страницы
window.addEventListener('scroll', function() {
  var sliderElement = document.querySelector('.history__slider');
  var sliderOffsetTop = sliderElement.offsetTop;
  var sliderHeight = sliderElement.offsetHeight;
  var windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var windowHeight = window.innerHeight;

  // Проверка, находится ли пользователь в области слайдера
  if (windowScrollTop >= sliderOffsetTop && windowScrollTop <= sliderOffsetTop + sliderHeight - windowHeight) {
    // Останавливаем прокрутку страницы
    document.body.style.overflow = 'hidden';

    // Включаем прокрутку слайдера по колесику мыши
    historySlider.allowTouchMove = true;
  } else {
    // Включаем обратно прокрутку страницы
    document.body.style.overflow = '';

    // Если пользователь на последнем слайде, отключаем прокрутку слайдера
    if (historySlider.isEnd) {
      historySlider.allowTouchMove = false;
    }
  }
});












