<template>
  <div id="app1">
    <TopBar></TopBar>
    <top-header></top-header>   
    <top-nanner></top-nanner>
    <top-sub></top-sub>
    <goods></goods>
    <temp-footer></temp-footer>  
  </div>
</template>

<script>
import TopBar from './TopBar'
import TopHeader from './TopHeader'
import TopBanner from './TopBanner'
import TopSub from './TopSub'
import Goods from './Goods'
import TempFooter from './TempFooter'

export default {
  name: 'app1',
  components:{
    'TopBar':TopBar,
    'top-header':TopHeader,
    'top-nanner':TopBanner,
    'top-sub':TopSub,
    'goods':Goods,
    'temp-footer': TempFooter

  }
}
</script>

<style>
@import './../assets/css/base.css';
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
a{
  text-decoration: none;
  color: red;
}
</style>
