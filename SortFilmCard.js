function sortByPrice(order) {
	const items = document.querySelectorAll('.film-card')
	const sortedItems = Array.from(items).sort((a, b) => {
		const priceA = parseFloat(a.querySelector('.film-price').innerText)
		const priceB = parseFloat(b.querySelector('.film-price').innerText)
		return order === 'asc' ? priceA - priceB : priceB - priceA
	})
	const container = document.querySelector('.row')
	container.innerHTML = ''
	sortedItems.forEach(item => {
		container.appendChild(item.closest('.col'))
	})
}

function sortByName(order) {
	const items = document.querySelectorAll('.film-card')
	const sortedItems = Array.from(items).sort((a, b) => {
		const nameA = a.querySelector('.film-name').innerText.toLowerCase()
		const nameB = b.querySelector('.film-name').innerText.toLowerCase()
		if (nameA < nameB) return order === 'asc' ? -1 : 1
		if (nameA > nameB) return order === 'asc' ? 1 : -1
		return 0
	})
	const container = document.querySelector('.row')
	container.innerHTML = ''
	sortedItems.forEach(item => {
		container.appendChild(item.closest('.col'))
	})
}
document
	.querySelector('#sortByPriceAsc')
	.addEventListener('click', () => sortByPrice('asc'))
document
	.querySelector('#sortByPriceDesc')
	.addEventListener('click', () => sortByPrice('desc'))
document
	.querySelector('#sortByNameAsc')
	.addEventListener('click', () => sortByName('asc'))
document
	.querySelector('#sortByNameDesc')
	.addEventListener('click', () => sortByName('desc'))
