const sendForm = formNumber => {
  const errorMessage = `Что-то пошло не так...`,
    successMessage = `Спасибо! Мы скоро с вами свяжемся!`;

  const loadMessage = document.createElement(`div`);
  loadMessage.insertAdjacentHTML(`beforeend`, `
  <div class='sk-three-bounce'>
    <div class='sk-bounce-1 sk-child'></div>
    <div class='sk-bounce-2 sk-child'></div>
    <div class='sk-bounce-3 sk-child'></div>
  </div>`
  );

  const style = document.createElement(`style`);
  style.insertAdjacentHTML(`beforeend`, `
  .sk-three-bounce {
    width: 8em;
    margin: auto;
    text-align: center;
  }
  .sk-three-bounce .sk-child {
    width: 2em;
    height: 2em;
    background-color: #337ab7;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
            animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
  }
  .sk-three-bounce .sk-bounce-1 {
    -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
  }
  .sk-three-bounce .sk-bounce-2 {
    -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
  }
  
  @-webkit-keyframes sk-three-bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
  
  @keyframes sk-three-bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }`
  );

  const form = document.querySelector(formNumber);
  const statusMessage = document.createElement(`div`);

  if (form === document.querySelector(`#form3`)) {
    statusMessage.style.cssText = `font-size: 2rem;
    color: white`;
  } else {
    statusMessage.style.cssText = `font-size: 2rem`;
  }

  form.addEventListener(`submit`, evt => {
    evt.preventDefault();
    form.appendChild(statusMessage);


    statusMessage.appendChild(loadMessage);
    document.head.append(style);

    const formData = new FormData(form);
    const body = {};
    formData.forEach((key, val) => {
      body[key] = val;
    });

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`status network not 200`);
        }
        statusMessage.textContent = successMessage;
      })
      .catch(error => {
        statusMessage.textContent = errorMessage;
        console.error(error)
      });
    form.reset();
  });

  const postData = body => {

    return fetch('./server.php', {
      method: `POST`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
};

export default sendForm;