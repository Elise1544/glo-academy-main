window.addEventListener(`DOMContentLoaded`, function () {
  `use strict`;

  function countTimer(deadline) {
    const timerHours = document.querySelector(`#timer-hours`),
      timerMinutes = document.querySelector(`#timer-minutes`),
      timerSeconds = document.querySelector(`#timer-seconds`);

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);

      return { timeRemaining, hours, minutes, seconds };
    }

    function addZero(time) {
      if (time < 10) {
        return `0${time}`;
      } else {
        return time;
      }
    }

    function updateClock() {
      let timer = getTimeRemaining();

      timerHours.textContent = addZero(timer.hours);
      timerMinutes.textContent = addZero(timer.minutes);
      timerSeconds.textContent = addZero(timer.seconds);

      if (timer.timeRemaining > 0) {
        setInterval(updateClock, 1000);
      } else {
        timerHours.textContent = `00`;
        timerMinutes.textContent = `00`;
        timerSeconds.textContent = `00`;
      }
    }

    updateClock();
  }

  countTimer('17 june 2021')


});
