 <template>
  <div class="xm-goods">
      <div class="xm-goods-top">
        <h3>配件</h3>
        <ul class="xm-goods-ul">
          <li v-for="item in accessories" @mouseenter="evtHeaderEnter(item.key ,item.discountType)"
           :class="{'active': topSubStatus === item.key}" >
             <a href="#" > 
             {{item.name}}
             </a>
          </li>
        </ul>
      </div>

      <div class="clearfix"></div>
      <div class="xm-goods-content">
      <div class="xm-left">
        <ul class="xm-left-ul">
          <li class="xm-left-li" v-for="item in leftimgs"  >
          <a href="#">
            <img :src="item.urlimg">
          </a>
          </li>
        </ul>
      </div>
      <div class="xm-right">
          <ul class="goods-right-content">
                     
              <li class="goods-right-item"  v-for="item in currentcontent" :class="{'smallstyle':item.small}">
                 <span class="discount-label" :class="item.discountType">{{item.discount}}</span>
                 <a>
                 <img :src="item.rightimgurl"/>
                 <h3>{{item.title}}</h3>
                 </a>
                 <p class="p-price">{{item.price}}</p>
                 <p class="p-rank">{{item.heat}}</p>
                    <div :class="{review:item.reviewStatus}">
                        <span class="review-content">{{item.reviewDesc}} </span> 
                        <span class="review-author"> {{item.reviewAuthor}}</span> 
                    </div>
              </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {api} from "../global/api.js"
  export default{
    data(){
      return {
            headerStatus: false,
            hide:true,
            currentcontent: [], 
            topSubStatus:'hot',
            hot: [
                {sourceUrl: '//item.mi.com/1153300034.html', rightimgurl: '//i2.mifile.cn/a1/T1COAjB7WT1RXrhCrK.jpg?width=150&height=150', title: '指环式防滑手机支架', price: '12.5元', heat: '8087评价',
                reviewDesc: '', reviewAuthor: '', reviewStatus: false},
                {sourceUrl: '//item.mi.com/1151500039.html', rightimgurl: '//i2.mifile.cn/a1/T1_SDgB4KT1RXrhCrK.jpg?width=150&height=150', title: '小米自拍杆', price: '49元', heat: '7.6万评价',
                reviewDesc: '', reviewAuthor: '', reviewStatus: false},
                {sourceUrl: '//item.mi.com/1154900023.html', rightimgurl: '//i2.mifile.cn/a1/T1l9WjBTbT1RXrhCrK.jpg?width=150&height=150', title: '青米USB快速充电数据线', 
                 price: '14.9元', heat: '1.4万评价',
                reviewDesc: '', reviewAuthor: '', reviewStatus: false},
                {sourceUrl: '//item.mi.com/1135200036.html', rightimgurl: '//i2.mifile.cn/a1/T1zL_vByCT1RXrhCrK.jpg?width=150&height=150', title: '小米随身WIFI', price: '19.9元', heat: '29.9万评价',
                reviewDesc: '', reviewAuthor: '', reviewStatus: false},
                {sourceUrl: '//item.mi.com/1154900055.html', rightimgurl: '//i2.mifile.cn/a1/T1AmJgBsKT1RXrhCrK.jpg?width=150&height=150', title: '苹果Lightning to USB数据线', price: '39元', heat: '1.6万评价',
                reviewDesc: '', reviewAuthor: '', reviewStatus: false},
                {sourceUrl: '//item.mi.com/1162800007.html', rightimgurl: '//i2.mifile.cn/a1/pms_1468287589.40786199.jpg?width=150&height=150', title: '米家随身风扇', price: '19.9元', heat: '4434评价',
                reviewDesc: '', reviewAuthor: '', reviewStatus: false},
                {sourceUrl: '//item.mi.com/1144900003.html', rightimgurl: '//i2.mifile.cn/a1/T1_8YvBKJT1RXrhCrK.jpg?width=150&height=150', title: '功夫米兔手机支架', price: '19元', heat: '1.9万评价',
                reviewDesc: '', reviewAuthor: '', reviewStatus: false},
                {moreUrl: '//list.mi.com/pjrm', sourceUrl: '//item.mi.com/1154100024.html', rightimgurl: '//i2.mifile.cn/a1/T1Zp__B5Ev1RXrhCrK.jpg?width=80&height=80', title: 'ZMI无限拓展数据线 120cm', price: '29元',small:true,heat: '1.9万评价'}

                 ],
                 protect: [],
                 fiol: [],
                 other: [],
                 accessories:[
                 {name:"热门",key:"hot"},
                 {name:"保护套",key:"protect"},
                 {name:"贴膜",key:"fiol"},
                 {name:"其他配件",key:"other"},
                  
                 ],
                 leftimgs:[
                 {urlimg:"http://i3.mifile.cn/a4/aa163c95-2890-4227-967c-a05ccec6c4a9"},
                 {urlimg:"http://i3.mifile.cn/a4/363032e6-b043-4854-a8cc-8909df918f02"}

                 ]
      }
    },
    mounted :function  () {
     
          this.currentcontent = this.hot,
        
         
          // return this.bb;
          
         
          // this.$http.get('../../static/data/yxmdata.json',{params:{"key":this.inputValue}}).then(function(response){
          this.$http.get(api.yxmdata,{params:{"key":this.inputValue}}).then(function(response){    
          console.log(response)
          console.log(response.data)


          console.log("这是我们需要的json数据yxm",response.data)
          // this.formData = response.data; //this.formData拿不到
          this.protect = response.data[0].aa;
          this.fiol = response.data[0].bb;
          this.other = response.data[0].cc;
          }, function(response){
            alert("请求失败了")
          })

     
    },
    

    methods:{

      evtHeaderEnter (menuType,discType) {
                 
                
        // console.log(menuType);
        // console.log(this[menuType]);

      this.currentcontent = this[menuType];
      this.topSubStatus= menuType;
       
 }
}
       
  
  }
