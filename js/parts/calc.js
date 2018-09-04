function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0,
		a = null;

	totalValue.innerHTML = 0;



	persons.addEventListener('change', function () {
		personsSum = +this.value;
		if (personsSum == '') {
			totalValue.innerHTML = 0;
			total = 0;
		} else {
			total = (daysSum + personsSum) * 4000 * place.options[place.selectedIndex].value;
		}
		if (restDays.value == '') {
			totalValue.innerHTML = 0;
			total = 0;
		} else if (personsSum != '' && restDays.value != '') {
			totalValue.innerHTML = total;
		}
	});

	persons.oninput = function (input) {
		return this.value = this.value.match(/^\d+$/);
	};


	restDays.addEventListener('change', function () {
		daysSum = +this.value;
		if (daysSum == '') {
			totalValue.innerHTML = 0;
			total = 0;
		} else {
			total = (daysSum + personsSum) * 4000 * place.options[place.selectedIndex].value;
		}
		if (persons.value == '') {
			totalValue.innerHTML = 0;
			total = 0;
		} else if (persons.value != '' && daysSum != '') {
			totalValue.innerHTML = total;
		}
	});

	restDays.oninput = function (input) {
		return this.value = this.value.match(/^\d+$/);
	};

	place.addEventListener('change', function () {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});
}

module.exports = calc;