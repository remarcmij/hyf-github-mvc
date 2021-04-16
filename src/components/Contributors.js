import createAndAppend from '../lib/createAndAppend.js';
import clearElement from '../lib/clearElement.js';
import { subscribeToModel } from '../model/model.js';

function Contributors(parent) {
  const dom = {};

  const container = createAndAppend('section', parent, {
    class: 'contributors-container whiteframe',
  });

  dom.ul = createAndAppend('ul', container, {
    class: 'contributor-list',
  });

  subscribeToModel((state) => {
    const { contributors, loading, error } = state;

    if (error) {
      container.classList.add('hide');
    } else {
      container.classList.remove('hide');
    }

    if (!contributors || loading || error) {
      return;
    }

    clearElement(dom.ul);
    contributors.forEach((contributor) => {
      const li = createAndAppend('li', dom.ul);
      const a = createAndAppend('a', li, {
        href: contributor.html_url,
        class: 'contributor-item',
        target: '_blank',
      });
      createAndAppend('img', a, {
        src: contributor.avatar_url,
        alt: `avatar for ${contributor.login}`,
        class: 'contributor-avatar',
        height: 48,
        loading: 'lazy', // try the new lazy loading from Chrome 76
      });
      const div = createAndAppend('div', a, {
        class: 'contributor-data',
      });
      createAndAppend('div', div, { text: contributor.login });
      createAndAppend('div', div, {
        text: contributor.contributions,
        class: 'contributor-badge',
      });
    });
  });
}

export default Contributors;
