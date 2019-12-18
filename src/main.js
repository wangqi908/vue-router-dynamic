import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

let roles = ['Home', 'About', 'Info', 'Role', 'User','Shop']
let defaultRoutes = store.state.defaultRoutes //初始化的路由

import { deepCopy } from '@/utils';

let authRoutes = deepCopy(store.state.authRoutes)
// 根据权限筛选路由返回对应路由
const filterRoutes = (authRoutes = []) => {
  let arr = []
  authRoutes.forEach(ele => {
    let router = ele.children ? ele.children[0] : ele
    if (router.children) router.children = filterRoutes(router.children)
    roles.forEach(roleName => {
      if (router.name === roleName) arr.push(ele)
    })
  })
  return arr
}

let authRoutesByRoles = filterRoutes(authRoutes)//根据权限得到的路由
router.addRoutes(filterRoutes(authRoutesByRoles))

// 根据权限筛选路由返回对应菜单
const filterMenu = (list = []) => {
  let arr = []
  list.forEach(ele => {
    let router = ele.children ? ele.children[0] : ele
    if (router.children && router.hasSubMenu) ele.children = filterMenu(ele.children)
    if (router.meta && router.meta.isMenu) arr.push(ele.children[0])
  })
  return arr
}

// 拿到当前动态路由
let allRoutes = deepCopy([...defaultRoutes, ...authRoutesByRoles])
// 设置菜单
store.commit('setMenuList', filterMenu(allRoutes))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
