<template>
	<div class="jm_goods-right">
		<ul class="goods-right-content">
			<template v-for="goods in currGoods">
				<li class="goods-right-item">

					<span class="discount-label" :class="goods.discountType">{{ goods.discount }}</span>

					<a :href="goods.sourceUrl" target="_blank">
						<img :src="goods.imgUrl" alt="">
						<h3 class="goods-title">{{ goods.title }}</h3>
					</a>

					<p class="goods-price">
						{{ goods.price }}元
						<span v-if="goods.discountType === 'discount'" class="old-price">{{ goods.oldPrice }}元</span>
					</p>

					<p class="goods-rank">{{ goods.heat }}人评价</p>

					<div v-show="goods.reviewStatus" class="review">
						<span class="review-content">{{ goods.reviewDesc }}</span>
						<span class="review-author">来自于{{ goods.reviewAuthor }}的评价</span>
					</div>					
				</li>
				
			</template>
			<template>
				<div class="goods-right-item">
					<a href="http://www.baidu.com" target="_blank">
						<h3 class="title">浏览更多</h3>
						<span class="price hot">热门</span>
						<i class="fa fa-arrow-circle-right fa-4x icon-arrow"></i>
					</a>
					<!-- <li class="item-small read-more">
						<a :href="lastGoods.moreUrl" target="_blank">
							<div class="desc">
								<h3 class="title">浏览更多</h3>
								<span class="price hot">热门</span>
							</div>
							<i class="fa fa-arrow-circle-right fa-4x icon-arrow"></i>
						</a>
					</li> -->
				</div>
			</template>


			<!-- <ul class="goods-right-small">
				<template v-if="lastGoods" >
					<li class="item-small">
						<a :href="lastGoods.sourceUrl" target="_blank">
							<div class="desc">
								<h3 class="title">{{ lastGoods.title }}</h3>
								<span class="price" >{{ lastGoods.price }}元</span>
							</div>
							<img :src="lastGoods.imgUrl" alt="" class="small-img">
						</a>
					</li>

					<li class="item-small read-more">
						<a :href="lastGoods.moreUrl" target="_blank">
							<div class="desc">
								<h3 class="title">浏览更多</h3>
								<span class="price hot">热门</span>
							</div>
							<i class="fa fa-arrow-circle-right fa-4x icon-arrow"></i>
						</a>
					</li>
				</template>
			</ul> -->
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			currGoods:{
				required:true,
				type:Array
			}
		},

		computed:{
			lastGoods:function(){
				if(this.currGoods && this.currGoods.length > 0){
					return this.currGoods[this.currGoods.length - 1]
				}
				else{
					return null
				}
			}
		}
	}
</script>

