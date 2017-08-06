<template>
	<div class="jm_content" :class="content.type">
		<h3 class="title">{{ content.title }}</h3>
		<div class="slide-wrap">
			<span @click="slidePre" class="slide-pre">
				<i class="fa fa-chevron-left fa-fw icon-chevron-left"></i>
			</span>
			<span @click="slideNext" class="slide-next">
				<i class="fa fa-chevron-right fa-fw icon-chevron-right"></i>
			</span>

			<ul class="sub-content clearfix" :style="{'margin-left':this.currPage * (-296) + 'px'}">
				<li class="content-item" v-for="item in content.list">
					<template v-if="item.type === 0">
						<a :href="item.sourceUrl" target="_blank">
							<h3 class="subTitle">{{ item.title }}</h3>
							<p class="desc first-desc">{{ item.desc }}</p>
							<img class="content-image" :src="item.imgUrl" alt="">
						</a>
					</template>
					
					<template v-if="item.type === 1">
						<a :href="item.sourceUrl"  target="_blank">
							<h3 class="subTitle">{{ item.title }}</h3>
							<p class="desc">{{ item.desc }}</p>
							<p class="price">{{ item.price }}</p>
							<img class="content-image" :src="item.imgUrl" alt="">
						</a>
					</template>

					<template v-if="item.type === 2">
						<p class="desc">{{ item.desc1 }}<br>{{ item.desc2 }}</p>
						<a :href="item.sourceUrl"  target="_blank">
							<p class="btn-txt">{{ item.btnTxt }}</p>
						</a>
						<img class="content-image" :src="item.imgUrl" alt="">
					</template>
				</li>
			</ul>

			<ul class="dot-list">
				<li class="dot-item" v-for="item in 4" >
					<span class="dot"></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				currPage:0
			}
		},

		props:{
			content:{
				required:true,
				type:Object
			}
		},

		methods:{
			slidePre(){
				if (this.currPage !== 0) {
					this.currPage--
				}
			},

			slideNext(){
				if (this.currPage < Math.floor((this.content.list.length - 1))) {
					this.currPage++
				}
			}
		}
	}
</script>

<style>
	.jm_content {
	    position: relative;
	    float: left;
	    width: 23%;
	    height: auto;
	   /* margin: 0 0 14px 14px;*/
	   	margin-left: 2.5%;
	   	margin-bottom: 14px;
	    padding-top: 45px;
	    background: #fff;
	    -webkit-transition: all .3s;
	    transition: all .3s;
	}

	.jm_content:hover{
		transform:translateY(-3px);
		box-shadow: 5px 5px 20px #ccc;
	}
	/*.jm_content:hover .slide-pre{
		opacity: 1;
	}
	.jm_content:hover .slide-next{
		opacity: 1;
	}*/

	.jm_content .title{
		font-size: 16px;
		font-weight: 400;
		text-align: center;
		margin: 0 10px 18px;
	}

	.jm_content:nth-child(1){
		margin-left: 0;
	}

	.book{
		border-top: 1px solid #ffac13;
	}
	.book .title{
		color: #ffac13;
	}
	.book .btn-txt{
		color: #fff;
		background: #ffac13;
	}
	.jm_content .first-desc{
		margin-bottom: 60px !important;
	}


	.theme{
		border-top: 1px solid #83c44e;
	}
	.theme .title{
		color: #83c44e;
	}
	.theme .btn-txt{
		color: #83c44e;
		border:1px solid #83c44e;
		background: #fff;
	}
	.theme .btn-txt:hover{
		color: #fff;
		background: #83c44e;
	}



	.game{
		border-top: 1px solid #e53935;
	}
	.game .title{
		color: #e53935;
	}
	.game .btn-txt{
		color: #e53935;
		border: 1px solid #e53935;
		background: #fff;
	}
	.game .btn-txt:hover{
		color:#fff;
		background:#e53935;
	}


	.app{
		border-top: 1px solid #2196f3;
	}
	.app .title{
		color: #2196f3;
	}
	.app .btn-txt{
		color: #2196f3;
		border: 1px solid #2196f3;
		background: #fff;
	}
	.app .btn-txt:hover{
		color: #fff;
		background: #2196f3;
	}


	.jm_content .slide-wrap{
		width: 296px;
		height: 340px;
		overflow: hidden;
	}

	.jm_content .slide-wrap .sub-content{
		width: 1200px;
		height: 340px;
		transition:all .5s ease;
	}

	.jm_content .slide-wrap .sub-content .content-item {
	    position: relative;
	    float: left;
	    width: 296px;
	    height: 340px;
	}

	.jm_content .slide-wrap .slide-next,.jm_content .slide-wrap .slide-pre{
		position: absolute;
		top: 50%;
		opacity: 0;
		transition:all .3s;
		display: block;
		width: 20px;
		height: 46px;
		font-size: 16px;
		text-align: center;
		margin-top: -24px;
		cursor: pointer;
		z-index: 11;
		background: #b0b0b0;
		color: #fff;
	}

	.jm_content .slide-wrap .slide-pre{
		left: 0;
	}

	.jm_content .slide-wrap .slide-next{
		right: 0;
	}



	.jm_content:hover .slide-wrap .slide-next,.jm_content:hover .slide-wrap .slide-pre{
		opacity: 1;
	}

	

	

	.jm_content .subTitle {
	    margin: 0 0 10px;
	    font-weight: normal;
	    font-size: 20px;
	    color: #333;
	}

	.jm_content .desc,.jm_content .subTitle{
		text-align: center;
	}

	.jm_content .book .first-desc {
	    margin-bottom: 60px;
	}

	.jm_content .desc {
	    font-size: 12px;
	    line-height: 1.5;
	    color: #b0b0b0;
	    width: 200px;
	    margin: 0 auto 10px;
	}

	.jm_content .content-image {
	    display: block;
	    width: 216px;
	    height: 154px;
	    margin: 0 auto;
	}

	.jm_content .price{
		font-size: 14px;
		text-align: center;
		color: #333;
	}

	.btn-txt {
		width: 130px;
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		text-align: center;
		margin: 0 auto;
		margin-bottom: 14px;
		background: #fff;
		cursor: pointer;
	}

	.jm_content .dot-list {
	    display: block;
	    position: absolute;
	    left: 50%;
	    bottom: 10px;
	    width: 140px;
	    margin-left: -70px;
	    z-index: 11;
	}

	.jm_content .dot-list .dot-item {
	    display: inline-block;
	    width: 10px;
	    height: 10px;
	    padding: 10px;
	    margin: 0 2px;
	    cursor: pointer;
	}

	.jm_content .dot-list .dot-item .active .dot {
	    background: #fff;
	    border: 2px solid #ff6700;
	}

	.jm_content .dot-list .dot {
	    display: block;
	    width: 10px;
	    height: 10px;
	    border: 2px solid #f5f5f5;
	    border-radius: 6px;
	    text-align: left;
	    text-indent: -9999em;
	    overflow: hidden;
	    background-color: #b0b0b0;
	    transition: all .5s;
	}

	.jm_content .slide-wrap .fa-fw{
		margin-top: 15px;
	}
</style>