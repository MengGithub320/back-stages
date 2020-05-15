import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    redirect: '/login'

  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        component:() => import('../views/Stores.vue'),
      },
      {
        path:'GoodsManage',
        component:() => import('../views/GoodsManage.vue'),
      },
      {
        path:'NewGoods',
        component:() =>import('../views/NewGoods.vue'),
      },
      {
        path:'OrderManage',
        component:() => import('../views/OrderManage.vue'),
      },
      {
        path:'StoreManage',
        component:() => import('../views/StoreManage.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
