




export function IFRAME(trAttrs = {}, tdAttrs = {}) {


    return {
        tag: "tr",
        attributes: trAttrs,
        child: [
            {
                tag: "td",
                attributes: tdAttrs,
                child: [
                    {
                        tag: "ifarme",
                        attributes: {
                            id: 'iframe',
                        }
                    }
                ]
            },
        ]
    }
}