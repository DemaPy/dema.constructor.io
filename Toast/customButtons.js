import { configureData, createTemplate } from "../components/imports.js";

export const addData = {
  text: "Go to data",
  onClick: function () {
    configureData();
  },
}

export const addTemplate = {
  text: "Go to template",
  onClick: function () {
    createTemplate();
  },
}