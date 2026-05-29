document.addEventListener('DOMContentLoaded', () => {
let swiper = new Swiper('.swiper-slider', {

loop: true,
slidesPerView: 1,
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

});
});