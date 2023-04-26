"use strict"

import { createHtmlElement } from "./html-elements.js"

export const createKeyboard = () => {
  const main = document.querySelector(".main");
  const sectionKeyboard = createHtmlElement("section", "section", main, false);
  sectionKeyboard.classList.add("keyboard");

  const keyLayout = ["1", "A", "Shift"];
  keyLayout.forEach(el => {
    const sectionKeyboard = document.querySelector(".keyboard")
    const element = createHtmlElement("div", "key", sectionKeyboard, false);
    element.textContent = el;
  })
}