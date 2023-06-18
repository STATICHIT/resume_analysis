/*
 * @Author: STATICHIT
 * @Date: 2023-04-26 19:00:37
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-06-18 21:19:22
 * @FilePath: \resume_analysis\src\router\index.js
 * @Description: vue-router类的主构造函数
 */

import { createRouter, createWebHistory } from 'vue-router'
//路由配置数组
const routes = [
  { path: '/', redirect: '/main' },
  {
    path: '/login',
    component: () => import('../views/user/Login.vue')
  },
  {
    path: '/main', redirect: '/mainPage',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/test', component: () => import('../views/test/test.vue')
      },
      {
        path: '/test2', component: () => import('../views/test/test2.vue')
      },
      {
        path: '/test3', component: () => import('../views/test/test3.vue')
      },
      {
        path: '/test4', component: () => import('../views/test/test4.vue')
      },
      {
        path: '/404',
        component: () => import('../views/page/404.vue')
      },
      {
        path: '/mainPage',
        component: () => import('../views/main/Body.vue')
      },
      {
        path: '/talentPool',
        component: () => import('../views/page/TalentPool.vue')
      },
      {
        path: '/visualization',
        component: () => import('../views/page/Visualization.vue')
      },
      {
        path: '/jobPool',
        component: () => import('../views/page/JobPool.vue')
      },
      {
        path: '/matching',
        component: () => import('../views/page/Matching.vue')
      },
      {
        path: '/self',
        component: () => import('../views/page/Self.vue')
      },
      {
        path: '/message',
        component: () => import('../views/page/Message.vue')
      },
      {
        path: '/jobAnalysis',
        component: () => import('../views/page/JobAnalysis.vue')
      },
      {
        path: '/analysisPage',
        component: () => import('../views/page/AnalysisPage.vue')
      },
      {
        path: '/analysisPosts',
        component: () => import('../views/page/AnalysisPosts.vue')
      },
    ]
  },
]
//router指向的是大路由，配置路由和组件之间的应用关系
const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })

//设置路由守卫
/*
router.beforeEach((to, from, next) => {
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
