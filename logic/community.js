



// IMAGE SWIPER
var imageSwiper = new Swiper(".testimonialImageSwiper", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  allowTouchMove: false
});

// CONTENT SWIPER
var contentSwiper = new Swiper(".testimonialContentSwiper", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideChange: function () {

      // Sync image slider
      imageSwiper.slideToLoop(this.realIndex);

      // Custom Pagination Active Change
      document.querySelectorAll(".pagination span").forEach((dot, index) => {
        dot.classList.remove("active");
        if (index === this.realIndex) {
          dot.classList.add("active");
        }
      });

    }
  }
});

document.querySelectorAll(".pagination span").forEach((dot, index) => {
  dot.addEventListener("click", function () {
    contentSwiper.slideToLoop(index);
  });
});