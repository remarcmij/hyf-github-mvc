import Model from './model/Model.js';
import Fetcher from './model/Fetcher.js';
import SelectView from './views/SelectView.js';
import RepoView from './views/RepoView.js';
import ContributorsView from './views/ContributorsView.js';
import SelectController from './controllers/SelectController.js';
import getDOM from './utils/getDOM.js';

function main() {
  const dom = getDOM();

  const model = Model();
  const fetcher = Fetcher(model);

  model.subscribe(SelectView(dom));
  model.subscribe(RepoView(dom));
  model.subscribe(ContributorsView(dom));

  SelectController(dom, fetcher);
}

window.addEventListener('load', main);
