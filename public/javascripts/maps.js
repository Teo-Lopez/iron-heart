const styles = [
	{
		featureType: 'administrative',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off'
			}
		]
	},
	{
		featureType: 'landscape',
		elementType: 'all',
		stylers: [
			{
				visibility: 'simplified'
			},
			{
				hue: '#0066ff'
			},
			{
				saturation: 74
			},
			{
				lightness: 100
			}
		]
	},
	{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{
				visibility: 'simplified'
			}
		]
	},
	{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{
				visibility: 'simplified'
			}
		]
	},
	{
		featureType: 'road.highway',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off'
			},
			{
				weight: 0.6
			},
			{
				saturation: -85
			},
			{
				lightness: 61
			}
		]
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [
			{
				visibility: 'on'
			}
		]
	},
	{
		featureType: 'road.arterial',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off'
			}
		]
	},
	{
		featureType: 'road.local',
		elementType: 'all',
		stylers: [
			{
				visibility: 'on'
			}
		]
	},
	{
		featureType: 'transit',
		elementType: 'all',
		stylers: [
			{
				visibility: 'simplified'
			}
		]
	},
	{
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{
				visibility: 'simplified'
			},
			{
				color: '#5f94ff'
			},
			{
				lightness: 26
			},
			{
				gamma: 5.86
			}
		]
	}
]
let map, directionsRenderer, directionsService, marker

function createMarker(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		marker = new google.maps.Marker({
			map: map,
			place: {
				placeId: results[0].place_id,
				location: results[0].geometry.location
			}
		})
	}
}
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 15,
		styles
	})
	directionsService = new google.maps.DirectionsService()
	directionsRenderer = new google.maps.DirectionsRenderer()
	places = new google.maps.places.PlacesService(map)
	directionsRenderer.setMap(map)
	navigator.geolocation.getCurrentPosition(({ coords }) => {
		map.setCenter({ lat: coords.latitude, lng: coords.longitude })
		searchNearestHospital(coords)
		calculateAndDisplayRoute(directionsService, directionsRenderer)
	})
}

function searchNearestHospital(loc) {
	const location = {
		lat: loc.latitude,
		lng: loc.longitude
	}

	places.textSearch(
		{
			location,
			radius: '500',
			query: 'hospital'
		},
		(result, status) => {
			createMarker(result, status)
			calculateAndDisplayRoute(directionsService, directionsRenderer, location, {
				lat: result[0].geometry.location.lat(),
				lng: result[0].geometry.location.lng()
			})
		}
	)
}

function calculateAndDisplayRoute(directionsService, directionsRenderer, origin, destination) {
	if (!origin || !destination) return

	directionsService.route(
		{
			origin: Object.values(origin).join(','),
			destination: Object.values(destination).join(','),
			travelMode: google.maps.TravelMode.DRIVING
		},
		(response, status) => {
			if (status === 'OK') {
				console.log(response, 'ayy')
				directionsRenderer.setDirections(response)
			} else {
				window.alert('Directions request failed due to ' + status)
			}
		}
	)
}
