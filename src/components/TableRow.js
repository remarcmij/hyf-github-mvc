import Component from '../lib/Component.js';

function TableRow(parent, props) {
  const { label } = props;
  const row = Component(parent, { tag: 'tr' });
  Component(row, { tag: 'th', text: `${label}:`, class: 'label' });
  return Component(row, { tag: 'td' });
}

export default TableRow;
