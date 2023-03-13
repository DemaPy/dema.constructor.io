import { modalStart } from './setCampaignData/modalStart.js';
import { init } from './init/init.js';
import { storage } from './utils/store.js';


window.onload = () => {
    if (!storage.get("campaigns")) {
        modalStart({
            type: "newCampaign"
        })
    } else {
        init()
    }
}