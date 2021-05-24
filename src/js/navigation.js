const navigation = () => {
    const button = document.querySelector('.menu__button');
    const navigation = document.querySelector('.navigation');
    const menu = document.querySelector('.navigation__menu');

    button.addEventListener('click', () => {
        navigation.classList.toggle('open');
        menu.classList.toggle('open');
    });
}

export default navigation;