<style>
	.jm_goods-right{
		width: 80%;
		height: 628px;
		float: left;
	}

	.jm_goods-right .goods-right-content{
		display: flex;
		flex-flow:row wrap;
		justify-content:flex-start;
		width: 100%;
		height: 100%;
	}

	.jm_goods-right .goods-right-item {
		width: 23%;
		height: 300px;
		position: relative;
		/*margin: 0 0 14px 14px;*/
		margin-bottom: 14px;
		margin-left: 2%;
		padding: 20px 0;
		background: #fff;
		cursor: pointer;
		transition: all 0.3s;
	}

	.jm_goods-right .goods-right-item:hover{
		transform: translateY(-1px);
		box-shadow: 5px 5px 20px #ccc;
	}

	.jm_goods-right .goods-right-item:hover .review{
		height:76px ;
		opacity: 1;
	}

	.jm_goods-right .discount-label{
		width: 64px;
		height: 20px;
		position: absolute;
		top: 0;
		left: 50%;
		line-height: 20px;
		margin-left: -32px;
		font-size: 12px;
		text-align: center;
		color: #ffffff;
		z-index: 4;
	}

	.jm_goods-right .free{
		background-color: #ffac13;
	}

	.jm_goods-right .new{
		background-color: #83c44e;
	}

	.jm_goods-right .discount{
		background-color: #e53935;
	}

	.jm_goods-right .old-price{
		color: #b0b0b0;
		text-decoration: line-through;
	}

	.jm_goods-right .goods-right-item img{
		display: block;
		width: 160px;
		height: 160px;
		margin: 0 auto;
	}

	.jm_goods-right .goods-title{
		font-size: 14px;
		text-align: center;
		/*font-weight: 400;*/
		color: #333333;
		overflow: hidden;
		white-space: nowrap;
		font-weight: normal;
		text-overflow:ellipsis;
		margin-top: 12px;
	}

	.jm_goods-right .goods-price{
		color: #ff6700;
		font-size: 14px;
		text-align: center;
		margin-top: 12px;
	}

	.jm_goods-right .goods-rank{
		margin: 0 10px;
		font-size: 12px;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: #b0b0b0;
		margin-top: 12px;
	}

	.jm_goods-right .review{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		font-size: 12px;
		height: 0;
		line-height: 18px;
		overflow: hidden;
		box-sizing: border-box;
		color: #fff;
		background: #ff6700;
		opacity: 0;
		transition: all .3s;
	}

	.jm_goods-right .review-content{
		display: block;
		text-align: center;
		margin: 8px 30px;
	}

	.jm_goods-right .review-author{
		display: block;
		text-align: center;
		margin-bottom: 8px;
	}

	.jm_goods-right .goods-right-small{
		width: 23%;
		height: 130px;
	}

	.jm_goods-right .item-small{
		width: 100%;
		height: 143px;
		margin-bottom: 14px;
		margin-left: 2%;
		padding: 30px 0 0 30px;
		background: #ffffff;
		cursor: pointer;
		transition:all 0.3s;
		box-sizing:border-box;
	}

	.jm_goods-right .item-small:hover{
		transform:translateY(-1px);
		box-shadow: 5px 5px 20px #ccc;
	}
	

	.jm_goods-right .goods-right-small .desc{
		float: left;
		width: 80px;
		height: 100%;
		margin-right: 20px;
	}

	.jm_goods-right .goods-right-small .desc .title{
		font-size: 14px;
		text-align: center;
		color: #333333;
		font-weight: normal;
		text-overflow:ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.jm_goods-right .goods-right-small .desc .price{
		display: block;
		width: 100%;
		color: #ff6700;
		font-size: 14px;
		text-align: center;
	}

	.jm_goods-right .small-img{
		display: block;
		width: 80px;
		height: 80px;
	}

	.jm_goods-right .icon-arrow{
		margin-top: 15px;
		color: #ff6700
	}

	.jm_goods-right .goods-right-item:nth-last-child(2){
		width: 23%;
		height: 140px;
		float: left;
		position: relative;
	}

	.jm_goods-right .goods-right-item:nth-last-child(2) img{
		display: block;
		width: 120px;
		height: 100px;
		float: left;
	}

	.jm_goods-right .goods-right-item:nth-last-child(2) .goods-rank{
		opacity: 0
	}

	.jm_goods-right .goods-right-item:nth-last-child(2) .goods-title{
		font-size: 14px;
		text-align: center;
		color: #333333;
		font-weight: normal;
		text-overflow:ellipsis;
		white-space: nowrap;
		overflow: hidden;
		margin-top: 20px;
	}

	.jm_goods-right .goods-right-item:nth-last-child(2) .goods-price{
		display: block;
		width: 100%;
		color: #ff6700;
		font-size: 14px;
		text-align: center;
		margin-top: 20px;
	}

	.jm_goods-right .goods-right-item:last-child{
		width: 23%;
		height: 140px;
		margin-left: 77%;
		margin-top: -155px;
	}

	.jm_goods-right .goods-right-item:last-child .title{
		font-size: 18px;
		float: left;
		font-weight: 400;
		margin-left: 10%;
		margin-top: 5%;
	}
	.jm_goods-right .goods-right-item:last-child .price{
		font-size: 16px;
		margin-top: 60px;
		float: left;
		margin-left: -22%;
		color: red;
	}


</style>