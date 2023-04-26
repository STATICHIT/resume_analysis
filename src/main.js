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