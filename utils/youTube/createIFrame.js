import { assign } from "../assign.js"





let attrs = {}
let selectors = {}

function iFrame(idVideo, options){
    let iframe = assign(document.createElement('iframe'), {
        id: 'newsletterIFrame',
        className: "newsletterIFrame",
        src: `https://www.youtube.com/embed/${idVideo}`,
        ...options
    })

    selectors.videoId = idVideo
    selectors.id = `#${iframe.id}`
    return iframe
}

function mountIframe(parentNode, idVideo, options) {
    // let iframe = document.querySelectorAll('#iframe')

    // iframe.forEach(iframe => {
    //     iframe.before(iFrame('204SNfOLRoo', options))
    //     iframe.remove()
    //     setListener(selectors.id, setMouseLeave)
    //     mountIntersectionDesktop(selectors.id, selectors.videoId)
    // })
    let parent = document.querySelector(parentNode)
    if (document.querySelector(parentNode)) {
        parent.before(iFrame(idVideo, options))
        parent.remove()
        setListener(selectors.id, setMouseLeave)
        mountIntersectionDesktop(selectors.id, selectors.videoId)
    }

    return
}

function modalConfiguration(attributes) {
    let div = assign(document.createElement('div'), {
        id: 'configuration',
        className: 'configModal'
    })

    let divParameters = assign(document.createElement('div'), {
        innerText: "Change video parameters:",
        className: 'modal__parameters'
    })



    for (let index = 0; index < attributes.length; index++) {
        attrs = {
            ...attrs,
            [attributes[index].nodeName]: attributes[index].value
        }
    }
    delete attrs.id
    delete attrs.frameborder
    delete attrs.allow
    delete attrs.allowfullscreen



    for (const key in attrs) {
        let label = assign(document.createElement('label'), {
            innerText: `${key.charAt(0).toUpperCase() + key.slice(1)}:`,
            className: "label__parameters"
        })
        let input = assign(document.createElement('input'), {
            value: `${attrs[key]}`,
            className: "modal__input",
            id: "inputModal",
        })
        input.setAttribute("data-tag", key)

        let btn = assign(document.createElement('button'), {
            type: 'button',
            id: "iframeBtn",
            className: "my__btn__small",
            innerText: `Set ${key}`
        })

        label.append(input, btn)
        divParameters.append(label)
    }



    div.append(divParameters)
    return div
}


let active = false
function setListener(selector, cb) {
    document.querySelector(selector).addEventListener('mouseenter', (e) => {
        if (!active) {
            let wrapper = assign(document.createElement("div"), {
                id: "wrapper",
            })
            assign(wrapper.style, {
                position: 'relative',
                height: 'fit-content',
            })
            console.dir(e.target);
            e.target.before(wrapper)
            wrapper.append(e.target, modalConfiguration(e.target.attributes))
            cb(e.target)
            active = true
        }
    })
}

function setMouseLeave(elem) {
    document.querySelector("#wrapper").addEventListener('mouseleave', () => {
        document.querySelector("#configuration").remove()
        document.querySelector("#wrapper").before(elem)
        document.querySelector("#wrapper").remove()
        active=false
    })

    document.querySelectorAll("#iframeBtn").forEach(btn => btn.addEventListener('click', (e) => {
            newsletterIFrame.setAttribute(
                e.target.parentNode.querySelector('#inputModal').dataset.tag,
                e.target.parentNode.querySelector('#inputModal').value
            )
        })
    )
}



export {mountIframe}