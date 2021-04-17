import { subscribeToStore } from '../store/store.js';
import { fetchRepos, fetchContributors } from '../store/actions.js';
import Selector from './Selector.js';
import Component from '../lib/Component.js';

function Header(parent) {
  const header = Component(parent, { tag: 'header', class: 'header' });
  Component(header, { text: 'HackYourFuture' });
  const selectElem = Selector(header);

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
      Component(selectElem, { tag: 'option', text: repo.name, value: index })
    );
  });
}

export default Header;
