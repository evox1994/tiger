$(document).ready(function(){

	$('.fancybox').fancybox();
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$('.radio-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$('input.required').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea.required').on('input',function(){
		$(this).removeClass('error');
	});

	$('form button[type="submit"]').click(function(){
		if ( $(this).closest('form').find('.button-text .radio-btn').hasClass('active') ) {
			$(this).closest('form').find('input.required').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
			$(this).closest('form').find('textarea.required').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
		} else {
			$(this).closest('form').find('.button-text .radio-btn').addClass('error');
			event.preventDefault();
		}
	});

});