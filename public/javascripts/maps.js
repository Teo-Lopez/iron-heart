let map, directionsRenderer

function createMarker(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		const marker = new google.maps.Marker({
			map: map,
			place: {
				placeId: results[0].place_id,
				location: results[0].geometry.location,
			},
		})
	}
}
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 15,
	})

	places = new google.maps.places.PlacesService(map)

	navigator.geolocation.getCurrentPosition(({ coords }) => {
		map.setCenter({ lat: coords.latitude, lng: coords.longitude })
		searchNearesHospital(coords)
	})
}

function searchNearesHospital(loc) {
	const location = {
		lat: loc.latitude,
		lng: loc.longitude,
	}
	places.textSearch(
		{
			location,
			radius: '500',
			query: 'hospital',
		},
		createMarker
	)
}
