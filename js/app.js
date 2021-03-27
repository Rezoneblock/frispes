$(document).ready(function () {
  // Burger-menu.
  const burgerMenuBtn = $('.header__burger-menu__button');
  const burgerMenu = $('.burger-menu');

  burgerMenuBtn.on('click', function () {
    burgerMenu[0].classList.toggle('burger-menu--active');
    burgerMenuBtn[0].classList.toggle('header__burger-menu__button--active');
  });
  // Burger-menu.

  //Nav active item.
  const headerNavItems = $('.header__list__nav-list__item');
  const burgerNavItems = $('.burger-menu__list__item');
  var index = 0;

  function setCurrentItem() {
    index = $(this).index();

    for (el of headerNavItems) {
      el.classList.remove('header__list__nav-list__item--active');
    }
    for (el of burgerNavItems) {
      el.classList.remove('burger-menu__list__item--active');
    }

    if ($(this).hasClass('header__list__nav-list__item')) {
      headerNavItems[index].classList.add('header__list__nav-list__item--active');
      index += 1;
      burgerNavItems[index].classList.add('burger-menu__list__item--active');
    } else if ($(this).hasClass('burger-menu__list__item')) {
      burgerNavItems[index].classList.add('burger-menu__list__item--active');
      index -= 1;
      headerNavItems[index].classList.add('header__list__nav-list__item--active');
    }
  }

  headerNavItems.on('click', setCurrentItem);
  burgerNavItems.on('click', setCurrentItem);
  //Nav active item.
});
