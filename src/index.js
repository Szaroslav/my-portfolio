import Parallax from 'parallax-js';
import Typewriter from 'typewriter-effect/dist/core';

import navigation from './js/navigation';

import './scss/index.scss';

window.addEventListener('DOMContentLoaded', () => {
    const parallax = new Parallax(document.querySelector('.portfolio__bg'), {
        invertX: false,
        invertY: false,
        selector: '.bg__element'
    });

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const typewriter = new Typewriter('.portfolio__heading-2', {
            strings: [ 'Jakub', 'Computer programmer', 'Fullstack developer' ],
            autoStart: true,
            loop: true,
            pauseFor: 5000,
            cursor: '_',
            skipAddStyles: true
        });
    }

    navigation();
});