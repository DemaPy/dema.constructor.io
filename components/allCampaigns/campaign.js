






export function campaign(element, campaign) {
    element.innerHTML += `
        <div class="campaign">
        <div class="campaignImage">
            <a target="_blank" href="${campaign.campaignData.trelloUrl}">
                <img src="https://beliani.info/newsletter/2022/chde${campaign.campaignTemplates.imgNumbersnewsletter[0]}" alt="">
            </a>
        </div>
        <div class="campaignInfo">
            <div class="campaignTitle">
            <a target="_blank" href="${campaign.campaignData.trelloUrl}">
                <h2>${campaign.campaignName}</h2>
            </a>
            </div>
            <div class="campaigns">
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.CHDE}">CHDE</a>
                </div>
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.DE}">DE</a>
                </div>
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.AT}">AT</a>
                </div>
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.UK}">UK</a>
                </div>
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.PL}">PL</a>
                </div>
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.ES}">ES</a>
                </div>
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.NL}">NL</a>
                </div>
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.PT}">PT</a>
                </div>
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.IT}">IT</a>
                </div>
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.SE}">SE</a>
                </div>
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.SK}">SK</a>
                </div>
                <div class="campaignCountry">
                    <a target="_blank" href="https://www.prologistics.info/news_email.php?id=${campaign.campaignData.campaignIds.NO}">NO</a>
                </div>
            </div>

        </div>
        <div class="campaignBtns">
            <button id="template" class="my__btn">Template</button>
            <button id="setData" class="my__btn">Add data</button>
        </div>
    </div>`
}

{/* <div class="campaignBanners">
<span>Campaign landing: ${campaign.campaignData.landing.slice(-10)}</span>
<span>Campaign banner: ${campaign.campaignData.firstBanner.slice(-10)}</span>
<span>Campaign banner: ${campaign.campaignData.secondBanner.slice(-10)}</span>
</div> */}