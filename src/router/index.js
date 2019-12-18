import Vue from 'vue'
import VueRouter from 'vue-router'
const ErrPage = () => import(/* webpackChunkName: "ErrPage" */ '@/views/ErrPage.vue')
const Layout = () => import(/* webpackChunkName: "Layout" */ '@/components/layout/Index.vue')
const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
const Info = () => import(/* webpackChunkName: "Info" */ '@/views/info/Info.vue')
const Role = () => import(/* webpackChunkName: "Role" */ '@/views/info/Role.vue')
const User = () => import(/* webpackChunkName: "User" */ '@/views/info/User.vue')

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      name: 'Home',
      component: Home
    }]
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '',
        name: 'About',
        component: About
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
        children: [
          {
            path: 'role',
            name: 'Role',
            component: Role
          },
          {
            path: 'user',
            name: 'User',
            component: User
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    component: ErrPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
