<template>
	<div class="box-container">
       <!-- <button @click="getData">click</button> -->
		<div class="boxs">

			<div class="boxs-top clearfix">
				<h3 class="top-title">智能硬件</h3>
				<a href="#" target="_blank">
					<span class="top-sub">
						查看全部
						<i class="sub-icon fa fa-fw fa-chevron-circle-right"></i>
					</span>
				</a>
			</div>

			<div class="boxs-content clearfix">
				<div class="box-left">
					<a href="#" target="_blank">
						<img :src="goodstopbox_1" alt="">
					</a>	
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

<script>
import {api} from "../global/api.js"
	export default {    
	  name: 'box-container',
	  data () {
	    return {
	    	// url1:a1,
	      goodstopbox_1:'http://i3.mifile.cn/a4/124d82cc-cfce-44ab-b711-28b21be81683',
	      goods: []
	    }
	  },

      mounted(){
      	this.getData();
      },

	  methods:{
	  	//获取动态数据（json也有可能接口）
	  	getData:function(){
	  		let me = this;
	  		// this.$http.get('../../static/data/goodtop-box.json',{params:{"key":this.inputValue}}).then(function(response){
	  		this.$http.get(api.goodtopbox,{params:{"key":this.inputValue}}).then(function(response){
	  			me.goods = response.data

	  		}, function(response){
	  			alert("请求失败了")
	  		})
	  	}
	  }
	}

</script>

<style type="text/css" src="./../assets/css/jm_GoodsTopBox.css"></style>