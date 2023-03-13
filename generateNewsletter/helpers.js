import { addData, addTemplate } from "../Toast/customButtons.js"
import { config } from "../utils/config.js"
import { getElement } from "../utils/helpers.js"
import { storage } from "../utils/store.js"
import { mountIframe } from "../utils/youTube/createIFrame.js"
import { renderNewsletter } from "./generateNewsletter.js"

export function generate() {

    function init() {
        if (config.getImgNumbers() && config.getLinks().length && config.getTranslations().length) {
            if (config.getTemplate()) {
                // setTemplate()
                renderNewsletter({
                    template: storage.get("campaigns")[0].campaignTemplates[config.getTypeTemplate()],
                    selector: "#main"
                })
                mountIframe(
                    '#iframe',
                    "fgMCRXieDfw",
                    {
                        frameBorder: "0",
                        allow: 'autoplay',
                        allowFullscreen: 'true',
                    }
            
                    // new URL URLSearchParams
                )
            } else {
                new Toast({
                    message: "<h3>Template error.</h3> <br/> Please, go to Template and create a new one.",
                    type: "warning",
                    customButtons: [addTemplate],
                })
            }
        } else {
            new Toast({
                message: "<h3>Data error.</h3> <br/> Please, go to Add data and fill up data.",
                type: "warning",
                customButtons: [addData],
            })
        }
    }

    function setEvent() {
        if (getElement("#generate")) {
            getElement("#generate").addEventListener("click", () => init())
        } else {
            console.warn("There is no such selector.");
        }
    }

    setEvent()
}