import Observable from '../utils/Observable.js';

function Model() {
  let state = {
    repos: null,
    contributors: null,
    selectedIndex: 0,
    loading: false,
    error: null,
  };

  const observable = Observable();

  return {
    subscribe(listener) {
      observable.subscribe(listener);
    },
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
      console.log(state);
      observable.notify(state);
    },
  };
}

export default Model;
