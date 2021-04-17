import { subscribeToStore } from './store/store.js';
import Selector from './components/Selector.js';
import Errors from './components/Errors.js';
import Main from './components/Main.js';

function App(parent) {
  Selector(parent);
  Errors(parent);
  Main(parent);

  // show state changes in the console
  subscribeToStore((state) => console.log(state));
}

window.addEventListener('load', () => {
  const root = document.getElementById('root');
  App(root);
});
