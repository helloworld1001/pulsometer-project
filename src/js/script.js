$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    // adaptiveHeight: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          // dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//Tiny slider

// const slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
//   autoplay: false,
//   controls: false,
//   nav: false,
// });

// document.querySelector('.prev').addEventListener('click', () => {
//   slider.goTo('prev');
// });
// document.querySelector('.next').addEventListener('click', () => {
//   slider.goTo('next');
// });
