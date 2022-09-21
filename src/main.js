// typing ghapla 
ityped.init('#club-tagline', {
    strings:['Learn.', 'Lark.', 'Luminate.'],
    startDelay: 500,
    loop: true,
    typeSpeed:  60,
    cursorChar: ""
});


// carousel ghapla
var swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 100,
    initialSlide: 0,
    
    autoHeight: false,
    
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
        delay: 5000,
    },
    autoplayStopOnLast: false, 
    
    effect: 'slide',
    
    spaceBetween: 60,
    slidesPerView: 2,
    centeredSlides: true,
    slidesOffsetBefore: 0,
    grabCursor: true,
});


//Code for color changing on scroll :-
function setColor() {
    theme = document.documentElement.getAttribute('data-theme');
    
    if(theme == 'dark') {
        document.getElementById('container').style.backgroundColor = 'rgb(33, 33, 33)';
        document.getElementById('container').style.color = 'rgb(255, 255, 255)';
    } else {
        document.getElementById('container').style.backgroundColor = 'rgb(255, 255, 255)';
        document.getElementById('container').style.color = 'rgb(33, 33, 33)';
    }
}

setColor();

document.querySelector('#container').addEventListener('scroll', function (){
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

//Code for dark mode :-
function transitionTheme(color) {
    elem = document.getElementById('container');
    if (color == 'black') {
        bg = 255;
        fg = 0;

        loop = setInterval(function() {
            elem.style.backgroundColor = 'rgb(' + bg + ', ' + bg + ', ' + bg + ')';
            elem.style.color = 'rgb(' + fg + ', ' + fg + ', ' + fg + ')';
            bg -= 15;
            fg += 15;
            if (bg == 0) {
                clearInterval(loop);
            }
        }, 5);
    } else if (color == 'white') {
        bg = 0;
        fg = 255;

        loop = setInterval(function() {
            elem.style.backgroundColor = 'rgb(' + bg + ', ' + bg + ', ' + bg + ')';
            elem.style.color = 'rgb(' + fg + ', ' + fg + ', ' + fg + ')';
            bg += 15;
            fg -= 15;
            if (bg == 255) {
                clearInterval(loop);
            }
        }, 5);
    }
}

function switchTheme() {
    val = document.documentElement.getAttribute('data-theme');

    if (val == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        transitionTheme('white');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        transitionTheme('black');
    }
}

// oporer buttons
function eventsScroll(){
    window.location.replace("#event-page");
}

// easter egg 1
function whoKnowsWhatThisIs() {
    window.location.replace("./eggs/thisisavoid.html");
}