$(function(){
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		var secTopHeight = $('.section-top .layer-con').offset().top;
		var secThinHeight = $('.section-thin').offset().top;
       
        //xm
		var xmsectionplace=$('.xm-section-place').offset().top;
		var xmsectionsound=$('.xm-section-sound').offset().top;
		var xmsectionchildren=$('.xm-section-children').offset().top;

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

	})
})