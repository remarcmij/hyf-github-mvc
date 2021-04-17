import { fetchContributors } from '../store/actions.js';
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

  return selectElem;
}

export default Selector;
