video = document.getElementById('infograch')

video.addEventListener('click', () => {
	video.currentTime = 0
	video.play()
})

video.addEventListener('timeupdate', function () {
	if (video.currentTime >= 2) {
		video.pause()
	}
})
