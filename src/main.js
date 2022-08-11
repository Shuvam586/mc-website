const event_page = document.getElementById('event-page')

function eventpagescroll() {
    event_page.scrollIntoView({
        behavior: 'smooth'
    })
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