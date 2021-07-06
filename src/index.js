'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import team from './modules/team';
import validation from './modules/validation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import smoothScroll from './modules/smoothScroll';
import SliderCarousel from './modules/sliderCarousel';

smoothScroll();
countTimer('18 july 2021');
toggleMenu();
togglePopUp();
tabs();
slider();
team();
validation();
calc(100);
sendForm('#form1');
sendForm('#form2');
sendForm('#form3');

const carousel = new SliderCarousel({
  main: '.companies-wrapper',
  wrap: '.companies-hor',
  infinity: true,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      slidesToShow: 3
    },
    {
      breakpoint: 768,
      slidesToShow: 2
    },
    {
      breakpoint: 576,
      slidesToShow: 1
    }
  ]
});
carousel.init();