window.addEventListener('DOMContentLoaded', function (argument) {
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

// Таймер 

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


 




});

