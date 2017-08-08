<template>
  <div class="detail_all">
    <TopBar></TopBar>
    <top-header></top-header>  
   	<navBar></navBar>
   	<my-mitv></my-mitv>
  </div>
</template>

<script>
import TopBar from './TopBar'
import TopHeader from './TopHeader'
import navBar from './detail/navBar'
import Mitv from './detail/mitv'
export default {
  components:{
  	'TopBar':TopBar,
  	'top-header':TopHeader,
  	'navBar':navBar,
  	'my-mitv':Mitv
  }
}
</script>

<style>
	.detail_all{
		width: 100%;
		height: 100%;
	}
</style>
