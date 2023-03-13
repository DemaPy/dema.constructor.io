import { render } from "../../renderComponents/render.js"
import { setCampaignData } from "../../changeCampaignData/changeCampaignData.js"
import { config } from "../../utils/config.js"
import { getCampaignData, getElement } from "../../utils/helpers.js"
import { createObserver } from "../../utils/observer.js"
import { updateLinkField } from "./links.js"
import { updateTextField } from "./translation.js"
import { updateImageField } from "./image.js"

const {mount, unMount} = render({
    html: "configureData",
    to: "#main"
})

export const configureDataObserver = createObserver()
configureDataObserver.subscribe("configureDataMount", [addCountryData])
configureDataObserver.subscribe("configureDataUnMount", [unMount])




export function configureData() {

    new Section({
        renderTo: {
            to: "#main",
            removeChild: true
        },
        sections: [
            {
                title: "Links",
                onClick: (e) => {
                    getElement("#sections")?.nextElementSibling?.remove()
                    getElement("#sections").insertAdjacentHTML("afterend", `
                    <section class="configureData__section">
                        <textarea autocomplete="off" class="configureData__textfield" id="configLinks"></textarea>
                        <button type="button" id="saveLinks" class="my__btn">Save Links</button>
                    </section>
                    `)
                    isActive(e)
                    updateLinkField()
                },
            },
            {
                title: "Text",
                onClick: (e) => {
                    getElement("#sections")?.nextElementSibling?.remove()
                    getElement("#sections").insertAdjacentHTML("afterend", `
                    <section class="configureData__section">
                        <textarea autocomplete="off" class="configureData__textfield" id="configText"></textarea>
                        <button type="button" id="saveTranslations" class="my__btn">Save Translations</button>
                    </section>
                    `)
                    isActive(e)
                    updateTextField()
                },
            },
            {
                title: "Images",
                onClick: (e) => {
                    getElement("#sections")?.nextElementSibling?.remove()
                    getElement("#sections").insertAdjacentHTML("afterend", `
                    <section class="configureData__section">
                        <textarea autocomplete="off" class="configureData__textfield" id="configImgNumbers"></textarea>
                        <button type="button" id="saveImgNumbers" class="my__btn">Save Image Numbers</button>
                    </section>
                    `)
                    isActive(e)
                    updateImageField()
                },
            }
        ]
    })
    addCountryData()

    function isActive(e) {
        let active = getElement(".active")

        let childNodeWidth = e.target.getBoundingClientRect().width
        let children = Array.from(e.target.parentNode.children)
        let childInfex = children.indexOf(e.target)
        let difference = (childNodeWidth * childInfex) - childNodeWidth

        active.style.width = `${e.target.getBoundingClientRect().width}px`
        active.style.height = `${e.target.getBoundingClientRect().height}px`

        active.style.left = `${difference}px`
    }

    // configureDataObserver.notify("configureDataUnMount")


}

function addCountryData() {
    if (!config.getDataCountry()) {
        setCampaignData({
            [config.getDataName()]: {
                ...getCampaignData()[config.getDataName()],
                [config.getCountryUpperCase()]: {
                    links: [],
                    translations: [],
                }
            }
        })
    }
}
