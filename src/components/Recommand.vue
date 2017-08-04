<template>
  <div class="recommand_all">
   
        <!-- <p class="title">为你推荐</p>
        <el-carousel :interval="5000" arrow="always" autoplay="false">
            <el-carousel-item v-for="item in 4" >
              <ul class="cq_carousel">
                <li v-for="item in recomends">
                  <router-link to="">
                     <img :src="item.imgUrl">
                     <h3>{{item.title}}</h3>
                   </router-link>
                   <p class="p1">{{item.price}}元</p>
                   <p class="p2">{{item.heat}}人评论</p>
                </li>
              </ul>
            </el-carousel-item>
          </el-carousel> -->
    
      <div class="qy_cal">
          <h3 class="title">为你推荐</h3>
          <div class="lr_button">
            <span class="glyphicon glyphicon-chevron-left left" aria-hidden="true" @click="leftClick"></span>
            <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true" @click="rightClick"></span>
          </div>
          <div class="a">
            <ul class="cq_carousel">
              <li v-for="item in recomends">
                <router-link to="">
                   <img :src="item.imgUrl">
                   <h3>{{item.name}}</h3>
                 </router-link>
                 <p class="p1">{{item.price}}元</p>
                 <p class="p2">{{item.favorable}}人评论</p>
              </li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data (){
    return{
        count:0,
        recomends: [
          {sourceUrl: '//item.mi.com/1154300011.html', imgUrl: '//i1.mifile.cn/a1/T1.VVgBjAT1RXrhCrK.jpg?width=140&height=140', name: '小米电视主机', price: '999', favorable: '102'},
          {sourceUrl: '//item.mi.com/1153300030.html', imgUrl: '//i1.mifile.cn/a1/T1LrdvBbAT1RXrhCrK.jpg?width=140&height=140', name: '小米手环', price: '69', favorable: '11.8万'},
          {sourceUrl: '//item.mi.com/1155100006.html', imgUrl: '//i1.mifile.cn/a1/T1_tEgBmVv1RXrhCrK.jpg?width=140&height=140', name: '米兔儿童电话手表', price: '299', favorable: '7865'},
          {sourceUrl: '//item.mi.com/1154100018.html', imgUrl: '//i1.mifile.cn/a1/T1TpZ_ByYv1R4cSCrK.png?width=140&height=140', name: '小米低音炮', price: '599', favorable: '4908'},
          {sourceUrl: '//item.mi.com/1155100011.html', imgUrl: '//i1.mifile.cn/a1/T1CDbjBgAT1RXrhCrK.jpg?width=140&height=140', name: '90分旅行箱 24寸', price: '349', favorable: '1.1万'},
          {sourceUrl: '//item.mi.com/1154900069.html', imgUrl: '//i1.mifile.cn/a1/T1PyZ_Bjdv1RXrhCrK.jpg?width=140&height=140 ', name: '小米智能插座 基础版', price: '49', favorable: '8622'},
          {sourceUrl: '//item.mi.com/1162100021.html', imgUrl: '//i1.mifile.cn/a1/pms_1464071511.37197399.jpg?width=140&height=140', name: '米家 LED 智能台灯', price: '169', favorable: '4268人好评'},
          {sourceUrl: '//item.mi.com/1153700018.html', imgUrl: '//i1.mifile.cn/a1/T1Ay_gBKKv1RXrhCrK.jpg?width=140&height=140', name: '90分旅行箱 20寸', price: '299', favorable: '1.5万'},
          {sourceUrl: '//item.mi.com/1161200004.html', imgUrl: '//i1.mifile.cn/a1/T1WxYvB_xv1RXrhCrK.jpg?width=140&height=140', name: '小米活塞耳机 基础版', price: '29', favorable: '5.5万'},
          {sourceUrl: '//item.mi.com/1153300025.html', imgUrl: '//i1.mifile.cn/a1/T1tzL_BjYT1RXrhCrK.jpg?width=140&height=140', name: '学院风简约双肩包', price: '59', favorable: '1.8万'},
          {sourceUrl: '//item.mi.com/1154300036.html', imgUrl: '//i1.mifile.cn/a1/T1F5K_BjVv1RXrhCrK.jpg?width=140&height=140', name: '小米小钢炮蓝牙音箱2', price: '129', favorable: '1.2万'},
          {sourceUrl: '//item.mi.com/1162900011.html', imgUrl: '//i1.mifile.cn/a1/pms_1470793898.34754317.jpg?width=140&height=140', name: '90分金属旅行箱', price: '1799', favorable: '23'},
          {sourceUrl: '//item.mi.com/1153800044.html', imgUrl: '//i1.mifile.cn/a1/T1MDK_B_YT1RXrhCrK.jpg?width=140&height=140', name: '小米蓝牙音箱', price: '199', favorable: ' 1.9万'},
          {sourceUrl: '//item.mi.com/1161200013.html', imgUrl: '//i1.mifile.cn/a1/T1FtKgBvZv1RXrhCrK.jpg?width=140&height=140', name: '小米多功能都市休闲胸包', price: '69', favorable: '9453'},
          {sourceUrl: '//item.mi.com/1161800001.html', imgUrl: '//i1.mifile.cn/a1/T1HQA_BCd_1RXrhCrK.jpg?width=140&height=140', name: '米家iHealth血压计', price: '399', favorable: '1529'},
          {sourceUrl: '//item.mi.com/1153900041.html', imgUrl: '//i1.mifile.cn/a1/T1JJ__BbYT1RXrhCrK.jpg?width=140&height=140', name: '小米净水器滤芯', price: '59', favorable: '6640'},
          {sourceUrl: '//item.mi.com/1162800007.html', imgUrl: '//i1.mifile.cn/a1/pms_1468287589.40786199.jpg?width=140&height=140', name: '米家随身风扇', price: '19.9', favorable: '4522'},
          {sourceUrl: '//item.mi.com/1160800073.html', imgUrl: '//i1.mifile.cn/a1/T1N5KjB_dT1RXrhCrK.jpg?width=140&height=140', name: '小米家庭音响 金属版', price: '899', favorable: '0'},
          {sourceUrl: '//item.mi.com/1161000003.html', imgUrl: '//i1.mifile.cn/a1/T1LpWjB4bv1RXrhCrK.jpg?width=140&height=140', name: '小米空气净化器滤芯 经济版', price: '129', favorable: '473'},
          {sourceUrl: '//item.mi.com/1161200073.html', imgUrl: '//i1.mifile.cn/a1/T1bED_B__v1RXrhCrK.jpg?width=140&height=140', name: '小蚁摄像机储存套装（夜视+8GB）', price: ' 165.9', favorable: '0'}
        ]
    }   
  },
  methods:{
    rightClick(){
       this.count++;
       
       if(this.count<=3){
          $('.recommand_all .qy_cal .lr_button span').css('color','#666');
          $('.recommand_all .qy_cal .cq_carousel').animate({'margin-left':(-this.count*102)+"%"},1000);
       }else{
          $('.glyphicon-chevron-right').css('color','#ccc');
          this.count=3;
          
       }
       // console.log(this.count,(-this.count*102)+"%");
    },
    leftClick(){
      this.count--;       
       if(this.count>=0){
          $('.recommand_all .qy_cal .lr_button span').css('color','#666');
          $('.recommand_all .qy_cal .cq_carousel').animate({'margin-left':(-this.count*102)+"%"},1000);
       }else{
          $('.glyphicon-chevron-left').css('color','#ccc');        
          this.count=0;         
            
       }
       // console.log(this.count,(this.count*102)+"%");
    }
  }
}
</script>

