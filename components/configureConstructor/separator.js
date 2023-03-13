import { getElement } from "../../utils/imports.js";
import { config } from "../../utils/config.js";
import { setSeparator } from "../../utils/store.js";



export function selectSeparator() {
    

    function setEvent() {
        getElement("#selectSeparator").addEventListener("change", (e) => {
            setSeparator(e.target.value)
            setCurrent()
        })
    }

    setEvent()
    function setCurrent() {
        getElement("#selectedSeparator").textContent = "Current: " + config.getSeparator()
    }

    setCurrent()
}