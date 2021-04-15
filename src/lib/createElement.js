function createElement(name, options = {}) {
  const elem = document.createElement(name);
  Object.entries(options).forEach(([keyCode, value]) => {
    if (keyCode === 'text') {
      elem.textContent = value;
    } else {
      elem.setAttribute(keyCode, value);
    }
  });
  return elem;
}

export default createElement;
