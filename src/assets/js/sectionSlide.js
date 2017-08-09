$(function(){
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		var secTopHeight = $('.section-top .layer-con').offset().top;
		var secThinHeight = $('.section-thin').offset().top;

		var secChipHeight = $('.jm_chip').offset().top;
		var secSmartHeight = $('.jm_smart').offset().top;
		var secHdzone = $('.jm_hdzone').offset().top;
		console.log(secHdzone)

		if(scrollTop>=0){
			$('.section-top .layer-yu').css('transform','translateY(20%)');
			$('.section-top .layer-bg').css('opacity',1);

			$('.section-top .content').css('opacity',1);
			// $('.section-top .content').css('transform','translateY(-50%)');
			$('.section-top .layer-bg').css('opacity',1);
			$('.section-top .title-top').css('opacity',1);
			$('.section-top .des').css('opacity',1);
			$('.section-top .price').css('opacity',1);
		}
		if(scrollTop>=(secThinHeight+100)){
			$('.section-thin .thin-tv01').css('transform','translateX(180px)');
			$('.section-thin .thin-tv02').css('transform','translateX(-180px)');
		}




		if(scrollTop>=(secChipHeight-450)){
			$('.jm_chip .jm_chip-container .title').css('opacity',1);
			$('.jm_chip .jm_chip-container .title').css('transform','translateY(-30%)');

			$('.jm_chip .jm_chip-container .item-des').css('opacity',1);
			$('.jm_chip .jm_chip-container .item-des').css('transform','translateY(-120%)');
		}
		if(scrollTop>=(secChipHeight-250)){
			$('.jm_chip .jm_chip-container .chip-list .item').css('opacity',1);
			$('.jm_chip .jm_chip-container .chip-list .item').css('transform','translateY(-50%)');
			$('.jm_chip-container .chip-list h2').css('opacity',1);
			$('.jm_chip-container .chip-list h2').css('transform','translateY(-25%)');
		}

		if(scrollTop>=(secSmartHeight-400)){
			$('.smart-container h2').css('opacity',1);
			$('.smart-container h2').css('transform','translateY(-75%)');

			$('.jm_smart .smart-container .item-des').css('opacity',1);
			$('.jm_smart .smart-container .item-des').css('transform','translateY(-225%)');
			$('.jm_smart .smart-container .item-des').css('font-size',20);
			// $('.jm_smart .group .icon01').css('opacity',1);
		}
		if(scrollTop>=(secSmartHeight-50)){
			$('.jm_smart .group .icon01').css('opacity',1);
			$('.jm_smart .group .icon02').css('opacity',1);
			$('.jm_smart .group .icon03').css('opacity',1);

			$('.jm_smart .small-title01').css('opacity',1);
			$('.jm_smart .small-title01').css('transform','translateY(5%)');
			$('.jm_smart .small-title02').css('opacity',1);
			$('.jm_smart .small-title03').css('opacity',1);
			$('.jm_smart .group .icon04').css('opacity',1);
			$('.jm_smart .group .icon05').css('opacity',1);
			$('.jm_smart .group .icon06').css('opacity',1);

			$('.jm_smart .small-title04').css('opacity',1);
			$('.jm_smart .small-title04').css('transform','translateY(5%)');
			$('.jm_smart .small-title05').css('opacity',1);
			$('.jm_smart .small-title06').css('opacity',1);
		}

		if(scrollTop>=(secHdzone-600)){
			$('.icon-hdzone').css('opacity',1);
			$('.icon-hdzone').css('transform','translateY(-50px)');
			// $('.jm_smart .small-title04').css('transform','translateY(5%)');
			$('.jm_hdzone h2').css('opacity',1);
			$('.jm_hdzone h2').css('transform','translateY(-50px)');
			$('.jm_hdzone .content p').css('opacity',1);
			$('.jm_hdzone .content p').css('transform','translateY(-50px)');
		}


	})
})