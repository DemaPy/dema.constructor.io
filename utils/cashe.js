







export function cache() {

    const chache = {}
    return function (value) {
        if (value in chache) {
            return chache[value]
        }
        chache[value] = document.querySelector(value)
        return chache[value]
    }
}