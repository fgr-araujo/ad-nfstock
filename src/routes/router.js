import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home-page/home-page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import(/* webpackChunkName: "login page" */ '@/views/login-page/login-page.vue')
    }
  ]
})
