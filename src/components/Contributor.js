import Component from '../lib/Component.js';

function Contributor(parent, props) {
  const { contributor } = props;
  const li = Component(parent, { tag: 'li' });
  const a = Component(li, {
    tag: 'a',
    href: contributor.html_url,
    class: 'contributor-item',
    target: '_blank',
  });
  Component(a, {
    tag: 'img',
    src: contributor.avatar_url,
    alt: `avatar for ${contributor.login}`,
    class: 'contributor-avatar',
    height: 48,
    loading: 'lazy', // try the new lazy loading from Chrome 76
  });
  const div = Component(a, {
    class: 'contributor-data',
  });
  Component(div, { text: contributor.login });
  Component(div, {
    text: contributor.contributions,
    class: 'contributor-badge',
  });
}

export default Contributor;
