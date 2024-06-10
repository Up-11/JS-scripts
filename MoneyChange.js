const RUB = document.getElementById('rub')
const USD = document.getElementById('usd')
const CurrentVal = document.getElementById('currentValute')
var PriceArray = Array.from(document.querySelectorAll('.price'))
let isChanged = false

RUB.addEventListener('click', () => {
	if (isChanged) {
		return
	} else {
		PriceArray.forEach(price => {
			const numericPrice =
				parseFloat(price.textContent.replace(/[^\d.]/g, '')) / 100
			price.textContent = `${numericPrice.toFixed(2)}$`
		})
		isChanged = true
		CurrentVal.textContent = '$'
	}
})

USD.addEventListener('click', () => {
	if (!isChanged) {
		return
	} else {
		PriceArray.forEach(price => {
			const numericPrice =
				parseFloat(price.textContent.replace(/[^\d.]/g, '')) * 100
			price.textContent = `${numericPrice}₽`
		})
		isChanged = false
		CurrentVal.textContent = '₽'
	}
})
