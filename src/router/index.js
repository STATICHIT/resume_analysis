/*
 * @Author: STATICHIT
 * @Date: 2023-04-26 19:00:37
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-06-19 21:52:36
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
        path: '/404',//404页面
        component: () => import('../views/page/404.vue')
      },
      {
        path: '/mainPage',//主页面
        component: () => import('../views/main/Body.vue')
      },
      {
        path: '/talentPool',//人才库页面
        component: () => import('../views/page/TalentPool.vue')
      },
      {
        path: '/visualization',//人才库可视化分析页面
        component: () => import('../views/page/Visualization.vue')
      },
      {
        path: '/jobPool',//岗位库页面
        component: () => import('../views/page/JobPool.vue')
      },
      {
        path: '/matching',//人岗匹配页面
        component: () => import('../views/page/Matching.vue')
      },
      {
        path: '/self',//个人中心页面（包含数据分析，操作日志）
        component: () => import('../views/page/Self.vue')
      },
      {
        path: '/message',//消息页面
        component: () => import('../views/page/Message.vue')
      },
      {
        path: '/jobAnalysis',//岗位分析上传页面
        component: () => import('../views/page/JobAnalysis.vue')
      },
      {
        path: '/resumeAnalysis',//简历分析上传页面
        component: () => import('../views/page/ResumeAnalysis.vue')
      },
      {
        path: '/analysisPage',//简历分析内容页面
        component: () => import('../views/page/AnalysisPage.vue')
      },
      {
        path: '/analysisPosts',//岗位分析内容页面
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
