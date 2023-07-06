/*
 * @Author: STATICHIT
 * @Date: 2023-04-26 19:13:01
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-05 21:57:11
 * @FilePath: \resume_analysis\src\utils\api.js
 * @Description: 接口方法
 */

import http from './axios.js'

let apiFun = {
  //自定义对象，命名隔离，消除重名影响
  user: {},
  firm:{},
  test:{},

};

//测试接口（按需添加，可删）



//前后端链接测试
apiFun.test.test = () => {
  return http.get('/resume/test1')
}

//岗位上传
apiFun.test.test1 = ()=>{
  return http.post('/resume/upload')
}

export default apiFun;