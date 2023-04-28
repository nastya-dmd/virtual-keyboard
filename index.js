import { createHtmlElement } from './js/html-elements.js';
import { createHeader } from './js/header.js';
import { createTextarea } from './js/textarea.js';
import { createKeyboard } from './js/keyboard.js';
import { workKeyboard } from './js/click-key.js';

const initKeyboardApplication = () => {
  document.body.classList.add('body');
  createHeader();
  createHtmlElement('main', 'main', document.body, false);
    createTextarea();
    const keyBtns = createKeyboard();
    workKeyboard(keyBtns);
  // const keyboard = new Keyboard();
  
};

initKeyboardApplication();

// class Keyboard {
  
// }
