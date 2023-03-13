import { componentsTemplates } from "../components/componentsTemplates/configureData.js"


export function render({
    html,
    to
}) {
    let element = document.querySelector(to)
    let oldHTML = document.querySelector(to).innerHTML
    
    if (!element) {
        new Toast({
            message: '<h3>There is no such selector.</h3> <br/>Please check selector that you provided.',
            type: 'warning'
        });
    }
    
    function mount() {
        // document.querySelector("#generate").classList.add("none")
        document.querySelector(to).innerHTML = ""
        Object.values(componentsTemplates[html]).forEach(content => element.innerHTML += content)
    }

    function unMount() {
        // document.querySelector("#generate").classList.remove("none")
        element.innerHTML = oldHTML
    }

    return {
        mount,
        unMount,
    }
}