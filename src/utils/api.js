/*
 * @Author: STATICHIT
 * @Date: 2023-04-26 19:13:01
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-07-07 17:11:16
 * @FilePath: \resume_analysis\src\utils\api.js
 * @Description: 接口方法
 */

import http from './axios.js'

let apiFun = {
  //自定义对象，命名隔离，消除重名影响
  user: {},
  firm:{},
  test:{},
  search:{},
  resume:{}
};

//测试接口（按需添加，可删）
apiFun.search.getAll=()=>{
  
}


//前后端链接测试
apiFun.test.test = () => {
  return http.get('/resume/test1')
}

//岗位上传
apiFun.test.test1 = ()=>{
  return http.post('/resume/upload')
}

//简历分析
apiFun.resume.analysis = (resumeId) => {
  return http.get(`/resume/analysisResults/${resumeId}`)
}

export default apiFun;