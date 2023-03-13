import { config } from "../../utils/config.js"
import { getElement } from "../../utils/helpers.js"
import { setTheme } from "../../utils/store.js"

const themes = {
    dark: {
        '--sectionBgColor':'rgb(36, 36, 36)',
        '--appBgColor':'rgb(51,51,51)',
        '--fontColor':'rgb(252, 252, 252)',
        '--violet':'#8167a9',
    },
    light: {
        '--sectionBgColor': 'white',
        '--appBgColor': 'rgb(233, 233, 233)',
        '--fontColor': 'rgb(20, 23, 35)',
        '--violet': 'orange',
    }
}

export function changeTheme() {

    function toggle() {
        let type = config.getTheme()
        if (type === 'dark') {
            iterateTheme(themes.light)
            setTheme("light")
        } else if (type === 'light') {
            iterateTheme(themes.dark)
            setTheme("dark")
        }
    }

    function setEvent() {
        if (getElement("#changeTheme")) {
            getElement("#changeTheme").addEventListener("click", () => toggle())
        } else {
            console.warn("There is no such selector.");
        }
    }

    function setCurrentTheme() {
        iterateTheme(themes[config.getTheme()])
        setTheme(config.getTheme())
    }

    setCurrentTheme()
    setEvent()
}

function iterateTheme(theme) {
    for (const key in theme) {
        document.documentElement.style.setProperty(key, theme[key])
    }
}

