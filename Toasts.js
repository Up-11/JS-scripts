const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const Login = document.getElementById('login')
const Password = document.getElementById('floatingPassword')
const Email = document.getElementById('floatingInput')
const Name = document.getElementById('names')
const toastTimer = document.getElementById('ToastTimer')
const closeButton = document.getElementById('close-btn')
var toastTime = 0
const toast = new bootstrap.Toast(toastLiveExample)

if (toastTrigger) {
	toastTrigger.addEventListener('click', () => {
		if (!toast.isShown()) {
			CheckParametrs()
			toastTime = 0
			toast.show()
			DisplayToastTimer()
			toastTimer.innerText = 'Только что'
		}
	})
}

function DisplayToastTimer() {
	toastTimer.innerText = 'Только что'
	const toastInterval = setInterval(() => {
		toastTime++
		toastTimer.innerText = formatSeconds(toastTime) + ' назад'
		if (!toast.isShown()) {
			clearInterval(toastInterval)
			toastTime = 0
		}
	}, 1000)
}

function CheckParametrs() {
	if (Login.value && Password.value && Email.value != null) {
		console.log('Вход выполнен успешно')
		const toastTextElement = document.getElementById('toast-text')
		toastTextElement.innerText = 'Вход выполнен успешно'
	} else {
		console.log('Заполните все поля')
		const toastTextElement = document.getElementById('toast-text')
		toastTextElement.innerText = 'Заполните все поля'
	}
}
function formatSeconds(number) {
	const numberString = number.toString()
	const lastDigit = parseInt(numberString.charAt(numberString.length - 1))
	const lastTwoDigits = parseInt(numberString.slice(-2))

	if (lastTwoDigits >= 10 && lastTwoDigits <= 20) {
		return number + ' секунд'
	} else if (lastDigit === 1) {
		return number + ' секунда'
	} else if (lastDigit >= 2 && lastDigit <= 4) {
		return number + ' секунды'
	} else {
		return number + ' секунд'
	}
}
