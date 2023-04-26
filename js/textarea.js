"use strict"

import { createHtmlElement } from "./html-elements.js"

export const createTextarea = () => {
  const main = document.querySelector(".main");
  const section = createHtmlElement("section", "section", main, false);
  createHtmlElement("textarea", "input-text", section, false)
}