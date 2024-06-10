document.getElementById('download-btn').addEventListener('click', () => {
	const url = '/source/data/МДК.08.01 ПР.docx'
	const a = document.createElement('a')
	a.href = url
	a.download = 'file.txt'
	document.body.appendChild(a)
	a.click()
	document.body.removeChild(a)
})
