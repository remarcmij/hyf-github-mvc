import Selector from './Selector.js';
import Component from '../lib/Component.js';

function Header(parent) {
  const header = Component(parent, { tag: 'header', class: 'header' });
  Component(header, { text: 'HackYourFuture' });
  Selector(header);
}

export default Header;
