function SelectController(dom, model) {
  dom.repoSelect.addEventListener('change', (event) => {
    model.fetchContributors(event.target.value);
  });
}
export default SelectController;
