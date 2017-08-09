<template>
	<div class="jm_smart">
		<div class="smart-container">
			<h2 class="webfont title">
				{{ smarttit1 }}<br>{{ smarttit2 }}
			</h2>
			<p class="item-des">{{ smarttit3 }}</p>
			<div class="smart-content">
				<ul class="smart-list clearfix">
					<li class="group" :class="smart.grouptype" v-for="smart in smarts">
						<span class="icon" :class="smart.icontype"></span>
						<span class="webfont small-title" :class="smart.smalltitletype">{{ smart.titles }}</span>
						<span :class="smart.tipstype">{{ smart.tips }}</span>
						<div class="line" :class="smart.linetype"></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				smarttit1:'问百科、查翻译、找菜谱',
				smarttit2:'人工智能语音更进一步',
				smarttit3:'每天都在进步的人工智能语音，在未来可以更强大。',
				// lists:[
				// 	{grouptype:'group01'},
				// 	{grouptype:'group02'},
				// 	{grouptype:'group03'},
				// 	{grouptype:'group04'},
				// 	{grouptype:'group05'},
				// 	{grouptype:'group06'}
				// ],

				smarts:[
					{grouptype:'group01',icontype:'icon01',smalltitletype:'small-title01',titles:'"我的手机在哪"',tipstype:'tips01',tips:'找手机',linetype:'show'},
					{grouptype:'group02',icontype:'icon02',smalltitletype:'small-title02',titles:'"来一首李白的诗"',tipstype:'tips02',tips:'学古诗',linetype:'show'},
					{grouptype:'group03',icontype:'icon03',smalltitletype:'small-title03',titles:'"川菜怎么做"',tipstype:'tips03',tips:'菜谱',linetype:'show'},
					{grouptype:'group04',icontype:'icon04',smalltitletype:'small-title04',titles:'""一带一路"怎么翻译"',tipstype:'tips04',tips:'翻译'},
					{grouptype:'group05',icontype:'icon05',smalltitletype:'small-title05',titles:'"开始猜谜语"',tipstype:'tips05',tips:'猜谜语'},
					{grouptype:'group06',icontype:'icon06',smalltitletype:'small-title06',titles:'"猪肉的热量有多少"',tipstype:'tips06',tips:'食材百科'}
				]
			}
		}
	}
</script>

<style>
	.jm_smart{
		height: 820px;
		background: #f8f8f8;
	}

	.smart-container{
		padding-top: 130px;
		text-align: center;
	}

	.smart-container h2{
		line-height: 64px;
		font-size: 40px;
		font-weight: normal;
		font-family: '仿宋';
		opacity: 0;
		transition: all 2s;
		top: 20%;
	}

	.smart-container .item-des{
		margin-top: 10px;
		line-height: 30px;
    	font-size: 16px;
    	opacity: 0;
    	transition: all 3.5s;
		/*top: 20%;*/
		margin-top: -5%;
	}

	.smart-content{
		max-width: 1920px;
		margin: 70px auto 0;
		height: 500px;
	}

	.smart-list{
		margin: 0;
		padding: 0;
		line-height: 1;
		border: none;
	}

	.jm_smart .group{
		float: left;
		width: 33.3%;
		padding-bottom: 60px;
		font-family: '楷书';
		padding-top: 20px;
	}

	.smart-list li{
		list-style: none;
		display: list-item;
	}

	.jm_smart span{
		display: block;
		font-size: 16px;
	}

	.jm_smart .group .icon{
		background-image: url(//c1.mifile.cn/f/i/17/mitv4/65index/icon-smart.png);
		margin: 0 auto 30px;
    	width: 70px;
    	height: 70px;
    	background-repeat: no-repeat;
	}

	.jm_smart .group .icon01{
		opacity: 0;
		transition: all 1s .4s;
		background-position: 0px 0;
		top: 20%;

	}

	.jm_smart .group .icon02{
		opacity: 0;
		transition: all 1s .4s;
		background-position: -70px 0;
		top: 20%;
	}

	.jm_smart .group .icon03{
		opacity: 0;
		transition: all 1s .4s;
		background-position: -140px 0;
		top: 20%;
		
	}

	.jm_smart .group .icon04{
		opacity: 0;
		transition: all 1s 1s;
		top: 20%;
		background-position: -210px 0;
	}

	.jm_smart .group .icon05{
		opacity: 0;
		transition: all 1s 1s;
		top: 20%;
		background-position: -280px 0;
	}

	.jm_smart .group .icon06{
		opacity: 0;
		transition: all 1s 1s;
		top: 20%;
		background-position: -350px 0;
	}



	.jm_smart .small-title{
		padding-bottom: 15px;
		font-size: 24px;
	}

	.jm_smart .small-title01,.jm_smart .small-title02,.jm_smart .small-title03{
		transition: all 5s;
		opacity: 0;
		top: 20%;
	}

	.jm_smart .small-title04,.jm_smart .small-title05,.jm_smart .small-title06{
		transition: all 1s .1.2s;
		opacity: 0;
	}




	.jm_smart .tips{
		transition: all 1s .8s;
	}

	.jm_smart .tips01,.jm_smart .tips02,.jm_smart .tips03{
		transition: all 1s .8s;
	}

	.jm_smart .tips04,.jm_smart .tips05,.jm_smart .tips06{
		transition: all 1s 1.4s;
	}

	.jm_smart .line{
		margin: 30px auto 0;
    	width: 50%;
    	height: 2px;
    	background: #e6e6e6;
    	opacity: 0;
    	filter: alpha(opacity=0)\9;
    	transition: all 1s 1.5s;
	}

	.jm_smart .show{
		opacity: 1;
	}


</style>