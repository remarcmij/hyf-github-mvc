let state = {
  repos: null,
  contributors: null,
  selectedIndex: 0,
  loading: false,
  error: null,
};

const listeners = new Set();

function notify(state) {
  listeners.forEach((listener) => listener(state));
}

export function getState() {
  return state;
}

export function updateState(updates) {
  state = { ...state, ...updates };
  notify(state);
}

export function subscribeToStore(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
