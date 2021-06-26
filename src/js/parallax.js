import Parallax from 'parallax-js';

const initParallax = () => {
    const parallax = new Parallax(document.querySelector('.header__bg'), {
        invertX: false,
        invertY: false,
        selector: '.bg__element'
    });
}

export default initParallax;