<style>
  .recommand_all{
    position: relative;
    width: 100%;
    height: 368px;
    text-align: center;
  }
  .recommand_all .qy_cal{
    position: relative;
    width: 90%;
    height: 100%;
    margin: auto;
  }
  .recommand_all .title{
    padding: 10px 0;
    text-align: left;
  } 
  .recommand_all .qy_cal .cq_carousel{
    width: 500%;
    height: 300px;
  }
  .recommand_all .qy_cal .a{
    width: auto;
    height: 300px;
    overflow: hidden;
  }
      
  .recommand_all .qy_cal li{
    float: left;
    display: block;
    width: 3.9%;
    height: 300px;
    margin: 0 9px 14px 0;
    font-size: 14px;
    background: #fff;
    cursor: pointer;
  }
  .recommand_all .qy_cal li:hover{
    box-shadow: 5px 5px 20px #ccc;
    transform: translateY(-2px);
  }
  .recommand_all .qy_cal .lr_button{
    position: absolute;
    width: 100px;
    top: 6%;
    right: 0;
    text-align: right
  }
  .recommand_all .qy_cal .lr_button span{
    cursor: pointer;
    color: #666;
  }
  /*.recommand_all .qy_cal .lr_button span:hover{
    color: red
  }*/
  .recommand_all .cq_carousel h3{
    font-weight: normal;
    font-size: 14px;
  }
</style>
