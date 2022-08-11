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

