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

// // History Slider
const historySlider = document.querySelector('.history__slider');

if(historySlider){
  const swiper = new Swiper(historySlider, {
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    mousewheel: true,
    speed: 1300,

    breakpoints: {
      320: {
        speed: 500,
      },
      768: {
        speed: 1300,
      },
    },
  });

    const bodyEl = document.body,
    sliderElement = document.querySelector('.history__wrapp'),
    sensitivity = 10,
    scrollInterval = 1500;
    let canScroll = true,
    parametersInit = null,
    resizeTimer,
    flag = false,
    lastWindowWidth = window.innerWidth,
    offsetPercent;

    function isElementCentered(element) {
      var viewportHeight = window.innerHeight;
      var elementBounding = element.getBoundingClientRect();
      var elementCenterRelativeToViewport = elementBounding.top + element.clientHeight / 2;

      var offsetFromCenter = (viewportHeight * offsetPercent) / 100;

      return elementCenterRelativeToViewport >= viewportHeight / 2 - element.clientHeight / 2 - offsetFromCenter &&
            elementCenterRelativeToViewport <= viewportHeight / 2 + element.clientHeight / 2 - offsetFromCenter;
    }

    function disableFixed(body, slider, interval){
      setTimeout(() => {
        body.classList.remove('fixed');
        slider.mousewheel.disable();
      }, interval);
    }

    function checkFixed() {
      var isCentered = isElementCentered(sliderElement);
      if (isCentered && !flag) {
        bodyEl.classList.add('fixed');
        flag = true;
      }
      if (!isCentered) {
        bodyEl.classList.remove('fixed');
        flag = false;
      }
    }

  function parametersSlider(){
    swiper.slides.forEach((slide, index) => {
      slide.addEventListener('click', function() {
        swiper.slideTo(index);
      });
    });

    window.addEventListener('wheel', function(event) {
      if (event.deltaY < 0) {
        offsetPercent = -10;
      } else {
        offsetPercent = 15;
      }
      var isCentered = isElementCentered(sliderElement);

      checkFixed();
      const deltaY = event.deltaY / sensitivity;

      if (bodyEl.classList.contains('fixed')) {
        if (deltaY > 0 && canScroll) {
          if(swiper.isEnd){
            disableFixed(bodyEl, swiper, 0);
          }
          swiper.slideNext();
          canScroll = false;
          setTimeout(() => { canScroll = true; }, scrollInterval);

          swiper.on('reachEnd', function() {
            disableFixed(bodyEl, swiper, scrollInterval);

            if (!isCentered) {
              flag = false;
            }
          });
        } else if (deltaY < 0 && canScroll) {
          if (swiper.activeIndex === 0) {
            disableFixed(bodyEl, swiper, 0);
          }
          swiper.slidePrev();
          canScroll = false;
          setTimeout(() => { canScroll = true; }, scrollInterval);

          swiper.on('reachBeginning', function() {
            disableFixed(bodyEl, swiper, scrollInterval);

            if (!isCentered) {
              flag = false;
            }
          });
        }
      }
    });

    window.addEventListener('scroll', function(e) {
      var isCentered = isElementCentered(sliderElement);
      checkFixed();
    });
  }

  function initFunction(breakpoint) {
    let containerWidth = document.documentElement.clientWidth;
    if (containerWidth >= breakpoint) {
      if (!parametersInit) {
        parametersSlider();
        parametersInit = true;
      }
    } else {
      parametersInit = false;
    }
  }

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    let currentWindowWidth = window.innerWidth;
    if (currentWindowWidth !== lastWindowWidth) {
      lastWindowWidth = currentWindowWidth;

      if (currentWindowWidth < 768) {
        resizeTimer = setTimeout(() => {
          initFunction(768);
          location.reload();
        }, 300);
      } else {
        initFunction(768);
      }
    }
  });

  window.addEventListener("DOMContentLoaded", () => {
    initFunction(768);
  });
}













