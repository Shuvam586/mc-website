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
    }
});


//Code for color changing on scroll :-
function setColor() {
    theme = document.documentElement.getAttribute('data-theme');
    
    if(theme == 'dark') {
        document.getElementById('container').style.backgroundColor = 'rgb(0, 0, 0)';
        document.getElementById('container').style.color = 'rgb(255, 255, 255)';
    } else {
        document.getElementById('container').style.backgroundColor = 'rgb(255, 255, 255)';
        document.getElementById('container').style.color = 'rgb(0, 0, 0)';
    }
}

setColor();

document.getElementById('container').addEventListener('scroll', function (){
    theme = document.documentElement.getAttribute('data-theme');

    if (theme == 'dark') {
        initial = 0;
        i2 = 255;
        k = 255;
        k2 = -255;
    } else {
        initial = 255;
        i2 = 0;
        k = -255;
        k2 = 255;
    }

    height = parseInt(document.getElementById('container').scrollHeight) - parseInt(window.innerHeight);
    percent = (document.getElementById('container').scrollTop) / height;
    final = Math.floor(initial + (percent * k));
    fg = Math.floor(i2 + (percent * k2));
    console.log(fg);

    document.getElementById('container').style.backgroundColor = 'rgb(' + final + ', ' + final + ', ' + final + ')';
    document.getElementById('container').style.color = 'rgb(' + fg + ', ' + fg + ', ' + fg + ')';
});