$(document).ready(function() {
	$('.card-header').click(function() {
		$(this).toggleClass('active');
		$(this).next('.card-content').slideToggle();
	});
});
