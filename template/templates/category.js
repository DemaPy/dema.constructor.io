

const categoriesTemplates = {
    fourProducts: {
        tag: "tr", child: [
            {tag: "td", attributes: {
                align: 'center',
            }, child: [
                {tag: "table",
                attributes: {
                    cellspacing: 0,
                    cellpadding: 0,
                    border: 0,
                    align: 'center',
                    style: "margin: 0 auto; width: 100%;"
                },
                child: [
                    {tag: "tr", child: [
                        {tag: "td", child: [
                            {tag: "a", attributes: {
                                href: '',
                            }, child: [
                                {tag: "img",
                                attributes: {
                                    width: '100%',
                                    src: "",
                                    style: 'display: block;'
                                }}
                            ]},
                        ]},
                        {tag: "td", child: [
                            {tag: "a", attributes: {
                                href: '',
                            }, child: [
                                {tag: "img",
                                attributes: {
                                    width: '100%',
                                    src: "",
                                    style: 'display: block;'
                                }}
                            ]},
                        ]},
                    ]},
                    {tag: "tr", child: [
                        {tag: "td", child: [
                            {tag: "a", attributes: {
                                href: '',
                            }, child: [
                                {tag: "img",
                                attributes: {
                                    width: '100%',
                                    src: "",
                                    style: 'display: block;'
                                }}
                            ]},
                        ]},
                        {tag: "td", child: [
                            {tag: "a", attributes: {
                                href: '',
                            }, child: [
                                {tag: "img",
                                attributes: {
                                    width: '100%',
                                    src: "",
                                    style: 'display: block;'
                                }}
                            ]},
                        ]},
                    ]},
                ]},
            ]},
        ]
    },
    sixProducts: {
        tag: "tr", child: [
            {tag: "td", attributes: {
                align: 'center',
            }, child: [
                {tag: "table",
                attributes: {
                    cellspacing: 0,
                    cellpadding: 0,
                    border: 0,
                    align: 'center',
                    style: "margin: 0 auto; width: 100%;"
                },
                child: [
                    {tag: "tr", child: [
                        {tag: "td", child: [
                            {tag: "a", attributes: {
                                href: '',
                            }, child: [
                                {tag: "img",
                                attributes: {
                                    width: '100%',
                                    src: "",
                                    style: 'display: block;'
                                }}
                            ]},
                        ]},
                        {tag: "td", child: [
                            {tag: "a", attributes: {
                                href: '',
                            }, child: [
                                {tag: "img",
                                attributes: {
                                    width: '100%',
                                    src: "",
                                    style: 'display: block;'
                                }}
                            ]},
                        ]},
                    ]},
                    {tag: "tr", child: [
                        {tag: "td", child: [
                            {tag: "a", attributes: {
                                href: '',
                            }, child: [
                                {tag: "img",
                                attributes: {
                                    width: '100%',
                                    src: "",
                                    style: 'display: block;'
                                }}
                            ]},
                        ]},
                        {tag: "td", child: [
                            {tag: "a", attributes: {
                                href: '',
                            }, child: [
                                {tag: "img",
                                attributes: {
                                    width: '100%',
                                    src: "",
                                    style: 'display: block;'
                                }}
                            ]},
                        ]},
                    ]},
                    {tag: "tr", child: [
                        {tag: "td", child: [
                            {tag: "a", attributes: {
                                href: '',
                            }, child: [
                                {tag: "img",
                                attributes: {
                                    width: '100%',
                                    src: "",
                                    style: 'display: block;'
                                }}
                            ]},
                        ]},
                        {tag: "td", child: [
                            {tag: "a", attributes: {
                                href: '',
                            }, child: [
                                {tag: "img",
                                attributes: {
                                    width: '100%',
                                    src: "",
                                    style: 'display: block;'
                                }}
                            ]},
                        ]},
                    ]},
                ]},
            ]},
        ]
    },
    twoProducts: {
        tag: "tr",
        child: [
            {
                tag: "td",
                attributes: {
                    align: 'center',
                    class: "newsletterCategory",
                },
                child: [
                    {tag: "table",
                    attributes: {
                        cellspacing: 0,
                        cellpadding: 0,
                        border: 0,
                        align: 'center',
                        style: "margin: 0 auto; width: 100%;"
                    },
                    child: [
                        {tag: "tr",
                        child: [
                            {tag: "td",
                            child: [
                                {
                                    tag: "a",
                                    attributes: {
                                        href: '',
                                    },
                                    child: [
                                        {tag: "img",
                                        attributes: {
                                            width: '100%',
                                            src: "",
                                            style: 'display: block;',
                                        }}
                                    ]
                                },
                            ]},
                            {tag: "td", child: [
                                {tag: "a", attributes: {
                                    href: '',
                                }, child: [
                                    {tag: "img",
                                    attributes: {
                                        width: '100%',
                                        src: "",
                                        style: 'display: block;'
                                    }}
                                ]},
                            ]},
                        ]},
                    ]
                },
            ]},
        ]
    }
}



export function CATEGORY(type) {
    if (type in categoriesTemplates) {
        return categoriesTemplates[type]
    }
}





