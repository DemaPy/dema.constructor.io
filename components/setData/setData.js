import { config } from "../../utils/config.js"
import { getCampaignData, getTrackingLink } from "../../utils/helpers.js"


export function setData({type, translations, links}) {
    let linksArr = []
    let textArr = []
    const imgLinks = generateImgs()

    if (type === config.NEWSLETTER) {
        translations.forEach(item => textArr.push(item))
        links.forEach(item =>  item.includes('?') ? linksArr.push(`${item}&${getTrackingLink()}`) : linksArr.push(`${item}?${getTrackingLink()}`))
    }

    if (type === config.LANDINGPAGE) {
        translations.forEach(item => textArr.push(item))
        links.forEach(item =>  linksArr.push(item))
    }
    
    return [textArr, linksArr, imgLinks]
}

function generateImgs() {
    let imgLinks = []
    let imageNumbers = config.getImgNumbers()
    
    imageNumbers.forEach((num) => {
        imgLinks.push(
            createImgLink(num)
        )
    })

    return imgLinks
}


function createImgLink(name, type = ".jpg") {
    return config.belianiYearLink() + getCampaignData().country + name
} 