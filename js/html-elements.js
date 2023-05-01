export const createHtmlElement = (tagName, className, tagParent, addToTop) => {
  const newElement = document.createElement(tagName);
  if (Array.isArray(className)) {
    className.forEach((el) => {
      newElement.classList.add(el);
    });
  } else {
    newElement.classList.add(className);
  }

  if (addToTop) {
    tagParent.prepend(newElement);
  } else {
    tagParent.append(newElement);
  }
  return newElement;
};
