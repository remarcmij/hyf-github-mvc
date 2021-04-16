import createAndAppend from '../lib/createAndAppend.js';
import clearElement from '../lib/clearElement.js';
import { subscribeToModel } from '../model/model.js';

function Errors(parent) {
  const container = createAndAppend('div', parent);

  subscribeToModel((state) => {
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
