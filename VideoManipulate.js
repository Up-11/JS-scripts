vid = document.getElementById('vid1')
vid.addEventListener('click', () => {
	if (vid.paused) vid.play()
	else vid.pause()
})
