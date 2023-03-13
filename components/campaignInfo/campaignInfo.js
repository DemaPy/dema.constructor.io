import { setCampaignData } from "../../changeCampaignData/changeCampaignData.js";
import { config } from "../../utils/config.js";
import { getCampaignData, getElement } from "../../utils/helpers.js";



export function campaignInfo() {
    getElement("[name='name']").textContent = config.getCampaignName()
    getElement("[name='name']").href = getCampaignData().trelloUrl
    getElement("[name='landing']").textContent = getCampaignData().landing.slice(-10)
    getElement("[name='firstBanner']").textContent = getCampaignData().firstBanner.slice(-10)
    getElement("[name='secondBanner']").textContent = getCampaignData().secondBanner.slice(-10)
    getElement("#campaignId").textContent = getCampaignData()?.campaignIds[config.getCountryUpperCase()]


    getElement("[name='landing']").addEventListener('click', (e) => {
        e.target.setAttribute('contenteditable', 'true')
        e.target.focus()
    })

    getElement("[name='landing']").addEventListener('blur', (e) => {
        e.target.removeAttribute("contenteditable")
        setCampaignData({[e.target.attributes.name.textContent]: e.target.textContent})
    })

    getElement("[name='firstBanner']").addEventListener('click', (e) => {
        e.target.setAttribute('contenteditable', 'true')
        e.target.focus()
    })

    getElement("[name='firstBanner']").addEventListener('blur', (e) => {
        e.target.removeAttribute("contenteditable")
        setCampaignData({[e.target.attributes.name.textContent]: e.target.textContent})
    })

    getElement("[name='secondBanner']").addEventListener('click', (e) => {
        e.target.setAttribute('contenteditable', 'true')
        e.target.focus()
    })

    getElement("[name='secondBanner']").addEventListener('blur', (e) => {
        e.target.removeAttribute("contenteditable")
        setCampaignData({[e.target.attributes.name.textContent]: e.target.textContent})
    })

}


export function syncCampaignInfo() {
    getElement("#campaignId").textContent = getCampaignData().campaignIds[config.getCountryUpperCase()]
    getElement("#campaignId").href = `https://www.prologistics.info/news_email.php?id=${getCampaignData().campaignIds[config.getCountryUpperCase()]}`
}