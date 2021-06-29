// создаем функции
// фильтр по типу = принимает аргументы тип и массив значений, фильтрует значения по типу
const filterByType = (type, ...values) => values.filter(value => typeof value === type),
	// скрыть все блоки ответов 
	hideAllResponseBlocks = () => {
		// блоки ответа = массив из коллекции с селекторами ('div.dialog__response-block')
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		// ко всем блокам ответа применяется стиль display none
		responseBlocksArray.forEach(block => block.style.display = 'none');
	},

	// показать блоки ответа = принимает аргументы блок по селектору, сообщение с текстом, спан по селектору
	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		// скрывает все блоки
		hideAllResponseBlocks();
		// к блоку по селектору применяет стиль display block
		document.querySelector(blockSelector).style.display = 'block';
		// если спан по селектору = true (если такой спан существует)
		if (spanSelector) {
			// в значение этого спана записывается сообщение с текстом
			document.querySelector(spanSelector).textContent = msgText;
		}
	},
	// показать ошибку = принимает аргумент текстовое сообщение, выполняет функцию показать блок с параметрами ('.dialog__response-block_error', msgText, '#error')
	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),
	// показать результат = принимает аргумент текстовое сообщение, выполняет функцию показать блок с параметрами ('.dialog__response-block_ok', msgText, '#ok')
	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),
	// показать отсутствие результата = без аргументов, выполняет функцию показать блок с параметрами ('.dialog__response-block_no-results')
	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),
	// попытаться фильтровать по типу = принимает аргументы тип и значение
	tryFilterByType = (type, values) => {
		// попытаться
		try {
			// создает массив со значениями = соединяет строки через ',' в массив, строка формируется функцией 'фильтр по типу'
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			// создает сообщение = если длина массива не равна 0, 
			const alertMsg = (valuesArray.length) ?
				// то сообщение = данные с типом: значения
				`Данные с типом ${type}: ${valuesArray}` :
				// либо сообщение = Отсутствуют данные типа 
				`Отсутствуют данные типа ${type}`;
			// выполняет функцию 'показать результат' с сообщением
			showResults(alertMsg);
			// если возникает ошибка в блоке try
		} catch (e) {
			// выполняет функцию 'показать ошибку'
			showError(`Ошибка: ${e}`);
		}
	};
// создает кнопку фильтра = находит по селектору ('#filter-btn')
const filterButton = document.querySelector('#filter-btn');

// добавляет кнопке фильтра слушатель по клику
filterButton.addEventListener('click', e => {
	// создает поле ввода тип = находит по селектору ('#type')
	const typeInput = document.querySelector('#type');
	// создает поле ввода дата = находит по селектору ('#data')
	const dataInput = document.querySelector('#data');

	// если значение поле ввода дата пустое
	if (dataInput.value === '') {
		// создает кастомную валидацию поля дата с текстом 'Поле не должно быть пустым!
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		// выполняет функцию 'показать отсутствие результата'
		showNoResults();
		// либо
	} else {
		// кастомная валидация поля даты пустая
		dataInput.setCustomValidity('');
		// отменяет стандартное поведение
		e.preventDefault();
		// выполняет функцию 'попытаться фильтровать по типу' с параметрами полей ввода тип и дата, с обрезанными пробелами в начале и в конце
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});

