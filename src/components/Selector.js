import { fetchContributors } from '../actions.js';
import store from '../store.js';
import createComponent from '../lib/createComponent.js';

function Selector(parent) {
  const selectElem = createComponent(parent, {
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
      createComponent(selectElem, {
        use: 'option',
        text: repo.name,
        value: index,
      })
    );

    // unsubscribe for further update
    unsubscribe();
  });
}

export default Selector;
