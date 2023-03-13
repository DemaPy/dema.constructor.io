import { setCampaignTemplate } from "../../changeCampaignData/changeCampaignData.js"
import { config, separators } from "../../utils/config.js"
import { getElement, replace } from "../../utils/helpers.js"

export function updateImageField() {
    let value = config.getCampaignTemplates()[config.getImgName()]?.join(separators[config.getSeparator()])
    let result = "There is no image numbers yet."
    value ? result = value : result
    getElement("#configImgNumbers").value = result

    setEvent()
}


function setEvent() {
    getElement("#saveImgNumbers").addEventListener("click", () => {
        let textarea = getElement("#configImgNumbers")
        let fixedImgs = replace({
            data: textarea.value.split(config.imgSeparator),
            what: '"',
            to: ""
        })
        fixedImgs = replace({
            data: textarea.value.split(config.imgSeparator),
            what: ' ',
            to: ""
        })
        setCampaignTemplate({
            [config.getImgName()]: fixedImgs
        })
        new Toast({
            message: '<h3>Success</h3> <br/>Data has been saved.',
            type: 'success'
        });
    })
}