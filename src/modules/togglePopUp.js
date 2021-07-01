const togglePopUp = () => {
  const popup = document.querySelector(`.popup`),
    popupContent = document.querySelector(`.popup-content`),
    popupBtn = document.querySelectorAll(`.popup-btn`);

  const animatePopup = () => {
    let count = 0;
    const animate = () => {
      const animateInterval = requestAnimationFrame(animate);
      count++;
      if (count >= document.documentElement.clientHeight / 20) {
        cancelAnimationFrame(animateInterval);
      } else {
        popupContent.style.top = `${count * 2}px`;
      }
    };
    animate();
  };

  popupBtn.forEach(elem => {
    elem.addEventListener(`click`, () => {
      popup.style.display = `block`;
      if (document.documentElement.clientWidth > 768) {
        animatePopup();
      }
    });
  });

  popup.addEventListener(`click`, evt => {
    let target = evt.target;

    if (target.classList.contains(`popup-close`)) {
      popup.style.display = `none`;
    } else {
      target = target.closest(`.popup-content`);

      if (!target) {
        popup.style.display = `none`;
      }
    }

  });
};

export default togglePopUp;