import axios from 'axios'
import qs from 'qs';//转json数据工具包
import { ElMessage } from 'element-plus'
import router from '../router/index'

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

const header = { 
  'Content-Type': 'application/json;charset=UTF-8', 
  'Authorization': 'eyJ0eXBlIjoiSnd0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJjdXJyZW50VGltZSI6MTY4MTA1NjA2NjIyMywicGFzc3dvcmQiOiIxIiwiaWQiOiIxMzU3NDMiLCJleHAiOjE2ODEwNTYwNjYsInVzZXJuYW1lIjoiMSJ9.cV6UCIMdU_h4wA5tyw6xiNf2VNPqXwnOQUNCazC1RHU', 
}

// 封装filePost,post,get,post,delete方法
const http = {
  get(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        params,
        headers: header,
        method: 'GET'
      }).then(res => {
        resolve(res.data)
        return res
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        data: qs.parse(params),
        headers: header,
        method: 'POST'
      }).then(res => {
        resolve(res.data)
        return res.data
      }).catch(error => {
        reject(error)
      })
    })
  },
  put(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        data: qs.parse(params),
        headers: header,
        method: 'PUT'
      }).then(res => {
        resolve(res.data)
        return res.data
      }).catch(error => {
        reject(error)
      })
    })
  },
  delete(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        data: qs.parse(params),
        headers: header,
        method: 'DELETE'
      }).then(res => {
        resolve(res.data)
        return res.data
      }).catch(error => {
        reject(error)
      })
    })
  }
}
export default http