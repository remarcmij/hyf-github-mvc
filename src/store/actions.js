import { getState, updateState } from './store.js';
import fetchJSON from '../lib/fetchJSON.js';

const HYF_REPOS_URL =
  'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

export async function fetchRepos() {
  try {
    updateState({ loading: true, error: null });
    const repos = await fetchJSON(HYF_REPOS_URL);
    repos.sort((a, b) => a.name.localeCompare(b.name));
    updateState({ repos, loading: false });
  } catch (error) {
    updateState({ loading: false, error });
  }
}

export async function fetchContributors(selectedIndex) {
  try {
    updateState({ loading: true, error: null });
    const url = getState().repos[selectedIndex].contributors_url;
    const contributors = await fetchJSON(url);
    updateState({
      contributors,
      loading: false,
      selectedIndex,
    });
  } catch (error) {
    updateState({ loading: false, error });
  }
}
