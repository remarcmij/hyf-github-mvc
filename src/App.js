import Model from './model/Model.js';
import Selector from './components/Selector.js';
import Main from './components/Main.js';
import Errors from './components/Errors.js';

async function AppComponent() {
  const model = Model();
  const root = document.getElementById('root');

  Selector(model, root);
  Errors(model, root);
  Main(model, root);

  model.subscribe((state) => console.log(state));

  await model.fetchRepos();
  await model.fetchContributors(0);
}

window.addEventListener('load', AppComponent);
