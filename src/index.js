import initNavigation from './js/navigation';

import initParallax from './js/parallax';
import initTypewriter from './js/typewriter';

import './scss/index.scss';

window.addEventListener('DOMContentLoaded', () => {
    initNavigation();

    initParallax();
    initTypewriter();
});