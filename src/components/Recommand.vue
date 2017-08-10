<template>
  <div class="recommand_all">   
      <div class="qy_cal">
          <h3 class="title">为你推荐</h3>
          <div class="lr_button">
            <span class="glyphicon glyphicon-chevron-left left" aria-hidden="true" @click="leftClick"></span>
            <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true" @click="rightClick"></span>
          </div>
          <div class="a">
            <ul class="cq_carousel">
              <li v-for="item in myrecomends">
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
import {api} from "../global/api.js"
export default {
  data (){
    return{
        count:0,
        myrecomends:[]       
    }   
  },
  methods:{
    rightClick(){
       this.count++;
       
       if(this.count<=3){
          $('.recommand_all .qy_cal .lr_button span').css('color','#666');
          $('.recommand_all .qy_cal .cq_carousel').animate({'margin-left':(-this.count*100)+"%"},1000);
       }else{
          $('.glyphicon-chevron-right').css('color','#ccc');
          this.count=3;         
       }
    },
    leftClick(){
      this.count--;       
       if(this.count>=0){
          $('.recommand_all .qy_cal .lr_button span').css('color','#666');
          $('.recommand_all .qy_cal .cq_carousel').animate({'margin-left':(-this.count*100)+"%"},1000);
       }else{
          $('.glyphicon-chevron-left').css('color','#ccc');        
          this.count=0;                    
       }
    },
    getData(){
      let that = this;
      // this.$http.get('./../../static/data/Recommand.json',{params:{"key":this.inputValue}}).then(response => {
        this.$http.get(api.Recommand,{params:{"key":this.inputValue}}).then(response => {
          // console.log(response);
          console.log("这是我们需要的json数据",response.data);
          // 注意获取的是数组还是对象，我这里获取的是对象
          that.myrecomends = response.data.recomends;
      }, response => {
        // error callback
        console.log("请求失败");
        alert('请求失败');
      });
    }
  },
  mounted:function(){
    this.getData();
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
    width: 450%;
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
    width: 4.3%;
    height: 300px;
    margin-right: 0.15%;
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
