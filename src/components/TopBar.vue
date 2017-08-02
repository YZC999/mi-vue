<template>
	<header class="top-container">
		
		<div class="top-bar cleafix">
			
			<div class="topbar-nav">
				<ul class="nav-wrap">
					<li v-for="item in navs" class="nav clearfix">
						<template v-if="item.name === '小米商城'">
							<a :href="item.sourceUrl" class="nav-name">{{ item.name }}</a>
						</template>

						<template v-else>
							<a :href="item.sourceUrl" class="nav-name" target="_blank">{{ item.name }}</a>
						</template>
						<span class="nav-separate">|</span>
					</li>
				</ul>
			</div>

			<div class="topbar-info">
				<!-- <a href="#">登录</a> -->
				<router-link to="mi_login">登录</router-link>
				<span class="nav-separate">|</span>
				<!-- <a href="#">注册</a> -->
				<router-link to="mi_resigner">登录</router-link>
			</div>

			<div class="topbar-cart fa cart-arrow-down" @mouseenter="shopCartEnter" @mouseleave="shopCartOut">
				
				<div class="cart" :class="{'active':cartStatus}">
					<i class="fa fa-cart-arrow-down icon-cart"></i>
					<!-- <a href="#"> -->
					<router-link to="mi_shoppingcart">
						购物车(<span>0</span>)
					</router-link>
					<!-- </a> -->
				</div>

				<div class="cart-list" transition="fadein" v-show="cartStatus">
					购物车中还没有商品，赶紧选购吧！
				</div>

			</div>

		</div>
	</header>
</template>

<script>

	export default{
		data () {
			return {
				navs: [
					{name:'小米商城',sourceUrl:'#'},
					{name:'MIUI',sourceUrl:'#'},
					{name:'米聊',sourceUrl:'#'},
					{name:'游戏',sourceUrl:'#'},
					{name:'多看阅读',sourceUrl:'#'},
					{name:'云服务',sourceUrl:'#'},
					{name:'金融',sourceUrl:'#'},
					{name:'小米商城移动版',sourceUrl:'#'},
					{name:'问题反馈',sourceUrl:'#'},
					{name:'SelectRegion',sourceUrl:'#'}
				],
				timer: '',
				cartStatus: false
			}
		},

		ready(){

		},

		methods:{
			shopCartEnter:function(){
				this.cartStatus = true
				clearInterval(this.timer)
			},

			shopCartOut:function(){
				let mouout = this
				this.timer = setTimeout(function(){
					mouout.cartStatus = false
				},300)
			}
		},

		components:{

		}
	}
</script>

<style type="text/css" src="./../assets/css/jm_topbar.css"></style>