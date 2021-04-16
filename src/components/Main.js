import Repository from './Repository.js';
import Contributors from './Contributors.js';
import createAndAppend from '../lib/createAndAppend.js';

function Main(parent) {
  const main = createAndAppend('main', parent, {
    class: 'main-container',
  });

  Repository(main);
  Contributors(main);
}

export default Main;
