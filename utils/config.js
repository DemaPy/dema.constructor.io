import { getCampaignData } from "./helpers.js"
import { storage } from "./store.js"

export const separators = {
    newLine: "\n",
    tab: "\t",
    space: " ",
}

export const countries = [
    "CHDE",
    "CHFR",
    "DE",
    "UK",
    "FR",
    "AT",
    "ES",
    "PL",
    "NL",
    "IT",
    "PT",
    "SE",
    "HU",
    "DK",
    "CZ",
    "FI",
    "NO",
    "SK",
]

export const config = {
    linkSeparator: '\n',
    textSeparator: '\n',
    productSeparator: '\n',
    imgSeparator: '\n',
    NEWSLETTER: 'newsletter',
    LANDINGPAGE: 'landing',
    BANNERFIRST: 'firstBanner',
    BANNERSECOND: 'secondBanner',
    SOONENDING: 'soonEnding',
    CTA: {
        SHOPNOW: 'shopNow',
        SEEMORE: 'seeMore',
        WATCHNOW: 'watchNow',
        GETCODE: 'getCode',
        GETCODES: 'getCodes',
        CHOOSEFROM: 'chooseFrom',
        INTERESTEDIN: "interestedIn",
        SHOPALLCATEGORIES: 'shopAllCategories',
    },

    belianiYearLink: (year = "2022") => {
        return `https://beliani.info/newsletter/${year}/`
    },
    getId: () => {
        return storage.get("ids")[storage.get("campaigns")[0].campaignName][getCampaignData().country]
    },
    getCampaignName: () => {
        return storage.get("campaigns")[0].campaignName
    },
    getCountryUpperCase: () => {
        return getCampaignData().country.toUpperCase()
    },
    getCountriesOrdering: () => {
        return storage.get("config").countries 
    },
    getSeparator: () => {
        return storage.get("config").separator.type 
    },
    getTypeTemplate: () => {
        return storage.get("config").templateType.type
    },
    getTheme: () => {
        return storage.get("config").theme.type
    },
    getCampaignTemplates: () => {
        return storage.get("campaigns")[0].campaignTemplates
    },
    getCampaigns: () => {
        return storage.get("campaigns")
    },
    getTemplate: () => {
        let template = config.getCampaignTemplates()[config.getTypeTemplate()]
        if (template.length) {
            return template
        } else {
            return false
        }
    },
    getImgNumbers: () => {
        let images = config.getCampaignTemplates()[config.getImgName()]
        if (images) {
            return images
        } else {
            return false
        }
    },
    getDataCountry: () => {
        return getCampaignData()[config.getDataName()][config.getCountryUpperCase()]
    },
    getLinks: () => {
        let links = config.getDataCountry()?.links
        if (links) {
            return links
        } else {
            return false
        }
    },
    getTranslations: () => {
        let translations = config.getDataCountry()?.translations
        if (translations) {
            return translations
        } else {
            return false
        }
    },
    getImgName: () => {
        return `imgNumbers${config.getTypeTemplate()}`
    },
    getDataName: () => {
        return `data${config.getTypeTemplate()}`
    },
    availableTypes: {
        name: "name",
        offerName: "offerName",
        lowPrice: "lowPrice",
        hightPrice: "hightPrice",
        productUrl: "productUrl",
        categoryProductUrl: "categoryProductUrl",
        categoryUrl: "categoryUrl",
        roomUrl: "roomUrl",
    }
}