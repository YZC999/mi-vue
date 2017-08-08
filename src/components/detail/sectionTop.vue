<template>
  <div class="qy_secTop">
	<div class="section section-top is-visible preload">
		<div class="content J_sectionTopCon">
			<h1 class="webfont title-top">小米电视<span>4</span> 65英寸</h1>
			<p class="des ft24">杜比全景声影院电视</p>
			<p class="price">9999元<em>（含运费）</em></p>
		</div>
		<div class="layer-con">
			<div class="layer-yu"></div>
		</div>
		<div class="wrap">
			<div class="layer-tv"></div>
			<div class="layer-bg"></div>
		</div>
		<p class="top-tips">*该电视含开关机等形式的广告，开关机时的广告视频不能删除、更改，且第三方内容的广告视频无法控制</p>
	</div>	
  </div>
</template>

<script>

export default {
  components:{
  }
}

</script>
<script type="text/javascript" src="../../assets/js/sectionSlide.js"></script>
<style>
	.qy_secTop{
		height: 1200px;
		width: 100%;
		background: orange;
	}
	.section-top {
	    overflow: hidden;
	    _zoom: 1;
	    position: relative;
	    height: 1200px;
	    background: #fff;
	}
	.section {
	    color: #000;
	}
	.section-top .content {
	    position: relative;
	    text-align: center;
	    color: #fff;
	    z-index: 10;
	}
	.section-top .title-top {
	    transition: opacity 1.5s 2.2s;
	}
	.section h1 {
	    padding: 110px 0 25px 0;
	    font-size: 60px;
	}
	.section-top .des {
	    transition: opacity 1.5s 2.5s;
	}
	.section .ft24 {
	    font-size: 24px;
	}
	.section p {
	    line-height: 30px;
	}
	.section-top .price {
	    transition: opacity 1.5s 2.8s;
	}
	.section .price {
	    margin-top: 55px;
	    font-size: 40px;
	    font-family: 'Avenir';
	}
	.section .price em {
	    font-size: 20px;
	    font-style: normal;
	}
	.section-top .layer-con {
	    position: absolute;
	    left: 50%;
	    top: 0;
	    margin-left: -1280px;
	    width: 2560px;
	    height: 1000px;
	    background: #000;
	    transition: all 2s;
	}
	.section-top.is-visible .layer-yu {
	    opacity: 1;
	    transform: translate3d(0, 0, 0);
	}
	.section-top.preload .layer-yu {
	    background-image: url("../../assets/img/top-yu.jpg");
	}
	.section-top .layer-yu {
	    position: absolute;
	    left: 50%;
	    top: -20%;
	    margin-left: -1280px;
	    width: 2560px;
	    height: 1000px;
	    z-index: 2;
	    transform: translate3d(0, -200px, 0);
	    transition: all 2s;
	    background-color: #000;
	    background-repeat: no-repeat;
	    background-position: center center;
	}
	.section .wrap {
	    position: absolute;
	    left: 50%;
	    top: 0;
	    width: 2560px;
	    height: 100%;
	    margin-left: -1280px;
	}
	.section-top.is-visible .layer-tv {
	    transform: translate3d(0, 0, 0);
	}
	.section-top.preload .layer-tv {
	    background: url('../../assets/img/top-tv.png') no-repeat center center;
	}
	.section-top .layer-tv {
	    position: absolute;
	    left: 50%;
	    top: 282px;
	    margin-left: -613px;
	    width: 1226px;
	    height: 857px;
	    z-index: 2;
	    transform: translate3d(0, 50px, 0);
	    transition: all 2s;
	}
	.section-top.preload .layer-bg {
	    background: url('../../assets/img/top-end.jpg') no-repeat center top;
	}
	.section-top .layer-bg {
	    position: absolute;
	    top: 0;
	    left: 50%;
	    margin-left: -1280px;
	    width: 2560px;
	    height: 100%;
	    z-index: 4;
	    opacity: 0;
	    filter: alpha(opacity=0)\9;
	    transition: opacity 1.8s 1.8s;
	}
	.section-top .content, .section-top .layer-bg,
	.section-top .title-top,.section-top .des,
	.section-top .price {
	    opacity: 0;

	}
</style>
