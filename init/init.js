import {
  campaignInfo,
  changeTheme,
  renderCountries,
  renderSelect,
} from "../components/imports.js";

import {
  storage,
  createObserver,
} from "../utils/imports.js";

import { addCampaign, newCampaign } from "../setCampaignData/modalStart.js";
import { generate } from "../generateNewsletter/helpers.js";
import { action, storageInit } from "../utils/store.js";
import { configureConstructor } from "../components/configureConstructor/configure.js";
import { campaigns } from "../components/allCampaigns/campaigns.js";



const configureDataPage = createObserver();
configureDataPage.subscribe("mountSidebar", [
  renderCountries,
  renderSelect,
  campaignInfo,
  changeTheme,
  generate,
  addCampaign,
  newCampaign,
  configureConstructor,
  action.setEvent,
  campaigns
]);





export function init() {
  if (!storage.get("config")) {
    storageInit()
  }
  configureDataPage.notify("mountSidebar");
}
