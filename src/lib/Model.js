import Observable from './Observable.js';

function Model(initialState) {
  let state = { ...initialState };

  const { subscribe, notify } = Observable();

  return {
    subscribe,
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
      notify(state);
    },
  };
}

export default Model;
