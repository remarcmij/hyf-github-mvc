let state = {
  repos: null,
  contributors: null,
  selectedIndex: 0,
  loading: false,
  error: null,
};

const listeners = [];

function notify(state) {
  listeners.forEach((listener) => listener(state));
}

export function getState() {
  return state;
}
export function setState(newState) {
  state = newState;
  notify(state);
}

export function subscribeToModel(listener) {
  listeners.push(listener);
}
