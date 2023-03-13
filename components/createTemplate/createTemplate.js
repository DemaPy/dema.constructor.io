import {
  config,
  createObserver,
  getNestedObjects,
  getTagsFromObj,
} from "../../utils/imports.js";
import { renderNewsletter } from "../../generateNewsletter/generateNewsletter.js";
import { onClickComponent, onSaveTemplate } from "./events.js";
import { render } from "../../renderComponents/render.js";
import { renderStyles } from "./styles.js";
import { customComponent } from "./components.js";
import { addData } from "../../Toast/customButtons.js";

export const template = [];
export const relativeTemplate = [];

const { mount, unMount } = render({
  html: "createTemplate",
  to: "#main",
});

const createTemplateObserver = createObserver();

export function createTemplate() {
  createTemplateObserver.subscribe("createTemplateMount", [
    mount,
    onSaveTemplate,
    onClickComponent,
    customComponent,
  ]);
  createTemplateObserver.subscribe("createTemplateUnMount", unMount);

  function init() {
    template.length = 0;
    createTemplateObserver.notify("createTemplateMount");
    // createTemplateObserver.notify("createTemplateUnMount")
  }

  function setEvent() {
    if (
      config.getImgNumbers() &&
      config.getLinks().length &&
      config.getTranslations().length
    ) {
      init();
    } else {
      new Toast({
        message:
          "<h3>Not enough data for template.</h3> <br/> Please, go to Add data and fill up data.",
        type: "warning",
        customButtons: [addData],
      });
    }
  }

  setEvent();
}

