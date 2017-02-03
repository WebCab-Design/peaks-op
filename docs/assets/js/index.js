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

	var bioToggles = document.querySelectorAll('.bio-toggle');
	var fullBios = document.querySelectorAll('.full-bio');

	for (var i = 0; i < bioToggles.length; i++) {
		var bioToggle = bioToggles[i];
		var fullBio = fullBios[i];
		var closeButton = document.createElement('div');

		closeButton.classList.add('close-button');
		closeButton.innerText = 'CLOSE BIO';
		fullBio.firstElementChild.appendChild(closeButton);

		bioToggle.addEventListener('click', function (){
			var currentBio = this.parentNode.querySelector('.full-bio');
			currentBio.classList.toggle('active');
			document.body.style = 'overflow-y: hidden';
		});
		closeButton.addEventListener('click', function (){
			this.parentNode.parentNode.classList.toggle('active');
			document.body.style = 'overflow-y: inherit';
		});
	}

	var tprcOfficeGallery = document.querySelector('.peaks-services-gallery');
	if (tprcOfficeGallery) {
		Astatine.ajax({
			method: 'get',
			action: 'https://res.cloudinary.com/dbc2wlvk8/image/list/peaks-services-gallery.json',
			success: function (xhr) {
				var list = JSON.parse(xhr.response);
				var largeImages = [];
				var smallImages = [];

				for (var i = 0, l = list.resources.length; i < l; i++) {
					var item = list.resources[i];
					largeImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/f_auto,fl_any_format.lossy,w_900/' + item.public_id + '.' + item.format);
					smallImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/f_auto,fl_any_format.lossy,w_150/' + item.public_id + '.' + item.format);
				}

				erbium.gallery.create('.peaks-services-gallery', largeImages, smallImages);
			},
			error: function (xhr) {
				console.log(xhr);
			}
		});
	}

});
