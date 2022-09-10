// typing ghapla 

ityped.init('#club-tagline', {
    strings:['Learn.', 'Lark.', 'Luminate.'],
    startDelay: 500,
    loop: true,
    typeSpeed:  60,
    cursorChar: ""
});


// carousel ghapla
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 60,
    autoplay: 1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});