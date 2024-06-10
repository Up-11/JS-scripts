document.addEventListener('DOMContentLoaded', () => {
	const scrollToTopBtn = document.getElementById('scroll-to-top')

	window.addEventListener('scroll', () => {
		if (window.scrollY > 200) {
			scrollToTopBtn.classList.add('show')
		} else {
			scrollToTopBtn.classList.remove('show')
		}
	})
	scrollToTopBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
})
