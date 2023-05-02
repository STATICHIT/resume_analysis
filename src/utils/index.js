/*
 * @Author: STATICHIT
 * @Date: 2023-04-26 19:13:15
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-05-02 11:09:41
 * @FilePath: \resume_analysis\src\utils\index.js
 * @Description: 本地存储
 */
export function localGet(key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}


export function localSet(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}


export function localRemove(key) {
  window.localStorage.removeItem(key)
}