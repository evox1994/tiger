$(document).ready(function(){

	var ss = sessionStorage.getItem('site');
	if ( ss ) {
		$('.cookie').removeClass('active');
	} else {
		sessionStorage.setItem('site','true');
		$('.cookie').addClass('active');
	}
	
	$('.cookie-btn').click(function(){
		$('.cookie').removeClass('active');
	});

	function headerScroll(){
		var st = $(window).scrollTop();

		if ( $(window).width() > 767 ) {
			if ( st > 129 ) {
				$('.header').addClass('active');
			} else {
				$('.header').removeClass('active');
			}
		} else {
			$('.header').removeClass('active');
		}
	}
	headerScroll();

	$(window).scroll(function(){
		headerScroll();
	});

	$('.mobile-btn').click(function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('active');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('active');
		}
	});

	$('.close-btn').click(function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('active');
	});

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
	$('body').on('click',function(e){
		var container = $('.select-wrap');
		if (container.has(e.target).length === 0) {
			$('.select-drop').removeClass('active');
			$('.select-area').removeClass('active');
		}
	});

	$('body').on('click','.file-inp',function(){
		$(this).parents('.file-wrap').find('input[type="file"]').click();
		return false;
	});
	$('body').on('change','.file-wrap input[type="file"]',function(){
		files = this.files;
		$(this).closest('.file-wrap').find('.file-inp').text(files[0].name);
	});

});