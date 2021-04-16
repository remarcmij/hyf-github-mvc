import createAndAppend from '../lib/createAndAppend.js';
import Repository from './Repository.js';
import Contributors from './Contributors.js';

function Main(model, parent) {
  const main = createAndAppend('main', parent, {
    class: 'main-container',
  });

  Repository(model, main);
  Contributors(model, main);
}

export default Main;
