export function IMAGE(style) {
    return {
        tag: "tr",
        attributes: {},
        child: [
            {
                tag: "td",
                attributes: {
                    style: style.td
                },
                child: [
                    {
                        tag: "img",
                        attributes: {
                            width: '100%',
                            style: 'display: block;',
                            src: ""
                        }
                    }
                ]
            },
        ]
    }
}