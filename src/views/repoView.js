const repoName = document.getElementById('repo-name');
const repoDescription = document.getElementById('repo-description');
const repoForks = document.getElementById('repo-forks');
const repoUpdated = document.getElementById('repo-updated');

export function repoView(state) {
  const { repos, loading, error, selectedIndex } = state;
  if (!repos || loading || error) {
    return;
  }

  const repo = repos[selectedIndex];
  repoName.href = repo.html_url;
  repoName.textContent = repo.name;
  repoDescription.textContent = repo.description;
  repoForks.textContent = repo.forks;
  repoUpdated.textContent = new Date(repo.updated_at).toLocaleString();
}
