const list = document.querySelector('#list')
const filter = document.getElementById('filter')
let USERS = []

async function Start() {
	try {
		const jsonData = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await jsonData.json()
		console.log(data)
		Render(data)
		USERS = data
	} catch (e) {
		list.innerHtml = e.message
	}
}
function Render(users = []) {
	const html = users.map(toHtml).join('')
	list.innerHTML = html
}

function toHtml(user) {
	return ` 
				<li class="list-group-item mt-2">${user.name}</li>
	`
}
filter.addEventListener('input', event => {
	const { value } = event.target
	const filteredUsers = USERS.filter(user => {
		return user.name.toLowerCase().includes(value.toLowerCase())
	})
	Render(filteredUsers)
})
Start()
