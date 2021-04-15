import createElement from '../lib/createElement.js';
import { fetchContributors } from '../model/model.js';

const repoSelect = document.getElementById('repo-select');

repoSelect.addEventListener('change', (event) => {
  fetchContributors(event.target.value);
});

export function selectView(state) {
  const { repos } = state;

  if (!repos) {
    return;
  }

  if (repoSelect.childNodes.length !== 0) {
    return;
  }

  repos.forEach((repo, index) => {
    const option = createElement('option', {
      text: repo.name,
      value: index,
    });
    repoSelect.appendChild(option);
  });

  repoSelect.removeAttribute('hidden');
}
