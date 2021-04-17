import { subscribeToStore } from '../store/store.js';
import TableRow from './TableRow.js';
import Component from '../lib/Component.js';

function Repository(parent) {
  // Set up fixed parts
  const container = Component(parent, {
    tag: 'section',
    class: 'repo-container whiteframe hide',
  });

  const cardContainer = Component(container, {
    class: 'card-container',
  });

  const table = Component(cardContainer, { tag: 'table' });
  const tbody = Component(table, { tag: 'tbody' });

  const repositoryElem = TableRow(tbody, { label: 'Repository' });
  const descriptionElem = TableRow(tbody, { label: 'Description' });
  const forksElem = TableRow(tbody, { label: 'Forks' });
  const updatedElem = TableRow(tbody, { label: 'Updated' });

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
