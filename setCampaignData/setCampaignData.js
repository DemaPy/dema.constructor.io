import { storage, storageInit } from "../utils/store.js"
import { CTA } from "../cta/cta.js"
import { config } from "../utils/config.js"
import { setCampaignData } from "../changeCampaignData/changeCampaignData.js"

let values
export function setDataHandler(target, type) {
    const formData = new FormData(target)
    values = Object.fromEntries(formData.entries())

    if (type === "newCampaign") {
        const arr = [handleData(values)]
        storage.set("campaigns", arr)
    } else {
        let prevCampaigns = storage.get("campaigns")
        prevCampaigns.unshift(handleData(values))
        storage.set("campaigns", prevCampaigns)
        loadApp()
        storageInit()
    }
}

export function loadApp() {
    let {landing, firstBanner, secondBanner} = values
    
    setCampaignData({
        landing: CTA[config.getCountryUpperCase()].shopContent + landing,
        firstBanner: CTA[config.getCountryUpperCase()].shopContent + firstBanner,
        secondBanner: CTA[config.getCountryUpperCase()].shopContent + secondBanner,
        datanewsletter: {
            [config.getCountryUpperCase()]: {
                links: [],
                translations: [],
            }
        },
        datalanding: {
            [config.getCountryUpperCase()]: {
                links: [],
                translations: [],
            }
        },
    })
}




function handleData(values) {
    // Generate object campaignData
    let countryInit = "chde"
    let campaignData
    for (const iterator in values) {
        campaignData = {
            ...campaignData,
            country: countryInit,
            [iterator]: values[iterator],
            callToAction: CTA[countryInit.toUpperCase()],
        }
    }
    delete campaignData.campaignName

    // Set all data for the campaign
    let campaign = {
        campaignName: values.campaignName,
        campaignTemplates: {
            newsletter: [],
            landing: [],
        },
        campaignData
    }

    return campaign
}