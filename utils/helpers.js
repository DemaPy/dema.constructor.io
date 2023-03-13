import { cache } from "./cashe.js";
import { config } from "./config.js";
import { storage } from "./store.js"


export function getElement(element) {
    const cashedSelector = cache()
    return cashedSelector(element)
}

export function getElements(element) {
    return document.querySelectorAll(element)
}

export function getCampaignData() {

    if (storage.get("campaigns")) {
        return storage.get("campaigns")[0].campaignData
    } else {
        new Toast({
            message: '<h3>Local storage error.</h3> <br/> Try to delete all data from Local Storage. <br /> Click F12 -> Application -> Local Storage -> Right click -> Clear',
            type: 'warning'
        });
    }
}

export function getTrackingLink() {
    const params = {
        utm_source: "newsletter",
        utm_medium: "email",
        utm_campaign: getCampaignData().campaignIds[config.getCountryUpperCase()]
    }
    return new URLSearchParams(params).toString()
}

export function replace({
    data, what, to
}) {
    return data.map(item => item.replaceAll(`${what}`, `${to}`))
}

export function getNestedObjects() {
    let result = []


    function find(obj) {
        for (const iterator in obj) {
            if (iterator === "tag") {
                result.push(obj)
            }
    
            if (iterator === "child") {
                if (obj[iterator].length) {
                    obj[iterator].forEach(item => find(item))
                }
            }
        }
    }


    return [result, find]
}

export function getTagsFromObj() {
    let result = []


    function find(obj) {
        for (const iterator in obj) {
            if (iterator === "tag") {
                result.push(obj[iterator])
            }
    
            if (iterator === "child") {
                if (obj[iterator].length) {
                    obj[iterator].forEach(item => find(item))
                }
            }
        }
    }


    return [result, find]
}

export function getAllTag(tag, from) {
    if (Array.isArray(from)) {
        let result = []
        from.forEach(obj => {
            iterateObject(obj)
        })
    
        function iterateObject(obj) {
            if (obj.tag === tag) {
                console.log()
                result.push(obj)
            }
    
            if (obj.child) {
                iterateChildrens(obj.child)
            }
        }
    
        function iterateChildrens(children) {
            children.forEach(obj => {
                iterateObject(obj)
            })
        }
        return result
    } else {
        new Toast({
            message: '<h3>Type error.</h3> <br/> Second argument must be Array.',
            type: 'warning'
        });
    }

}

export function fixLinks(link) {
    return link.split(config.linkSeparator)
            .filter((str) => str !== '')
                .map(link => link.replace(/http/,'https').replace(/httpss/,'https'))
                    .map(link => link.replace(/htmll/,'html').replace(/htmll/,'html'))
                        .map(link => link.replace(/htm/,'html').replace(/htmll/,'html'))
}

export async function filter({ type, data }) {
    return data.map(obj => obj[type])
}