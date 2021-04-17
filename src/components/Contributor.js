import createComponent from '../lib/createComponent.js';

function Contributor(parent, props) {
  const { contributor } = props;
  const li = createComponent(parent, { tag: 'li' });
  const a = createComponent(li, {
    tag: 'a',
    href: contributor.html_url,
    class: 'contributor-item',
    target: '_blank',
  });
  createComponent(a, {
    tag: 'img',
    src: contributor.avatar_url,
    alt: `avatar for ${contributor.login}`,
    class: 'contributor-avatar',
    height: 48,
    loading: 'lazy', // try the new lazy loading from Chrome 76
  });
  const div = createComponent(a, {
    class: 'contributor-data',
  });
  createComponent(div, { text: contributor.login });
  createComponent(div, {
    text: contributor.contributions,
    class: 'contributor-badge',
  });
}

export default Contributor;
