const catalogBtn = document.querySelector('.catalog');
const catalogMenu = document.querySelector('.menu__links');
const catalogIcon = document.querySelector('.catalog--icon');
const links = document.querySelectorAll('.links__inner div');
const catalogLinks = document.querySelectorAll('.menu__links div');
const linksInner = document.querySelector('.links__inner');

catalogBtn.addEventListener('click', function () {
    if(catalogBtn.classList.contains('show')) {
        catalogBtn.classList.remove('show');
        catalogIcon.setAttribute('src', './images/header/menu-open.png');
        catalogMenu.classList.remove('show');
        linksInner.classList.remove('show');
    } else {
        catalogBtn.classList.add('show');
        catalogIcon.setAttribute('src', './images/header/menu-close.png');
        catalogMenu.classList.add('show');
        linksInner.classList.add('show');
    }
});


catalogLinks.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        links.forEach((item) => {
            item.classList.remove('show_links');

            if(el.dataset.index === item.dataset.index) {
                item.classList.add('show_links');
            }
        })
    });
});