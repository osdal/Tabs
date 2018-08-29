window.addEventListener('DOMContentLoaded', function (argument) {

let tab = require('../js/parts/tab.js');
let modal = require('../js/parts/modal.js');
let ajax = require('../js/parts/ajax.js');
let slider = require('../js/parts/slider.js');
let calc = require('../js/parts/calc.js');
let timer = require('../js/parts/timer.js');

tab();
modal();
ajax();
slider();
calc();
timer();	
// Таймер 

	
// Модальное окно
	
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

// Form

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

	// Для контактной формы

let contact_form = document.querySelector('.contact-form form');
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

	// Слайдер

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

		// Calc

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
				return this.value = this.value.replace(/[^\d]/g, '');
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

			place.addEventListener('change', function() {
				if (restDays.value == '' || persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
					totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
			});


 




});

