import store from '../store/store.js';
import TableRow from './TableRow.js';
import createComponent from '../lib/createComponent.js';

function Repository(parent) {
  // Set up fixed parts
  const container = createComponent(parent, {
    tag: 'section',
    class: 'repo-container whiteframe hide',
  });

  const cardContainer = createComponent(container, {
    class: 'card-container',
  });

  const table = createComponent(cardContainer, { tag: 'table' });
  const tbody = createComponent(table, { tag: 'tbody' });

  const repositoryElem = TableRow(tbody, { label: 'Repository' });
  const descriptionElem = TableRow(tbody, { label: 'Description' });
  const forksElem = TableRow(tbody, { label: 'Forks' });
  const updatedElem = TableRow(tbody, { label: 'Updated' });

  // Update elements
  store.subscribe((state) => {
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
