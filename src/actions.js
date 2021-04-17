import store from './store.js';
import fetchJSON from './lib/fetchJSON.js';

const HYF_REPOS_URL =
  'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

export async function fetchRepos() {
  try {
    store.updateState({ loading: true, error: null });
    const repos = await fetchJSON(HYF_REPOS_URL);
    repos.sort((a, b) => a.name.localeCompare(b.name));
    store.updateState({ repos, loading: false });
  } catch (error) {
    store.updateState({ loading: false, error });
  }
}

export async function fetchContributors(selectedIndex) {
  try {
    store.updateState({ loading: true, error: null });
    const { repos } = store.getState();
    const url = repos[selectedIndex].contributors_url;
    const contributors = await fetchJSON(url);
    store.updateState({
      contributors,
      loading: false,
      selectedIndex,
    });
  } catch (error) {
    store.updateState({ loading: false, error });
  }
}
