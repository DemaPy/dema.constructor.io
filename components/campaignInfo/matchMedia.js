import { getElement } from "../../utils/helpers.js";


export const queries = [
    {
        query: "(min-width: 1700px)",
        action: () => {
            console.log("1700px");
            addItem()
        }
    },
    {
        query: "(max-width: 1100px)",
        action: () => {
            console.log("1100px");
        }
    }
]


function createDropDown() {
    const parentNode = getElement(".campaign__info")
    const parentNodeItems = parentNode.children

    const div = document.createElement("div")
    div.setAttribute("class", "my__select__small")
    div.append(document.createTextNode("Campaign info"))


    function addItem() {
        console.log(parentNodeItems);

        div.innerHTML = ""

        // parentNodeItems.forEach(elem => {
        //     let infoContainer = document.createElement("div")
        //     infoContainer.append(document.createTextNode(elem))
        //     div.append(infoContainer)
        // })
    }
    parentNode.after(div)

    return addItem
}