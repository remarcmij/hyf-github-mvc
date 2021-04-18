import createComponent from '../lib/createComponent.js';

function TableRow(parent, props) {
  const { label } = props;
  const row = createComponent(parent, { use: 'tr' });
  createComponent(row, { use: 'th', text: `${label}:`, class: 'label' });
  return createComponent(row, { use: 'td' });
}

export default TableRow;
