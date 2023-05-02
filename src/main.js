/*
 * @Author: STATICHIT
 * @Date: 2023-04-26 19:00:37
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-05-02 11:07:24
 * @FilePath: \resume_analysis\src\main.js
 * @Description: 项目的文件入口，进行实例化Vue，赋值项目中经常会用到的插件和CSS样式以及存储全局变量
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
//element-plus图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'


// 生成 Vue 实例 app
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())


//全局导入icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$http = axios

//挂载到Vue根实例
app.mount('#app')