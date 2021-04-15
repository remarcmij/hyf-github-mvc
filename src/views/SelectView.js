import createAndAppend from '../lib/createAndAppend.js';

function SelectView(dom) {
  return ({ repos }) => {
    if (dom.repoSelect.childNodes.length !== 0) {
      return;
    }

    if (!repos) {
      return;
    }

    repos.forEach((repo, index) =>
      createAndAppend('option', dom.repoSelect, {
        text: repo.name,
        value: index,
      })
    );

    dom.repoSelect.removeAttribute('hidden');
  };
}

export default SelectView;
