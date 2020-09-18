$(document).ready(function () {
  var hamburgerMenu = $('.header-hamburger');
  hamburgerMenu.on('click', function () {
    var hamburgerLine = $('.header-hamburger__line');
    var mobileMenu = $('.header-mobile');
    $(hamburgerLine).toggleClass('header-hamburger__open');
    $(mobileMenu).toggleClass('header-mobile__visible');
  });

  var trendingActive = $('.trending-header__item');
  trendingActive.on('click', function () {
    $(trendingActive).removeClass('trending-header__item_active');
    $(this).toggleClass('trending-header__item_active');
  });

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
    slidesPerView: 1,
    spaceBetween: 1,
    navigation: {
      nextEl: '.stories-button-next',
      prevEl: '.stories-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
});