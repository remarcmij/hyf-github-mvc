import AppModel from './model/AppModel.js';
import SelectView from './views/SelectView.js';
import RepoView from './views/RepoView.js';
import ContributorsView from './views/ContributorsView.js';
import SelectController from './controllers/SelectController.js';
import getDOM from './lib/getDOM.js';

async function main() {
  const dom = getDOM();

  const model = AppModel();

  model.subscribe(SelectView(dom));
  model.subscribe(RepoView(dom));
  model.subscribe(ContributorsView(dom));

  SelectController(dom, model);

  await model.fetchRepos();
  await model.fetchContributors(0);
}

window.addEventListener('load', main);
