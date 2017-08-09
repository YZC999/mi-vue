<template>
	<div class="jm_hdzone">
		<div class="content">
			<div class="icon-hdzone"></div>
			<h2 class="webfont title-hdzone">
				{{hdtit1}}
			</h2>
			<p class="text">
				{{hdtit2}}<br>{{hdtit3}}
			</p>
		</div>

		<div class="wrap">
			<ul class="poster-list clearfix">
				<li class="poster" :class="hdzome.postertype" v-for="hdzome in hdzomes"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				hdtit1:'小米电视极清会员，免费升级上线',
				hdtit2:'小米电视联合爱奇艺、迅雷域CDN，全新推出极清专区，不仅有更清晰的大片、电视剧，',
				hdtit3:'还解决了高清节目卡顿的难题。',
				hdzomes:[
					{postertype:'poster01'},
					{postertype:'poster02'},
					{postertype:'poster03'},
					{postertype:'poster04'},
					{postertype:'poster05'},
					{postertype:'poster06'},
					{postertype:'poster07'}
				]
			}
		}
	}
</script>

<style>
	.jm_hdzone{
		overflow: hidden;
		position: relative;
		height: 930px;
		background: #f0f5f9;
	}

	.jm_hdzone .content{
		margin-top: 88px;
		text-align: center;
	}

	.icon-hdzone{
		background: url(//c1.mifile.cn/f/i/17/mitv4/65index/icon-hd01.png) no-repeat center center;
		transform: translate3d(0, 0, 0);
		opacity: 0;
		margin: 0 auto 25px;
    	width: 77px;
    	height: 81px;
    	transition: all 2s;
    	margin-top: 60px;
	}

	.jm_hdzone h2{
		line-height: 64px;
		font-size: 40px;
		margin: 0;
		padding: 0;
		border: none;
		font-family: '仿宋';
		opacity: 0;
		margin-top: 30px;
		transition: all 2s;
	}

	.jm_hdzone .content p{
		line-height: 30px;
    	font-size: 16px;
    	margin: 0;
		padding: 0;
		margin-top: 15px;
		opacity: 0;
		transition: all 2s;
	}


	.jm_hdzone .wrap{
		position: absolute;
    	left: 50%;
    	top: 0;
    	width: 2560px;
    	height: 100%;
    	margin-left: -1280px;
	}

	.jm_hdzone .wrap .poster-list{
		position: absolute;
		left: 200px;
		bottom: 0;
	}

	.jm_hdzone .wrap .poster-list .poster{
		opacity: 1;	
		margin: 25px 15px 0;
    	width: 250px;
    	height: 449px;
    	float: left;
	}

	.jm_hdzone .wrap .poster-list .poster01{
		background: url(//c1.mifile.cn/f/i/17/mitv4/65index/poster01.png) no-repeat center center;
	}

	.jm_hdzone .wrap .poster-list .poster02{
		background: url(//c1.mifile.cn/f/i/17/mitv4/65index/poster02.png) no-repeat center center;
	}

	.jm_hdzone .wrap .poster-list .poster03{
		background: url(//c1.mifile.cn/f/i/17/mitv4/65index/poster03.png) no-repeat center center;
	}

	.jm_hdzone .wrap .poster-list .poster04{
		background: url(//c1.mifile.cn/f/i/17/mitv4/65index/poster04.jpg) no-repeat center center;
		margin-top: 0;
    	width: 459px;
    	height: 569px;
	}

	.jm_hdzone .wrap .poster-list .poster05{
		background: url(//c1.mifile.cn/f/i/17/mitv4/65index/poster05.png) no-repeat center center;
	}

	.jm_hdzone .wrap .poster-list .poster06{
		background: url(//c1.mifile.cn/f/i/17/mitv4/65index/poster06.png) no-repeat center center;
	}

	.jm_hdzone .wrap .poster-list .poster07{
		background: url(//c1.mifile.cn/f/i/17/mitv4/65index/poster07.png) no-repeat center center;
	}
</style>