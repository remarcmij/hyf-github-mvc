import clearElement from '../lib/clearElement.js';
import store from '../store.js';
import createElement from '../lib/createElement.js';
import Contributor from './Contributor.js';

function Contributors(parent) {
  const container = createElement(parent, {
    use: 'section',
    class: 'contributors-container whiteframe',
  });

  const ul = createElement(container, {
    use: 'ul',
    class: 'contributor-list',
  });

  store.subscribe((state) => {
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
      Contributor(ul, { contributor });
    });
  });
}

export default Contributors;
