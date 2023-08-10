require('polyfill-nodelist-foreach'); // Полифил для поддержки метода forEach в IE11+ и Safari9
require('svgxuse'); // Полифил для поддержки IE11+ и старыми браузерами использования SVG через use 

// import accordion from './modules/accordion.js'; // Аккордион
import mobileMenu from './modules/mobileMenu'; // Мобильное меню
import dropdown from './modules/dropdown'; 
import slider from './modules/slider'; // Слайдер


// accordion();
mobileMenu();
dropdown();
slider();
