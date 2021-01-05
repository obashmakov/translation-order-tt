const translationType = document.querySelectorAll('.select__container');
const translationMark = document.querySelectorAll('.select__icon');
const line = document.querySelectorAll('.line__point');
const lineText = document.querySelectorAll('.line__time');
const tone = document.querySelectorAll('.tone');
const toneMark = document.querySelectorAll('.tone__mark');

function toggleClass(element, classSelected) {
  element.forEach(elem => {
    elem.classList.contains(classSelected);

    elem.addEventListener('click', () => {
      element.forEach(item => {
        if (item.classList.contains(classSelected)) {
          item.classList.remove(classSelected);
        }
      });

      elem.classList.toggle(classSelected);
    });
  });
}

function toggleClassCheckMarks(element, elementChild, classSelected) {
  element.forEach(elem => {
    elem.addEventListener('click', () => {
      const indexOfClickedItem = [...element].indexOf(elem);

      elementChild.forEach(item => {
        if (item.classList.contains(classSelected)) {
          item.classList.remove(classSelected);
        }
      });

      elementChild[indexOfClickedItem].classList.toggle(classSelected);
    });
  });
}

toggleClass(translationType, 'select__container--selected');
toggleClassCheckMarks(translationType, translationMark, 'select__icon--selected')

toggleClass(line, 'line__point--selected');
toggleClassCheckMarks(line, lineText, 'line__time--selected');

toggleClass(tone, 'tone--selected');
toggleClassCheckMarks(tone, toneMark, 'tone__mark--selected');
