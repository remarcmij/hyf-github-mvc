import createAndAppend from '../lib/createAndAppend.js';
import clearElement from '../lib/clearElement.js';
import { subscribeToStore } from '../store/store.js';
import Contributor from './Contributor.js';

function Contributors(parent) {
  const container = createAndAppend('section', parent, {
    class: 'contributors-container whiteframe',
  });

  const ul = createAndAppend('ul', container, {
    class: 'contributor-list',
  });

  subscribeToStore((state) => {
    const { contributors, loading, error } = state;

    if (error) {
      container.classList.add('hide');
    } else {
      container.classList.remove('hide');
    }

    if (!contributors || loading || error) {
      return;
    }

    clearElement(ul);

    contributors.forEach((contributor) => {
      Contributor(ul, contributor);
    });
  });
}

export default Contributors;
