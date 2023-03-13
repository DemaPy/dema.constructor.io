import { IMAGE } from "./img.js"
import { IMAGEWITHLINK } from "./imgWithLink.js"




export function FOOTER() {
    return {
        tag: "table",
        attributes: {
            cellspacing: 0,
            cellpadding: 0,
            border: 0,
            align: 'center',
            style: "margin: 0 auto; max-width: 650px; color: #ffffff; background-color: #ffffff;",
            class: "newsletterSoonEndingTable"
        },
        child: [
            IMAGE({
                td: "background-color: #eee6df;",
            }),
            IMAGEWITHLINK(
                {},
                {
                    align: 'center',
                    class: "newsletterSoonEnding"
                }
            ),
            IMAGEWITHLINK(
                {},
                {
                    align: 'center',
                    class: "newsletterSoonEnding"
                }
            ),

        ]
    }

}