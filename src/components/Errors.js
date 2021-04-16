import createAndAppend from '../lib/createAndAppend.js';
import clearElement from '../lib/clearElement.js';

function Errors(model, parent) {
  const container = createAndAppend('div', parent);

  model.subscribe((state) => {
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
