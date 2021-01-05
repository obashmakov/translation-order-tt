const getData = async() => {
  const request = await fetch('../api/urgency.json');
  const response = request.json();

  return response;
};

const infoText = document.querySelector('.info__text');
const points = document.querySelectorAll('.line__point');
const lineTime = document.querySelectorAll('.line__time');

lineTime.forEach(time => {
  if (time.classList.contains('line__time--selected')) {
    infoText.innerHTML = `
      With an <span class="line__orange">
      ${time.innerText}</span> timeline set up
      , you will get the best translation.
      `;
  }
});

points.forEach(point => {
  point.addEventListener('click', () => {
    const pointIndex = [...points].indexOf(point);

    getData()
      .then(res => {
        let time;
        let text;

        if (pointIndex === 0) {
          time = 'I GOT TIME';
          text = res[0].gotTime;
        } else if (pointIndex === 1) {
          time = 'AVERAGE';
          text = res[0].average;
        } else {
          time = 'YESTERDAY';
          text = res[0].yesterday;
        }

        infoText.innerHTML = `
          With an <span class="line__orange">
          ${time}</span> timeline set up, ${text}
        `;
      });
  });
});
