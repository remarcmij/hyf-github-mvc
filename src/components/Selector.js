import createAndAppend from '../lib/createAndAppend.js';
import { subscribeToModel } from '../model/model.js';
import { fetchContributors } from '../model/fetchers.js';

function Selector(parent) {
  const dom = {};
  const header = createAndAppend('header', parent, {
    class: 'header',
  });
  createAndAppend('div', header, { text: 'HackYourFuture' });
  dom.select = createAndAppend('select', header, {
    class: 'repo-select',
    autofocus: 'autofocus',
  });

  dom.select.addEventListener('change', () =>
    fetchContributors(dom.select.value)
  );

  subscribeToModel((state) => {
    const { repos, loading, error } = state;
    if (!repos || loading || error) {
      return;
    }

    if (dom.select.childNodes.length !== 0) {
      return;
    }

    repos.forEach((repo, index) =>
      createAndAppend('option', dom.select, {
        text: repo.name,
        value: index,
      })
    );
  });
}

export default Selector;
