import Vue from 'vue'
import Router from 'vue-router'
import Charts from '@/pages/Charts'
import News from '@/pages/News'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/charts',
      name: 'charts',
      component: Charts
    },
    {
      path: '/addNew',
      name: 'addNew',
      component: News
    }
  ]
})
