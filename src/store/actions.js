import { getState, setState } from './store.js';
import fetchJSON from '../lib/fetchJSON.js';

const HYF_REPOS_URL =
  'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

export async function fetchRepos() {
  try {
    setState({ ...getState(), loading: true, error: null });
    const repos = await fetchJSON(HYF_REPOS_URL);
    repos.sort((a, b) => a.name.localeCompare(b.name));
    setState({ ...getState(), repos, loading: false });
  } catch (error) {
    setState({ ...getState(), loading: false, error });
  }
}

export async function fetchContributors(selectedIndex) {
  try {
    setState({ ...getState(), loading: true, error: null });
    const url = getState().repos[selectedIndex].contributors_url;
    const contributors = await fetchJSON(url);
    setState({
      ...getState(),
      contributors,
      loading: false,
      selectedIndex,
    });
  } catch (error) {
    setState({ ...getState(), loading: false, error });
  }
}
