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

