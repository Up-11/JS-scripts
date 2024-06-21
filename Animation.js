function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show')
		}
	})
}
let movespeed
if (window.innerWidth > 1000) {
	movespeed = [0.4]
} else {
	movespeed = [0.1]
}
let options = {
	threshold: movespeed,
}
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.element-animation')

for (let elm of elements) {
	observer.observe(elm)
}
