export function createElement(type, options) {
    const obj = {
        tag: type,
        attributes: options?.props || {},
        child: options?.children || []
    }
    return obj
}


function toHtml(obj) {
    const element = document.createElement(obj.tag);
    Object.assign(element, obj.attributes)
    obj.child.length && obj.child.forEach(child => element.append(toHtml(child)))
    return element
}

// const table = toHtml(createElement("table", {className: "newsletterTable", align: 'center'}, [
//     createElement("tr", {className: "newsletterTr"}, [
//         createElement("td", {className: "newsletterTd"})
//     ]),
//     createElement("tr", {className: "newsletterTr"}),
// ]))

// console.log(table)