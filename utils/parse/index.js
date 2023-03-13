function parseProductLinks() {
    let link = (id) => fetch(`https://www.prologistics.info/api/condensedSA/getShops/?id=${id}`, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,ru;q=0.8",
    "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then(data => data.json()).then(r => {
    let shopIds = getID(r.slaves)
    getDataShopIds(shopIds)
    console.log(parseLinks(r.templates[0].preview))
})
let ids = [
"354671",
"355136",
"306283",
"305732",
].forEach(link)

function parseLinks(obj) {
    let links = Object.values(obj)
    let parsedLinks = []
    links.forEach(link => {
        if (link.includes("https://www.beliani.")) {
            if (link.includes("https://www.beliani.fr")) {
                return parsedLinks.push("https://www.beliani.ch/" + link.slice(23, link.indexOf(".desc")) + ".html", link.slice(0, link.indexOf(".desc")) + ".html")
            }
            parsedLinks.push(link.slice(0, link.indexOf(".desc")) + ".html")
        }
    })
    return parsedLinks
}

const shopId2 = {
    DE: "3",
    CHDE: "1",
    AT: "8",
    FR: "7",
    CHFR: "1",
    IT: "21",
    UK: "2",
    ES: "10",
    PT: "22",
    PL: "12",
    HU: "24",
    NL: "17",
    SE: "23",
    DK: "25",
    CZ: "26",
    FI: "27",
    NO: "28",
    SK: "29",
}

const shopId = {
    "Beliani DE": "3",
    "Beliani": "1",
    "Beliani AT": "8",
    "Beliani FR": "7",
    "Beliani": "1",
    "Beliani IT": "21",
    "Beliani UK": "2",
    "Beliani SP": "10",
    "Beliani PT": "22",
    "Beliani PL": "12",
    "Beliani HU": "24",
    "Beliani NL": "17",
    "Beliani SE": "23",
    "Beliani DK": "25",
    "Beliani CZ": "26",
    "Beliani FI": "27",
    "Beliani NO": "28",
    "Beliani SK": "29",
}
const siteId = {
    186: "ES",
    16: "AT",
    101: "IT",
    3: "UK",
    71: "FR",
    77: "DE",
    902: "HU",
    900: "PT",
    212: "PL",
    901: "SE",
    146: "NL",
    903: "DK",
    904: "CZ",
    905: "FI",
    906: "NO",
    907: "SK"
}
const relativeCountries = {
    "Beliani DE": "DE",
    "Beliani": "CHDE",
    "Beliani AT": "AT",
    "Beliani FR": "FR",
    "Beliani IT": "IT",
    "Beliani UK": "UK",
    "Beliani SP": "ES",
    "Beliani PT": "PT",
    "Beliani PL": "PL",
    "Beliani HU": "HU",
    "Beliani NL": "NL",
    "Beliani SE": "SE",
    "Beliani DK": "DK",
    "Beliani CZ": "CZ",
    "Beliani FI": "FI",
    "Beliani NO": "NO",
    "Beliani SK": "SK",
}


function getID(arr) {
    let ids = []

    Object.values(shopId).forEach((elem, index) => {
        arr.forEach(({shop_id, id}) => {
            if (elem === shop_id) {
                ids.push({
                    country: Object.keys(shopId)[index],
                    id: id
                })
            }
        })
    })

    return ids
}

function getDataShopIds(arr) {
    let result = []
    let counter = 0


    arr.forEach(({id}) => {
        fetch(`https://www.prologistics.info/api/condensedSA/getSlave/?id=${id}&block=buttons`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9,ru;q=0.8",
                "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        }).then(data => data.json()).then(response => {
            result.push(response.sa.saved_params)
            counter++
            if (arr.length === counter) {
                console.log(parsePrice(result))
            }
        })
    })
}

function parsePrice(arr) {
    let prices = []
    arr.forEach(({ ShopHPrice, ShopPrice, username, auction_name }) => {
        Object.keys(shopId).forEach((item) => {
            if (item === username) {
                prices.push({
                    lowPrice: ShopPrice,
                    hightPrice: ShopHPrice,
                    country: relativeCountries[username],
                    product: auction_name.slice(auction_name.indexOf(" ")+1),
                })
            }
        })
    })

    return prices
}
}