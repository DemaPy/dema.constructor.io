import { campaignInfo } from "../campaignInfo/campaignInfo.js";
import { configureDataObserver } from "../setLinksTranslationsImg/index.js";
import { config } from "../../utils/config.js";
import { setTemplateType, storage } from "../../utils/store.js";
import { getElement } from "../../utils/helpers.js";


export function renderSelect() {

    showTemplates.innerHTML = ''
    for (const key in storage.get("campaigns")) {

        let option = document.createElement("option")
        option.value= storage.get("campaigns")[key].campaignName
        option.textContent= storage.get("campaigns")[key].campaignName

        showTemplates.append(option)
    }

    showTemplates.addEventListener('change', () => {

        let campaigns = storage.get("campaigns")
        let campaignData
        for (let index = 0; index < campaigns.length; index++) {
            if (campaigns[index].campaignName === showTemplates.value) {
                campaignData = {
                    index,
                    campaign: campaigns[index]
                }
            }
        }
        if (campaignData.index > -1) { 
            campaigns.splice(campaignData.index, 1)
        }
        campaigns.unshift(campaignData.campaign)
        storage.set("campaigns", campaigns)
        campaignInfo()
    })

    select.addEventListener('click', () => {
        setTemplateType(select.value)
        if (getElement("#setData").dataset.componentStatus === "mount") {
            configureDataObserver.notify("configureDataMount")
        }
    })
    select.value = config.getTypeTemplate()
}