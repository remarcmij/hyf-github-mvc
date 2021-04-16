import createAndAppend from '../lib/createAndAppend.js';
import { subscribeToModel } from '../model/model.js';
import { fetchContributors } from '../model/fetchers.js';

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

  subscribeToModel((state) => {
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
