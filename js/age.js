let age = document.getElementById('age'),
	user = {
		value: age.value,
		showUser: function showUser(surname, name) {
		 alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
		}
	}

 

 
user.showUser('Ivanov', 'Ivan');