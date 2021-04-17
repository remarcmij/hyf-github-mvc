import clearElement from '../lib/clearElement.js';
import { subscribeToStore } from '../store/store.js';
import Component from '../lib/Component.js';

function Errors(parent) {
  const container = Component(parent);

  subscribeToStore((state) => {
    const { error } = state;

    if (error) {
      Component(container, {
        text: error.message,
        class: 'alert alert-error',
      });
    } else {
      clearElement(container);
    }
  });
}

export default Errors;
