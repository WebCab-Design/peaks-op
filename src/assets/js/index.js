document.addEventListener('DOMContentLoaded', function () {
	var form = document.querySelector('.form');

	if (form) {
		Astatine.submit({
			query: form,
			mimeType: 'json',
			prepare: function (data) {
				data._cc = 'bburns@peaksrecovery.com';
			},
			complete: function (error, success) {
				var response = document.querySelector('.response');

				if (error) {
					console.log(error);
					response.style.color = 'red';
					response.innerText = 'Error Please See Console';
				} else {
					form.style.display = 'none';
					response.style.color = 'green';
					response.innerText = 'Form Submission Sent';
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
