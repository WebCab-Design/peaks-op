
(function() {
	'use strict';

	At.submit({
		query: '.form-contact',
		prepare: function (data) {
			console.log(data);
			data.foo = 'bar';
		},
		complete: function (error, success) {
			var response = document.querySelector('.form-response');

			if (error) {
				console.log(error);
				response.style.color = 'red';
				response.innerText = 'Error';
			}
			else {
				response.style.color = 'green';
				response.innerText = 'Form Is Sent';
			}

		}
	});
	
}());
