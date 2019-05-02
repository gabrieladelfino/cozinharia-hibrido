(function() {
	var modal = $('#modal')
	var modalClose = $('[data-modal-close]')

	modalClose.on('click', function() {
		$(this).removeClass('active')
	})
})()