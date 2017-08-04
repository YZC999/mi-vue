<template>
  <div class="hot_product_all">
     <div class="product_all">
       <h3>{{title}}</h3>
       <ul>
         <li v-for="item in hots" class="pro_li">
           <router-link to="">
            <img :src="item.imageUrl">
            <div class="in">
              <p class="content">{{item.review}}</p>
              <p class="rank">来自{{item.author}}的评论</p>
              <span class='thing'>{{item.name}}</span>
              <span class="price">{{item.price}}元</span>
            </div>
            
           </router-link>
         </li>
       </ul>
     </div>
  </div>
</template>

<script>
export default {
  data (){
    return{
      title: '热评产品',
      hots: [
        {sourceUrl: '//www.mi.com/mituwatch/', imageUrl: 'http://i3.mifile.cn/a4/1e737b55-91bd-4f5b-b085-405fa722142f', review: '很好，孩子很喜欢，产品不错', author: 'showen', name: '米兔儿童电话手表', price: '299'},
        {sourceUrl: '//www.mi.com/mitu/', imageUrl: 'http://i3.mifile.cn/a4/032d0ff1-f77f-4830-a469-f3564d55e0c5', review: '米兔真心不错！！内容丰富，声音柔和，孩子看见后，就抱着不撒手啦，超级喜欢！！！', author: 'Jack伯爵', name: '米兔智能故事机', price: '199'},
        {sourceUrl: '//www.mi.com/note3/pro/', imageUrl: 'http://i3.mifile.cn/a4/a14bd55a-2a7f-4e5f-9d8d-79e3e1bdb467', review: '手机很不错 外观大气金属质感 一直都用的红米手机 很不错 很漂亮也很好用', author: '1108656217', name: '红米Note 3全网通版', price: '899'},
        {sourceUrl: '//www.mi.com/miwifi3/', imageUrl: 'http://i3.mifile.cn/a4/8949026b-fa9a-4370-989b-5d5e2f149106', review: '我就是喜欢这样的路由器，我每天回到家都要连着WiFi上网，上班就没办法连着呢！每次都等待着下班，我好...', author: '欧阳长', name: '小米路由器3', price: '149'}
      ]
    }
  }
}
</script>

<style>
  .hot_product_all{
    width: 100%;
    height: 487px;
    text-align: left;
    background: #fff;
  }
  .product_all{
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
  .product_all h3{
    text-align: left;
  }
  .product_all ul{
    height: 100%;
  }
  .product_all .pro_li{
    width: 23.5%;
    height: 80%;
    float: left;
    margin-left: 2%;
  }
  .product_all .pro_li img{
    width: 100%;
    height: 65%;
  }
  .product_all .pro_li:nth-child(1){
    margin-left:0; 
  }
  .product_all .pro_li:hover{
    box-shadow: 5px 5px 20px #ccc;
    transform: translateY(-2px);
  }
  .product_all .pro_li .rank{
    font-size: 12px;
    color: #b0b0b0;
    position: absolute;
    bottom: 23%;
  }
  .product_all .pro_li .thing{
    position: absolute;
    bottom: 13px;
  }
  
  .product_all .pro_li .price{
    font-size: 14px;
    color: #ff6700;
    position: absolute;
    bottom: 13px;
    left: 57%;

  }
  .product_all .pro_li .in{
    position: relative;
    width: 80%;
    height: 33%;
    margin: 0 auto;
    margin-bottom: 2%;
  }
  .product_all .pro_li .in .content{
    margin-top: 20px;
  }
  
</style>
