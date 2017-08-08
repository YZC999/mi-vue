<template>
  <div class="qy_secThin">
	<div class="section section-thin preload is-visible" data-offset="600">
		<div class="container">
			<div class="content">
				<h2 class="webfont title">4.9mm，我所向往的向往</h2>
				<p class="item-des">超薄，晶莹剔透得如玻璃一般，它既是电视，也是一件令人向往的艺术品。</p>
				<a href="/mitv4/65/design/" class="link" data-stat-id="3a9e5aa94d281a94" onclick="_msq.push(['trackEvent', 'a37044a0aac17a89-3a9e5aa94d281a94', '/mitv4/65/design/', 'pcpid', '']);">了解设计和工艺 &gt;</a>
				<ul class="thin-list">
					<li class="item">
						<span class="text webfont">4.9mm</span>
						<span>极超薄</span>
					</li>
					<li class="item">
						<span class="text webfont">无边框</span>
						<span>沉浸式设计</span>
					</li>
				</ul>
			</div>
		</div>
			<div class="wrap">
				<div class="thin-tv01"></div>
				<div class="thin-tv02"></div>
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
	.qy_secThin{
		height: 1100px;
		width: 100%;
		background: orange;
	}
	.section-thin.preload {
	    background: url('../../assets/img/bg-thin.jpg') no-repeat center center;
	}
	.section-thin {
	    position: relative;
	    /*overflow: hidden;*/
	    height: 1100px;
	    color: #fff;
	}
	.section-thin .container {
	    position: relative;
	    z-index: 3;
	}
	.container {
	    width: 1226px;
	    margin-right: auto;
	    margin-left: auto;
	}
	.section-thin .content {
	    padding-top: 120px;
	    text-align: center;
	}
	.section .title,.section .item-des,.section .link {
	    opacity: 1;
	    transform: translate3d(0, 0, 0);
	}
	.section .webfont {
	    font-family: 'F5c968';
	}
	.section .title {
	    transition: all .8s;
	}
	.section h2 {
	    line-height: 64px;
	    font-size: 40px;
	}
	.section-thin .item-des {
	    margin: 10px 0 30px;
	}
	.section .item-des {
	    transition: all .8s .2s;
	}
	.section p {
	    line-height: 30px;
	    font-size: 16px;
	}
	.section-thin .link {
	    display: inline-block;
	    color: #fff;
	    font-size: 16px;
	}
	.section .link {
	    transition: all .8s .4s;
	}
	.section-thin.is-visible .thin-list {
	    transform: translate3d(0, 0, 0);
	    opacity: 1;
	}
	.section-thin .thin-list {
	    padding: 60px 0;
	    text-align: center;
	    transition: all .8s .6s;
	}
	.section-thin .item:first-child {
	    border-right: 1px solid rgba(255,255,255,0.3);
	}
	.section-thin .item {
	    padding: 0 80px;
	    display: inline-block;
	}
	li {
	    list-style-type: none;
	}
	.section-thin .text {
	    font-size: 40px;
	    padding-bottom: 15px;
	}
	.section .webfont {
	    font-family: 'F5c968';
	}
	.section-thin span {
	    display: block;
	}
	.section .wrap {
	    position: absolute;
	    left: 50%;
	    top: 0;
	    width: 2560px;
	    height: 100%;
	    overflow: hidden;
	    margin-left: -1280px;
	}
	.section-thin.is-visible .thin-tv01,
	.section-thin.is-visible .thin-tv02 {
	    transform: translate3d(0, 0, 0);
	    opacity: 1;
	}
	.section-thin.preload .thin-tv01 {
	    background: url("../../assets/img/thin-tv01.png") no-repeat center center;
	}
	.section-thin .thin-tv01 {
	    position: absolute;
	    left: -300px;
	    bottom: 0;
	    height: 1036px;
	    width: 1377px;
	    transition: all 3s;
	}
	.section-thin.preload .thin-tv02 {
	    background: url("../../assets/img/thin-tv02.png") no-repeat center center;
	}
	.section-thin .thin-tv02 {
	    position: absolute;
	    right: -300px;
	    bottom: -20px;
	    height: 995px;
	    width: 1526px;
	    transition: all 3s;
	}
</style>
