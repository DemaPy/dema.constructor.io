import { renderNewsletter } from "../../generateNewsletter/generateNewsletter.js";
import { getElement } from "../../utils/imports.js";
import { componentsTemplates } from "../componentsTemplates/configureData.js";
import { template } from "./createTemplate.js";

const selectedStyles = {
    a: [
        "fontSize",
        "fontFamily",
        "color",
        "letterSpacing",
        "textDecoration",
        "textTransform"
    ],
    img: [
        "display",
        "width",
        "height",
        "paddingTop",
        "paddingBottom",
        "paddingRight",
        "paddingLeft",
    ],
    span: [
        "fontSize",
        "fontFamily",
        "color",
        "letterSpacing",
    ],
    tr: [
        "backgroundColor",
    ],
    td: [
        "backgroundColor",

        "fontSize",
        "fontFamily",
        "color",
        "letterSpacing",

        "textAlign",
        "paddingTop",
        "paddingBottom",
        "paddingRight",
        "paddingLeft",
        "width",
        "display",
    ],
    table: [
        "backgroundColor",

        "fontSize",
        "fontFamily",
        "color",
        "letterSpacing",

        "margin",
        "marginTop",
        "marginBottom",
        "marginLeft",
        "marginRight",
        "maxWidth",
        "width",
        "display",
    ]
}


export function renderStyles(event, nestedObjects) {
    
    const element = event.target
    const elementStyle = element.style
    const number = element.dataset.number
    const parentNode = element.parentNode
    render()

    function render() {
        mount()
        let wrapper = document.createElement("div")

        let btnSaveStyles = document.createElement('button')
        btnSaveStyles.setAttribute('id', 'saveStyles')
        btnSaveStyles.setAttribute('class', 'my__btn__small')
        btnSaveStyles.append(document.createTextNode("Save Styles"))
        btnSaveStyles.addEventListener('click', () => getAllStyles())

        wrapper.setAttribute("class", "wrapperStyles")
        wrapper.setAttribute("id", "wrapperStyles")
        selectedStyles[parentNode.querySelector(".tag__name").textContent].forEach(style => {
            if (style in elementStyle) {
                let div = document.createElement("div")
                div.setAttribute('id', "styleBox")
    
                let p = document.createElement("p")
                p.setAttribute('class', "elementName")
                p.append(document.createTextNode(style))
    
                let input = document.createElement("input")
                input.setAttribute('class', "elementValue")
                console.log(nestedObjects)
                input.value = nestedObjects[number].style[style] || ""
    


                div.append(p)
                div.append(input)
                wrapper.append(div)
                wrapper.append(btnSaveStyles)

    
                parentNode.after(wrapper)
            }
        })
    }

    function assignStyles(objectStyles) {
        console.log(nestedObjects);
        console.log(number);
        nestedObjects[number].style = {
            ...nestedObjects[number].style,
            ...objectStyles
        }
    
        renderNewsletter(
            {
                template: template,
                selector: "#renderTemplate",
            }
        )
    }

    function getAllStyles() {
        let objectStyles = {}
        document.querySelectorAll("#styleBox").forEach(box => {
            objectStyles = {
                ...objectStyles,
                [box.querySelector(".elementName").textContent]: box.querySelector(".elementValue").value
            }
        })
        assignStyles(objectStyles)
    }
    
    function mount() {
        getElement('#styleSidebar').innerHTML = componentsTemplates["renderStyles"].html
    }

    function unMount() {
        getElement('#styleSidebar').innerHTML = ""
    }

    return getAllStyles
}