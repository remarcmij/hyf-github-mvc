import createAndAppend from '../utils/createAndAppend.js';

function ContributionsView(dom) {
  return ({ contributors }) => {
    if (!contributors) {
      return;
    }

    const container = dom.contributorList;
    container.innerHTML = '';
    contributors.forEach((contributor) => {
      const li = createAndAppend('li', container);
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
  };
}

export default ContributionsView;
