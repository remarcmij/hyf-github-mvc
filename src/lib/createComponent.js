/**
 * Create an HTML element and append it to a parent element.
 *
 * Unless a `tag` name is specified as a prop, a `<div>` element is created by
 * default.
 * @param {HTMLElement} parent Parent element.
 * @param {Object} props Properties for the new HTML element.
 * @returns {HTMLElement}
 */
function createComponent(parent, props = {}) {
  const { tag = 'div', ...rest } = props;
  const elem = document.createElement(tag);
  parent.appendChild(elem);
  Object.entries(rest).forEach(([key, value]) => {
    if (key === 'text') {
      elem.textContent = value;
    } else {
      elem.setAttribute(key, value);
    }
  });
  return elem;
}

export default createComponent;
