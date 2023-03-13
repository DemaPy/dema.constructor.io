import { getElement } from "../../utils/helpers.js"
import { selectCountry } from "./country.js"
import { selectSeparator } from "./separator.js"








export function configureConstructor() {
    const element = getElement("#configure")

    element.addEventListener("click", () => {
        getElement(".configure").classList.toggle("none")

    })

    selectCountry()
    selectSeparator()
}



