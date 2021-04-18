import createElement from '../lib/createElement.js';

function TableRow(parent, props) {
  const { label } = props;
  const row = createElement(parent, { use: 'tr' });
  createElement(row, { use: 'th', text: `${label}:`, class: 'label' });
  return createElement(row, { use: 'td' });
}

export default TableRow;
