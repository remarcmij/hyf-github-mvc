const errorContainer = document.getElementById('error-container');

export function errorView(state) {
  const { error } = state;
  errorContainer.textContent = error ? error.message : '';
}
