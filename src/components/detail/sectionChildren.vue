<template>
  <div class="xm-section-children">
    <div class="xm-container">
       <div class="xm-content">
         <h2 class="webfont title">
           全新的儿童模式
           <br>
            宝宝更开心，妈妈更放心
          </h2>
          <p  class="xm-item-des">携手全国知名的儿童专家，推出科学的儿童电视模式，让妈妈更放心。</p>
          <ul class="children-list">
             <li class="children-li" v-for="item in items">
               <span class="icon" :class="item.type"></span>
               <span>{{item.name}}</span>
               <span>{{item.tips}}</span>
             </li>
          </ul>
          <div class="children-tv"></div>
       </div>
    </div>
  </div>
</template>
<script>
import  '../../assets/css/stylexm.css'

export default{
	data(){
		return {

          items:[
             {name:"简单设置",tips:"开机可自动进入儿童模式",type:"icon01"},
             {name:"护眼模式",tips:"有效保护孩子视力",type:"icon02"},
             {name:"播放限制",tips:"家长可设定观看时长",type:"icon03"}

          ]
		}
	}
}
</script>