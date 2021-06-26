import Typewriter from 'typewriter-effect/dist/core';

const initTypewriter = () => {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const typewriter = new Typewriter('.header__heading-2', {
            strings: [ 'Jakub', 'Computer programmer', 'Fullstack developer' ],
            autoStart: true,
            loop: true,
            pauseFor: 5000,
            cursor: '_',
            skipAddStyles: true
        });
    }
}

export default initTypewriter;