export function logicForTemplate(event) {
  const templates = {
    text: {
      tag: "tr",
      attributes: {},
      style: {},
      child: [
        {
          tag: "td",
          attributes: {
            align: "center",
            width: "610",
          },
          style: {},
          child: [
            {
              tag: "span",
              attributes: {},
              style: {},
              node: {
                value: "",
              },
            },
          ],
        },
      ],
    },
    textWithLink: {
      tag: "tr",
      attributes: {},
      style: {},
      child: [
        {
          tag: "td",
          attributes: {
            align: "center",
            width: "610",
          },
          style: {},
          child: [
            {
              tag: "a",
              attributes: {
                href: "",
              },
              style: {},
              child: [
                {
                  tag: "span",
                  node: {
                    value: "",
                  },
                  attributes: {},
                  style: {},
                },
              ],
            },
          ],
        },
      ],
    },
    category: {
      tag: "tr",
      attributes: {},
      style: {},
      child: [
        {
          tag: "td",
          attributes: {
            align: "center",
          },
          style: {},
          child: [
            {
              tag: "table",
              attributes: {
                cellspacing: 0,
                cellpadding: 0,
                border: 0,
                align: "center",
              },
              style: {},
              child: [
                {
                  tag: "tr",
                  attributes: {},
                  style: {},
                  child: [
                    {
                      tag: "td",
                      attributes: {},
                      style: {},
                      child: [
                        {
                          tag: "a",
                          attributes: {
                            href: "",
                          },
                          style: {},
                          child: [
                            {
                              tag: "img",
                              attributes: {
                                width: "100%",
                                src: "",
                              },
                              style: {
                                display: "block",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "td",
                      attributes: {},
                      style: {},
                      child: [
                        {
                          tag: "a",
                          attributes: {
                            href: "",
                          },
                          style: {},
                          child: [
                            {
                              tag: "img",
                              attributes: {
                                width: "100%",
                                src: "",
                              },
                              style: {
                                display: "block",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "tr",
                  attributes: {},
                  style: {},
                  child: [
                    {
                      tag: "td",
                      attributes: {},
                      style: {},
                      child: [
                        {
                          tag: "a",
                          attributes: {
                            href: "",
                          },
                          style: {},
                          child: [
                            {
                              tag: "img",
                              attributes: {
                                width: "100%",
                                src: "",
                              },
                              style: {
                                display: "block",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "td",
                      attributes: {},
                      style: {},
                      child: [
                        {
                          tag: "a",
                          attributes: {
                            href: "",
                          },
                          style: {},
                          child: [
                            {
                              tag: "img",
                              attributes: {
                                width: "100%",
                                src: "",
                              },
                              style: {
                                display: "block",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    imgWithLink: {
      tag: "tr",
      attributes: {},
      style: {},
      child: [
        {
          tag: "td",
          attributes: {
            align: "center",
          },
          style: {},
          child: [
            {
              tag: "a",
              attributes: {
                href: "",
              },
              style: {},
              child: [
                {
                  tag: "img",
                  attributes: {
                    width: "100%",
                    src: "",
                  },
                  style: {
                    display: "block",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    img: {
      tag: "tr",
      attributes: {},
      style: {},
      child: [
        {
          tag: "td",
          attributes: {},
          style: {},
          child: [
            {
              tag: "img",
              attributes: {
                width: "100%",
                src: "",
              },
              style: {
                display: "block",
              },
            },
          ],
        },
      ],
    },
    table: {
      tag: "table",
      attributes: {
        cellspacing: 0,
        cellpadding: 0,
        border: 0,
        align: "center",
      },
      style: {},
      child: [],
    },
    row: {
      tag: "tr",
      attributes: {},
      style: {},
      child: [],
    },
    column: {
      tag: "td",
      attributes: {},
      style: {},
      child: [],
    },
  };

  if (template.length) {
    relativeTemplate[0].child.push(templates[event.target.id]);
  } else {
    template.push(templates[event.target.id]);
  }

  relativeTemplate.push(templates[event.target.id]);

  update();
}

export function logicForHoverDetails(event) {
  const { element } = event.target.parentNode.querySelector(".summary").dataset;
  relativeTemplate[element].className += " hover";
  update();
}

export function logicForLeaveDetails(event) {
  const { element } = event.target.parentNode.querySelector(".summary").dataset;
  relativeTemplate[element].className = relativeTemplate[
    element
  ].className.replace("hover", "");
  update();
}

export function logicForDetailClick(object, event) {
  let [tags, find] = getTagsFromObj();

  find(object);
  renderDetailsTags();

  function renderDetailsTags() {
    let counter = 0;

    event.target.parentNode.querySelector("#divInside").innerHTML = "";

    tags.forEach((tag) => {
      let div = document.createElement("div");
      div.setAttribute("class", "selectedTag");

      let btn = document.createElement("button");
      btn.setAttribute("class", "my__btn__small");
      btn.setAttribute("id", "renderStyles");
      btn.setAttribute("data-number", counter);
      counter++;
      btn.append(document.createTextNode("Open styles"));

      btn.addEventListener("click", (e) => {
        let [nestedObjects, findNestedObjects] = getNestedObjects();
        findNestedObjects(object);
        if (e.target.textContent === "Open styles") {
          e.target.textContent = "Close styles";
          renderStyles(e, nestedObjects);
        } else {
          e.target.textContent = "Open styles";
          e.target.parentNode.nextElementSibling.remove();
        }
      });

      let h4 = document.createElement("h4");
      h4.setAttribute("class", "tag__name");
      h4.setAttribute("style", "background-color: #red; color: white;");
      h4.append(document.createTextNode(tag));

      div.append(h4);
      div.append(btn);

      event.target.parentNode.querySelector("#divInside").append(div);
    });
  }
}

export function logicForDelete(event) {
  let elementIndex =
    event.target.parentNode.querySelector("[data-element]").dataset.element;
  relativeTemplate.splice(elementIndex, 1);
  relativeTemplate[0].child.splice(elementIndex - 1, 1);
  console.log(relativeTemplate[0].child[elementIndex - 1]);
  update();
}

function update() {
  renderNewsletter({
    template: template,
    selector: "#renderTemplate",
  });
}
