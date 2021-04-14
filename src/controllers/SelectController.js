function SelectController(dom, fetcher) {
  fetcher.fetchRepos();

  dom.repoSelect.addEventListener('change', event => {
    fetcher.fetchContributors(event.target.value);
  });
}
export default SelectController;
