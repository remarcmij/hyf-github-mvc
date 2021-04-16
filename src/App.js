import { subscribeToStore } from './store/store.js';
import { fetchRepos, fetchContributors } from './store/actions.js';
import Selector from './components/Selector.js';
import Errors from './components/Errors.js';
import Main from './components/Main.js';

async function AppComponent() {
  const root = document.getElementById('root');

  Selector(root);
  Errors(root);
  Main(root);

  subscribeToStore((state) => console.log(state));

  await fetchRepos();
  await fetchContributors(0);
}

window.addEventListener('load', AppComponent);
