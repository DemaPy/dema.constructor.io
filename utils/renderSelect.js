import { configureDataObserver } from "../components/setLinksTranslationsImg/index.js";
import { setCountrySelector } from "../setCampaignData/setCountry.js";
import { config } from "./config.js";
import { storage } from "./store.js";


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
    })

    select.addEventListener('click', () => {
        storage.set('templateType', {type: select.value})
        if (setCountrySelector("#setData") === "unMount") {
            configureDataObserver.notify("configureDataMount")
        }
    })
    select.value = config.getTypeTemplate()
}