function clearElement(element) {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}

export default clearElement;
