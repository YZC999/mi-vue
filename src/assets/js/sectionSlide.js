$(function(){
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		var secTopHeight = $('.section-top .layer-con').offset().top;
		if(scrollTop>=(secTopHeight-100)){
			$('.section-top .layer-con').css('transform','translateY(20%)');
		}
	})
})