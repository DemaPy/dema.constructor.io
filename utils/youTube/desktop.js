// Youtube link should have this link https://www.youtube.com/embed/ with all www, https and embed
// also query parameters like enablejsapi=1, mute=1 for autoplay, loop=1 for looping with playlist="idVideo"
// https://www.youtube.com/embed/${idVideo}?enablejsapi=1&mute=1&playlist=${idVideo}&loop=1
// Documentation: https://developers.google.com/youtube/player_parameters

const selectors = ["id of your iframe"]


function mountIntersectionDesktop(selector, idVideo) {
    const cb = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = `https://www.youtube.com/embed/${idVideo}?enablejsapi=1&mute=1&playlist=${idVideo}&loop=1`;
                observer.unobserve(entry.target)
            } 
        })
    }
    const frameObserver = new IntersectionObserver(cb)


    selector.forEach(frame => frameObserver.observe(document.querySelector("#"+frame)))
}

mountIntersectionDesktop(selectors)