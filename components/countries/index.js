import { countries } from "../../utils/config.js"
import { assign } from "../../utils/assign.js"
import { CTA } from "../../cta/cta.js"
import { getCampaignData, getElements, getElement } from "../../utils/helpers.js"
import { setCampaignData } from "../../changeCampaignData/changeCampaignData.js"
import { configureDataObserver } from "../setLinksTranslationsImg/index.js"
import { syncCampaignInfo } from "../campaignInfo/campaignInfo.js"
import { createObserver } from "../../utils/observer.js"



export const countryObserver = createObserver()
countryObserver.subscribe("setCountryUpdate", [setActiveCountry, syncCampaignInfo])


export function renderCountries() {
    getElement("#countryBox").innerHTML = ""

    let divTag = assign(document.createElement("div"), {
        className: "country__items"
    })

    generateCountries(divTag)
    getElement("#countryBox").append(divTag)
    syncStorageActiveCountry()
    getElements("#countryId").forEach(item => syncStorageData(item))
}

function generateCountries(parentTag) {
    
    for (const key in countries) {
        let pTag = assign(document.createElement("p"), {
            className: "country__p",
            id: "countryId",
            innerText: countries[key]
        })
        parentTag.append(pTag)
    }
}

function syncStorageActiveCountry() {
    getElements("#countryId").forEach(item => item.textContent.toLowerCase() === getCampaignData().country ? item.classList.add('country__p__active') : item.classList.remove('country__p__active'))
}

function syncStorageData(item) {
    item.addEventListener('click', (e)=> {
        setCampaignData({
            country: item.textContent.toLowerCase(),
            callToAction: CTA[item.textContent],
            landing: CTA[item.textContent].shopContent + getCampaignData().landing.slice(-10),
            firstBanner: CTA[item.textContent].shopContent + getCampaignData().firstBanner.slice(-10),
            secondBanner: CTA[item.textContent].shopContent + getCampaignData().secondBanner.slice(-10),
        })

            countryObserver.notify("setCountryUpdate", e)
            configureDataObserver.notify("configureDataMount")
            // countryObserver.notify("setCountryUpdate", e)
    })
}

function setActiveCountry(e) {
    getElements("#countryId").forEach(elem => {
        if (elem === e.target) {
            elem.classList.add('country__p__active')
        } else {
            elem.classList.remove('country__p__active')
        }
    })
}
