<template>
	<div class="goods-top clearfix">
		<h3 class="top-title">{{ topTitle }}</h3>
		<ul class="top-sub">
			<li v-for="sub in subs" :class="{'active': topSubStatus === sub.key}" @mouseenter="topSubEnter(sub.key)">{{ sub.name }}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				topSubStatus: this.subs[0].key
			}
		},

		computed:{},

		props:{
			subs:{
				required:true,
				type:Array
			},
			topTitle:{
				required:true,
				type:String
			}
		},

		methods:{
			topSubEnter(key){
				this.topSubStatus = key
			}
		}

	}
</script>