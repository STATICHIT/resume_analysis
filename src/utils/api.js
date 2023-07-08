/*
 * @Author: STATICHIT
 * @Date: 2023-04-26 19:13:01
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-07 19:44:35
 * @FilePath: \resume_analysis\src\utils\api.js
 * @Description: 接口方法
 */

import http from './axios.js'

let apiFun = {
  //自定义对象，命名隔离，消除重名影响
  user: {},
  firm: {},
  test: {},
  search: {},

};

//测试接口（按需添加，可删）
apiFun.search.getAll = () => {

}


//前后端链接测试
apiFun.test.test = () => {
  return http.get('/resume/test1')
}

//岗位上传
apiFun.test.test1 = () => {
  return http.post('/resume/upload')
}

//搜索接口
apiFun.search.getResumeList = (page, size) => {
  return http.get(`/resume/selectResume/${page}/${size}`)
}

apiFun.search.conditionSearch = params => {
 return http.get(`/resume/search`,params)
}
export default apiFun;