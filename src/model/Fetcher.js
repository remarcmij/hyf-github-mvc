import fetchJSON from '../utils/fetchJSON.js';

const HYF_REPOS_URL =
  'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

function Fetcher(model) {
  return {
    fetchRepos: async () => {
      const state = model.getState();
      try {
        model.setState({ ...state, loading: true, error: null });
        const repos = await fetchJSON(HYF_REPOS_URL);
        repos.sort((a, b) => a.name.localeCompare(b.name));
        model.setState({ ...state, repos, loading: false });
      } catch (error) {
        model.setState({ ...state, loading: false, error });
      }
    },
    fetchContributors: async (selectedIndex) => {
      const state = model.getState();
      try {
        model.setState({ ...state, loading: true, error: null });
        const url = state.repos[selectedIndex].contributors_url;
        const contributors = await fetchJSON(url);
        model.setState({
          ...state,
          contributors,
          loading: false,
          selectedIndex,
        });
      } catch (error) {
        model.setState({ ...state, loading: false, error });
      }
    },
  };
}

export default Fetcher;
