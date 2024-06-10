document.querySelector('form').addEventListener('submit', event => {
	const email = document.getElementById('exampleInputEmail1').value
	const password = document.getElementById('exampleInputPassword1').value
	const checkbox = document.getElementById('exampleCheck1').checked

	if (!email || !password || !checkbox) {
		event.preventDefault()
		alert(
			'Пожалуйста, заполните все поля и согласитесь с правилами регистрации'
		)
	} else {
		alert('Вход выполнен успешно')
	}
})
