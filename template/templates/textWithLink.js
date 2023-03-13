export function TEXTWITHLINK(trAttrs = {}, tdAttrs = {}, aAttrs = {href: ""}, spanAttrs = {}) {
    return {
        tag: "tr",
        attributes: trAttrs,
        child: [
            {
                tag: "td",
                attributes: tdAttrs,
                child: [
                    {
                        tag: "a",
                        attributes: aAttrs,
                        child: [
                            {
                                tag: "span",
                                node: {
                                    value: ""
                                },
                                attributes: spanAttrs
                            },
                        ]
                    },
                ]
            },
        ]
    }
}