</script>
<style>
  .active{
      border-bottom:3px solid red;
    }
  .xm-goods{
    width:90%;
    height: 686px;
    margin: 0px auto;

  }
  .xm-goods-content{
    width:100%;
    height:628px;
     
     
  }
  .xm-goods-top{
    width: 100%;
    height: 58px;
  }

  .xm-goods .xm-goods-top h3 {
    float: left;
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
  .xm-goods-ul{
    float: right;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 16px;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  .xm-goods-ul li{
    float: left;
    list-style: none;
    margin-left: 30px;
  }
  .xm-goods-ul li:hover{
     color: red;
     
  }
  .xm-left{
    width: 20%;
    height: 628px;
    float: left;
    display: inline-block;
     
  }
  .xm-left-li:hover{
    transform:translateY(-2px);
    box-shadow:5px 5px 20px #ccc;
  }
  .xm-left-li{
    width: 100%;
    height: 300px;
    list-style: none;
    margin-bottom: 14px;
    transition: all .3s;
  }
   li a{
     text-decoration:none;
  }
  .xm-left-li a  img{
    width: 100%;
      height: 300px;
  }
  .xm-right{
    width: 80%;
    height: 628px;
     
    display: inline-block;
    float: left;
 }
 
  .goods-right-content{
    width:100%;
    height:100%;
    
} 
  .goods-right-item {
    width: 23%;
    height: 300px;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s;
    float: left;
    list-style: none;
    position: relative;
    margin: 0 0 14px 19px;
    padding: 20px 0;
    background :white;
    text-align: center;
    }
  .goods-right-item:hover{
    transform:translateY(-1px);
    box-shadow:5px 5px 20px #ccc;
     }
  .goods-right-item img{
      display: block;
      width: 160px;
      height: 160px;
      margin: 0 auto;
    }
  .goods-right-item .p-price{
      color:#ff6700;
      font-size:14px;
      text-align:center;
    }
  .goods-right-item .p-rank{
      color: #b0b0b0;
      font-size: 12px;
       
    }
  .xm-right h3{
      font-size: 14px;
      text-align: center;
      color: #333;
      font-weight: 400;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  .goods-right-item .discount-label {
    position: absolute;
    top: 0;
    left: 50%;
    width: 64px;
    height: 20px;
    line-height: 20px;
    margin-left: -32px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    z-index: 4;
    
}
  .new {
    background-color: #83c44e;
}
  .discount {
    background-color: #e53935;
}

  .review {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 234px;
    font-size: 12px;
    height: 0;
    line-height: 18px;
    overflow: hidden;
    box-sizing: border-box;
    color: #fff;
    background: #ff6700;
    opacity: 0;
    -webkit-transition: all .3s;
    transition: all .3s;
}
  .review .review-content {
    display: block;
    text-align: center;
    margin: 8px 30px;
}
  .review .review-author {
    display: block;
    text-align: center;
    margin-bottom: 8px;
}
  .goods-right-item:hover .review {
    height: 76px;
    opacity: 1;
}
  .goods-right-item:hover img {
       // transform: scale(1.4);  

}
</style>