import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

let roles = ['Home', 'About', 'Info', 'Role', 'User']

import { deepCopy } from '@/utils';

let authRoutes = deepCopy(store.state.authRoutes)
// 根据权限筛选路由返回对应路由
const filterRoutes = (authRoutes = []) => {
  let arr = []
  authRoutes.forEach(ele => {
    let router = ele.children ? ele.children[0] : ele
    if (router.children) {
      router.children = filterRoutes(router.children)
    }
    roles.forEach(roleName => {
      if (router.name === roleName) {
        arr.push(ele)
      }
    })


  })
  return arr
}
router.addRoutes(filterRoutes(authRoutes))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
