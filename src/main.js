import {
  subscribeToModel,
  fetchRepos,
  fetchContributors,
} from './model/model.js';
import { selectView } from './views/selectView.js';
import { repoView } from './views/repoView.js';
import { contributorsView } from './views/contributorsView.js';
import { loggerView } from './views/loggerView.js';

async function main() {
  subscribeToModel(selectView);
  subscribeToModel(repoView);
  subscribeToModel(contributorsView);
  subscribeToModel(loggerView);

  await fetchRepos();
  await fetchContributors(0);
}

window.addEventListener('load', main);
