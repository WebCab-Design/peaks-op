document.addEventListener('DOMContentLoaded', function () {
	var form = document.querySelector('.form');

	var form = document.querySelector('.form');
	if (form) {
		Astatine.submit({
			query: form,
			method: 'post',
			responseType: 'json',
			action: 'https://www.enformed.io/zpn17s0',
			prepare: function (data, resolve) {
				data['*default_email'] = 'bburns@peaksrecovery.com';
				return resolve(data);
			},
			complete: function (error, success) {
				var response = document.querySelector('.response');
				if (error) {
					console.log(error);
					response.style.color = 'red';
					response.innerText = 'Error Plese See Console';
				} else {
					response.style.color = 'green';
					response.innerText = 'Form Is Submitted';
				}
			}
		});
	}

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
