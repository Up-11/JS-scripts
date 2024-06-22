document.addEventListener('DOMContentLoaded', () => {
	const showNewsButton = document.getElementById('MoreNews')
	const News = document.querySelector('.trio-news-two ')

	showNewsButton.addEventListener('click', () => {
		News.classList.add('show')
		showNewsButton.style.display = 'none'
	})
})
