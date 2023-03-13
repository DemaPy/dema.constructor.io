import { createIdsObject } from "../components/configureConstructor/country.js"
import { modalStart } from "../setCampaignData/modalStart.js"
import { config, countries } from "./config.js"
import { getElement } from "./helpers.js"


export const storage = {
    get: function(k) {
        return JSON.parse(localStorage.getItem(k))
    },
    set: function(k, v) {
        if (typeof v === 'object') {
            localStorage.setItem(k, JSON.stringify(v))
        } else {
            new Toast({
                message: '<h3>Local storage error.</h3> <br/> Please set data only object.',
                type: 'warning'
            });
        }
    },
    clear: function() {
        let toast = new Toast({
            message: '<h3>Please confirm.</h3> <br/> All data will be lost.',
            type: 'danger',
            customButtons: [
                {
                  text: 'Yes, delete data.',
                  onClick: function() {
                    localStorage.clear()
                    modalStart({
                        type: "newCampaign",
                    })
                  }
                },
                {
                  text: 'No, close modal.',
                  onClick: function() {
                    toast._close()
                  }
                }
            ]
        });
    },
    remove: function(k) {
        return localStorage.removeItem(k)
    }
}

export const action = {
    copy: function() {
        navigator.clipboard.writeText(getElement("#newsletter").innerHTML)
    },
    deleteHtml: function(element = "#newsletter") {
        if (getElement(element)) {
            getElement(element).innerHTML = ''
        }
    },
    setEvent: () => {
        getElement("#copyTemplate").addEventListener("click", () => action.copy())
    }
}






export function storageInit() {
    setSeparator("newLine")
    setTheme("dark")
    setTemplateType(config.NEWSLETTER)
    setCountries(countries)
}

function setStorageConfig(key, value) {
    storage.set("config", {
        ...storage.get("config"),
        [key]: value,
    });
}

export function setTheme(value) {
    setStorageConfig("theme", { type: value });
}

export function setCountries(value) {
    setStorageConfig("countries", value);
    createIdsObject(value)
}

export function setTemplateType(value) {
    setStorageConfig("templateType", { type: value });
}

export function setSeparator(value) {
    setStorageConfig("separator", { type: value })
}