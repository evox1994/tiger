$(document).ready(function(){

	function trenerAnim(){
		$('.b-2-list li').each(function(){
			var des = $(this).offset().top - 300;
			var st = $(window).scrollTop();
			if ( st > des ) {
				$(this).addClass('anim');
			}
		});
	}
	trenerAnim();

	$(window).scroll(function(){
		trenerAnim();
	});

});