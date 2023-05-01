import { createHtmlElement } from './html-elements.js';

export const createHeader = () => {
  const header = createHtmlElement('header', 'header', document.body, false);

  const logoContainer = createHtmlElement('div', 'logo-container', header, false);

  const logo = createHtmlElement('h1', 'logo', logoContainer, false);
  const info = createHtmlElement('span', null, logoContainer, false);
  const langSwitchInfo = createHtmlElement('span', null, logoContainer, false);

  logo.textContent = 'Virtual Keyboard';
  info.textContent = 'A virtual keyboard was created in the Windows OS';
  langSwitchInfo.textContent = 'Left Ctrl + Left Alt switch language';
};
