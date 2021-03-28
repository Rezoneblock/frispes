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

$(document).ready(function () {
  headerNavItems.on('click', setCurrentItem);
  burgerNavItems.on('click', setCurrentItem);
});
