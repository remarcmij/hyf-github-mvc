import createElement from '../lib/createElement.js';

function Contributor(parent, props) {
  const { contributor } = props;
  const li = createElement(parent, { use: 'li' });
  const a = createElement(li, {
    use: 'a',
    href: contributor.html_url,
    class: 'contributor-item',
    target: '_blank',
  });
  createElement(a, {
    use: 'img',
    src: contributor.avatar_url,
    alt: `avatar for ${contributor.login}`,
    class: 'contributor-avatar',
    height: 48,
    loading: 'lazy', // try the new lazy loading from Chrome 76
  });
  const div = createElement(a, {
    class: 'contributor-data',
  });
  createElement(div, { text: contributor.login });
  createElement(div, {
    text: contributor.contributions,
    class: 'contributor-badge',
  });
}

export default Contributor;
