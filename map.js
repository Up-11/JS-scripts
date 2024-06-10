var map
const endPoint = [56.054693, 92.888828]
DG.then(function () {
	map = DG.map('map', {
		center: [56.054693, 92.888828],
		zoom: 13,
	})

	DG.marker([56.054693, 92.888828])
		.addTo(map)
		.bindPopup('ул. Петра подзолкова 10 || Гармония вкуса')
})

document.getElementById('routeButton').addEventListener('click', event => {
	event.preventDefault()
	navigator.geolocation.getCurrentPosition(
		position => {
			const latitude = position.coords.latitude
			const longitude = position.coords.longitude
			console.log('Широта:', latitude)
			console.log('Долгота:', longitude)
			const startPoint = [latitude, longitude]
			if (!isNaN(latitude) && !isNaN(longitude)) {
				const url = `https://2gis.ru/routeSearch/rsType/car/from/${startPoint[1]},${startPoint[0]}/to/${endPoint[1]},${endPoint[0]}`
				console.log('URL для маршрута:', url)
				window.location.href = url
			} else {
				console.error('Некорректные координаты:', latitude, longitude)
			}
		},
		error => {
			console.error('Ошибка при получении местоположения пользователя:', error)
		}
	)
})
