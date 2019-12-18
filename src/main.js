import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import setDynamicRouter from '@/utils/setDynamicRouter'

Vue.config.productionTip = false
// const handleElementShow=(el, binding)=> {
//   let { roles } = store.state
//   let { value } = binding;
//   let isShow = value.filter(v => { return roles.indexOf(v) > -1 }).length > 0;
//   el.style.display = isShow ? 'block' : 'none'
// }
// Vue.directive('roles-show', {
 
//   bind:(el, binding)=> {
//     handleElementShow(el, binding)
//   },
//   update:(el, binding)=> {
//     handleElementShow(el, binding)
//   }
// })

// 动态设置路由和菜单
setDynamicRouter()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
