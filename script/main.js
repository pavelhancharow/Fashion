var testimonialSwiper = new Swiper('.testimonial-swiper', {
  loop: true,
  speed: 300,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });
      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});

var storiesSwiper = new Swiper('.stories-swiper', {
  loop: true,
  speed: 500,
  spaceBetween: 18,
  slidesPerView: 2,
  navigation: {
    nextEl: '.stories-button-next',
    prevEl: '.stories-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});