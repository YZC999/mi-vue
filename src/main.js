// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import VueVideoPlayer from 'vue-video-player'
import 'element-ui/lib/theme-default/index.css'


import './assets/js/jquery-3.1.1.js'
import './assets/js/gVerify.js'

Vue.use(VueVideoPlayer)
Vue.use(ElementUI)
Vue.use(VueResource)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
