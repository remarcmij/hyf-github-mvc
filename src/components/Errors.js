import clearComponent from '../lib/clearComponent.js';
import store from '../store.js';
import createComponent from '../lib/createComponent.js';

function Errors(parent) {
  const container = createComponent(parent);

  store.subscribe((state) => {
    const { error } = state;

    if (error) {
      createComponent(container, {
        text: error.message,
        class: 'alert alert-error',
      });
    } else {
      clearComponent(container);
    }
  });
}

export default Errors;
