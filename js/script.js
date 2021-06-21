window.addEventListener(`DOMContentLoaded`, () => {
	`use strict`;

	// timer
	const countTimer = deadline => {
		const timerHours = document.querySelector(`#timer-hours`),
			timerMinutes = document.querySelector(`#timer-minutes`),
			timerSeconds = document.querySelector(`#timer-seconds`);

		function getTimeRemaining() {
			const dateStop = new Date(deadline).getTime(),
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
			const timer = getTimeRemaining();

			timerHours.textContent = addZero(timer.hours);
			timerMinutes.textContent = addZero(timer.minutes);
			timerSeconds.textContent = addZero(timer.seconds);

			if (timer.timeRemaining > 0) {
				setInterval(updateClock, 1000);
			} else {
				timerHours.textContent = `00`;
				timerHours.style.color = `red`;
				timerMinutes.textContent = `00`;
				timerMinutes.style.color = `red`;
				timerSeconds.textContent = `00`;
				timerSeconds.style.color = `red`;
			}
		}

		updateClock();
	};
	countTimer('18 jule 2021');

	// menu
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

		document.body.addEventListener(`click`, handlerMenu);

	};
	toggleMenu();

	// popup
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
				} else if (screen.width < 768) {
					cancelAnimationFrame(animateInterval);
					popup.style.display = `block`;
				} else {
					popup.style.display = `block`;
					popupContent.style.top = `${count * 2}px`;
				}
			};
			animate();
		};

		popupBtn.forEach(elem => {
			elem.addEventListener(`click`, animatePopup);
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
	togglePopUp();

	// tabs
	const tabs = () => {
		const tabHeader = document.querySelector(`.service-header`),
			tab = tabHeader.querySelectorAll(`.service-header-tab`),
			tabContent = document.querySelectorAll(`.service-tab`);

		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add(`active`);
					tabContent[i].classList.remove(`d-none`);
				} else {
					tab[i].classList.remove(`active`);
					tabContent[i].classList.add(`d-none`);
				}
			}
		};

		tabHeader.addEventListener(`click`, evt => {
			let target = evt.target;
			target = target.closest(`.service-header-tab`);
			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});

	};
	tabs();

});
