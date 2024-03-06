document
  .querySelectorAll('.res-table:not(.craftTable)')[0]
  .querySelectorAll('.res-row')
  .forEach((f) => {
    let element = document.createElement('button');
    if (f.querySelector('.maxRes').textContent) {
      element.innerText = 'Max';
    } else {
      element.innerText = 'X2';
    }
    f.appendChild(element);
    element.addEventListener('click', (e) => {
      let regResult = new RegExp(/resource_(.*?) |resource_(.*?)$/g).exec(
        f.className
      );

      let res = game.resPool.resources.filter(
        (f) => f.name === (regResult[1] ?? regResult[2])
      )[0];
      res.value = res.maxValue === 0 ? res.value * 2 : res.maxValue;
    });
  });
