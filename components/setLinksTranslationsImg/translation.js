import { setCampaignData } from "../../changeCampaignData/changeCampaignData.js"
import { config, separators } from "../../utils/config.js"
import { getCampaignData, getElement } from "../../utils/helpers.js"








export function updateTextField() {
    getElement("#configText").value = setTranslations()

    function setTranslations() {
        if (config.getTranslations().length) {
            return [
                config.getTranslations().join(separators[config.getSeparator()])
            ]
        } else {
            return "There is no translations yet."
        }
    }

    setEvent()
}


function setEvent() {
    getElement("#saveTranslations").addEventListener("click", () => {
        setCampaignData({
            [config.getDataName()]: {
                ...getCampaignData()[config.getDataName()],
                [config.getCountryUpperCase()] : {
                    ...config.getDataCountry(),
                    translations: getElement("#configText").value.split(config.textSeparator),
                }
            }
        })
        new Toast({
            message: '<h3>Success</h3> <br/>Data has been saved.',
            type: 'success'
        });
    })
}