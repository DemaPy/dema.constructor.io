import { setCampaignData } from "../../changeCampaignData/changeCampaignData.js";
import { config } from "../../utils/config.js";
import { getCampaignData, getElement } from "../../utils/helpers.js";
import { setCountries } from "../../utils/store.js";






export function selectCountry() {
    const options = Array.from(getElement("#selectCountiesOrdering").children)
    const selected = []

    renderFromStorage()

    options.forEach(element => element.addEventListener("click", (e) => {
            if (!selected.includes(e.target.textContent)) {
                selected.push(e.target.textContent)
            } else {
                const index = selected.indexOf(e.target.textContent)
                if (index > -1) { 
                    selected.splice(index, 1)
                }
            }
            render(selected)
        })
    )

    function renderFromStorage() {
        const countries = config.getCountriesOrdering()
        render(countries)
    }

    function render(data) {
        getElement("#selectedCountries").innerHTML= ""
        data.forEach(elem => {
            let div = document.createElement("div")
            div.append(document.createTextNode(elem))
            getElement("#selectedCountries").append(div)
        })


        if (selected.length === 18) {
            setData()
        }
    }

    function setData() {
        setCountries(selected)
        createIdsObject(selected)
    }
}

export function createIdsObject(selected) {
    let mainId = getCampaignData().campaignId
    let campaignIds
    for (let index = 0; index < 18; index++) {
        campaignIds = {
            ...campaignIds,
            [selected[index]]: mainId++
        }
    }

    setCampaignData({
        campaignIds: campaignIds
    })
}