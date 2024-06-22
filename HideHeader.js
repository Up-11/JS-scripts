document.addEventListener('DOMContentLoaded', () => {
	const header = document.getElementById('header')
	let lastScrollY = window.scrollY

	window.addEventListener('scroll', () => {
		if (window.scrollY > lastScrollY) {
			// Скролл вниз
			header.classList.add('hide-header')
		} else {
			// Скролл вверх
			header.classList.remove('hide-header')
		}
		lastScrollY = window.scrollY
	})
})
