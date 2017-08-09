<template>
<div>
	<div class="jm_footer preload">
		<a href="/mitv4/65/sound/" class="link-a">
			<div class="content">
				<h2 class="webcont title">{{ footertit1 }}</h2>
				<p class="item-des">{{ footertit2 }}</p>
			</div>
		</a>
	</div>

	<div class="jm_footer-erweima">
		<div class="container">
			<div class="common-erweima-content clearfix">
				<div class="common-erweima-pic">
					<img src="//c1.mifile.cn/f/i/17/erweima/tverweima.png">
				</div>

				<div class="common-erweima-context">
					<div class="tips">
						{{ footertip1 }}
						<span>{{ footertip2 }}</span>
						{{ footertip3 }}
					</div>

					<div>{{ footertip4 }}</div>
				</div>
			</div>
		</div>
	</div>

	<div class="jm_footer-tips"></div>
</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				footertit1:'把每一个客厅变成高端影院',
				footertit2:'了解杜比全景声 >',
				footertip1:'扫码关注【',
				footertip2:'小米电视',
				footertip3:'】公众号',
				footertip4:'参与新品抽奖、了解更多产品信息、快速寻求专家客服帮助'
			}
		}
	}
</script>

<style>
	.jm_footer.preload {
    	background: url(//c1.mifile.cn/f/i/17/mitv4/65index/bg-footer.jpg) no-repeat center center;
	}

	.jm_footer{
		height: 300px;
	}

	.jm_footer .link-a{
		display: block;
		width: 100%;
		height: 100%;
		color: #fff;
	}

	.jm_footer .content{
		padding-top: 100px;
    	text-align: center;
	}

	.jm_footer-erweima{
		background: #fff;
    	padding: 45px 0;
	}

	.jm_footer-erweima .container{
		width: 90%;
    	margin-right: auto;
    	margin-left: auto;
	}

	.common-erweima-content{
		margin: 0 auto;
    	width: 700px;
	}

	.common-erweima-pic{
		float: left;
    	position: relative;
    	margin: 0 30px;
    	width: 136px;
    	height: 136px;
	}

	.common-erweima-pic img{
		position: absolute;
    	left: 0;
    	top: 0;
    	right: 0;
    	bottom: 0;
   		margin: auto;
	}

	.common-erweima-context{
		float: left;
    	padding: 10px 30px;
	}

	.common-erweima-context .tips{
		padding: 15px 0;
    	font-size: 30px;
	}

	.common-erweima-context .tips span{
		color: #ff3333;
	}

	.jm_footer-tips{
		background: url(//c1.mifile.cn/f/i/17/mitv4/65index/footer-newtips.jpg) no-repeat center center;
		height: 80px;
	}
</style>

