<template>
  <div class="qy_slide">
 
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in banners" :key="item">
          <!-- <h3>{{ item.imgUrl }}</h3> -->
          <img :src="item.imgUrl">
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name:"slide2",
  data() {
    return {
      banners: [
        {sourceUrl: '//item.mi.com/buyphone/mi5', imgUrl: 'http://i3.mifile.cn/a4/bc62a28f-de64-4eee-853b-36772a97f67e'},
        {sourceUrl: '//item.mi.com/buyphone/hongmi3s', imgUrl: 'http://i3.mifile.cn/a4/ba4939c9-fc0a-4916-bddc-726fa00f7e9b'},
        {sourceUrl: '//item.mi.com/buyphone/mimax', imgUrl: 'http://i3.mifile.cn/a4/9ced2c9e-f685-4918-9b2a-402af2d2039f'},
        {sourceUrl: '//item.mi.com/buyphone/note3', imgUrl: 'http://i3.mifile.cn/a4/f4bee59d-85a5-498f-ae57-a2cabe6aeb5b'},
        {sourceUrl: '//item.mi.com/buymitv/48', imgUrl: 'http://i3.mifile.cn/a4/98fc8a58-c35c-475e-89cb-b8fe1659817f'}
      ]
    }
  }
}
</script>

<style>
  .qy_slide .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
    
    .qy_slide .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .qy_slide .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .qy_slide .el-carousel,.qy_slide .el-carousel__container {
        height: 100%;
    }


</style>
