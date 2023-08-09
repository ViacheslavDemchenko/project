import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function slider() {
  if(document.querySelector('.slider-first')) {
    const aboutSlider = new Swiper('.slider-first', {
      spaceBetween: 20,
      slidesPerView: 4,
      loopedSlides: 1,
      autoHeight: true,
      // loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          loopedSlides: 1,
          spaceBetween: 20
        },
        // 768: {
        //   slidesPerView: 2,
        //   loopedSlides: 1,
        //   spaceBetween: 30
        // },
        // 1024: {
        //   spaceBetween: 30,
        //   slidesPerView: 3,
        //   loopedSlides: 1,
        // },
        // 1440: {
        //   spaceBetween: 30,
        //   slidesPerView: 3,
        //   loopedSlides: 1,
        // },
      }
    });
  }

  if(document.querySelector('.slider-second')) {
    const aboutSlider = new Swiper('.slider-second', {
      spaceBetween: 20,
      slidesPerView: 4,
      loopedSlides: 1,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          loopedSlides: 1,
          spaceBetween: 20
        },
        // 768: {
        //   slidesPerView: 2,
        //   loopedSlides: 1,
        //   spaceBetween: 30
        // },
        // 1024: {
        //   spaceBetween: 30,
        //   slidesPerView: 3,
        //   loopedSlides: 1,
        // },
        // 1440: {
        //   spaceBetween: 30,
        //   slidesPerView: 3,
        //   loopedSlides: 1,
        // },
      }
    });
  }

  if(document.querySelector('.slider-third')) {
    const aboutSlider = new Swiper('.slider-third', {
      spaceBetween: 20,
      slidesPerView: 4,
      loopedSlides: 1,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          loopedSlides: 1,
          spaceBetween: 20
        },
        // 768: {
        //   slidesPerView: 2,
        //   loopedSlides: 1,
        //   spaceBetween: 30
        // },
        // 1024: {
        //   spaceBetween: 30,
        //   slidesPerView: 3,
        //   loopedSlides: 1,
        // },
        // 1440: {
        //   spaceBetween: 30,
        //   slidesPerView: 3,
        //   loopedSlides: 1,
        // },
      }
    });
  }

  if(document.querySelector('.slider-main')) {
    const aboutSlider = new Swiper('.slider-main', {
      spaceBetween: 0,
      slidesPerView: 1,
      loopedSlides: 1,
      autoHeight: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1.2,
      //     loopedSlides: 1,
      //     spaceBetween: 20
      //   },
      //   // 768: {
      //   //   slidesPerView: 2,
      //   //   loopedSlides: 1,
      //   //   spaceBetween: 30
      //   // },
      //   // 1024: {
      //   //   spaceBetween: 30,
      //   //   slidesPerView: 3,
      //   //   loopedSlides: 1,
      //   // },
      //   // 1440: {
      //   //   spaceBetween: 30,
      //   //   slidesPerView: 3,
      //   //   loopedSlides: 1,
      //   // },
      // }
    });
  }
}