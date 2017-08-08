<template>
  <div class="qy_mitv">
	<sec-top></sec-top>
	<sec-fea></sec-fea>
	<sec-thin></sec-thin>
	<sec-story></sec-story>
	<sec-atoms></sec-atoms>
	<sec-place></sec-place>
	<sec-screen></sec-screen>
	<sec-chip></sec-chip>
	<sec-sound></sec-sound>
	<sec-voice></sec-voice>
	<sec-smart></sec-smart>
	<sec-children></sec-children>

	<sec-reading></sec-reading>
	<sec-hdzone></sec-hdzone>
	<sec-vip></sec-vip>
	<sec-install></sec-install>
	<sec-recommend></sec-recommend>
  </div>
</template>

<script>
import secTop from './sectionTop'
import secFea from './sectionFeatures'
import secThin from './sectionThin'
import secStory from './sectionStory'
import secAtoms from './sectionAtoms'
import secPlace from './sectionPlace'
import secScreen from './sectionScreen'
import secChip from './sectionChip'
import secSound from './sectionSound'
import secVoice from './sectionVoice'
import secSmart from './sectionSmart'
import secChildren from './sectionChildren'

import secReading from './sectionReading'
import secHdzone from './sectionHdzone'
import secVip from './sectionVip'
import secInstall from './sectionInstall'
import secRecommend from './sectionRecommend'

export default {
  components:{
  	'sec-top':secTop,
  	'sec-fea':secFea,
  	'sec-thin':secThin,
  	'sec-story':secStory,
  	'sec-atoms':secAtoms,
  	'sec-screen':secScreen,
  	'sec-chip':secChip,
  	'sec-sound':secSound,
  	'sec-voice':secVoice,
  	'sec-smart':secSmart,
  	'sec-children':secChildren,

  	'sec-reading':secReading,
  	'sec-hdzone':secHdzone,
  	'sec-vip':secVip,
  	'sec-install':secInstall,
  	'sec-recommend':secRecommend
  }
}
</script>

<style>
	.qy_mitv{
		height: auto;
		width: 100%;
		border: 1px solid #000;
		background: lightgreen;
	}
</style>
