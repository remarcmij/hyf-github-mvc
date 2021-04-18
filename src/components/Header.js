import Selector from './Selector.js';
import createElement from '../lib/createElement.js';

function Header(parent) {
  const header = createElement(parent, { use: 'header', class: 'header' });
  createElement(header, { text: 'HackYourFuture' });
  Selector(header);
}

export default Header;
