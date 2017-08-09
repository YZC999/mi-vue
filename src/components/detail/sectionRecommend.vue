<template>
	<div class="jm_recommed">
		<div class="content">
			<h2 class="webfont title-hdzone"> {{ retit1 }} </h2>
			<p class="item-des"> {{ retit2 }} </p>
			<div class="pic"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				retit1:'推荐电视观看距离',
				retit2:'该距离为推荐观看距离，在实际观看中，电视尺寸越大效果越好'
			}
		}
	}
</script>

<style>
	.jm_recommed{
		height: 690px;
		background-color: #fff;
	}

	.jm_recommed .content{
		padding-top: 100px;
		text-align: center;
	}

	.jm_recommed h2{
		line-height: 64px;
		font-size: 40px;
		opacity: 0;
		transition:all 2s;
		margin-top: 30px;
	}

	.jm_recommed p{
		line-height: 30px;
		font-size: 16px;
		margin-top:-40px; 
		opacity: 0;
		transition:all 2s;
	}

	.jm_recommed .pic{
		opacity: 1;
		background: url(//c1.mifile.cn/f/i/17/mitv4/65index/bg-recommend.jpg) no-repeat center center;
		margin: 80px auto 0;
    	width: 1226px;
    	height: 300px;
	}
</style>