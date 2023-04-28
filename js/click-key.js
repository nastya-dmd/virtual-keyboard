import { keyLayout } from "./key.js";

export const clickKeyButton = () => {

  const outputKeyButton = (codeBtn) => {
    keyLayout.find(el => {
      if (el.keyCode === codeBtn) {
        console.log(el.mainKey)
        textarea.innerHTML += el.mainKey;
        textarea.selectionStart = textarea.textContent.length;
      }
    });
  }

  const textarea = document.querySelector(".input-text");
  window.addEventListener("keydown", (event) => {
    const codeButton = document.querySelector(`[code="${event.code}"]`);
    event.preventDefault();
    textarea.focus();
    codeButton.classList.add("key-active");
    outputKeyButton(event.code);
  })


  window.addEventListener("keyup", (event) => {
    const codeButton = document.querySelector(`[code="${event.code}"]`);
    codeButton.classList.remove("key-active");
  });

  const buttons = document.querySelectorAll("[code]")
  buttons.forEach(el => {
    const codeBtn = el.getAttribute("code");

    el.addEventListener("mousedown", () => {
      el.classList.add("key-active");
      outputKeyButton(codeBtn);
    });

    el.addEventListener("mouseup", () => {
      el.classList.remove("key-active");
    })
  })


}
