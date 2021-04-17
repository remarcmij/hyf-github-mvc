import store from './store/store.js';
import { fetchRepos, fetchContributors } from './store/actions.js';
import Header from './components/Header.js';
import MainContainer from './components/MainContainer.js';

function App(parent) {
  Header(parent);
  MainContainer(parent);

  // Initial fetches
  fetchRepos().then(() => fetchContributors(0));

  // show state changes in the console
  store.subscribe((state) => console.log(state));
}

window.addEventListener('load', () => {
  const root = document.getElementById('root');
  App(root);
});
