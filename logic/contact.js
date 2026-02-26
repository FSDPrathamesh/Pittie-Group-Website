document.addEventListener("DOMContentLoaded", function () {

    // IMAGE SWIPER
    const careerImageSwiper = new Swiper(".careerImageSwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        allowTouchMove: false,
    });

    // CONTENT SWIPER
    const careerContentSwiper = new Swiper(".careerContentSwiper", {
        slidesPerView: 1,
        spaceBetween: 60,
        loop: false,
        speed: 800,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        on: {
            slideChange: function () {
                updatePagination(this.realIndex);
            },
        },
    });

    // SYNC BOTH SWIPERS
    careerContentSwiper.controller.control = careerImageSwiper;
    careerImageSwiper.controller.control = careerContentSwiper;

    // CUSTOM PAGINATION
    const paginationDots = document.querySelectorAll(
        ".career-pagination span"
    );

    function updatePagination(index) {
        paginationDots.forEach((dot) => dot.classList.remove("active"));
        if (paginationDots[index]) {
            paginationDots[index].classList.add("active");
        }
    }

    // DOT CLICK FUNCTION
    paginationDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            careerContentSwiper.slideTo(index);
            updatePagination(index);
        });
    });

});