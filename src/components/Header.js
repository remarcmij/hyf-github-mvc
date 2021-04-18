import Selector from './Selector.js';
import createComponent from '../lib/createComponent.js';

function Header(parent) {
  const header = createComponent(parent, { use: 'header', class: 'header' });
  createComponent(header, { text: 'HackYourFuture' });
  Selector(header);
}

export default Header;
