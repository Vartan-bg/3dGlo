import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import inputsСhange from './modules/inputsСhange';
import ourTeam from './modules/ourTeam';
import sendForm from './modules/sendForm';
// Таймер
countTimer('01 september 2021');
// кнопка меню
toggleMenu();
//popup
togglePopup();
// табы
tabs();
//слайдер
slider();
//калькулятор
calc(100);
//отслеживание ввода в инпуты
inputsСhange();
// наша команда (смена фотографий по наведению мыши)
ourTeam();
//send-ajax-form
sendForm();