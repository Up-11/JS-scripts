document.addEventListener('DOMContentLoaded', function () {
	const menuItems = document.querySelectorAll('.menu-item')

	menuItems.forEach(menuItem => {
		const icons = menuItem.querySelectorAll('.cup')
		icons.forEach(icon => {
			icon.addEventListener('click', function () {
				icons.forEach(i => i.classList.remove('selected'))
				this.classList.add('selected')
				const type = this.getAttribute('data-type')
				updateDetails(menuItem, type)
			})
		})
	})

	function updateDetails(menuItem, type) {
		let description, price, volume

		switch (type) {
			case 'c1':
				description = menuItem.getAttribute('data-description')
				price = menuItem.getAttribute('data-price')
				volume = menuItem.getAttribute('data-volume')
				break
			case 'c2':
				description =
					' молоко (144 / 220 ккал: белки 11 / жиры 8,5 / углеводы 11,3 | белки 8,9 / жиры 9,1 / углеводы 13,3)'
				price = '450р'
				volume = '450мл'
				break
			case 'c3':
				description = menuItem.getAttribute('data-description')
				price = menuItem.getAttribute('data-price')
				volume = menuItem.getAttribute('data-volume')
				break
			case 'c4':
				description = '(Сливочный сыр, яйца, сахар, сливки, печенье)'
				price = '420р'
				volume = '600г'
				break
			case 'c5':
				description = 'Вишня'
				price = '42р'
				volume = '60мл'
				break
		}

		menuItem.querySelector('.description').innerText = description
		menuItem.querySelector('.top .volume').innerText = volume
		menuItem.querySelector('.top .price').innerText = price
	}
})
