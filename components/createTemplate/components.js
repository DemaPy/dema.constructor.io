import { getElement } from "../../utils/helpers.js"
import { createElement } from "./createComponent.js"






const components = [
    "div",
    "iframe",
    "tr",
    "td",
]





export function customComponent() {

    let createdComponents = []

    
    function init() {
        createdComponents.push(createElement("tr", {
            children: [createElement("td", {
                children: [createElement("span", {
                    children: [createElement("text")]
                })]
            })]
        }))
        console.log(createdComponents)
    }


    function setEvent() {
        getElement("#customComponent").addEventListener("click", () => {
            init()
        })
    }

    setEvent()
}