import { subscribeToStore } from './store/store.js';
import { fetchRepos, fetchContributors } from './store/actions.js';
import Selector from './components/Selector.js';
import Errors from './components/Errors.js';
import Main from './components/Main.js';

async function App(parent) {
  Selector(parent);
  Errors(parent);
  Main(parent);

  subscribeToStore((state) => console.log(state));

  await fetchRepos();
  await fetchContributors(0);
}

window.addEventListener('load', () => {
  const root = document.getElementById('root');
  App(root);
});
