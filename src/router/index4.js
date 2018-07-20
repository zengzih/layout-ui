import Vue from 'vue'
import Router from 'vue-router'

// 首页
import Home from '@/pages/app4/Home'
import renderLayout from '@/pages/app4/renderLayout'
import searchTop from '@/pages/app4/searchTop'
import customTree from '@/pages/app4/customTree'
import inputRadius from '@/pages/app4/inputRadius'
import execel from '@/pages/app4/execel'
import Admin from '@/pages/app4/Admin'
import bootstrapVue from '@/pages/app4/bootstrap_vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/app4/searchTop/:type',
      component: searchTop
    },
    {
      path: '/app4/customTree',
      component: customTree
    },
    {
      path: '/app4/inputRadius',
      component: inputRadius
    },
    {
      path: '/app4/execel',
      component: execel
    },
    {
      path: '/app4/Admin',
      component: Admin
    },
    {
      path: '/app4/renderLayout',
      component: renderLayout
    },
    {
      path: '/app4/bootstrap_vue',
      component: bootstrapVue
    }
  ]
});
