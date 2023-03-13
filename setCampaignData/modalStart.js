import { componentsTemplates } from "../components/componentsTemplates/configureData.js"
import { init } from "../init/init.js"
import { getElement } from "../utils/helpers.js"
import { storage } from "../utils/store.js"
import { loadApp, setDataHandler } from "./setCampaignData.js"

let target


export function modalStart({ type }) {

    let element = getElement("#section__modal")
    element.addEventListener('click', (e) => {
        if (e.target === element) {
            unMount()
        }
    })

    function mount() {
        element.classList.remove("hide")
        element.classList.add("activeModal")
        startProject(element)
    }

    function unMount() {
        element.classList.add("hide")
        element.classList.remove("activeModal")
    }

    function startProject(parent) {
        parent.innerHTML = componentsTemplates["startProject"].html
    
        function setEvent() {
            getElement("#formStart").addEventListener('submit', (e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                let isValidInputs = Object.values(Object.fromEntries(formData.entries())).map(elem => !!elem).every(elem => elem === true)
                if (isValidInputs) {
                    target = e.target
                    createTemplateStep()
                }
            })
        }
        setEvent()
    }
    
    function createTemplateStep() {
        setDataHandler(target, type)
        unMount()
        loadApp()
        init()
    }

    mount()

}


export function addCampaign() {
    function init() {
        modalStart({
            type: "addCampaign", 
        })
    }


    function setEvent() {
        if (getElement("#addCampaign")) {
            getElement("#addCampaign").addEventListener("click", () => init())
        } else {
            console.warn("There is no such selector.");
        }
    }

    setEvent()


}

export function newCampaign() {
    function init() {
        storage.clear()
    }

    function setEvent() {
        if (getElement("#newCampaign")) {
            getElement("#newCampaign").addEventListener("click", () => init())
        } else {
            console.warn("There is no such selector.");
        }
    }

    setEvent()
}