<template>
	<div class="box-container">

		<div class="boxs">

			<div class="boxs-top clearfix">
				<h3 class="top-title">智能硬件</h3>
				<router-link to="smart" target="_blank">
					<span class="top-sub">
						查看全部
						<i class="sub-icon fa fa-fw fa-chevron-circle-right"></i>
					</span>
				</router-link>
			</div>

			<div class="boxs-content clearfix">
				<div class="box-left">
					<router-link to="smart" target="_blank">
						<img :src="goodstopbox_1" alt="">
					</router-link>	
				</div>

				<div class="box-right">
					<ul class="box-list">
						<li class="box-item" v-for="good in goods">
							<span class="discount-label" :class="good.discountType">
								{{ good.discount }}
							</span>
							<a :href="good.sourceUrl" target="_blank">
								<img :src="good.imgUrl" alt="">
								<h3 class="box-title">{{ good.title }}</h3>
							</a>
							<p class="box-desc">{{ good.desc }}</p>
							<p class="box-price">{{ good.price }}元
								<template v-if="good.discountType === 'discount'">
									<span class="old-price">{{ good.oldPrice }}元</span>
								</template>
							</p>
						</li>
					</ul>
				</div>

			</div>

		</div>
	</div>
</template>
<!-- 'http://i1.mifile.cn/a1/pms_1495074053.84174465!220x220.jpg -->
<script>
	// import a1 from '../assets/img/goodstopbox_1.jpg'
	export default {
	  name: 'box-container',
	  data () {
	    return {
	    	// url1:a1,
	      goodstopbox_1:'http://i3.mifile.cn/a4/124d82cc-cfce-44ab-b711-28b21be81683',
	      goods: [
	      	{sourceUrl:'#',title:'小米电视机4 65英寸',desc:'8月1日-3日买就送三年小米电视会员',imgUrl:'http://i1.mifile.cn/a1/pms_1495074053.84174465!220x220.jpg',price:'9999', discountType: 'free', discount: '免邮费'},

	      	{sourceUrl:'#',imgUrl:'http://i3.mifile.cn/a4/2b69b930-a2fd-4d09-a46a-8690cb79f764',title:'电助力折叠自行车',desc:'力矩传感电助力，让城市出行轻松有趣',price:'149'},

	      	{sourceUrl:'#',imgUrl:'http://i1.mifile.cn/a1/pms_1464615180.86261317!220x220.jpg',title:'',desc:'能说会道，宝宝的好玩伴',price:'199', discountType: 'new', discount: '新品'},

	      	{sourceUrl:'#',imgUrl:'http://i1.mifile.cn/a1/T1GxCvBghT1RXrhCrK!220x220.jpg',title:'Yeelight床头灯',desc:'触摸式操作体验，给卧室1600万种颜色',price:'249'},

	      	{sourceUrl:'#',imgUrl:'http://i1.mifile.cn/a1/pms_1479190789.95594557!220x220.jpg',title:'小米盒子3s',desc:'4k超高清机顶盒，64位处理器',price:'329'},

	      	{sourceUrl:'#',imgUrl:'http://i3.mifile.cn/a4/T1rQAgB7Av1RXrhCrK.jpg',title:'小米路由器3',desc:'四天线设计，更安全更稳定',price:'149'},

	      	{sourceUrl:'#',imgUrl:'http://i1.mifile.cn/a1/T1OVC_ByY_1RXrhCrK!220x220.jpg',title:'米家压力IH电饭煲',desc:'只能烹饪，3L容量',price:'899',oldPrice:'999', discountType: 'discount', discount: '享9折'},

	      	{sourceUrl:'#',imgUrl:'http://i1.mifile.cn/a1/pms_1488272686.62666302!220x220.jpg',title:'小米米家电动滑板车',desc:'极简几何设计，1分钟轻松上手',price:'1999', discountType: 'new', discount: '新品'},
	      ]
	    }
	  }
	}

</script>

<style type="text/css" src="./../assets/css/jm_GoodsTopBox.css"></style>