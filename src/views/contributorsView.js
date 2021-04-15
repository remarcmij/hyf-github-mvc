import createElement from '../lib/createElement.js';

const contributorsContainer = document.getElementById('contributor-list');

export function contributorsView(state) {
  const { contributors, loading, error } = state;

  if (!contributors || loading || error) {
    return;
  }

  contributorsContainer.innerHTML = '';
  contributors.forEach((contributor) => {
    const li = createElement('li', contributorsContainer);
    contributorsContainer.appendChild(li);

    const a = createElement('a', {
      href: contributor.html_url,
      class: 'contributor-item',
      target: '_blank',
    });
    li.appendChild(a);

    const img = createElement('img', {
      src: contributor.avatar_url,
      alt: `avatar for ${contributor.login}`,
      class: 'contributor-avatar',
      height: 48,
      loading: 'lazy', // try the new lazy loading from Chrome 76
    });
    a.appendChild(img);

    const contributorDiv = createElement('div', {
      class: 'contributor-data',
    });
    a.append(contributorDiv);

    const loginDiv = createElement('div', { text: contributor.login });
    contributorDiv.appendChild(loginDiv);

    const contributionsDiv = createElement('div', {
      text: contributor.contributions,
      class: 'contributor-badge',
    });
    contributorDiv.appendChild(contributionsDiv);
  });
}
