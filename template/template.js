import { setCampaignTemplate } from "../changeCampaignData/changeCampaignData.js"
import { storage } from "../utils/store.js"
import { addHeader } from "../components/constructorConfig/index.js"
import { 
    FOOTER,
    CATEGORY,
    IFRAME,
    IMAGE,
    IMAGEWITHLINK,
    TEXT,
    TEXTWITHLINK,
    HEADER
 } from "./templates/index.js"






const campaignStyles = {
    table: {
        white: {
            margin: "0 auto",
            maxWidth: "650px",
            color: "#ffffff", 
            backgroundColor: "#ffffff",
        },
        fullWidth: {
            margin: "0 auto",
            width: "100%"
        },
        transparent: {
            margin: "0 auto",
            maxWidth: "650px;"
        }
    },
    td: {
        white: {
            paddingLeft: "40px",
            paddingRight: "40px",
            backgroundColor: "#ffffff"
        },
        transparent: {
            paddingLeft: "20px",
            paddingRight: "20px"
        }
    },
    span: {
        cta: "font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;",
        text: "font-family: Open Sans, sans-serif; font-size: 18px; line-height: 1.25; color: #000000;",
        title: "font-family: Open Sans, sans-serif; font-size: 30px; line-height: 1.25; color: #000000;"
    },
}



export  function setTemplate() {
    let newsletter = [
        {
            tag: "table",
            attributes: {
                cellspacing: 0,
                cellpadding: 0,
                border: 0,
                align: 'center',
            },
            style: campaignStyles.table.transparent.backgroundColor = "#eee6df",
            child: [
                {
                    tag: "tr",
                    attributes: {},
                    style: {},
                    child: [
                        {
                            tag: "td",
                            attributes: {},
                            style: {
                                backgroundColor: "#eee6df;"
                            },
                            child: [
                                {
                                    tag: "a",
                                    attributes: {
                                        href: ""
                                    },
                                    style: {},
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
                },
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterParagraph"
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterParagraph"
                    }
                ),
                IMAGEWITHLINK(
                    {},
                    {
                        align: 'center',
                        className: "newsletterContainer",
                    },
                    {
                        href: ""
                    },
                    {
                        width: '100%',
                        style: {
                            display: "block"
                        },
                        src: "https://beliani.info/newsletter/2022/230306NewsletterCategory.png"
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterTitle"
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterParagraph"
                    }
                ),
                IMAGEWITHLINK(
                    {},
                    {
                        align: 'center',
                        style: {
                            backgroundColor: "#eee6df"
                        }
                    }
                ),
            ]
        },
        FOOTER()
    ]

    let landing = [
        {
            tag: "table",
            attributes: {
                cellspacing: 0,
                cellpadding: 0,
                border: 0,
                align: 'center',
                style: campaignStyles.table.transparent + "background-color: #eee6df;"
            },
            child: [
                IMAGEWITHLINK(
                    {},
                    {
                        align: 'center',
                        style: "background-color: #eee6df;"
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterParagraph "
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterParagraph "
                    }
                ),
                TEXTWITHLINK(
                    {},
                    {
                        align: 'center',
                        style: "background-color: #eee6df;",
                        className: "newsletterCta"
                    },
                    {
                        href: "",
                        style: campaignStyles.span.cta
                    }
                ),
                IMAGEWITHLINK(
                    {},
                    {
                        align: 'center',
                        className: "newsletterContainer",
                    },
                    {
                        href: ""
                    },
                    {
                        width: '100%',
                        style: 'display: block;',
                        src: "https://beliani.info/newsletter/2022/230306NewsletterCategory.png"
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterTitle "
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer",
                        style: "padding-bottom: 0px;"
                    },
                    {
                        className: "newsletterParagraph "
                    }
                ),
                CATEGORY("twoProducts"),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterTitle "
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterParagraph "
                    }
                ),
                CATEGORY("twoProducts"),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterTitle "
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterParagraph "
                    }
                ),
                CATEGORY("twoProducts"),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterTitle "
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterParagraph "
                    }
                ),
                CATEGORY("twoProducts"),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterTitle "
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterParagraph "
                    }
                ),
                IMAGEWITHLINK(
                    {},
                    {
                        align: 'center',
                        className: "newsletterContainer",
                    },
                    {
                        href: ""
                    },
                    {
                        width: '100%',
                        style: 'display: block;',
                        src: "https://beliani.info/newsletter/2022/230306NewsletterCategory2.png"
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterTitle "
                    }
                ),
                TEXT(
                    {},
                    {
                        align: "left",
                        className: "newsletterContainer"
                    },
                    {
                        className: "newsletterParagraph "
                    }
                ),
                IMAGEWITHLINK(
                    {},
                    {
                        align: 'center',
                        className: "newsletterContainer",
                        style: "background-color: #eee6df;"
                    }
                ),
                TEXTWITHLINK(
                    {},
                    {
                        align: 'center',
                        className: "newsletterContainer",
                        style: "background-color: #eee6df;"
                    },
                    {
                        href: "",
                        style: campaignStyles.span.cta
                    }
                )
            ]
        },
        FOOTER()
    ]

    const templates = {
        newsletter,
        landing
    }

    if (addHeader()) {
        newsletter.unshift(...HEADER())
    }
    
    setCampaignTemplate({
        [storage.get("templateType").type]: templates[storage.get("templateType").type]
    })
}
