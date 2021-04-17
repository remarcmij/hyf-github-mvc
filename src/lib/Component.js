function Component(parent, props = {}) {
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

export default Component;
