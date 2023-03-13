import { assign } from "../../utils/assign.js"
import { setCampaignTemplate } from "../../changeCampaignData/changeCampaignData.js"
import { config } from "../../utils/config.js"




function renderNumbers() {
    generateNumbers(imgNumbers)
}


function generateNumbers(parentTag) {

    for (let index = 1; index < 60; index++) {
        if (index < 10) {
            let pTag = assign(document.createElement("p"), {
                className: "imgNumber",
                innerText: `0${index}`
            })
            parentTag.append(pTag)
        } else {
            let pTag = assign(document.createElement("p"), {
                className: "imgNumber",
                innerText: index
            })
            parentTag.append(pTag)
        }

    }
}


function setEventImgNumbers() {
    const numbers = []

    document.querySelectorAll(".imgNumber").forEach(elem => elem.addEventListener("click", (e) => {
            if (e.target.classList.contains("imgNumber__active")) {
                e.target.classList.remove("imgNumber__active");

                const index = numbers.indexOf(e.target.textContent)
                if (index > -1) { 
                    numbers.splice(index, 1)
                }
            } else {
                numbers.push(e.target.textContent)
                e.target.classList.add("imgNumber__active")
            }
        })
    )

    function setData() {
        setCampaignTemplate({
            [config.getImgName()]: numbers
        })
    }

    return setData
}


export {renderNumbers, setEventImgNumbers}