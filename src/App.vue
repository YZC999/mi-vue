<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <top-bar></top-bar>
    <top-header></top-header>   
    <top-nanner></top-nanner>
    <top-sub></top-sub>
    <goods></goods>
    <mi-footer></mi-footer>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import TopHeader from './components/TopHeader'
import TopBanner from './components/TopBanner'
import TopSub from './components/TopSub'
import Goods from './components/Goods'
import Footer from './components/mi-footer'
export default {
  name: 'app',
  components:{
    'top-bar':TopBar,
    'top-header':TopHeader,
    'top-nanner':TopBanner,
    'top-sub':TopSub,
    'goods':Goods,
    'mi-footer':Footer
  }
}
</script>

<style>
@import './assets/css/base.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
a{
  text-decoration: none;
  color: red;
}
</style>
