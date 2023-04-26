import axios from 'axios'
import qs from 'qs';//转json数据工具包
import { ElMessage } from 'element-plus'
import router from '../router/index'
import { localGet } from './index'
import user from "../store/user";
const userStore = user()

let baseURL = 'http://192.168.50.236:8080/'//后端开发环境地址(部署后端到本机后只需修改此地址)

let config = {
  baseURL: baseURL,
  timeout: 30000    //设置最大请求时间
}

const _axios = axios.create(config);

// 接收请求拦截器，内部根据返回值，重新组装，统一管理。
_axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    ElMessage.error('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.code != 200) {
    console.log(res.data);
    if (res.data.msg) ElMessage.error(res.data.msg)
    if (res.data.resultCode == 419) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }
  return res.data//返回的是数据
})

