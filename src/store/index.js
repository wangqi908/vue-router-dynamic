import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const ErrPage = () => import(/* webpackChunkName: "ErrPage" */ '@/views/ErrPage.vue')
const Layout = () => import(/* webpackChunkName: "Layout" */ '@/components/layout/Index.vue')
const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
const Info = () => import(/* webpackChunkName: "Info" */ '@/views/info/Info.vue')
const Role = () => import(/* webpackChunkName: "Role" */ '@/views/info/Role.vue')
const User = () => import(/* webpackChunkName: "User" */ '@/views/info/User.vue')

export default new Vuex.Store({
  state: {
    //初始化菜单
    defaultRoutes: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '*',
        component: ErrPage
      },
      {
        path: '/',
        component: Layout,
        children: [{
          path: '',
          name: 'Home',
          component: Home,
          meta: {
            name: 'Home',
            isMenu: true, 
            title: '首页',
            url: '/'
          },
        }]
      }
    ],
    //配置权限菜单
    authRoutes: [
      {
        path: '/about',
        component: Layout,
        children: [
          {
            path: '',
            name: 'About',
            component: About,
            meta: {
              name: 'About',
              isMenu: true, 
              title: '相关',
              url: '/about'
            },
          }
        ]
      },
      {
        path: '/info',
        component: Layout,
        children: [
          {
            path: '',
            name: 'Info',
            component: Info,
            meta: {
              name: 'Info',
              isMenu: true, 
              hasSubMenu: true,
              title: '信息',
              url: '/info'
            },
            children: [
              {
                path: 'role',
                name: 'Role',
                component: Role,
                meta: {
                  name: 'Role',
                  isMenu: true, 
                  title: '角色',
                  url: '/role'
                },
              },
              {
                path: 'user',
                name: 'User',
                component: User,
                meta: {
                  name: 'User',
                  isMenu: true, 
                  title: '用户',
                  url: '/user'
                },
              }
            ]
          }
        ]
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
