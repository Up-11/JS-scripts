document.addEventListener('DOMContentLoaded', function () {
	const searchInput = document.querySelector('.input')
	const menuItems = document.querySelectorAll('.menu-item ')

	searchInput.addEventListener('input', function () {
		const filter = searchInput.value.toLowerCase()
		menuItems.forEach(function (item) {
			const title = item.querySelector('.title').textContent.toLowerCase()
			if (title.includes(filter)) {
				item.style.display = ''
			} else {
				item.style.display = 'none'
			}
		})
	})
})
