(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function (argument) {


let form = require('../parts/form.js');
let contactForm = require('../parts/contactForm.js');
let tab = require('../parts/tab.js');
let modal = require('../parts/modal.js');
let ajax = require('../parts/ajax.js');
let slider = require('../parts/slider.js');
let calc = require('../parts/calc.js');
let timer = require('../parts/timer.js');

tab();	
form();
modal();
timer();	
ajax();
calc();
slider();
contactForm();




});


},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/contactForm.js":4,"../parts/form.js":5,"../parts/modal.js":6,"../parts/slider.js":7,"../parts/tab.js":8,"../parts/timer.js":9}],2:[function(require,module,exports){
function ajax() {
	let request = new XMLHttpRequest();
		request.open('POST', 'server.php', true);
 		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 		let formData = new FormData(form);
 		request.send(formData);
		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState == 4){
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = '';
					statusMessage.style.height = '100px';
					form.appendChild(statusMessage);
					// statusMessage.innerHTML = message.success;
					// Добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
			// Очищаем поля ввода
		}
	};

module.exports = ajax;

},{}],3:[function(require,module,exports){
function calc () {
	let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;



			persons.addEventListener('change', function () {
				personsSum = +this.value;
				total = (daysSum + personsSum) * 4000;
				if (restDays.value == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			persons.oninput = function (input) {
				return this.value = this.value.match(/^\d+$/);
			}


			restDays.addEventListener('change', function() {
				daysSum = +this.value;
				total = (daysSum + personsSum) * 4000;
				if (persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			restDays.oninput = function (input) {
				return this.value = this.value.match(/^\d+$/);
			}

			place.addEventListener('change', function() {
				if (restDays.value == '' || persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
					totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
			});
}

module.exports = calc;
},{}],4:[function(require,module,exports){
function contactForm () {

	let message = new Object();

	message.loading = 'Загрузка...';
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let contact_form = document.querySelector('.contact-form form'),
	contact_form_input = contact_form.getElementsByTagName('input'),
	contact_form_statusMessage = document.createElement('div');
	contact_form_statusMessage.classList.add('status');

	contact_form.addEventListener('submit', function (event) {
		event.preventDefault();
		contact_form.appendChild(contact_form_statusMessage);

		//Ajax
		let request_contact_form = new XMLHttpRequest();
		request_contact_form.open('POST', 'server.php', true);

		request_contact_form.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		let formData_contact_form = new FormData(contact_form);

		request_contact_form.send(formData_contact_form);
		request_contact_form.onreadystatechange = function() {
			if (request_contact_form.readyState < 4) {
				contact_form_statusMessage.innerHTML = message.loading;
			} else if (request_contact_form.readyState == 4){
				if (request_contact_form.status == 200 && request_contact_form.status < 300) {
					contact_form_statusMessage.innerHTML = message.success;
					// Добавляем контент на страницу
				} else {
					contact_form_statusMessage.innerHTML = message.failure;
				}
			}
		}
		for (let i = 0; i < contact_form_input.length; i++) {
			contact_form_input[i].value = '';
			// Очищаем поля ввода
		}
	});
}

module.exports = contactForm;
},{}],5:[function(require,module,exports){
function form () {
	let message = new Object();

message.loading = 'Загрузка...';
message.success = "Спасибо! Скоро мы с вами свяжемся";
message.failure = "Что-то пошло не так...";

let form = document.getElementsByClassName('main-form')[0];
	input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div');
	statusMessage.classList.add('plane');

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		//Ajax
		let request = new XMLHttpRequest();
		request.open('POST', 'server.php', true);

		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);
		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState == 4){
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = '';
					statusMessage.style.height = '100px';
					form.appendChild(statusMessage);
					// statusMessage.innerHTML = message.success;
					// Добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
			// Очищаем поля ввода
		}
	});

}

module.exports = form;
},{}],6:[function(require,module,exports){
function modal () {
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		description_btn = document.querySelectorAll('.description-btn'),
		description = document.querySelectorAll('.description');
		
		more.addEventListener('click', function(){
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});

			for (let i = 0; i < description_btn.length; i++) {
				description_btn[i].addEventListener('click', function(){
					this.classList.add('more-splash');
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
				});
			}

		close.addEventListener('click', function() {
			overlay.style.display = 'none';
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
		});
}

module.exports = modal;
},{}],7:[function(require,module,exports){
function slider () {
	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots');
		dots = document.getElementsByClassName('dot');

		showSlides(slideIndex);

		function showSlides (n) {
			if (n > slides.length) {
				slideIndex = 1;
			};
			if (n < 1) {
				slideIndex = slides.length;
			};

			for (let i = 0; i < slides.length; i ++) {
				slides[i].style.display = 'none';		
			}

			for (let i = 0; i < dots.length; i ++) {
				dots[i].classList.remove('dot-active');
			};

			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active');
		}

		function plusSlides (n) {
			showSlides(slideIndex += n);
		}

		function currentSlide (n) {
			showSlides(slideIndex = n);
		}

		prev.addEventListener('click', function () {
			plusSlides (-1);
		});

		next.addEventListener('click', function () {
			plusSlides (1);
		});

		dotsWrap.addEventListener('click', function (event) {
			for (let i = 0; i < dots.length + 1; i++) {
				if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
					currentSlide(i);
				}
			}
		});
}

module.exports = slider;
},{}],8:[function(require,module,exports){
function tab() {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];


	function hideTabContent (a) {
		
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}

	}

	hideTabContent(1);

	function showTabContent (b) {

		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
		
	}

	info.addEventListener('click', function (event) {
			let target = event.target;
				if (target.className == 'info-header-tab') {
					for (let i = 0; i < tab.length; i++) {
						if (target == tab[i]) {
							showTabContent(i);
							break;
						}
					}
				};
	})

}

module.exports = tab;	
},{}],9:[function(require,module,exports){
function timer () {
	let deadline = '2018-03-23';

	function getTimeRemaining (endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
			if (t > 0){
						seconds = Math.floor( (t/1000) % 60),
						minutes = Math.floor( (t/1000/60) % 60 ),
						hours = Math.floor( (t/(1000*60*60)) );
			} else {
				seconds = '0',
				minutes = '0',
				hours = '0';
			}

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
	}

	function setClock (id, endtime) {
		
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock () {
				 let t = getTimeRemaining(endtime) ;

				 if (t.hours < 10) {	
				 	hours.innerHTML = '0' + t.hours;
				 } else {
				 	hours.innerHTML = t.hours;
				 }
				 if (t.minutes < 10) {
				 	minutes.innerHTML = '0' + t.minutes;
				 } else {
				 	minutes.innerHTML = t.minutes;
				 }
				 if (t.seconds < 10) {
				 	seconds.innerHTML = '0' + t.seconds;
				 } else {
				 	seconds.innerHTML = t.seconds;
				 }
			
				
			};

			updateClock();
			let timeInterval = setInterval(updateClock, 1000);

	};

	setClock('timer', deadline);

}

module.exports = timer;
},{}]},{},[1]);
