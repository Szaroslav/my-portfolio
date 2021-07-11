const initNavigation = () => {
    const button = document.querySelector('.menu__button');
    const navigation = document.querySelector('.navigation');
    const menu = document.querySelector('.navigation__menu');

    let ticking = false;

    button.addEventListener('click', () => {
        navigation.classList.toggle('open');
        menu.classList.toggle('open');
    });

    window.addEventListener('scroll', () => onWindowScroll(navigation));

    onWindowScroll(navigation);
}

const onWindowScroll = (navigation) => {
    const n = navigation.classList.contains('fixed');
    if (scrollY > 0) {
        navigation.classList.add('fixed');
        // anime({
        //     targets: navigation,
        //     duration: 300,
        //     easing: 'easeOutCubic',
        //     opacity: [0, 1],
        //     translateY: ['-100%', 0]
        // });
    }
    else {
        navigation.classList.remove('fixed');
        // anime({
        //     targets: navigation,
        //     duration: 300,
        //     easing: 'easeOutCubic',
        //     opacity: [1, 0],
        //     translateY: [0, '-100%']
        // });
    }
};

export default initNavigation;