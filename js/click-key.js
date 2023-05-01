import { keyLayoutRu } from './data/keyboard.data.ru.js';
import { keyLayoutEn } from './data/keyboard.data.en.js';

export const workKeyboard = (keyButtons, language) => {
  const textarea = document.querySelector('.input-text');
  let shiftPressed = false;
  let capsLok = false;
  let ctrlPressed = false;
  let lang = language;

  const getButton = (codeBtn) => {
    const keyPressed = keyButtons.find((el) => {
      if (el.keyCode === codeBtn) {
        return el;
      }
    })
    return keyPressed;
  };

  const switchLang = () => {
    if (!lang || lang === 'en') {
      lang = 'ru'
    } else {
      lang = 'en'
    }
    let langButtonsData = keyLayoutEn;
    if (lang === 'ru') {
      langButtonsData = keyLayoutRu;
    } else if (lang === 'en') {
      langButtonsData = keyLayoutEn;
    }

    langButtonsData.forEach((btnData) => {
      const keyboardButton = getButton(btnData.keyCode);
      keyboardButton.mainKey = btnData.mainKey;
      keyboardButton.secondaryKey = btnData.secondaryKey
      keyboardButton.htmlNode.innerHTML = btnData.mainKey;
    })
  }

  const setLocalStorage = () => {
    localStorage.setItem('lang', lang);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  const addActiveClass = (codeBtn, classValue) => {
    const button = getButton(codeBtn);
    button.htmlNode.classList.add(classValue);
  };

  const removeActiveClass = (codeBtn, classValue) => {
    const button = getButton(codeBtn);
    button.htmlNode.classList.remove(classValue)
  };

  const outputKeyButton = (codeBtn) => {
    const button = getButton(codeBtn);

    const cursorPosition = textarea.selectionStart;
    const leftTextPart = textarea.value.slice(0, cursorPosition);
    const rightTextPart = textarea.value.slice(cursorPosition);

    if (button.keyOutput) {
      let textToAdd = '';
      if (shiftPressed || capsLok) {
        if (shiftPressed && capsLok) {
          textToAdd = button.mainKey;
        } else {
          if (button.mainSymbol && capsLok) {
            textToAdd = button.mainKey;
          } else {
            textToAdd = button.secondaryKey;
          }
        }
      } else {
        textToAdd = button.mainKey;
      }

      textarea.value = `${leftTextPart}${textToAdd}${rightTextPart}`
      textarea.selectionStart = cursorPosition + 1;
      textarea.selectionEnd = cursorPosition + 1;
    } else {
      if (codeBtn === 'Backspace') {
        if (leftTextPart.length > 0) {
          textarea.value = `${leftTextPart.slice(0, leftTextPart.length - 1)}${rightTextPart}`;
          textarea.selectionStart = cursorPosition - 1;
          textarea.selectionEnd = cursorPosition - 1;
        }
      }

      if (codeBtn === 'Enter') {
        textarea.value += '\n'
      }

      if (codeBtn === 'Tab') {
        textarea.value += '\t'
      }

      if (codeBtn === 'Space') {
        textarea.value += ' '
      }
      if (codeBtn === 'Delete') {
        textarea.value = `${leftTextPart}${rightTextPart.slice(1)}`;
        textarea.selectionStart = cursorPosition;
        textarea.selectionEnd = cursorPosition;
      }

    }
  };

  window.addEventListener('keydown', (event) => {
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      shiftPressed = true;
    }

    if (event.code === 'ControlLeft') {
      ctrlPressed = true;
    }

    addActiveClass(event.code, 'key-active')
    event.preventDefault();
    textarea.focus();
    outputKeyButton(event.code);
  });

  window.addEventListener('keyup', (event) => {
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      shiftPressed = false;
    }

    if (event.code === "CapsLock") {
      capsLok = !capsLok;
      if (capsLok) {
        addActiveClass(event.code, 'key-caps-lk');
      } else {
        removeActiveClass(event.code, 'key-caps-lk');
      }
    }

    if (event.code === 'AltLeft' && ctrlPressed) {
      switchLang();
    }

    if (event.code === 'ControlLeft') {
      ctrlPressed = false;
    }

    removeActiveClass(event.code, 'key-active');
  });

  const buttons = document.querySelectorAll('[code]');
  buttons.forEach((el) => {
    const codeBtn = el.getAttribute('code');

    el.addEventListener('mousedown', () => {
      el.classList.add('key-active');
      outputKeyButton(codeBtn);
    });

    el.addEventListener('mouseup', (event) => {
      if (event.target.innerText === "CapsLock") {
        capsLok = !capsLok;
        if (capsLok) {
          event.target.classList.add('key-caps-lk');
        } else {
          event.target.classList.remove('key-caps-lk');
        }
      }
      el.classList.remove('key-active');
    });
  });
};


