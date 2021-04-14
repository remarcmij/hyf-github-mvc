function SelectController(dom, fetcher) {
  dom.repoSelect.addEventListener('change', (event) => {
    fetcher.fetchContributors(event.target.value);
  });
}
export default SelectController;
