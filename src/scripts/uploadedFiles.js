const files = document.getElementById('upload');
const tbody = document.querySelector('.files__tbody');
const state = [];

function render() {
  if (state.length) {
    const filesRow = document.createElement('tr');

    filesRow.className = 'files__row';

    filesRow.innerHTML = (`
      <td class="files__name">
        <i class="fas fa-file-alt files__icon"></i>
          ${state[state.length - 1].name}
      </td>
      <td class="files__size">
        ${Math.ceil((state[state.length - 1].size) / 1000)}kb
      </td>
      <td class="files__number">
        ${state[state.length - 1].words}
      </td>
      <td class="files__remove">
        <i class="fas fa-trash files__trash"></i>
      </td>
    `);

    tbody.append(filesRow);
  }
}

files.addEventListener('change', (event) => {
  const file = files.files;
  let words = 0;

  const reader = new FileReader();

  reader.onload = e => {
    const numberOfWords = e.target.result.split(' ').length;

    words += numberOfWords;

    for (let i = 0; i < file.length; i++) {
      const newFile = {
        name: file[i].name,
        size: file[i].size,
        words,
      };

      state.push(newFile);
    }

    render();

    const trashBin = document.querySelectorAll('.files__remove');

    if (trashBin.length) {
      trashBin.forEach(bin => {
        bin.addEventListener('click', () => {

        });
      });
    }
  };

  reader.readAsText(files.files[0]);
});

render();
