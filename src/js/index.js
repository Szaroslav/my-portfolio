import Parallax from 'parallax-js';

window.addEventListener('DOMContentLoaded', () => {
    const parallax = new Parallax(document.querySelector('.portfolio__bg'), {
        selector: '.bg__element'
    });

    console.log("lol");
});