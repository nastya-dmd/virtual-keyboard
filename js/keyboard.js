import { createHtmlElement } from "./html-elements.js";
import { keyLayout } from "./key.js";

export const createKeyboard = () => {
  const main = document.querySelector(".main");
  const sectionKeyboard = createHtmlElement("section", "section", main, false);
  sectionKeyboard.classList.add("keyboard");


  keyLayout.forEach(el => {
    const sectionKeyboard = document.querySelector(".keyboard")
    const element = createHtmlElement("div", "key", sectionKeyboard, false);
    element.textContent = el.mainKey;
    element.setAttribute("code", el.keyCode);
  })

}