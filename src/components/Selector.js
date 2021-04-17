import { fetchContributors } from '../store/actions.js';
import { subscribeToStore } from '../store/store.js';
import createComponent from '../lib/createComponent.js';

function Selector(parent) {
  const selectElem = createComponent(parent, {
    tag: 'select',
    class: 'repo-select',
    autofocus: 'autofocus',
  });

  selectElem.addEventListener('change', () =>
    fetchContributors(selectElem.value)
  );

  const unsubscribe = subscribeToStore((state) => {
    const { repos, loading, error } = state;
    if (!repos || loading || error) {
      return;
    }

    repos.forEach((repo, index) =>
      createComponent(selectElem, {
        tag: 'option',
        text: repo.name,
        value: index,
      })
    );

    // unsubscribe for further update
    unsubscribe();
  });
}

export default Selector;
