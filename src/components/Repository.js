import store from '../store.js';
import TableRow from './TableRow.js';
import createElement from '../lib/createElement.js';

function Repository(parent) {
  // Set up fixed parts
  const container = createElement(parent, {
    use: 'section',
    class: 'repo-container whiteframe hide',
  });

  const cardContainer = createElement(container, {
    class: 'card-container',
  });

  const table = createElement(cardContainer, { use: 'table' });
  const tbody = createElement(table, { use: 'tbody' });

  const repositoryElem = TableRow(tbody, { label: 'Repository' });
  const repositoryLink = createElement(repositoryElem, {
    use: 'a',
    target: '_blank',
  });
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
    repositoryLink.href = repo.html_url;
    repositoryLink.textContent = repo.name;
    descriptionElem.textContent = repo.description;
    forksElem.textContent = repo.forks;
    updatedElem.textContent = new Date(repo.updated_at).toLocaleString();
  });
}

export default Repository;
