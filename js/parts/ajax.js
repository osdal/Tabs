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
