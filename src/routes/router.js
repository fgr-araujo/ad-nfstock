import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home-page/home-page.vue'
import MainHeader from '@/components/main-header/main-header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      components: {
        default: HomePage,
        header: MainHeader
      }
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import(/* webpackChunkName: "login page" */ '@/views/login-page/login-page.vue'),
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: () => import(/* webpackChunkName: "login page" */ '@/views/register-page/register-page.vue'),
    },
    {
      path: '/hire-plan/:planId',
      name: 'HirePlan',
      component: () => import(/* webpackChunkName: "login page" */ '@/views/hire-plan/hire-plan.vue'),
    }
  ]
})
