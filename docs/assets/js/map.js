
function initMap () {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		scrollwheel: false,
		center: { lat: 38.9124686, lng: -104.8197367 },
		styles: [
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#6db4b1",
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#6db4b1"
					},
					{
						"visibility": "on"
					}
				]
			}
		]
	});

	var marker = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: { lat: 38.9124686, lng: -104.8197367 }
	});

	marker.addListener('click', function () {
		if (marker.getAnimation() !== null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	});
}
