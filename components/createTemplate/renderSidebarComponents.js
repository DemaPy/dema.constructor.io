import { getElement } from "../../utils/imports.js"
import { onClickDetails } from "./events.js"
import { logicForDelete, relativeTemplate } from "./createTemplate.js"




export function renderSidebarComponent(event) {
    getElement("#tagsSidebar").append(createElement(event))
}

export function removeSidebarComponent(event) {
    event.target.parentNode.remove()
}

function createElement(event) {
    let div = document.createElement("div")
    div.setAttribute("class", "containerTagImg")

    let details = document.createElement('details')
    details.setAttribute("class", "details")
    onClickDetails(details)
    
    let summary = document.createElement('summary')
    summary.setAttribute("class", "summary")
    summary.append(document.createTextNode(event.target.textContent))
    summary.setAttribute("data-element", relativeTemplate.length - 1)

    let divInside = document.createElement('div')
    divInside.setAttribute('id', "divInside")

    let img = document.createElement("img")
    img.setAttribute("src", '../../src/img/delete.png')
    img.setAttribute("class", 'imgTrash')
    img.addEventListener('click', (e) => {
        logicForDelete(e)
        removeSidebarComponent(e)
    })

    details.append(summary)
    details.append(divInside)
    div.append(details)
    div.append(img)

    return div
}