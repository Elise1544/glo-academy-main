const toggleMenu = () => {
  const btnMenu = document.querySelector(`.menu`),
    menu = document.querySelector(`menu`),
    closeBtn = document.querySelector(`.close-btn`);

  const handlerMenu = evt => {
    const target = evt.target;
    if (target.closest(`.menu`) === btnMenu) {
      menu.classList.toggle(`active-menu`);

    } else if ((target === closeBtn) || (target.closest(`a`)) || (!target.closest(`menu`))) {
      menu.classList.remove(`active-menu`);
    } else {
      return;
    }
  };

  const changeAnimation = () => {
    if (document.documentElement.clientWidth < 768) {
      menu.style.transition = `none`;
    } else {
      menu.style.transition = `1s`;
    }
  };

  window.addEventListener(`resize`, changeAnimation);
  document.body.addEventListener(`click`, handlerMenu);

};

export default toggleMenu;