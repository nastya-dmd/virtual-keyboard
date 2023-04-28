export const createHtmlElement = (tagName, className, tagParent, addToTop) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  if (addToTop) {
    tagParent.prepend(newElement);
  } else {
    tagParent.append(newElement);
  }
  return newElement;
};