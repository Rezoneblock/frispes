// Burger-menu.
const burgerMenuBtn = $('.header__burger-menu__button');
const burgerMenu = $('.burger-menu');

burgerMenuBtn.on('click', function () {
  burgerMenu[0].classList.toggle('burger-menu--active');
  burgerMenuBtn[0].classList.toggle('header__burger-menu__button--active');
});
// Burger-menu.

// Nav active item.
const headerNavItems = $('.header__list__nav-list__item');
const burgerNavItems = $('.burger-menu__list__item');
var navItemIndex = 0;

function setCurrentItem() {
  navItemIndex = $(this).index();

  for (el of headerNavItems) {
    el.classList.remove('header__list__nav-list__item--active');
  }
  for (el of burgerNavItems) {
    el.classList.remove('burger-menu__list__item--active');
  }

  if ($(this).hasClass('header__list__nav-list__item')) {
    headerNavItems[navItemIndex].classList.add('header__list__nav-list__item--active');
    navItemIndex += 1;
    burgerNavItems[navItemIndex].classList.add('burger-menu__list__item--active');
  } else if ($(this).hasClass('burger-menu__list__item')) {
    burgerNavItems[navItemIndex].classList.add('burger-menu__list__item--active');
    navItemIndex -= 1;
    headerNavItems[navItemIndex].classList.add('header__list__nav-list__item--active');
  }
}
// Nav active item.

// Intro slider.
const introSlider = new Swiper('.intro__slider', {
  direction: 'horizontal',
  grabCursor: true,
  scrollbar: {
    el: '.intro__swiper-scrollbar',
    draggable: true,
  },
});
// Intro slider.

// Our Spaces slider.
const ourSpaces = new Swiper('.our-spaces__slider', {
  direction: 'horizontal',
  navigation: {
    prevEl: '.our-spaces__slider__arrows__prev',
    nextEl: '.our-spaces__slider__arrows__next',
  },
  pagination: {
    el: '.our-spaces__swiper-fraction',
    type: 'fraction',
  },
  scrollbar: {
    el: '.our-spaces__swiper-scrollbar',
    draggable: true,
  },
});
// Our Spaces slider.

// Facilities slider.
const facilitiesPaginationNames = [
  'Spacious parking area',
  'Comfortable spaces',
  'Cozy cafe',
  'Child playground',
  'Outdoor spaces',
];
const facilities = new Swiper('.facilities__slider', {
  direction: 'vertical',
  allowTouchMove: false,
  autoplay: true,
  pagination: {
    el: '.facilities__slider__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="facilities__slider__pagination__button ' +
        className +
        '">' +
        facilitiesPaginationNames[index] +
        '</span>'
      );
    },
  },
});
// Facilities slider.

// Gallery slider.
const gallery = new Swiper('.gallery__slider', {
  direction: 'horizontal',
  loop: true,
  watchOverflow: true,
  navigation: {
    prevEl: '.gallery__slider__arrows-prev',
    nextEl: '.gallery__slider__arrows-next',
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
      initialSlide: 0,
    },
    767: {
      slidesPerView: 3.5,
      spaceBetween: 30,
      initialSlide: 1,
    },
  },
});
// Gallery slider.

$(document).ready(function () {
  headerNavItems.on('click', setCurrentItem);
  burgerNavItems.on('click', setCurrentItem);
});
