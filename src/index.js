import initNavigation from './js/navigation';
import initContact from './js/contact';

import initParallax from './js/parallax';
import initTypewriter from './js/typewriter';

import './scss/index.scss';

window.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initContact();

    initParallax();
    initTypewriter();
});