import { setData } from "../components/setData/setData.js"
import { config } from "../utils/config.js"
import { getElement } from "../utils/imports.js"

export function renderNewsletter({ template, selector }) {
    let result = []

    let [textArr, linksArr, imgLinks] = setData({
        type: config.getTypeTemplate(),
        translations: config.getTranslations(),
        links: config.getLinks()
    })

    template.forEach(block => {
        result.push(render(block))
    })

    function render(obj) {
        let element
    
        for (const iterator in obj) {
    
            if (iterator === "tag") {
                element = document.createElement(obj[iterator])
            }
    
            if (iterator === "attributes") {
                for (const key in obj[iterator]) {
    
                    if (key === "href") {
                        element.setAttribute(key, linksArr[0])
                        linksArr.shift()
                    } else if (key === "src") {
                        element.setAttribute(key, imgLinks[0])
                        imgLinks.shift()
                    } else {
                        element.setAttribute(key, obj[iterator][key])
                    }
                    
                }
            }
    
            if (iterator === "className") {
                Object.assign(element, {
                    [iterator]: obj[iterator]
                }) 
            }
    
            if (iterator === "style") {
                Object.assign(element.style, obj[iterator])
            }
    
            if (iterator === "child") {
                if (obj[iterator].length) {
                    obj[iterator].forEach(item => element.append(render(item)))
                }
            }
    
            if (iterator === "node") {
                for (const key in obj[iterator]) {
                    obj[iterator][key] = textArr[0]
                    textArr.shift()
                    element.append(document.createTextNode(obj[iterator][key]))
    
                }
            }
    
        }
    
        return element
    }

    if (selector) {
        getElement(selector).innerHTML = ""
        result.forEach(block => getElement(selector).append(block))
    } else {
        return result
    }
}