import { fetchContributors } from '../store/actions.js';
import { subscribeToStore } from '../store/store.js';
import Component from '../lib/Component.js';

function Selector(parent) {
  const selectElem = Component(parent, {
    tag: 'select',
    class: 'repo-select',
    autofocus: 'autofocus',
  });

  selectElem.addEventListener('change', () =>
    fetchContributors(selectElem.value)
  );
  
  subscribeToStore((state) => {
    const { repos, loading, error } = state;
    if (!repos || loading || error) {
      return;
    }

    if (selectElem.childNodes.length !== 0) {
      return;
    }

    repos.forEach((repo, index) =>
      Component(selectElem, { tag: 'option', text: repo.name, value: index })
    );
  });
}

export default Selector;
