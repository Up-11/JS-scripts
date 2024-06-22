document.addEventListener('DOMContentLoaded', () => {
	const header = document.getElementById('header')
	const HeaderLogo = document.getElementById('logo')
	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			header.classList.add('header-scroll')
			HeaderLogo.style.width = '90px'
		} else {
			header.classList.remove('header-scroll')
			HeaderLogo.style.width = '150px'
		}
	})
})
