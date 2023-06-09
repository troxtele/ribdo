var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 0,
  loop: false,
  autoplay: true,
  pagination: {
    el: ".client_pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testi-button-next",
    prevEl: ".testi-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
