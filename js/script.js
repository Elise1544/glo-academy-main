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
			let timer = getTimeRemaining();

			if (timer.timeRemaining > 0) {
				timerHours.textContent = addZero(timer.hours);
				timerMinutes.textContent = addZero(timer.minutes);
				timerSeconds.textContent = addZero(timer.seconds);
			} else {
				timerHours.textContent = `00`;
				timerHours.style.color = `red`;
				timerMinutes.textContent = `00`;
				timerMinutes.style.color = `red`;
				timerSeconds.textContent = `00`;
				timerSeconds.style.color = `red`;
			}
		}

		setInterval(updateClock, 1000);
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

	// слайдер
	const slider = () => {
		const slide = document.querySelectorAll(`.portfolio-item`),
			dotBlock = document.querySelector(`.portfolio-dots`),
			slider = document.querySelector(`.portfolio-content`);

		let currentSlide = 0,
			interval,
			dot;

		const addDots = () => {
			for (let i = 0; i < slide.length; i++) {
				let li = document.createElement(`li`);
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

		const startSlide = (time) => {
			interval = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(interval);
		};

		slider.addEventListener(`click`, evt => {
			evt.preventDefault();

			let target = evt.target;

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
	slider();


});
