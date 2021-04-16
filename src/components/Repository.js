import createAndAppend from '../lib/createAndAppend.js';
import { subscribeToStore } from '../store/store.js';

function addRow(tbody, label) {
  const row = createAndAppend('tr', tbody);
  createAndAppend('th', row, { text: `${label}:`, class: 'label' });
  return createAndAppend('td', row);
}

function Repository(parent) {
  // Set up fixed parts
  const container = createAndAppend('section', parent, {
    class: 'repo-container whiteframe hide',
  });

  const cardContainer = createAndAppend('div', container, {
    class: 'card-container',
  });

  const table = createAndAppend('table', cardContainer);
  const tbody = createAndAppend('tbody', table);

  const repositoryElem = addRow(tbody, 'Repository');
  const descriptionElem = addRow(tbody, 'Description');
  const forksElem = addRow(tbody, 'Forks');
  const updatedElem = addRow(tbody, 'Updated');

  // Update elements
  subscribeToStore((state) => {
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
    repositoryElem.href = repo.html_url;
    repositoryElem.textContent = repo.name;
    descriptionElem.textContent = repo.description;
    forksElem.textContent = repo.forks;
    updatedElem.textContent = new Date(repo.updated_at).toLocaleString();
  });
}

export default Repository;
