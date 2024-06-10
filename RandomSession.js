const sessionLink = document.getElementById('current-session')
const hrefs = [
	'darkKnightpage.html',
	'interstellarpage.html',
	'cursedisland.html',
	'vallipage.html',
	'shrekpage.html',
	'forestpage.html',
	'lionpage.html',
	'homealonepage.html',
	'gentelpage.html',
	'cardspage.html',
	'piratepage.html',
	'shoupage.html',
	'gladiatorpage.html',
	'greenpage.html',
	'operatpage.html',
	'luckypage.html',
	'lordpage.html',
	'knockpage.html',
]

sessionLink.addEventListener('click', () => {
	const randomIndex = Math.floor(Math.random() * hrefs.length)
	const randomHref = hrefs[randomIndex]
	sessionLink.setAttribute('href', randomHref)
})
