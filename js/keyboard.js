import { createHtmlElement } from './html-elements.js';
import { keyLayoutEn } from './data/keyboard.data.en.js';
import { keyLayoutRu } from './data/keyboard.data.ru.js';
import { Key } from './data/key.js';

export const createKeyboard = (language) => {
  const main = document.querySelector('.main');
  const sectionKeyboard = createHtmlElement('section', ['section', 'keyboard'], main, false);

  if (!language || language === 'en') {
    const keysArr = keyLayoutEn.map((keyObj) => {
      const el = createHtmlElement('div', 'key', sectionKeyboard, false);
      el.textContent = keyObj.mainKey;
      if (el.textContent.length > 4) {
        el.classList.add('key-rectangle');
      } else if (el.textContent.length === 0) {
        el.classList.add('key-space');
      }
      el.setAttribute('code', keyObj.keyCode);

      return new Key(
        el,
        keyObj.keyCode,
        keyObj.mainKey,
        keyObj.secondaryKey,
        keyObj.keyOutput,
        keyObj.mainEl,
      );
    });
    return keysArr;
  }
  const keysArr = keyLayoutRu.map((keyObj) => {
    const el = createHtmlElement('div', 'key', sectionKeyboard, false);
    el.textContent = keyObj.mainKey;
    if (el.textContent.length > 4) {
      el.classList.add('key-rectangle');
    } else if (el.textContent.length === 0) {
      el.classList.add('key-space');
    }
    el.setAttribute('code', keyObj.keyCode);

    return new Key(
      el,
      keyObj.keyCode,
      keyObj.mainKey,
      keyObj.secondaryKey,
      keyObj.keyOutput,
      keyObj.mainEl,
    );
  });
  return keysArr;
};
