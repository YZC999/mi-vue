<template>
<div class="xm-section-sound preload">
	<div class="xm-container">
		<div class="video-icon"> </div>
		<h2 class="webfont title-sound">大电视变身小管家<br>你的声音就是遥控器</h2>
	    <p class="text">按住遥控器语音键，就能对你家的智能设备发号施令。</p>
	    <ul class="xm-icon-list J_iconList clearfix">
	      <li class="icon-list-li" v-for="item in items">
	      <span :class="item.type" class="icon"></span>
	      <span>{{item.text}}</span>
	      </li>
	    </ul>
	    <div class="text-connect">
	      <ul class="text-list J_voiceTxt">
			<li class="words"   >打开空气净化器</li>
			<li class="words"  >打开米家台灯</li>
			<li class="words"  >打开插座</li>
			<li class="words"  >打开墙壁开关</li>
			<li class="words"  >空调温度设置为25度</li>
			<li class="words"  >打开家里的摄像头</li>
			<li class="words"  >扫地</li>
			<li class="words"  >米家IH电饭煲 烹饪完成</li>
	      </ul>
	    </div>
	</div>
</div>
</template>
<script>
import  '../../assets/css/stylexm.css'
export default{
	data(){
		return{
     items:[
       {text:"净化器",type:"icon01"},
       {text:"灯",type:"icon02"},
       {text:"插座",type:"icon03"},
       {text:"墙壁开关",type:"icon04"},
       {text:"空调",type:"icon05"},
       {text:"摄像头",type:"icon06"},
       {text:"扫地机器人",type:"icon07"},
       {text:"电饭锅",type:"icon08"}
 ]
		}

	}
}
</script>