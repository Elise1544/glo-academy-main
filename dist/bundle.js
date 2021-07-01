/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/team */ \"./src/modules/team.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('18 jule 2021');\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_team__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__.default)(100);\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)('#form1');\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)('#form2');\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)('#form3');\n\n//# sourceURL=webpack://glo-academy--main/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector(\".calc-block\"),\n      calcType = document.querySelector(\".calc-type\"),\n      calcSquare = document.querySelector(\".calc-square\"),\n      calcDay = document.querySelector(\".calc-day\"),\n      calcCount = document.querySelector(\".calc-count\"),\n      totalValue = document.getElementById(\"total\");\n  var total = 0;\n\n  var countSum = function countSum() {\n    var countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && typeValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    var outNum = function outNum(num, step) {\n      var n = 0;\n      var t = Math.round(10 / (num / step));\n      var interval = setInterval(function () {\n        n += step;\n\n        if (n === num || num === 0 || num !== total) {\n          clearInterval(interval);\n        }\n\n        totalValue.textContent = n;\n      }, t);\n    };\n\n    outNum(total, 1);\n  };\n\n  calcBlock.addEventListener(\"change\", function (evt) {\n    var target = evt.target;\n\n    if (target === calcType || target === calcSquare || target === calcDay || target === calcCount) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://glo-academy--main/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.querySelector(\"#timer-hours\"),\n      timerMinutes = document.querySelector(\"#timer-minutes\"),\n      timerSeconds = document.querySelector(\"#timer-seconds\");\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function addZero(time) {\n    if (time < 10) {\n      return \"0\".concat(time);\n    } else {\n      return time;\n    }\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining > 0) {\n      timerHours.textContent = addZero(timer.hours);\n      timerMinutes.textContent = addZero(timer.minutes);\n      timerSeconds.textContent = addZero(timer.seconds);\n    } else {\n      timerHours.textContent = \"00\";\n      timerHours.style.color = \"red\";\n      timerMinutes.textContent = \"00\";\n      timerMinutes.style.color = \"red\";\n      timerSeconds.textContent = \"00\";\n      timerSeconds.style.color = \"red\";\n    }\n  }\n\n  setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://glo-academy--main/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm(formNumber) {\n  var errorMessage = \"\\u0427\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A...\",\n      successMessage = \"\\u0421\\u043F\\u0430\\u0441\\u0438\\u0431\\u043E! \\u041C\\u044B \\u0441\\u043A\\u043E\\u0440\\u043E \\u0441 \\u0432\\u0430\\u043C\\u0438 \\u0441\\u0432\\u044F\\u0436\\u0435\\u043C\\u0441\\u044F!\";\n  var loadMessage = document.createElement(\"div\");\n  loadMessage.insertAdjacentHTML(\"beforeend\", \"\\n  <div class='sk-three-bounce'>\\n    <div class='sk-bounce-1 sk-child'></div>\\n    <div class='sk-bounce-2 sk-child'></div>\\n    <div class='sk-bounce-3 sk-child'></div>\\n  </div>\");\n  var style = document.createElement(\"style\");\n  style.insertAdjacentHTML(\"beforeend\", \"\\n  .sk-three-bounce {\\n    width: 8em;\\n    margin: auto;\\n    text-align: center;\\n  }\\n  .sk-three-bounce .sk-child {\\n    width: 2em;\\n    height: 2em;\\n    background-color: #337ab7;\\n    border-radius: 100%;\\n    display: inline-block;\\n    -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\\n            animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\\n  }\\n  .sk-three-bounce .sk-bounce-1 {\\n    -webkit-animation-delay: -0.32s;\\n            animation-delay: -0.32s;\\n  }\\n  .sk-three-bounce .sk-bounce-2 {\\n    -webkit-animation-delay: -0.16s;\\n            animation-delay: -0.16s;\\n  }\\n  \\n  @-webkit-keyframes sk-three-bounce {\\n    0%, 80%, 100% {\\n      transform: scale(0);\\n    }\\n    40% {\\n      transform: scale(1);\\n    }\\n  }\\n  \\n  @keyframes sk-three-bounce {\\n    0%, 80%, 100% {\\n      transform: scale(0);\\n    }\\n    40% {\\n      transform: scale(1);\\n    }\\n  }\");\n  var form = document.querySelector(formNumber);\n  var statusMessage = document.createElement(\"div\");\n\n  if (form === document.querySelector(\"#form3\")) {\n    statusMessage.style.cssText = \"font-size: 2rem;\\n    color: white\";\n  } else {\n    statusMessage.style.cssText = \"font-size: 2rem\";\n  }\n\n  form.addEventListener(\"submit\", function (evt) {\n    evt.preventDefault();\n    form.appendChild(statusMessage);\n    statusMessage.appendChild(loadMessage);\n    document.head.append(style);\n    var formData = new FormData(form);\n    var body = {};\n    formData.forEach(function (key, val) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error(\"status network not 200\");\n      }\n\n      statusMessage.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n    form.reset();\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: \"POST\",\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://glo-academy--main/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll(\".portfolio-item\"),\n      dotBlock = document.querySelector(\".portfolio-dots\"),\n      slider = document.querySelector(\".portfolio-content\");\n  var currentSlide = 0,\n      interval,\n      dot;\n\n  var addDots = function addDots() {\n    for (var i = 0; i < slide.length; i++) {\n      var li = document.createElement(\"li\");\n      li.classList.add(\"dot\");\n      dotBlock.append(li);\n    }\n\n    dot = document.querySelectorAll(\".dot\");\n  };\n\n  addDots();\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, \"portfolio-item-active\");\n    prevSlide(dot, currentSlide, \"dot-active\");\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, \"portfolio-item-active\");\n    nextSlide(dot, currentSlide, \"dot-active\");\n  };\n\n  var startSlide = function startSlide(time) {\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    var target = evt.target;\n\n    if (!target.matches(\".portfolio-btn, .dot\")) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, \"portfolio-item-active\");\n    prevSlide(dot, currentSlide, \"dot-active\");\n\n    if (target.matches(\"#arrow-right\")) {\n      currentSlide++;\n    } else if (target.matches(\"#arrow-left\")) {\n      currentSlide--;\n    } else if (target.matches(\".dot\")) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, \"portfolio-item-active\");\n    nextSlide(dot, currentSlide, \"dot-active\");\n  });\n  slider.addEventListener(\"mouseover\", function (evt) {\n    if (evt.target.matches(\".portfolio-btn\") || evt.target.matches(\".dot\")) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener(\"mouseout\", function (evt) {\n    if (evt.target.matches(\".portfolio-btn\") || evt.target.matches(\".dot\")) {\n      startSlide(1500);\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://glo-academy--main/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector(\".service-header\"),\n      tab = tabHeader.querySelectorAll(\".service-header-tab\"),\n      tabContent = document.querySelectorAll(\".service-tab\");\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add(\"active\");\n        tabContent[i].classList.remove(\"d-none\");\n      } else {\n        tab[i].classList.remove(\"active\");\n        tabContent[i].classList.add(\"d-none\");\n      }\n    }\n  };\n\n  tabHeader.addEventListener(\"click\", function (evt) {\n    var target = evt.target;\n    target = target.closest(\".service-header-tab\");\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://glo-academy--main/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/team.js":
/*!*****************************!*\
  !*** ./src/modules/team.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar team = function team() {\n  var commandPhotos = document.querySelectorAll(\".command__photo\");\n  commandPhotos.forEach(function (photo) {\n    var firstPhoto;\n    photo.addEventListener(\"mouseover\", function () {\n      firstPhoto = photo.src;\n      photo.src = photo.dataset.img;\n    });\n    photo.addEventListener(\"mouseout\", function () {\n      photo.src = firstPhoto;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (team);\n\n//# sourceURL=webpack://glo-academy--main/./src/modules/team.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector(\".menu\"),\n      menu = document.querySelector(\"menu\"),\n      closeBtn = document.querySelector(\".close-btn\");\n\n  var handlerMenu = function handlerMenu(evt) {\n    var target = evt.target;\n\n    if (target.closest(\".menu\") === btnMenu) {\n      menu.classList.toggle(\"active-menu\");\n    } else if (target === closeBtn || target.closest(\"a\") || !target.closest(\"menu\")) {\n      menu.classList.remove(\"active-menu\");\n    } else {\n      return;\n    }\n  };\n\n  document.body.addEventListener(\"click\", handlerMenu);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://glo-academy--main/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector(\".popup\"),\n      popupContent = document.querySelector(\".popup-content\"),\n      popupBtn = document.querySelectorAll(\".popup-btn\");\n\n  var animatePopup = function animatePopup() {\n    var count = 0;\n\n    var animate = function animate() {\n      var animateInterval = requestAnimationFrame(animate);\n      count++;\n\n      if (count >= document.documentElement.clientHeight / 20) {\n        cancelAnimationFrame(animateInterval);\n      } else {\n        popupContent.style.top = \"\".concat(count * 2, \"px\");\n      }\n    };\n\n    animate();\n  };\n\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener(\"click\", function () {\n      popup.style.display = \"block\";\n\n      if (document.documentElement.clientWidth > 768) {\n        animatePopup();\n      }\n    });\n  });\n  popup.addEventListener(\"click\", function (evt) {\n    var target = evt.target;\n\n    if (target.classList.contains(\"popup-close\")) {\n      popup.style.display = \"none\";\n    } else {\n      target = target.closest(\".popup-content\");\n\n      if (!target) {\n        popup.style.display = \"none\";\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://glo-academy--main/./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validation = function validation() {\n  var calcItems = document.querySelectorAll(\".calc-item:not(.calc-type)\"),\n      name = document.querySelectorAll(\".form-name\"),\n      email = document.querySelectorAll(\".form-email\"),\n      phone = document.querySelectorAll(\".form-phone\"),\n      message = document.getElementById(\"form2-message\"),\n      allInputs = document.querySelectorAll(\"input\");\n\n  var replace = function replace(item, regex) {\n    item.value = item.value.replace(regex, \"\");\n  };\n\n  calcItems.forEach(function (item) {\n    item.addEventListener(\"input\", function () {\n      replace(item, /\\D/);\n    });\n  });\n  name.forEach(function (item) {\n    item.addEventListener(\"input\", function () {\n      replace(item, /[^а-я\\s]/i);\n    });\n  });\n  message.addEventListener(\"input\", function () {\n    replace(message, /[^а-я\\d\\W\\s]/i);\n  });\n  email.forEach(function (item) {\n    item.addEventListener(\"input\", function (evt) {\n      replace(item, /[^a-z\\d\\-.@_!*']/gi);\n    });\n  });\n  phone.forEach(function (item) {\n    item.addEventListener(\"input\", function () {\n      replace(item, /[^0-9\\++]/);\n    });\n  });\n  allInputs.forEach(function (input) {\n    input.addEventListener(\"blur\", function () {\n      input.value = input.value.replace(/(\\s)+/g, \" \");\n      input.value = input.value.replace(/(\\-)+/g, \"-\");\n      input.value = input.value.replace(/(\\s|\\-)*$/, \"\");\n      input.value = input.value.replace(/^(\\s|\\-)*/, \"\");\n\n      if (input.classList.contains(\"form-name\")) {\n        var array = input.value.split(\" \");\n\n        for (var i = 0; i < array.length; i++) {\n          array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();\n        }\n\n        input.value = array.join(\" \");\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://glo-academy--main/./src/modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;