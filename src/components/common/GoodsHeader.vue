<template>
	<div class="jm_header-wrap">
		<h2 class="title">{{ title }}</h2>
	</div>
</template>

<script>
	export default{
		// data (){
		// 	return{}
		// },
		props:{
			title:{
				required:true,
				type:String
			}
		}
	}
</script>

<style>
	.jm_header-wrap{
		position: relative;
	}

	.jm_header-wrap .title{
		font-size: 22px;
		color: #333333;
		font-weight: 200;
		line-height: 58px;
		margin:0;
		text-align: left;
	}
</style>