`use strict`;

const p = document.querySelector(`p`),
	input = document.querySelector(`input`);

const debounce = function(fn, time) {
	let timeout;

	return function() {
		const self = this;
		const functionCall = function() {
			return fn.apply(self, arguments);
		};
		clearTimeout(timeout);
		timeout = setTimeout(functionCall, time);
	};
};

const changeText = () => {
	p.textContent = input.value;
	return;
};

input.addEventListener(`input`, debounce(changeText, 300));
