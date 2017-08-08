<template>
	<div class="jm_features">
		<div class="festures-comtainer">
			<ul class="festures-list" >
				<li class="item" v-for="feat in feats">
					<span class="icon" :class="feat.icontype"></span>
					<span class="text">
						{{feat.text1}}<br>{{feat.text2}}
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				feats:[
					{text1:'4.9mm',text2:'极超薄机身',icontype:'icon01'},
					{text1:'杜比特全景声',text2:'全方位萦绕3D声场',icontype:'icon02'},
					{text1:'4K HDR',text2:'超高清画质',icontype:'icon03'},
					{text1:'3GB+32GB',text2:'超大内存空间',icontype:'icon04'},
					{text1:'PatchWall',text2:'人工智能语音再升级',icontype:'icon05'},
					{text1:'儿童模式',text2:'科学推荐内容',icontype:'icon06'}
				]
			}
		}
	}
</script>

<style type="text/css">
	.jm_features{
		width: 100%;
		height: 500px;
		background: #fff;
	}

	.festures-comtainer{
		width: 90%;
		height: auto;
		margin: 0 auto;
	}

	.festures-list{
		list-style-type: disc;
		text-align: center;
	}

	.festures-list li{
		list-style: none;
		float: left;
		margin-bottom: 80px;
		width: 33.3%;
		text-align: center;
		font-size: 20px;
	}

	.festures-list .icon{
		display: block;
		width: 100px;
		height: 100px;
		margin: 0 auto 30px;
		background-repeat: no-repeat;
		background-image: url(//c1.mifile.cn/f/i/17/mitv4/65index/icon-features.png);
	}

	.festures-list .icon01{
		background-position: 0px 0;
	}

	.festures-list .icon02{
		background-position: -100px 0;
	}

	.festures-list .icon03{
		background-position: -200px 0;
	}

	.festures-list .icon04{
		background-position: -300px 0;
	}

	.festures-list .icon05{
		background-position: -400px 0;
	}

	.festures-list .icon06{
		background-position: -500px 0;
	}
</style>
