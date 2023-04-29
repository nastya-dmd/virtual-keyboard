import { createHtmlElement } from './html-elements.js';
import { keyLayout } from './data/keyboard.data.en.js';
import { Key } from './data/key.js'

export const createKeyboard = () => {
  const main = document.querySelector('.main');
  const sectionKeyboard = createHtmlElement('section', ['section', 'keyboard'], main, false);
  // sectionKeyboard.classList.add('keyboard');

  const keysArr = keyLayout.map((keyObj) => {
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
};

