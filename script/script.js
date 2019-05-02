var showMenu = document.querySelector('#showMenu')
var submenu = document.querySelector('.submenu')

showMenu.addEventListener('mouseover', function(event) {
	submenu.classList.add("active")
})

showMenu.addEventListener('mouseleave', function(event) {
	submenu.classList.remove("active")
})

