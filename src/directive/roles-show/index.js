import store from '@/store'

const handleElementShow = (el, binding) => {
  let { roles } = store.state
  let { value } = binding;
  let isShow = value.filter(v => { return roles.indexOf(v) > -1 }).length > 0;
  el.style.display = isShow ? 'block' : 'none'
}

export default {
  bind: (el, binding) => {
    handleElementShow(el, binding)
  },
  update: (el, binding) => {
    handleElementShow(el, binding)
  }
}
