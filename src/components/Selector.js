import createAndAppend from '../lib/createAndAppend.js';
import { subscribeToStore } from '../store/store.js';
import { fetchRepos, fetchContributors } from '../store/actions.js';

function Selector(parent) {
  const header = createAndAppend('header', parent, {
    class: 'header',
  });
  createAndAppend('div', header, { text: 'HackYourFuture' });
  const selectElem = createAndAppend('select', header, {
    class: 'repo-select',
    autofocus: 'autofocus',
  });

  selectElem.addEventListener('change', () =>
    fetchContributors(selectElem.value)
  );

  fetchRepos().then(() => fetchContributors(0));

  subscribeToStore((state) => {
    const { repos, loading, error } = state;
    if (!repos || loading || error) {
      return;
    }

    if (selectElem.childNodes.length !== 0) {
      return;
    }

    repos.forEach((repo, index) =>
      createAndAppend('option', selectElem, {
        text: repo.name,
        value: index,
      })
    );
  });
}

export default Selector;
