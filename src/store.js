import createStore from './lib/createStore.js';

const initialState = {
  repos: null,
  contributors: null,
  selectedIndex: 0,
  loading: false,
  error: null,
};

export default createStore(initialState);
