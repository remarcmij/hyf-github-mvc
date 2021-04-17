import clearElement from '../lib/clearElement.js';
import { subscribeToStore } from '../store/store.js';
import createComponent from '../lib/createComponent.js';

function Errors(parent) {
  const container = createComponent(parent);

  subscribeToStore((state) => {
    const { error } = state;

    if (error) {
      createComponent(container, {
        text: error.message,
        class: 'alert alert-error',
      });
    } else {
      clearElement(container);
    }
  });
}

export default Errors;
