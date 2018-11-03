$(document).ready(function(){

	var page_href = location.href;
	$('.news-share-block input').val(page_href);

	$('.news-share-block').click(function(){
		var span = $(this).find('span');
		$(this).find('input').select();
		document.execCommand('copy');
		$(this).find('span').text('Готово');
		setTimeout(function(){
			span.text('Скопировать');
		},3000);
	});

	function fixScroll(){
		if ( $(window).width() > 767 ) {
			var vg = $('.b-2-wrap').offset().top - 120;
			var ng = vg + $('.b-2-wrap').height() - $('.b-2-fix').height();
			var st = $(window).scrollTop();

			if ( st > vg ) {
				if ( st > ng ) {
					$('.b-2-fix').removeClass('scroll');
					$('.b-2-fix').addClass('bottom');
				} else {
					$('.b-2-fix').addClass('scroll');
					$('.b-2-fix').removeClass('bottom');
				}
			} else {
				$('.b-2-fix').removeClass('scroll');
				$('.b-2-fix').removeClass('bottom');
			}
		} else {
			$('.b-2-fix').removeClass('scroll');
			$('.b-2-fix').removeClass('bottom');
		}
	}
	fixScroll();

	$(window).scroll(function(){
		fixScroll();
	});

});