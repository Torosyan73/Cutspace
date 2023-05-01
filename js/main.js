const form = document.querySelector('.form');
const input =document.querySelector('.form__input');

input.addEventListener('focus', function() {
    form.classList.add('form--active');
})

input.addEventListener('blur', function() {
    form.classList.remove('form--active');
})

const openMenu = document.querySelector('.open-menu');
const navigationMenu = document.querySelector('.navigation-menu');
const closeMenu = document.querySelector('.close-menu');
const body = document.body;

openMenu.addEventListener('click', function() {
    navigationMenu.classList.add('navigation-menu--show');
    body.classList.add('modal-open');

    closeMenu.addEventListener('click', function() {
        navigationMenu.classList.remove('navigation-menu--show');
        body.classList.remove('modal-open');
    })
})