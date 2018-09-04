function contactForm () {

	let message = {};
  
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
		  };
		  for (let i = 0; i < contact_form_input.length; i++) {
			  contact_form_input[i].value = '';
			  // Очищаем поля ввода
		  }
	  });
  }
  
  module.exports = contactForm;