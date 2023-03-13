// Youtube link should have this link https://www.youtube.com/embed/ with all www, https and embed
// also query parameters like enablejsapi=1, mute=1 for autoplay, loop=1 for looping with playlist="idVideo"
// https://www.youtube.com/embed/${idVideo}?enablejsapi=1&mute=1&playlist=${idVideo}&loop=1
// Documentation: https://developers.google.com/youtube/player_parameters



const selectorss = ["player"]

function onYouTubeIframeAPIReady() {
    selectorss.forEach(selector => {
        new YT.Player(selector, {
            events: {
                'onReady': saveEvent,
            }
        })
    })
}

let eventOnReadyArr = []
function saveEvent(event) {
    eventOnReadyArr.push(event.target)
}

function mountIntersectionMobile() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function play() {
    eventOnReadyArr.forEach(event => {
        event.playVideo()
    })
}

function handleIntersectingMobile(elements, observer) {
    elements.forEach(item => {
        if (item.isIntersecting) {
            play()
        }
    })
}

const observerMobile = new IntersectionObserver(handleIntersectingMobile)
window.onload = () => {
    selectorss.forEach(frame => observerMobile.observe(document.querySelector("#"+frame)))
}
mountIntersectionMobile(selectorss)