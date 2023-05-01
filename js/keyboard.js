import { createHtmlElement } from './html-elements.js';
import { keyLayoutEn } from './data/keyboard.data.en.js';
import { keyLayoutRu } from './data/keyboard.data.ru.js';
import { Key } from './data/key.js'

export const createKeyboard = (language) => {
  const main = document.querySelector('.main');
  const sectionKeyboard = createHtmlElement('section', ['section', 'keyboard'], main, false);

  if (!language || language === 'en') {
    const keysArr = keyLayoutEn.map((keyObj) => {
      const element = createHtmlElement('div', 'key', sectionKeyboard, false);
      element.textContent = keyObj.mainKey;
      if (element.textContent.length > 4) {
        element.classList.add('key-rectangle')
      } else if (element.textContent.length === 0) {
        element.classList.add('key-space')
      }
      element.setAttribute('code', keyObj.keyCode);

      return new Key(element, keyObj.keyCode, keyObj.mainKey, keyObj.secondaryKey, keyObj.keyOutput, keyObj.mainSymbol);
    })
    return keysArr;
  } else {
    const keysArr = keyLayoutRu.map((keyObj) => {
      const element = createHtmlElement('div', 'key', sectionKeyboard, false);
      element.textContent = keyObj.mainKey;
      if (element.textContent.length > 4) {
        element.classList.add('key-rectangle')
      } else if (element.textContent.length === 0) {
        element.classList.add('key-space')
      }
      element.setAttribute('code', keyObj.keyCode);

      return new Key(element, keyObj.keyCode, keyObj.mainKey, keyObj.secondaryKey, keyObj.keyOutput, keyObj.mainSymbol);
    })
    return keysArr;
  }

};

