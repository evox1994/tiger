$(document).ready(function(){

	$('.qwestion').click(function(){
		if ( $(this).parents('li').hasClass('active') ) {
			$(this).parents('li').removeClass('active');	
		} else {
			$(this).parents('li').addClass('active');
		}
	});
	
});