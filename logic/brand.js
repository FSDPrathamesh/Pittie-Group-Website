
const thumbs = new Swiper(".heroThumbs-swipper", {
  slidesPerView: 6, // default (desktop)

  breakpoints: {
    0: {
      slidesPerView: 2, // mobile
    },
    576: {
      slidesPerView: 3, // mobile
    },
    768: {
      slidesPerView: 4, // tablet
    },
    992: {
      slidesPerView: 6, // desktop
    }
  },
  spaceBetween: 20,
  watchSlidesProgress: true,
});

const main = new Swiper(".heroMain", {
  effect: "fade",
  loop: true,
  thumbs: {
    swiper: thumbs,
  },
  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },
});