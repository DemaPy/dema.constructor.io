

export function IMAGEWITHLINK(trAttrs = {}, tdAttrs = {}, aAttrs = {href: ""}, imgAttrs = {width: '100%', src: "", style: 'display: block;'}) {

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
                                tag: "img",
                                attributes: imgAttrs
                            }
                        ]
                    },
                ]
            },
        ]
    }
}