import createAndAppend from '../lib/createAndAppend.js';

function Selector(model, parent) {
  const dom = {};
  const header = createAndAppend('header', parent, {
    class: 'header',
  });
  createAndAppend('div', header, { text: 'HackYourFuture' });
  dom.select = createAndAppend('select', header, {
    class: 'repo-select',
    autofocus: 'autofocus',
  });

  dom.select.addEventListener('change', () =>
    model.fetchContributors(dom.select.value)
  );

  model.subscribe((state) => {
    const { repos, loading, error } = state;
    if (!repos || loading || error) {
      return;
    }

    if (dom.select.childNodes.length !== 0) {
      return;
    }

    repos.forEach((repo, index) =>
      createAndAppend('option', dom.select, {
        text: repo.name,
        value: index,
      })
    );
  });
}

export default Selector;
