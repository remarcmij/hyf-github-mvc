function RepoView(dom) {
  return ({ repos, selectedIndex }) => {
    if (!repos) {
      return;
    }

    const repo = repos[selectedIndex];
    dom.repoName.href = repo.html_url;
    dom.repoName.textContent = repo.name;
    dom.repoDescription.textContent = repo.description;
    dom.repoForks.textContent = repo.forks;
    dom.repoUpdated.textContent = new Date(repo.updated_at).toLocaleString();
  };
}

export default RepoView;
