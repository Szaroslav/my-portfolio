const initContact = () => {
    const contact = document.querySelector('.portfolio__contact');

    contact.addEventListener('paste', (e) => {
        const t = e.target;

        if (!t.classList.contains('contact__input'))
            return;

        t.classList.add('not-empty');
    });
    contact.addEventListener('keyup', e => {
        const t = e.target;

        if (!t.classList.contains('contact__input'))
            return;

        if (t.value.length > 0)
            t.classList.add('not-empty');
        else
            t.classList.remove('not-empty');
    });
};

export default initContact;