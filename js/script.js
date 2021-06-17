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
	countTimer('18 june 2021');

	// menu
	const toggleMenu = () => {
		const btnMenu = document.querySelector(`.menu`),
			menu = document.querySelector(`menu`),
			closeBtn = document.querySelector(`.close-btn`),
			menuItems = menu.querySelectorAll(`ul>li`);

		const handlerMenu = () => {
			menu.classList.toggle(`active-menu`);
		};


		btnMenu.addEventListener(`click`, handlerMenu);
		closeBtn.addEventListener(`click`, handlerMenu);
		menuItems.forEach(elem => {
			elem.addEventListener(`click`, handlerMenu);
		});
	};
	toggleMenu();

	// popup
	const togglePopUp = () => {
		const popup = document.querySelector(`.popup`),
			popupContent = document.querySelector(`.popup-content`),
			popupBtn = document.querySelectorAll(`.popup-btn`),
			popupClose = document.querySelector(`.popup-close`);

		const animatePopup = () => {
			let count = 0;
			let animateElem = false;
			const animate = () => {
				let animateInterval = requestAnimationFrame(animate);
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

		popupBtn.forEach((elem) => {
			elem.addEventListener(`click`, animatePopup);
		});
		popupClose.addEventListener(`click`, () => {
			popup.style.display = `none`;
		});
	};
	togglePopUp();
});
