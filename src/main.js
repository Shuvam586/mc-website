const event_page = document.getElementById('event-page')
const core_committee = document.getElementById('core-page')
const dark_page = document.getElementById('about-us-dark')
const content_page = document.getElementById('content-team-page')
function pagescroll(variable) {
    switch (variable) {
        case 'events':
            console.log('event')
            event_page.scrollIntoView({
                behavior: 'smooth'
            })
            break
        case 'core':
            core_committee.scrollIntoView({
                behavior: 'smooth'
            })
            break
        case 'dark':
            dark_page.scrollIntoView({
                behavior: 'smooth'
            })
            break
        case 'content':
            content_page.scrollIntoView({
                behavior: 'smooth'
            })
            break
    }
}

const intro = document.getElementById('main-page')
/*let wantedY = 0;
intro.addEventListener('scroll',()=> { 
    wantedY = window.scrollY
    if (wantedY == 25*window.innerHeight) { 
        event_page.scrollIntoView({
            behavior : 'smooth'
        })
    }

    
})*/
var club_title = document.getElementById('club-title')


// events page carousel

const slider = document.querySelector('.events-gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

var maths_title = new Typed('#club-title', {
    strings: ["Maths Club","DPSRPK"],
    loop : true,
    startDelay : 500,
    typeSpeed: 200,
    backDelay : 700,
    backSpeed : 150,
    showCursor : false
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

//Code for dark mode :-
function switchTheme() {
    val = document.documentElement.getAttribute('data-theme');

    if (val == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        
        document.getElementById('container').style.backgroundColor = 'rgb(255, 255, 255)';
        document.getElementById('container').style.color = 'rgb(0, 0, 0)';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        
        document.getElementById('container').style.backgroundColor = 'rgb(0, 0, 0)';
        document.getElementById('container').style.color = 'rgb(255, 255, 255)';
    }
}