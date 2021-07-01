const slider = () => {
  const slide = document.querySelectorAll(`.portfolio-item`),
    dotBlock = document.querySelector(`.portfolio-dots`),
    slider = document.querySelector(`.portfolio-content`);

  let currentSlide = 0,
    interval,
    dot;

  const addDots = () => {
    for (let i = 0; i < slide.length; i++) {
      const li = document.createElement(`li`);
      li.classList.add(`dot`);
      dotBlock.append(li);
    }
    dot = document.querySelectorAll(`.dot`);
  };
  addDots();

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, `portfolio-item-active`);
    prevSlide(dot, currentSlide, `dot-active`);
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, `portfolio-item-active`);
    nextSlide(dot, currentSlide, `dot-active`);
  };

  const startSlide = time => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener(`click`, evt => {
    evt.preventDefault();

    const target = evt.target;

    if (!target.matches(`.portfolio-btn, .dot`)) {
      return;
    }

    prevSlide(slide, currentSlide, `portfolio-item-active`);
    prevSlide(dot, currentSlide, `dot-active`);
    if (target.matches(`#arrow-right`)) {
      currentSlide++;
    } else if (target.matches(`#arrow-left`)) {
      currentSlide--;
    } else if (target.matches(`.dot`)) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, `portfolio-item-active`);
    nextSlide(dot, currentSlide, `dot-active`);
  });

  slider.addEventListener(`mouseover`, evt => {
    if (evt.target.matches(`.portfolio-btn`) || evt.target.matches(`.dot`)) {
      stopSlide();
    }
  });

  slider.addEventListener(`mouseout`, evt => {
    if (evt.target.matches(`.portfolio-btn`) || evt.target.matches(`.dot`)) {
      startSlide(1500);
    }
  });

  startSlide(1500);

};

export default slider;