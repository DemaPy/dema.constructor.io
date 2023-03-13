import { getCampaignData } from "./helpers.js"

export function isValid(links) {
    let linksArray = links
    let result = linksArray.map(link => link.includes(`${getCampaignData().callToAction.shopLink}`))

    if (result.every(item => item === true)) {
        return true
    } else {
        return false
    }
}