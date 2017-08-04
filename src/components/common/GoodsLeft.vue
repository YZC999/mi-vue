<template>
	<ul class="goods-left">
		<li class="goods-left-item item-top" v-for="goods in leftGoods">
			<a :href="goods.sourceUrl" target="_blank">
				<img :src="goods.imgUrl" alt="">
			</a>
		</li>
	</ul>
</template>

<script>
	export default{
		props:{
			leftGoods:{
				required:true,
				type:Array
			}
		}
	}
</script>

<style>
	.goods-left{
		float: left;
		width: 20%;
		height: auto;
	}

	.goods-left-item{
		width: 100%;
		height: 300px;
		margin-bottom: 14px;
		cursor: pointer;
		transition:all 0.3s;
	}

	.goods-left-item:hover{
		transform:translateY(-2px);
		box-shadow: 5px 5px 20px #cccccc;
	}

	.goods-left-item img{
		width: 100%;
		height: 300px;
	}

	.item-bottom{
		margin-top: 14px;
	}
</style>