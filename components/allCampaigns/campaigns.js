import { render } from "../../renderComponents/render.js";
import { addData } from "../../Toast/customButtons.js";
import { config, getElement } from "../../utils/imports.js";
import { configureData, createTemplate } from "../imports.js";
import { campaign } from "./campaign.js";

const { mount, unMount } = render({
  html: "campaigns",
  to: "#main",
});

export function campaigns() {
  const element = "#campaigns";
  const campaigns = config.getCampaigns();

  function render() {
    if (config.getImgNumbers()) {
      mount()
      campaigns.forEach((item) => campaign(getElement(element), item));
    } else {
      new Toast({
        message: "<h3>Not enough data for campaign generation.</h3> <br/> Please, go to Add data and fill up data.",
        type: "warning",
        customButtons: [addData],
      })
    }
  }

  function setEventBtnTemplate() {
    getElement("#template").addEventListener("click", () => {
      createTemplate();
    });
    getElement("#setData").addEventListener("click", () => {
      configureData();
    });
  }

  function setEvent() {
    getElement("#allCampaigns").addEventListener("click", () => {
      render();
      setEventBtnTemplate();
    });
  }

  setEvent();
}