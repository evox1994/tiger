$(document).ready(function(){

	$('.b-1-slider').slick({
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 1500
	});
	$('.b-6-slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	function b3Anim() {
		$('.b-3-list li').each(function(){
			var des = $(this).offset().top - 200;
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

});