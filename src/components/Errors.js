import clearElement from '../lib/clearElement.js';
import store from '../store.js';
import createElement from '../lib/createElement.js';

function Errors(parent) {
  const container = createElement(parent);

  store.subscribe((state) => {
    const { error } = state;

    if (error) {
      createElement(container, {
        text: error.message,
        class: 'alert alert-error',
      });
    } else {
      clearElement(container);
    }
  });
}

export default Errors;
