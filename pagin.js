document.addEventListener('DOMContentLoaded', function () {
	const rows = document.querySelectorAll('.feedback__rows .feedback__row.dark')
	const paginationContainer = document.querySelector('.pagination')
	const rowsPerPage = 3
	const pageCount = Math.ceil(rows.length / rowsPerPage)

	function showPage(page) {
		rows.forEach((row, index) => {
			if (index >= (page - 1) * rowsPerPage && index < page * rowsPerPage) {
				row.style.display = 'flex'
			} else {
				row.style.display = 'none'
			}
		})
	}

	function createPaginationButtons() {
		for (let i = 1; i <= pageCount; i++) {
			const button = document.createElement('button')
			button.innerText = i
			button.addEventListener('click', () => {
				showPage(i)
				document
					.querySelectorAll('.pagination button')
					.forEach(btn => btn.classList.remove('active'))
				button.classList.add('active')
			})
			paginationContainer.appendChild(button)
		}
		paginationContainer.querySelector('button').classList.add('active')
	}

	createPaginationButtons()
	showPage(1)
})
