import { keyLayout } from './data/keyboard.data.en.js';

export const workKeyboard = (keyButtons) => {
  const textarea = document.querySelector('.input-text');
  let shiftPressed = false;
  let capsLok = false;

  const getButton = (codeBtn) => {
    const keyPressed = keyButtons.find((el) => {
      if (el.keyCode === codeBtn) {
        return el;
      }
    })
    return keyPressed;
  };

  const addActiveClass = (codeBtn) => {
    const button = getButton(codeBtn);
    button.htmlNode.classList.add('key-active')
  };

  const removeActiveClass = (codeBtn) => {
    const button = getButton(codeBtn);
    button.htmlNode.classList.remove('key-active')
  };

  const outputKeyButton = (codeBtn) => {
    const button = getButton(codeBtn);
    if (button.keyOutput) {

      if (shiftPressed || capsLok) {
        textarea.value += button.secondaryKey;

      } else {
        textarea.value += button.mainKey;
      }

      textarea.selectionStart = textarea.value.length;
    } else {
      if (codeBtn === 'Backspace') {
        textarea.value = textarea.value.slice(0, textarea.value.length - 1);
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

      // todo
      // обработать shift, capsLok
    }
  };

  window.addEventListener('keydown', (event) => {
    console.log(event)
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      shiftPressed = true;
    }

    addActiveClass(event.code)
    event.preventDefault();
    textarea.focus();
    outputKeyButton(event.code);
  });

  window.addEventListener('keyup', (event) => {
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      shiftPressed = false;
    }
    if (event.code === "CapsLock" && capsLok === false) {
      capsLok = true;
    } else if (event.code === "CapsLock" && capsLok) {
      capsLok = false;
    }
    removeActiveClass(event.code)
  });

  const buttons = document.querySelectorAll('[code]');
  buttons.forEach((el) => {
    const codeBtn = el.getAttribute('code');

    el.addEventListener('mousedown', () => {
      el.classList.add('key-active');
      outputKeyButton(codeBtn);
    });

    el.addEventListener('mouseup', () => {
      el.classList.remove('key-active');
    });
  });
};
