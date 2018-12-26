// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Tag, Container, Aside, Main, Select, Option, Input, ColorPicker, Form, FormItem } from 'element-ui'
import ECharts from 'vue-echarts/components/ECharts.vue'

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// 注册组件后即可使用
Vue.component('chart', ECharts)

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Tag)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Select)
Vue.use(Input)
Vue.use(Option)
Vue.use(ColorPicker)
Vue.use(Form)
Vue.use(FormItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
