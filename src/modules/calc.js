const calc = (price = 100) => {
  const calcBlock = document.querySelector(`.calc-block`),
    calcType = document.querySelector(`.calc-type`),
    calcSquare = document.querySelector(`.calc-square`),
    calcDay = document.querySelector(`.calc-day`),
    calcCount = document.querySelector(`.calc-count`),
    totalValue = document.getElementById(`total`);

  let total = 0;
  const countSum = () => {
    let countValue = 1,
      dayValue = 1;

    const typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && typeValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }

    const outNum = (num, step) => {
      let n = 0;
      const t = Math.round(10 / (num / step));
      const interval = setInterval(() => {
        n += step;
        if (n === num || num === 0 || num !== total) {
          clearInterval(interval);
        }
        totalValue.textContent = n;
      }, t);
    };
    outNum(total, 1);

  };



  calcBlock.addEventListener(`change`, evt => {
    const target = evt.target;
    if (target === calcType || target === calcSquare || target === calcDay || target === calcCount) {
      countSum();

    }

  });

};

export default calc;