



export function useMatchMedia(queries) {
    const mediaQueryList = queries.map(({ query, action }) => {
        return [window.matchMedia(query), action]
    })

    mediaQueryList.forEach(([ matches, action ]) => matches.addEventListener("change", (e) => {
        action()
    }))
}