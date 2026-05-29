const burgerMenu = document.querySelector('.burger-menu');
const headerBotton = document.querySelector('.header__botton');
const catalogMobile = document.querySelector('.mobile__links');
const imgBurger = document.querySelector('.burger-menu img');

burgerMenu.addEventListener('click', () => {
    if(headerBotton.classList.contains('active-header-botton')){
        headerBotton.classList.remove('active-header-botton');
        catalogMobile.classList.remove('active-links');
        imgBurger.src = './images/header/menu-open.png';
    }else{
        headerBotton.classList.add('active-header-botton');
        catalogMobile.classList.add('active-links');
        imgBurger.src = './images/header/menu-close.png';
    }
});