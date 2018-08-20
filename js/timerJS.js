		let timerId = setInterval(simpleTimer, 1000);
			

	function simpleTimer () {
				 
		let time = new Date(),
			timer = document.getElementById('timer'),
			reg = /\d\d:\d\d:\d\d/;
			time = time + '';
			time = time.match(reg);

			timer.textContent = time;
	}