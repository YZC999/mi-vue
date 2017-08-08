$(function(){
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		var secTopHeight = $('.section-top .layer-con').offset().top;
		var secThinHeight = $('.section-thin').offset().top;
		if(scrollTop>=0){
			$('.section-top .layer-yu').css('transform','translateY(20%)');
			$('.section-top .layer-bg').css('opacity',1);
			$('.section-top .content').css('opacity',1);
			$('.section-top .layer-bg').css('opacity',1);
			$('.section-top .title-top').css('opacity',1);
			$('.section-top .des').css('opacity',1);
			$('.section-top .price').css('opacity',1);
		}
		if(scrollTop>=(secThinHeight+100)){
			$('.section-thin .thin-tv01').css('transform','translateX(180px)');
			$('.section-thin .thin-tv02').css('transform','translateX(-180px)');
		}
	})
})