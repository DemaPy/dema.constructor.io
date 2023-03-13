function Section(options) {
    const positions = [
        "afterend"
    ]
    if (!options.renderTo) {
        throw new Error('Section.js - You need to set renderTo parameter.');
    }

    if (!options.sections || options.sections.length < 2) {
        throw new Error('Section.js - You need to set at least 2 sections.');
    }

    init(options.renderTo)

    function init({to, removeChild}) {
        const parent = document.querySelector(to)
        if (parent) {
            if (removeChild) {
                parent.innerHTML = '';
                parent.append(createElement())
            } else {
                parent.append(createElement())
            }
            appendHtml()
        }
    }

    function createElement() {
        let element = document.createElement('div');
        element.setAttribute('class', "sections")
        element.setAttribute('id', "sections")

        let active = document.createElement('div');
        active.setAttribute("class", "active")
        element.append(active)

        return createSections(element)
    }

    function setOnClick(element, event) {
        element.addEventListener('click', (e) => event(e))
    }

    function createSections(element) {
        options.sections.forEach(section => {
            let span = document.createElement('span');
            span.textContent = section.title

            if (section.onClick) {
                setOnClick(span, section.onClick)
            }

            element.append(span)
        });

        return element
    }

    function appendHtml() {
        options.sections.forEach(section => {
            if (section.insertAdjacentHTML) {
                if (!section.insertAdjacentHTML.position && !section.insertAdjacentHTML.html) {
                    throw new Error('Section.js - You need to set position and html parameter.');
                } 

                if (!positions.includes(section.insertAdjacentHTML.position)) {
                    throw new Error('Section.js - Available position is "afterend".');
                }

                insertAdjacentHTML(section.insertAdjacentHTML.position, section.insertAdjacentHTML.html)
            }
        })

    }

    function insertAdjacentHTML(position, html) {
        document.querySelector("#sections").insertAdjacentHTML(position, html)
    }
}