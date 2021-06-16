`use strict`;

function showDate(deadline) {
  let dateNow = new Date();
  let dateStop = new Date(deadline);
  let timeRemaining = (dateStop.getTime() - dateNow.getTime()) / 1000;

  function hello() {
    let currentHour = dateNow.getHours();

    if (currentHour < 6) {
      return `Добрый день!`;
    } else if (currentHour < 12) {
      return `Доброе утро!`;
    } else if (currentHour < 19) {
      return `Добрый день!`;
    } else {
      return `Добрый вечер!`;
    }
  }

  const daysName = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  function addZero(time) {
    if (time < 10) {
      return `0${time}`;
    } else {
      return time;
    }
  }

  function time() {
    let hours = dateNow.getHours();
    let ampm = hours >= 12 ? `PM` : `AM`;
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${addZero(hours)}:${addZero(dateNow.getMinutes())}:${addZero(dateNow.getSeconds())} ${ampm}`;
  }

  function days() {
    if (timeRemaining > 0) {
      let dayRemaining = Math.floor(timeRemaining / 60 / 60 / 24);
      let daysCount = `дней`;
      if (dayRemaining == 1) {
        daysCount = `день`
      } else if (dayRemaining < 5 && dayRemaining > 1) {
        daysCount = `дня`;
      }
      return `${dayRemaining} ${daysCount}`
    } else {
      return `0 дней`
    }
  }

  return `${hello()}
  Сегодня: ${daysName[dateNow.getDay() - 1]}
  Текущее время: ${time()}
  До нового года осталось ${days()}`;

}

const div = document.createElement(`div`);
div.style.cssText = `
text-align: center;
font-size: 30px;
margin-top: 10%;
`

setInterval(() => {
  div.innerText = showDate(`31 dec 2021`);
}, 1000)


document.body.append(div);