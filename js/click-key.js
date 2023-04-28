import { keyLayout } from './data/keyboard.data.en.js';

export const workKeyboard = (keyButtons) => {
  const textarea = document.querySelector('.input-text');

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
    if (button.keyOutput === 'true') {
      textarea.innerHTML += button.mainKey;
      textarea.selectionStart = textarea.textContent.length;
    } else {
      return false
    }
  };

  window.addEventListener('keydown', (event) => {
    console.log(event)
    addActiveClass(event.code)
    event.preventDefault();
    textarea.focus();
    // outputKeyButton(event.code);

    let arr = [];
    const active = document.querySelectorAll('.key-active');
    if (active.length === 2) {
      active.forEach(el => {
        const code = el.getAttribute('code')
        arr.push(code)
      })
      console.log(arr)
      if (arr.includes('ShiftLeft') || arr.includes('ShiftRight')) {
        const button = getButton(event.code);

        if (button.keyCode === arr[0]) {
          textarea.innerHTML += button.secondaryKey;
          textarea.selectionStart = textarea.textContent.length;
        }
      }
    } else {
      if (event.code === 'Backspace') {
        textarea.value = textarea.value.slice(0, textarea.value.length - 1);
      }
      outputKeyButton(event.code);
    }

  });

  window.addEventListener('keyup', (event) => {
    const codeButton = document.querySelector(`[code="${event.code}"]`);
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
