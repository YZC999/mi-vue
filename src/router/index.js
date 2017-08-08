import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import Regist from '@/components/mi_regist'
import Login from '@/components/mi_login'
import GoodsDetail from '@/components/GoodsDetail'

Vue.use(Router)

// const User = {
//   template: `
//     <div class="user">
//       <h2>User {{ $route.params.id }}</h2>
//       <router-view></router-view>
//     </div>
//     `
// }
const router = new Router({
  routes: [
    {
      // 重定向到首页
      path: '/',
      redirect: '/First'       
    },
    {
      path: '/First',
      component: First       
    },
    {
      path: '/mi_regist',
      component: Regist     
    },
    {
      path:'/mi_login',
      component:Login
    },
    {
      path:'/GoodsDetail',
      component:GoodsDetail
    }
    // {
    //   path: '/user',
    //   component: User,
    //   children:[
    //       { path: 'mi_regist', component: Regist }
    //   ] 
    // }
  ]
})

export default router;
// const app = new Vue({
//   router
// }).$mount('#app')
