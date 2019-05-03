//Script que controla a exibição dos subitens do item eventos do menú

var showMenu = document.querySelector('#showMenu')
var submenu = document.querySelector('.submenu')

showMenu.addEventListener('mouseover', function(event) {
	submenu.classList.add("active")
})

showMenu.addEventListener('mouseleave', function(event) {
	submenu.classList.remove("active")
})

//script que controla a exibição dos ingredientes dos pratos na home

/* 
	para começar, selecionamos todos os elementos <figure> 
	através do document.querySelectorAll.
*/
	var galeria = document.querySelector('.galeria')
	var pratos = galeria.querySelectorAll('figure');

 /*
	Como temos mais de 1 elemento figure na forma, teremos como retorno, uma lista, 
	ou seja, um array de elementos. 

	Agora precisamos iterar, ou seja, passar por todos esses elementos.
	Para isso, iremos usar o laço de repetição 'for'.
*/

	for(var i = 0; i <= pratos.length; i++) {
		pratos[i].addEventListener('mouseover', function(event) {
			this.classList.add('active')
		})

		pratos[i].addEventListener('mouseleave', function(event) {
			this.classList.remove('active')
		})
	}
/*
	
	e adicionar um 'ouvidor de eventos'. No Javascript, esse ouvidor se chama 'Event Listener', 
	e o méto usado para adicionar esse ouvidor ao elemento, chama-se 'addEventListener'.
	
 */