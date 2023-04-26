import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//路由配置数组
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  }
]
//router指向的是大路由，配置路由和组件之间的应用关系
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//设置路由守卫
/*
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  if (to.path == '/login') {
    // 如果路径是 /login 则正常执行
    next()
  } else {
    // 如果不是 /login，判断是否有 token
    if (!localStorage.getItem('token')) {
      // 如果没有，则跳至登录页面
      next({ path: '/login' })
    } else {
      // 否则继续执行
      next()
    }
  }
})
*/
export default router
