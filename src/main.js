import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index'
import 'amfe-flexible'
import filters from './utils/filter'
// 按需引入vant组件
import 'vant/lib/index.css'
Vue.prototype.$api = api
Vue.config.productionTip = false
// 添加全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
