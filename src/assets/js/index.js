(function() {
	'use strict';

	At.submit({
		query: '.contact-form',
		prepare: function (data) {
			data._cc = 'bburns@peaksrecovery.com,cburns@peaksrecovery.com';
		},
		complete: function (error, success) {
			var response = document.querySelector('.contact-response');

			if (error) {
				console.log(error);
				response.style.color = 'red';
				response.innerText = 'Error Please See Console';
			} else {
				response.innerText = 'Contact Form Sent';
			}

		}
	});

	At.submit({
		query: '.insurance-form',
		prepare: function (data) {
			data._cc = 'bburns@peaksrecovery.com,cburns@peaksrecovery.com';
		},
		complete: function (error, success) {
			var response = document.querySelector('.insurance-response');

			if (error) {
				console.log(error);
				response.style.color = 'red';
				response.innerText = 'Error Please See Console';
			} else {
				response.innerText = 'Verify Insurance Form Sent';
			}

		}
	});

	// var bioButton = document.querySelector('.bio');
	// var bioContent = document.querySelector('.bio-more');
	// var closeButton = document.querySelector('.close');
	// 
	// bioButton.addEventListener('click', function(){
	// 	bioContent.classList.toggle('active');
	// });
	// closeButton.addEventListener('click', function(){
	// 	closeButton.classList.toggle('active')
	// });
});
