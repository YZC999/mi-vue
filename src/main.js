// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  VueResource  from 'vue-resource'

<<<<<<< HEAD
Vue.use(VueResource) 
=======
import VueVideoPlayer from 'vue-video-player'


 import  VueResource  from 'vue-resource'
 Vue.use(VueResource) 


// mount with global
Vue.use(VueVideoPlayer)

>>>>>>> 89a59bea918999b74bbe0ec671a63d9f14d59afd
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
