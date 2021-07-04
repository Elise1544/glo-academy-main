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