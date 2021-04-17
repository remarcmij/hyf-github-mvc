import createComponent from '../lib/createComponent.js';

function TableRow(parent, props) {
  const { label } = props;
  const row = createComponent(parent, { tag: 'tr' });
  createComponent(row, { tag: 'th', text: `${label}:`, class: 'label' });
  return createComponent(row, { tag: 'td' });
}

export default TableRow;
