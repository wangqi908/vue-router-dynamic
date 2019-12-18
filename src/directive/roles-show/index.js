import show from './show'

const install = function(Vue) {
  Vue.directive('roles-show', show)
}

if (window.Vue) {
  window['roles-show'] = show
  Vue.use(install); // eslint-disable-line
}

show.install = install
export default show
