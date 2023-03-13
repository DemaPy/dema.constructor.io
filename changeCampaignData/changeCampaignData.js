import { storage } from "../utils/store.js"



export function setCampaignData(data) {

    let campaigns = storage.get("campaigns")
    let {campaignName, campaignData, campaignTemplates} = campaigns[0]


    campaigns[0] = {
        campaignName,
        campaignTemplates,
        campaignData: {
            ...campaignData,
            ...data
        }
    }


    storage.set("campaigns", campaigns)

    return setCampaignData
}

export function setCampaignTemplate(data) {

    let campaigns = storage.get("campaigns")
    let {campaignName, campaignData, campaignTemplates} = campaigns[0]


    campaigns[0] = {
        campaignName,
        campaignTemplates: {
            ...campaignTemplates,
            ...data,
        },
        campaignData,
    }

    storage.set("campaigns", campaigns)
}