import maskPhone from './maskPhone';

const validation = () => {
  const calcItems = document.querySelectorAll(`.calc-item:not(.calc-type)`),
    name = document.querySelectorAll(`.form-name`),
    email = document.querySelectorAll(`.form-email`),
    phone = document.querySelectorAll(`.form-phone`),
    message = document.getElementById(`form2-message`),
    allInputs = document.querySelectorAll(`input`);

  const replace = (item, regex) => {
    item.value = item.value.replace(regex, ``);
  };

  calcItems.forEach(item => {
    item.addEventListener(`input`, () => {
      replace(item, /\D/);
    });
  });

  name.forEach(item => {
    item.addEventListener(`input`, () => {
      replace(item, /[^а-я\s]/i);
    });
  });

  message.addEventListener(`input`, () => {
    replace(message, /[^а-я\d\,.!?;:-\s]/i);
  });

  email.forEach(item => {
    item.addEventListener(`input`, evt => {
      replace(item, /[^a-z\d\-~.@_!*']/gi);
    });
  });

  maskPhone(`.form-phone`);
  phone.forEach(item => {
  });

  allInputs.forEach(input => {
    input.addEventListener(`blur`, () => {
      input.value = input.value.replace(/(\s)+/g, ` `);
      input.value = input.value.replace(/(\-)+/g, `-`);
      input.value = input.value.replace(/(\s|\-)*$/, ``);
      input.value = input.value.replace(/^(\s|\-)*/, ``);
      if (input.classList.contains(`form-name`)) {
        const array = input.value.split(` `);
        for (let i = 0; i < array.length; i++) {
          array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
        }
        input.value = array.join(` `);
      }
    });
  });

};

export default validation;