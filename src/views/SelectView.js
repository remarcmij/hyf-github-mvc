import createAndAppend from '../utils/createAndAppend.js';

function SelectView(dom) {
  return ({ repos }) => {
    if (dom.repoSelect.childNodes.length !== 0) {
      return;
    }

    repos &&
      repos.forEach((repo, index) =>
        createAndAppend('option', dom.repoSelect, {
          text: repo.name,
          value: index,
        }),
      );
  };
}

export default SelectView;
