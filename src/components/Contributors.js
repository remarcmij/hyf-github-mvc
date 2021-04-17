import clearComponent from '../lib/clearComponent.js';
import store from '../store/store.js';
import createComponent from '../lib/createComponent.js';
import Contributor from './Contributor.js';

function Contributors(parent) {
  const container = createComponent(parent, {
    tag: 'section',
    class: 'contributors-container whiteframe',
  });

  const ul = createComponent(container, {
    tag: 'ul',
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

    clearComponent(ul);

    contributors.forEach((contributor) => {
      Contributor(ul, { contributor });
    });
  });
}

export default Contributors;
