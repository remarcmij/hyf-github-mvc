import Errors from './Errors.js';
import Repository from './Repository.js';
import Contributors from './Contributors.js';
import createComponent from '../lib/createComponent.js';

function MainContainer(parent) {
  const main = createComponent(parent, {
    tag: 'main',
    class: 'main-container',
  });

  Errors(parent);
  Repository(main);
  Contributors(main);
}

export default MainContainer;
