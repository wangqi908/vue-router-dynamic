import router from '@/router'
import store from '@/store'
import { deepCopy } from '@/utils';

const setDynamicRouter = () => {
  let { defaultRoutes, roles, authRoutes } = store.state
  let myAuthRoutes = deepCopy(authRoutes)

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

  let authRoutesByRoles = filterRoutes(myAuthRoutes)//根据权限得到的路由
  router.addRoutes(filterRoutes(authRoutesByRoles))

  // 拿到当前动态路由
  let allRoutes = deepCopy([...defaultRoutes, ...authRoutesByRoles])
  // 设置菜单
  store.commit('setMenuList', filterMenu(allRoutes))
}

export default setDynamicRouter
