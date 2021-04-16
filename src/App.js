import { subscribeToModel } from './model/model.js';
import { fetchRepos, fetchContributors } from './model/fetchers.js';
import Selector from './components/Selector.js';
import Errors from './components/Errors.js';
import Repository from './components/Repository.js';
import Contributors from './components/Contributors.js';
import createAndAppend from './lib/createAndAppend.js';

async function AppComponent() {
  const root = document.getElementById('root');

  Selector(root);
  Errors(root);

  const main = createAndAppend('main', root, {
    class: 'main-container',
  });

  Repository(main);
  Contributors(main);

  subscribeToModel((state) => console.log(state));

  await fetchRepos();
  await fetchContributors(0);
}

window.addEventListener('load', AppComponent);
