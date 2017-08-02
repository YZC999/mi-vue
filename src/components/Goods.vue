<template>
  <div class="goods_all">
      <goods-top-box></goods-top-box>
      <goods-collocation></goods-collocation>
      <goods-accessories></goods-accessories>
      <goods-around></goods-around>
      <recommand></recommand>
      <hot-product></hot-product>
      <goods-content></goods-content>
      <video-v></video-v>
  </div>
</template>

<script>
import GoodsTopBox from '../components/GoodsTopBox'
import GoodsCollocation from '../components/GoodsCollocation'
import GoodsAccessories from '../components/GoodsAccessories'
import GoodsAround from '../components/GoodsAround'
import Recommand from '../components/Recommand'
import HotProduct from '../components/HotProduct'
import GoodsContent from '../components/GoodsContent'
import Video from '../components/Video'
export default {
  
  components:{
    'goods-top-box':GoodsTopBox,
    'goods-collocation':GoodsCollocation,
    'goods-accessories':GoodsAccessories,
    'goods-around':GoodsAround,
    'recommand':Recommand,
    'hot-product':HotProduct,
    'goods-content':GoodsContent,
    'video-v':Video
  }
}
</script>

<style>

</style>
