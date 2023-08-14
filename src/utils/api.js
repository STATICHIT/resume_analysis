/*
 * @Author: STATICHIT
 * @Date: 2023-04-26 19:13:01
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-14 11:56:20
 * @FilePath: \resume_analysis\src\utils\api.js
 * @Description: 接口方法
 */

import http from './axios.js'

let apiFun = {
  //自定义对象，命名隔离，消除重名影响
  user: {},
  resume: {},
  test: {},
  search: {},
  upload: {},
  process: {},
  log: {},
  template: {},
  job: {},
  evaluate: {}
};

//测试接口（按需添加，可删）
apiFun.test.test = () => {
  return http.get(`/resume/testES`)
}

//查询相似简历
apiFun.similarity = () => {
  return http.get(`/resume/similarity`)
}

/**
 * 用户接口
 */
apiFun.user.login = (params) => {
  return http.post(`/user/login`, params)
}

apiFun.user.register = (params) => {
  return http.post(`/user/register`, params)
}

//简历上传（多个简历文件）
apiFun.upload.resumeUpload = () => {
  return http.post('/resume/upload')
}

/**
 * 搜索接口
 */

//zwy版本
apiFun.search.getResumeList = (page, size) => {
  return http.get(`/resume/selectResume/${page}/${size}`)
}

//条件搜索（带分页）cx版本
apiFun.search.conditionSearch = (params) => {
  return http.post(`/resume/search`, params)
}

/**
 * 
 * @returns 评论接口
 */

//添加一条评论
apiFun.evaluate.add = (resumeId, skill, summarize, composite) => {
  return http.post(`/evaluate?resumeId=${resumeId}&skill=${skill}&summarize=${summarize}&composite=${composite}`)
}

//查看面评
apiFun.evaluate.get = (resumeId) => {
  return http.post(`/evaluate/list/${resumeId}`)
}


/**
 * 流程接口
 */

//获取一个用户管理的流程顺序（分类给出）
apiFun.process.flowPathOrder = () => {
  return http.get(`/flowPath`)
}

//获取一个用户的所有流程节点（不分类给出）
apiFun.process.flowPathNotOrder = () => {
  return http.get(`/flowPath/allNode`)
}

//更新流程顺序
apiFun.process.updateSorting = (params) => {
  return http.put(`/flowPath/updateSorting`, params)
}

//添加一个流程节点
apiFun.process.addNode = (params) => {
  return http.post(`/flowPath`, params)
}

//更新一个流程节点（修改颜色，修改名字）
apiFun.process.updateNode = (nodeId, params) => {
  return http.put(`/flowPath/${nodeId}`, params)
}

//删除一个流程节点，在对应的类型当中也会被删除
apiFun.process.deleteNode = (nodeId) => {
  return http.delete(`/flowPath/${nodeId}`)
}

//更新简历当前所属节点
apiFun.process.updateCurNode = (resumeId, nodeId, params) => {
  return http.put(`/flowPath/updateState/${resumeId}?nodeId=${nodeId}`, params)
}

//修改一份简历当前状态
apiFun.process.updateStatus = (resumeId, nodeId) => {
  return http.put(`/flowPath/updateState/${resumeId}?nodeId=${nodeId}`)
}

/**
 * 日志接口
 */
apiFun.log.getLogById = (resumeId) => {
  return http.get(`/log/${resumeId}`)
}
//查询一个用户所有的操作日志
apiFun.log.getLogByUser = () => {
  return http.get(`/log`)
}

/**
 * 模板接口
 */

//发送邀约
apiFun.template.sendInvite = (resumeId, templateId) => {
  return http.post(`/template/send?resumeId=${resumeId}&templateId=${templateId}`)
}

//获取用户定义的所有模板
apiFun.template.getAll = () => {
  return http.get(`/template/list`)
}

apiFun.template.addTemplate = (params) => {
  return http.post(`/template`, params)
}

apiFun.template.deleteTemplate = (templateId) => {
  return http.post(`/template/${templateId}`)
}


/**
 * 简历接口
 */



//简历分析
apiFun.resume.analysis = (resumeId) => {
  return http.get(`/resume/analysisResults/${resumeId}`)
}

apiFun.resume.graph = (resumeId) => {
  return http.get(`/resume/graph/${resumeId}`)
}
//删除简历
apiFun.resume.deleteResume = (resumeId) => {
  return http.delete(`/resume/${resumeId}`)
}

//知识图谱
apiFun.resume.graph = (resumeId) => {
  return http.get(`/resume/graph/${resumeId}`)
}
/**
 * 岗位接口
 */
//岗匹配人(现有，传id)
apiFun.job.PJMatch = (jobId) => {
  return http.get(`/job/PJMatch/${jobId}`)
}

//岗位字符串内容岗位解析（传字符串）
apiFun.job.jobAnalysis = (jobContent) => {
  return http.post(`/job/match`, jobContent)
}

//获取全部岗位
apiFun.job.getAll = () => {
  return http.get(`/job/list`)
}


//给简历推荐岗位
apiFun.job.matchJob = (resumeId) => {
  return http.get(`/job/JPMatch/${resumeId}`)
}


export default apiFun;