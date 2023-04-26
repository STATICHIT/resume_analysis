import http from './axios.js'

let apiFun = {
  //自定义对象，命名隔离，消除重名影响
  user: {},

};

//测试接口（按需添加，可删）



//前后端链接测试
apiFun.test.test = () => {
  return http.get('/test/demo')
}