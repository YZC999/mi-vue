$(function(){
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		var secTopHeight = $('.section-top .layer-con').offset().top;
		var secThinHeight = $('.section-thin').offset().top;
<<<<<<< HEAD
       
        //xm
		var xmsectionplace=$('.xm-section-place').offset().top;
		var xmsectionsound=$('.xm-section-sound').offset().top;
		var xmsectionchildren=$('.xm-section-children').offset().top;
=======

		var secChipHeight = $('.jm_chip').offset().top;
		var secSmartHeight = $('.jm_smart').offset().top;
		var secHdzone = $('.jm_hdzone').offset().top;
		console.log(secHdzone)
>>>>>>> 24371111c62dee00133e6b604120e5526153b841

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

<<<<<<< HEAD
        
        //xm
        if(scrollTop>=(xmsectionplace-200)){
        	$('.xm-connect  .title').css('transform','translateY(-140px)');
			$('.xm-connect  .title').css('opacity',1);


			$('.xm-connect  .xm-link ').css('transform','translateY(-40px)');
			$('.xm-connect  .xm-link ').css('opacity',1);

			$('.xm-connect  .xm-item-des ').css('transform','translateY(-50px)');
			$('.xm-connect  .xm-item-des ').css('opacity',1);

             }

        if(scrollTop>=(xmsectionplace+100)){
            $(' .xm-place-pic ').css('transform','translateY(-70px)');
			$(' .xm-place-pic ').css('opacity',1);

			 }

         if(scrollTop>=(xmsectionplace+900)){
            $(' .xm-atoms-list ').css('transform','translateY(-60px)');
			$(' .xm-atoms-list ').css('opacity',1);
           }
         

         if(scrollTop>=(xmsectionsound)){
            
            $(' .video-icon').css('transform','translateY(-80px)');
			$(' .video-icon ').css('opacity',1);
			 
           }
         
         if(scrollTop>=(xmsectionsound+20)){
            
            
			$('.title-sound').css('transform','translateY(-90px)');
			$('.title-sound ').css('opacity',1);
            $('.xm-section-sound  .text').css('transform','translateY(-80px)');
            $('.xm-section-sound  .text ').css('opacity',1);
           }

         if(scrollTop>=(xmsectionsound+700)){
            $('.xm-icon-list').css('transform','translateY(-30px)');
            $('.xm-icon-list').css('opacity',1);
           } 
     
        
         if(scrollTop>=(xmsectionchildren-100)){
            $('.xm-section-children h2').css('transform','translateY(-20px)');
            $('.xm-section-children h2').css('opacity',1);
           }
           if(scrollTop>=(xmsectionchildren-50)){
            $('.xm-section-children p').css('transform','translateY(-20px)');
            $('.xm-section-children p').css('opacity',1);
           } 

            if(scrollTop>=(xmsectionchildren+160)){
            $('.xm-section-children .children-list').css('transform','translateY(-40px)');
            $('.xm-section-children .children-list').css('opacity',1);
           } 
            if(scrollTop>=(xmsectionchildren+400)){
            $('.xm-section-children   .children-tv ').css('transform','translateY(-60px)');
            $('.xm-section-children   .children-tv ').css('opacity',1);
           } 
         
         //xm
=======



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

>>>>>>> 24371111c62dee00133e6b604120e5526153b841

	})
})