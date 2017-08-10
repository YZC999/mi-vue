<template>
<div class="xm-header-nav-fixed">
	<div class="xm-nav-bar">
	   
		 <div class="xm-left-nav">
		    <span>小米电视4 65英寸 </span>
		 	<span>|</span>
		 	<a href="#" >小米电视4 49英寸</a>
		 	<span>|</span>
		 	<a href="#">小米电视4 55英寸</a>
		 </div>
		 <div class="xm-right-nav">
		 	<a href="#">概述</a>
		 	<span>|</span>
		 	<a href="#" >音质</a>
		 	<span>|</span>
		 	<a href="#" >设计</a>
		 	<span>|</span>
		 	<a href="#" >参数</a>
		 	<span>|</span>
		 	<a href="#" >用户评价</a>
		 	<a class="xm-car" href="#">立即购物</a>
		 	 
		 </div>
	</div>
</div>
</template>

<script>
import  '../assets/css/stylexm.css'
export default{

	data(){
		return{

		}
	}
}
</script>


<script type="text/x-javascript">
		$(function(){

			var nav=$(".xm-header-nav-fixed").offset().top;
			var win=$(window);
			var sc=$(document);
			win.scroll(function(){
				if(sc.scrollTop()>=nav){
				$('.xm-header-nav-fixed').css("position","fixed");
				
				}
				 
			})
		})
	</script>

