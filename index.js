"use strict"
import {createHtmlElement} from "./js/html-elements.js";
import {createHeader} from "./js/header.js";
import {createTextarea} from "./js/textarea.js";
import {createKeyboard} from "./js/keyboard.js";

const initKeyboardApplication = () => {
  document.body.classList.add("body");
  createHeader();
  createHtmlElement("main", "main", document.body, false);
  createTextarea();
  createKeyboard();
}
initKeyboardApplication();




