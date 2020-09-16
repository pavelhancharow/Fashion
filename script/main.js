var testimonialSwiper = new Swiper('.testimonial-swiper', {
  loop: false,
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