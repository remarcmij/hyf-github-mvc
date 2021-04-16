import createAndAppend from '../lib/createAndAppend.js';

function Contributor(parent, contributor) {
  const li = createAndAppend('li', parent);
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
}

export default Contributor;