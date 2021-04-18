import { fetchContributors } from '../actions.js';
import store from '../store.js';
import createElement from '../lib/createElement.js';

function Selector(parent) {
  const selectElem = createElement(parent, {
    use: 'select',
    class: 'repo-select',
    autofocus: 'autofocus',
  });

  selectElem.addEventListener('change', () =>
    fetchContributors(selectElem.value)
  );

  const unsubscribe = store.subscribe((state) => {
    const { repos, loading, error } = state;
    if (!repos || loading || error) {
      return;
    }

    repos.forEach((repo, index) =>
      createElement(selectElem, {
        use: 'option',
        text: repo.name,
        value: index,
      })
    );

    // unsubscribe for further updates
    unsubscribe();
  });
}

export default Selector;
