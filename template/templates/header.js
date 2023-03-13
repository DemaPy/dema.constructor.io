import { getCampaignData, getTrackingLink } from "../../utils/helpers.js"





export function HEADER() {
    const {callToAction} = getCampaignData()

    return [
        {
            tag: "p",
            attributes: {
                style: "text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"
            },
            node: {
                value: callToAction.Header.text.paragraphFirst
            }
        },
        {
            tag: "p",
            attributes: {
                style: "text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"
            },
            child: [
                {
                    tag: "a",
                    attributes: {
                        style: "color: #000000; border: 0;",
                        href: "[[newsshowurl]]"
                    },
                    child: [
                        {
                            tag: "span",
                            node: {
                                value: callToAction.Header.text.paragraphSecond
                            }
                        },
                    ]
                }
            ]
        },
        // LOGO IMG
        {
            tag: "table",
            attributes: {
                cellspacing: 0,
                cellpadding: 0,
                border: 0,
                align: 'center',
                style: "margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
            },
            child: [
                {
                    tag: "tr", child: [
                        {
                            tag: "td",
                            child: [
                                {
                                    tag: "a",
                                    attributes: {
                                        href: callToAction.Header.logo.a + "?" + getTrackingLink(),
                                    },
                                    child: [
                                        {
                                            tag: "img",
                                            attributes: {
                                                width: '100%',
                                                src: callToAction.Header.logo.img,
                                                style: 'display: block;'
                                            }
                                        }
                                    ]
                                },
                            ]
                        },
                    ]
                }
            ]
        },
        // 3 CATEGOIES
        {
            tag: "table",
            attributes: {
                cellspacing: 0,
                cellpadding: 0,
                border: 0,
                align: 'center',
                style: "margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
            },
            child: [
                {
                    tag: "tr",
                    child: [
                        {
                            tag: "td",
                            child: [
                                {
                                    tag: "a",
                                    attributes: {
                                        href: callToAction.Header.categories.Furniture.a + "?" + getTrackingLink(),
                                    },
                                    child: [
                                        {
                                            tag: "img",
                                            attributes: {
                                                width: '100%',
                                                src: callToAction.Header.categories.Furniture.img,
                                                style: 'display: block;',
                                                alt: "Furniture"
                                            }
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            tag: "td",
                            child: [
                                {
                                    tag: "a",
                                    attributes: {
                                        href: callToAction.Header.categories.Accessories.a + "?" + getTrackingLink(),
                                    },
                                    child: [
                                        {
                                            tag: "img",
                                            attributes: {
                                                width: '100%',
                                                src: callToAction.Header.categories.Accessories.img,
                                                style: 'display: block;',
                                                alt: "Accessories"
                                            }
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            tag: "td",
                            child: [
                                {
                                    tag: "a",
                                    attributes: {
                                        href: callToAction.Header.categories.Garden.a + "?" + getTrackingLink(),
                                    },
                                    child: [
                                        {
                                            tag: "img",
                                            attributes: {
                                                width: '100%',
                                                src: callToAction.Header.categories.Garden.img,
                                                style: 'display: block;',
                                                alt: "Garden"
                                            }
                                        }
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
    ]
}