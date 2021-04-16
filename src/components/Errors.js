import createAndAppend from '../lib/createAndAppend.js';
import clearElement from '../lib/clearElement.js';
import { subscribeToStore } from '../store/store.js';

function Errors(parent) {
  const container = createAndAppend('div', parent);

  subscribeToStore((state) => {
    const { error } = state;

    if (error) {
      createAndAppend('div', container, {
        text: error.message,
        class: 'alert alert-error',
      });
    } else {
      clearElement(container);
    }
  });
}

export default Errors;
