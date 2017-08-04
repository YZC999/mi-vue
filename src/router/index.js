import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// import Hello from '@/components/Hello'
import TopBanner from '@/components/TopBanner'

Vue.use(VueResource);
Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      name: 'TopBanner',
      component: TopBanner
    }
  ]
})
