$(document).ready(function(){

	$('.b-4-slider').slick({
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

	function b2Anim() {
		var des = $('.b-2-wrap').offset().top - 300;
		var st = $(window).scrollTop();
		if ( st > des ) {
			$('.b-2-wrap').addClass('anim');
		}
	}
	b2Anim();

	function b3Anim() {
		var des = $('.b-3').offset().top - 300;
		var st = $(window).scrollTop();
		if ( st > des ) {
			$('.b-3').addClass('anim');
		}
	}
	b3Anim();

	function b5Anim() {
		var des = $('.b-5').offset().top - 200;
		var st = $(window).scrollTop();
		if ( st > des ) {
			$('.b-5').addClass('anim');
		}
	}
	b5Anim();
	
	function b6Anim() {
		var des = $('.b-5').offset().top - 200;
		var st = $(window).scrollTop();
		if ( st > des ) {
			$('.b-6').addClass('anim');
		}
	}
	b6Anim();

	function b7Anim() {
		var des = $('.b-7').offset().top - 200;
		var st = $(window).scrollTop();
		if ( st > des ) {
			$('.b-7').addClass('anim');
		}
	}
	b7Anim();

	$(window).scroll(function(){
		b2Anim();
		b3Anim();
		b5Anim();
		b6Anim();
		b7Anim();
	});

});