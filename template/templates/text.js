




export function TEXT(trAttrs = {}, tdAttrs = {}, spanAttrs = {}) {
    return {
        tag: "tr",
        attributes: trAttrs,
        child: [
            {
                tag: "td",
                attributes: tdAttrs,
                child: [
                    {
                        tag: "span",
                        attributes: spanAttrs,
                        node: {
                            value: ""
                        }
                    },
                ]
            },
        ]
    }
}