import createAndAppend from '../lib/createAndAppend.js';

function addRow(tbody, label) {
  const row = createAndAppend('tr', tbody);
  createAndAppend('th', row, { text: `${label}:`, class: 'label' });
  return createAndAppend('td', row);
}

function Repository(model, parent) {
  const dom = {};

  // Set up fixed parts
  const container = createAndAppend('section', parent, {
    class: 'repo-container whiteframe hide',
  });

  const cardContainer = createAndAppend('div', container, {
    class: 'card-container',
  });

  const table = createAndAppend('table', cardContainer);
  const tbody = createAndAppend('tbody', table);

  dom.repository = addRow(tbody, 'Repository');
  dom.description = addRow(tbody, 'Description');
  dom.forks = addRow(tbody, 'Forks');
  dom.updated = addRow(tbody, 'Updated');

  // Update elements
  model.subscribe((state) => {
    const { repos, selectedIndex, error, loading } = state;

    if (error) {
      container.classList.add('hide');
    } else {
      container.classList.remove('hide');
    }

    if (!repos || loading || error) {
      return;
    }

    const repo = repos[selectedIndex];
    dom.repository.href = repo.html_url;
    dom.repository.textContent = repo.name;
    dom.description.textContent = repo.description;
    dom.forks.textContent = repo.forks;
    dom.updated.textContent = new Date(repo.updated_at).toLocaleString();
  });
}

export default Repository;
