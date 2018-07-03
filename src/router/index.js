import Vue from 'vue'
import Router from 'vue-router'
import start from '@/view/start'
import index from '@/view/index'
import play from '@/view/play'
import setting from '@/view/setting'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },    
    {
      path: '/play',
      name: 'play',
      component: play
    }
  ]
})
