import Vue from 'vue'
import Router from 'vue-router'
import Charts from '@/pages/Charts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'charts',
      component: Charts
    }
  ]
})
