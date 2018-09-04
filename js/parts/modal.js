function modal () {
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		description_btn = document.querySelectorAll('.description-btn'),
		info =  document.querySelector('.info'),
		description = document.querySelectorAll('.description');
		
		more.addEventListener('click', function(){
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});


			info.addEventListener('click', function(event) {
				// let k = event.target;
				if (event.target.className == 'description-btn') {
					this.classList.add('more-splash');
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
				}
			});

			

		close.addEventListener('click', function() {
			overlay.style.display = 'none';
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
		});
}

module.exports = modal;