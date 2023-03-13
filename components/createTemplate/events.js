import { setCampaignTemplate } from "../../changeCampaignData/changeCampaignData.js";
import { config, getElement, storage } from "../../utils/imports.js";
import { logicForDetailClick, logicForHoverDetails, logicForLeaveDetails, logicForTemplate, relativeTemplate, template } from "./createTemplate.js";
import { renderSidebarComponent } from "./renderSidebarComponents.js";

export function onSaveTemplate() {
    getElement('#saveTemplate').addEventListener('click', () => {
        if (template.length) {
            setCampaignTemplate({
                [config.getTypeTemplate()]: template
            })
        }
    })
}



export function onClickComponent() {
    const ids = [
        "#category",
        "#text",
        "#textWithLink",
        "#img",
        "#imgWithLink",
        "#table"
    ]

    ids.forEach(id => getElement(id).addEventListener("click", (e) => {
        logicForTemplate(e)
        renderSidebarComponent(e)
        setEventsSidebar()
    }))

}

export function onClickDetails(tag) {
    tag.addEventListener('toggle', (e) => {
        if (e.target.open) {

            document.querySelectorAll(".details").forEach(item => {
                if (item === e.target) {
                    logicForDetailClick(relativeTemplate[e.target.parentNode.querySelector(".summary").dataset.element], e)
                    return
                } else {
                    item.open = false
                }
            })

        }
    })
}



function onHoverDetails(e) {
    // e.target.parentNode.parentNode.querySelector(".imgTrash").classList.add("active")
    logicForHoverDetails(e)
}

function onLeaveDetails(e) {
    logicForLeaveDetails(e)
    // e.target.parentNode.parentNode.querySelector(".imgTrash").classList.remove("active")
}


export function setEventsSidebar() {


    // document.querySelectorAll(".imgTrash").forEach(trash => trash.addEventListener('click', (e) => {
    //     template.length = 0
    //     templateStates.pop()
    //     relativeTemplate.pop()
    //     template.push(templateStates[templateStates.length - 1])
    //     console.log(template)
    //     update("campaign")
    //     prevStateSidebarTags()
    // }, false))
    document.querySelectorAll(".summary").forEach(detail => detail.addEventListener('mouseover', onHoverDetails))
    document.querySelectorAll(".summary").forEach(detail => detail.addEventListener('mouseleave', onLeaveDetails))
}