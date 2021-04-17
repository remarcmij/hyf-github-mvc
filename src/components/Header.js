import Selector from './Selector.js';
import createComponent from '../lib/createComponent.js';

function Header(parent) {
  const header = createComponent(parent, { tag: 'header', class: 'header' });
  createComponent(header, { text: 'HackYourFuture' });
  Selector(header);
}

export default Header;
