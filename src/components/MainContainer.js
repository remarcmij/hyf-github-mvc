import Errors from './Errors.js';
import Repository from './Repository.js';
import Contributors from './Contributors.js';
import createElement from '../lib/createElement.js';

function MainContainer(parent) {
  const main = createElement(parent, {
    use: 'main',
    class: 'main-container',
  });

  Errors(parent);
  Repository(main);
  Contributors(main);
}

export default MainContainer;
