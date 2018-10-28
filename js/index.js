$(document).ready(function(){

	$('.b-6-slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true
	});

	function b3Anim() {
		$('.b-3-list li').each(function(){
			var des = $(this).offset().top - 150;
			var st = $(window).scrollTop();
			if ( st > des ) {
				$(this).addClass('anim');
			}
		});
	}
	b3Anim();

	$(window).scroll(function(){
		b3Anim();
	});

	function Selects() {
		$('.select-wrap').each(function(){
			var text = $(this).find('select option:selected').text();
			$(this).find('select option').each(function(){
				$(this).parents('.select-wrap').find('.select-drop').append('<a href=".'+$(this).attr('class')+'">'+$(this).text()+'</a>');
			});
			$(this).find('.select-area span').text(text);
		});
	}
	Selects();

	$('.select-area').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).parent().find('.select-drop').removeClass('active');
		} else {
			$('.select-area').removeClass('active');
			$('.select-drop').removeClass('active');
			$(this).addClass('active');
			$(this).parent().find('.select-drop').addClass('active');
		}
	});
	$('body').on('click','.select-drop a',function(){
		var text = $(this).text();
		var opt = $(this).attr('href');

		$(this).parents('.select-wrap').find('.select-area span').text(text);
		$(this).parents('.select-wrap').find(opt).prop('selected','true').change();
		$(this).parents('.select-wrap').find('.select-drop').removeClass('active');
		$(this).parents('.select-wrap').find('.select-area').removeClass('active');
		return false;
	});

});