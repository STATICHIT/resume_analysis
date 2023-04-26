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

