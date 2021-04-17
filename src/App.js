import { subscribeToStore } from './store/store.js';
import Header from './components/Header.js';
// import Errors from './components/Errors.js';
import MainContainer from './components/MainContainer.js';

function App(parent) {
  Header(parent);
  // Errors(parent);
  MainContainer(parent);

  // show state changes in the console
  subscribeToStore((state) => console.log(state));
}

window.addEventListener('load', () => {
  const root = document.getElementById('root');
  App(root);
});
