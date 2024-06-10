document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.getElementById('toggleButton')
	const closeButtonElements = document.querySelectorAll('.close-item')
	const sidePanel = document.getElementById('sidePanel')
	const content = document.getElementById('content')

	toggleButton.addEventListener('click', () => {
		sidePanel.classList.add('show')
		sidePanel.classList.remove('hide')
		content.style.marginLeft = '280px'
	})

	closeButtonElements.forEach(element => {
		element.addEventListener('click', () => {
			sidePanel.classList.add('hide')
			sidePanel.classList.remove('show')
			content.style.marginLeft = ''
		})
	})
})
