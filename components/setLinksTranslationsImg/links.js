import { setCampaignData } from "../../changeCampaignData/changeCampaignData.js"
import { config, separators } from "../../utils/config.js"
import { fixLinks, getCampaignData, getElement } from "../../utils/helpers.js"
import { isValid } from "../../utils/isValid.js"







export function updateLinkField() {
    getElement("#configLinks").value = setLinksFromStorage()

    function setLinksFromStorage() {
        if (config.getLinks().length) {
            return config.getLinks().join(separators[config.getSeparator()])
        } else {
            return "There is no links yet."
        }
    }

    setEvent()
}


function setEvent() {
    getElement("#saveLinks").addEventListener("click", () => {
        let links = getElement("#configLinks").value

        if (isValid(fixLinks(links))) {
            if (config.getDataCountry()) {
                setCampaignData({
                    [[config.getDataName()]]: {
                        ...getCampaignData()[config.getDataName()],
                        [config.getCountryUpperCase()] :{
                            ...config.getDataCountry(),
                             links: links.split("\n") //config.getSplitter({ type: "link" })
                        }
                    }
                })
                updateLinkField()
                new Toast({
                    message: '<h3>Success</h3> <br/>Data has been saved.',
                    type: 'success'
                });
            }
        } else {
            new Toast({
                message: `<h1>Link error.</h1> <br/>Country ${config.getCountryUpperCase()} doesn't correspond to some link.`,
                type: 'warning'
            });
        }
    })
}
