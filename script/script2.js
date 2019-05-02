

var galeria = document.querySelector('.galeria')
var galeriaFigure = galeria.querySelectorAll('figure')

for(var i = 0; i <= galeriaFigure.length; i++) {
	galeriaFigure[i].addEventListener('mouseover', function(event) {
	this.classList.add('active')
	})

	galeriaFigure[i].addEventListener('mouseleave', function(event) {
		this.classList.remove('active')
	})
}


// $(".galeria figure").mouseover(function(e){$(this).addClass("active")}),$(".galeria figure").mouseleave(function(e){$(this).removeClass("active")});