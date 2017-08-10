<template>
  
	<div class="section section-vip preload is-visible">
		<div class="container">
			<div class="content">
							<div class="icon-vip"></div>
							<h2 class="webfont title-vip">小米电视会员权益<br>一个会员，双重特权</h2>
							<p class="text">成为小米电视会员之后，就能享受“小米电视会员年卡（原价498元）+爱奇艺VIP会员年卡（原价198元）”双卡<br>的全部权益，价值696元，随电视加价购可享受小米补贴价，超值特惠首年仅需199元。</p>
							<div class="vip-card"></div>
	        </div>
	    </div>
	</div>
  
</template>

<script>

export default {
  components:{
  }
}


</script>

<style>
	.section-vip.preload {
		    background: url("https://c1.mifile.cn/f/i/17/mitv4/65index/bg-vip.jpg") no-repeat center center;
		    position: relative;
		}
		.section-vip {
		    height: 820px;
		}

		.container {
		    width: 1226px;
		    margin-right: auto;
		    margin-left: auto;
		}

		.section-vip .content {
		    padding-top: 180px;
		    text-align: center;
		    color: #fff;
		}

		.section-vip.preload .icon-vip {
		    background: url("https://c1.mifile.cn/f/i/17/mitv4/65index/icon-vip.jpg") no-repeat center center;
		}

		.section-vip .icon-vip {
		    margin-bottom: 45px;
		    left: 44%;
		    margin-right: auto;
	        top: 20%;
		    width: 179px;
		    height: 40px;
		    position: absolute;;
		    transition: all 1s;
		    opacity:0 ;
		}

		.section h2 {
		    line-height: 64px;
		    font-size: 40px;
		}

		.title-vip{
			opacity: 0;
			transition:all 1s;
			margin-top: 100px;
			 

		}

		.section-vip .text {
		    /*margin-top: 10px;*/
		    -webkit-transition: all 1s .4s;
		    transition: all 1s .4s;
		    opacity: 0;
		}
		.section p {
		    line-height: 30px;
		    font-size: 16px;
		}

		.section-vip.preload .vip-card {
		    background: url("https://c1.mifile.cn/f/i/17/mitv4/65index/vip-card.png") no-repeat center center;
		}

		 .vip-card {
		    margin: 70px auto 0;
		    width: 710px;
		    height: 140px;
		    -webkit-transition: all 1s .6s;
		    transition: all 1s .6s;
		    opacity: 0;
		}
</style>
<script type="text/javascript">
	 $(function(){
	 	$(window).scroll(function(){
	 		 
	 	  var x=$(document).scrollTop();
          var sectionvip=$(".section-vip").offset().top;
          

          if(x>=sectionvip-70){
          $(".icon-vip").css("transform",'translateY(-30%)');
          $(".icon-vip").css("opacity",1);

          $(".title-vip").css("transform",'translateY(-60px)');
          $(".title-vip").css("opacity",1); 
          $(".section-vip .text").css("transform",'translateY(-60px)');
          $(".section-vip .text").css("opacity",1)
          
          $(".section-vip .vip-card").css("transform",'translateY(-60px)');
          $(".section-vip .vip-card").css("opacity",1)
          }
	 	})
	 })
</script>