$(document).ready(function(){

	$('.filter a').click(function(){
		var el = $(this).attr('href');

		if ( !($(this).parents('li').hasClass('active')) ) {
			$('.filter li').removeClass('active');
			$(this).parents('li').addClass('active');
			$('.reviews-list').removeClass('active');
			$(el).addClass('active');
			if ( $(window).width() < 768 ) {
				var des = $(el).offset().top - 200;
				$('body,html').animate({scrollTop: des},800);
			}
		}
		return false;
	});

});