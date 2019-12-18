import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import setDynamicRouter from '@/utils/setDynamicRouter'

Vue.config.productionTip = false

// 动态设置路由和菜单
setDynamicRouter()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
