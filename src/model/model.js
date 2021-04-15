import fetchJSON from '../lib/fetchJSON.js';

const HYF_REPOS_URL =
  'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

let state = {
  repos: null,
  contributors: null,
  selectedIndex: 0,
  loading: false,
  error: null,
};

const views = [];

export function subscribeToModel(view) {
  views.push(view);
}

function notifyViews(state) {
  views.forEach((view) => view(state));
}

function setState(newState) {
  state = newState;
  notifyViews(state);
}

export async function fetchRepos() {
  try {
    setState({ ...state, loading: true, error: null });
    const repos = await fetchJSON(HYF_REPOS_URL);
    repos.sort((a, b) => a.name.localeCompare(b.name));
    setState({ ...state, repos, loading: false });
  } catch (error) {
    setState({ ...state, loading: false, error });
  }
}

export async function fetchContributors(selectedIndex) {
  try {
    setState({ ...state, loading: true, error: null });
    const url = state.repos[selectedIndex].contributors_url;
    const contributors = await fetchJSON(url);
    setState({
      ...state,
      contributors,
      loading: false,
      selectedIndex,
    });
  } catch (error) {
    setState({ ...state, loading: false, error });
  }
}
