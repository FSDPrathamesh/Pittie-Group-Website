 const thumbs = new Swiper(".heroThumbs", {
    slidesPerView: "auto",
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