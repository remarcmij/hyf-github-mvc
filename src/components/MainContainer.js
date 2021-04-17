import Errors from './Errors.js';
import Repository from './Repository.js';
import Contributors from './Contributors.js';
import Component from '../lib/Component.js';

function MainContainer(parent) {
  const main = Component(parent, { tag: 'main', class: 'main-container' });

  Errors(parent);
  Repository(main);
  Contributors(main);
}

export default MainContainer;
